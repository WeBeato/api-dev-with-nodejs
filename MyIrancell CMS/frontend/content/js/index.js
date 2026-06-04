import initChart from "./chart.js";

initChart(
    ['۷/۱', '۷/۱۰', '۷/۱۸', '۷/۲۵', '۷/۲۸'],
    [500, 1000, 2200, 2600, 1700],
    document.querySelector('#chart').getContext('2d')
)