$(function () {
  let bar = new ProgressBar.Circle('#rating', {
    strokeWidth: 10,
    easing: 'easeInOut',
    duration: 1400,
    color: '#e5bc23',
    trailColor: '#4a4a4a',
    trailWidth: 10,
    svgStyle: {
      width: '4em'
    },
    text: {
      value: '7.0',
      style: {
        color: '#fff',
        'font-weight': 'bold',
        'font-size': '1.5rem',
        position: 'absolute',
        top: '20%',
        width: '4rem',
        'text-align': 'center',
        padding: 0,
        margin: 0,
      }
    }
  });

  bar.animate(0.7);
});