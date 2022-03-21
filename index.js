@@ -0,0 +1,72 @@
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title></title>
  <style>
    html, body {
      overflow: hidden;
      width: 100%;
      height: 100%;
    }

    svg {
      position: absolute;
      background: #f0f0f0;
      top: 0;
      left: 0;
      height: 100%;
      width: 100%;
    }
  </style>
</head>
<body>
  <svg></svg>
</body>
<script src="https://d3js.org/d3.v5.min.js"></script>
<script type="text/javascript">
  const svg = d3.select('svg')

  const width = +svg.style('width').replace('px', '')
  const height = +svg.style('height').replace('px', '')
  const base = Math.max(width, height)

  const gen = (x, m = 1, c = 0) => m*x + c
  const ortogen = (x, m = 1) => -x/m

  const angle = Math.random() * Math.PI / 2
  const pend = Math.tan(angle);

  const lines = []
  let sample = 0
  while (true) {
    sample += 12 * Math.cos(angle)
    const point = {
      x: sample,
      y: gen(sample, pend),
    }

    lines.push({
      x1: point.x - base,
      y1: point.y + ortogen(-base, pend),
      x2: point.x + base,
      y2: point.y + ortogen(base, pend)
    })

    if (point.y > height && point.x > width) {
      break;
    }
  }

  svg.selectAll('line')
    .data(lines)
    .enter()
    .append('line')
    .attr('x1', line => line.x1)
    .attr('y1', line => line.y1)
    .attr('x2', line => line.x2)
    .attr('y2', line => line.y2)
    .attr('stroke', 'steelblue')
    .attr('stroke-width', '4px')
</script>
</html>
