var moviesData = [
    { title: "Iron Man", company: "Marvel", rate: 7.9, metascore: 7.9 },
    { title: "The Incredible Hulk", company: "Marvel", rate: 6.7, metascore: 6.1 },
    { title: "Iron Man 2", company: "Marvel", rate: 7, metascore: 5.7 },
    {
        title: "Captain America: The First Avenger",
        company: "Marvel",
        rate: 6.9,
        metascore: 6.6
    },
    {
        title: "Thor",
        company: "Marvel",
        rate: 7,
        metascore: 5.7
    },
    {
        title: "The Avengers",
        company: "Marvel",
        rate: 8,
        metascore: 6.9
    },
    {
        title: "Iron Man Three",
        company: "Marvel",
        rate: 7.2,
        metascore: 6.2
    },
    {
        title: "Thor: The Dark World",
        company: "Marvel",
        rate: 6.9,
        metascore: 5.4
    },
    {
        title: "Captain America: The Winter Soldier",
        company: "Marvel",
        rate: 7.7,
        metascore: 7.0
    },
    {
        title: "Guardians of the Galaxy",
        company: "Marvel",
        rate: 8,
        metascore: 7.6
    },
    {
        title: "Avengers: Age of Ultron",
        company: "Marvel",
        rate: 7.3,
        metascore: 6.6
    },
    {
        title: "Ant-Man",
        company: "Marvel",
        rate: 7.3,
        metascore: 6.4
    },
    {
        title: "Captain America: Civil War",
        company: "Marvel",
        rate: 7.8,
        metascore: 7.5
    },
    {
        title: "Doctor Strange",
        company: "Marvel",
        rate: 7.5,
        metascore: 7.2
    },
    {
        title: "Guardians of the Galaxy Vol. 2",
        company: "Marvel",
        rate: 7.6,
        metascore: 6.7
    },
    {
        title: "Spider-Man: Homecoming",
        company: "Marvel",
        rate: 7.4,
        metascore: 7.3
    },
    {
        title: "Thor: Ragnarok",
        company: "Marvel",
        rate: 7.9,
        metascore: 7.4
    },
    {
        title: "Black Panther",
        company: "Marvel",
        rate: 7.3,
        metascore: 8.8
    },
    {
        title: "Avengers: Infinity War",
        company: "Marvel",
        rate: 8.5,
        metascore: 6.8
    },
    {
        title: "Ant-Man and the Wasp",
        company: "Marvel",
        rate: 7.1,
        metascore: 7.0
    },
    {
        title: "Captain Marvel",
        company: "Marvel",
        rate: 6.9,
        metascore: 6.4
    },
    {
        title: "Spider-Man: Far from Home",
        company: "Marvel",
        rate: 7.6,
        metascore: 6.9
    }



];

var Moviedata2 = [{
    title: "Catwoman",
    company: "DC",
    rate: 3.3,
    metascore: 2.7
},
{
    title: "Batman Begins",
    company: "DC",
    rate: 8.2,
    metascore: 7.0
},
{
    title: "Superman Returns",
    company: "DC",
    rate: 6,
    metascore: 7.2
},
{
    title: "The Dark Knight",
    company: "DC",
    rate: 9,
    metascore: 8.4
},
{
    title: "Watchmen",
    company: "DC",
    rate: 7.6,
    metascore: 5.6
},
{ title: "Jonah Hex", company: "DC", rate: 4.7, metascore: 3.3 },
{ title: "The Dark Knight Rises", company: "DC", rate: 8.4, metascore: 7.8 },
{ title: "Man of Steel", company: "DC", rate: 7.1, metascore: 5.5 },
{ title: "Batman v Superman: Dawn of Justice", company: "DC", rate: 6.5, metascore: 4.4 },
{ title: "Suicide Squad", company: "DC", rate: 6, metascore: 4.0 },
{ title: "Wonder Woman", company: "DC", rate: 7.4, metascore: 7.6 },
{ title: "Justice League", company: "DC", rate: 6.4, metascore: 4.5 },
{ title: "Aquaman", company: "DC", rate: 7, metascore: 5.5 },
{ title: "Shazam!", company: "DC", rate: 7.1, metascore: 7.1 },
{ title: "Joker", company: "DC", rate: 8.7, metascore: 5.9 }];


const width = 1200; // 修改宽度
const height = 1400; // 修改高度
const marginTop = 10;
const marginRight = 10;
const marginBottom = 30;
const marginLeft = 600; // 修改左边距
const n = 2; // Number of series
const m = moviesData.length; // Number of data points per series

const xz = d3.range(m);
const yz = d3.range(n).map(j => moviesData.map(d => (j === 0 ? d.rate : d.metascore)));
const yz2 = d3.range(n).map(j => Moviedata2.map(d => (j === 0 ? d.rate : d.metascore)));


var stack = d3.stack().keys(["rate", "metascore"]);

// 准备堆叠数据
var series = stack(moviesData);
var series2 = stack(Moviedata2);

const y01z = d3.stack()
    .keys(d3.range(n))
    (d3.transpose(yz))
    .map((data, i) => data.map(([y0, y1]) => [y0, y1, i]));

const y02z = d3.stack()
    .keys(d3.range(n))
    (d3.transpose(yz2))
    .map((data, i) => data.map(([y0, y1]) => [y0, y1, i]));

const yMax = d3.max(yz, y => d3.max(y));
const y1Max = d3.max(y01z, y => d3.max(y, d => d[1]));
const color = d3.scaleSequential(["gray", "red"])
    .domain([-1.5 * n, 1.5 * n]);

const color2 = d3.scaleSequential(d3.interpolateBlues)
    .domain([-0.8 * n, 2.5 * n]);
const x = d3.scaleBand()
    .domain(xz)
    .rangeRound([marginTop, height - marginBottom]) // 修改范围
    .padding(0.08);

const y = d3.scaleLinear()
    .domain([0, y1Max])
    .range([width - marginRight, marginLeft]); // 修改范围
const svg = d3.select("#chart").append("svg")
    .attr("viewBox", [0, 0, width, height])
    .attr("width", width)
    .attr("height", height)
    .attr("style", "max-width: 100%; height: auto;");

const rect = svg.selectAll("g1")
    .data(y01z)
    .join("g")
    .attr("fill", (d, i) => color(i))
    .selectAll("rect")
    .data(d => d)
    .join("rect")
    .attr("x", marginLeft) // 修改x坐标
    .attr("y", (d, i) => x(i))
    .attr("width", 0)
    .attr("height", x.bandwidth());

const rect2 = svg.selectAll("g2")
    .data(y02z)
    .join("g")
    .attr("fill", (d, i) => color2(i))
    .selectAll("rect2")
    .data(d => d)
    .join("rect")
    .attr("x", marginLeft) // 修改x坐标
    .attr("y", (d, i) => x(i))
    .attr("width", 0)
    .attr("height", x.bandwidth());

const tooltip = d3.select("body").append("div")
    .attr("class", "tooltip")
    .style("opacity", 0);


rect.append("title")
    .text(moviesData.title)

rect.on("mouseover", function (event, d) {
    tooltip.transition()
        .duration(200)
        .style("opacity", .9);
    tooltip.html(`${moviesData[d[1]].title}<br>Rate: ${moviesData[d[1]].rate}<br>Metascore: ${moviesData[d[1]].metascore}`)

        .style("left", (event.pageX + 5) + "px")
        .style("top", (event.pageY - 28) + "px");
})
    .on("mouseout", function () {
        tooltip.transition()
            .duration(500)
            .style("opacity", 0);
    });

rect2.on("mouseover", function (event, d) {
    tooltip.transition()
        .duration(200)
        .style("opacity", .9);
    tooltip.html(`${Moviedata2[d[1]].title}<br>Rate: ${Moviedata2[d[1]].rate}<br>Metascore: ${Moviedata2[d[1]].metascore}`)
        .style("left", (event.pageX + 5) + "px")
        .style("top", (event.pageY - 28) + "px");
})
    .on("mouseout", function () {
        tooltip.transition()
            .duration(500)
            .style("opacity", 0);
    });

// 在鼠标以上时显示tooltip




g1 = svg.append("g")
    .attr("transform", `translate(${marginLeft},0)`) // 修改transform
    .call(d3.axisLeft(x).tickSizeOuter(0).tickFormat(() => "")); // 修改axisBottom为axisLeft

g2 = svg.append("g")
    .attr("transform", `translate(0,${marginLeft})`) // 修改transform
    .call(d3.axisLeft(x).tickSizeOuter(0).tickFormat(() => "")); // 修改axisBottom为axisLeft

update("stacked");

function transitionGrouped() {
    y.domain([0, yMax]);

    rect.transition()
        .duration(500)
        .delay((d, i) => i * 20)
        .attr("x", d => marginLeft) // 修改x坐标
        .attr("width", d => y(d[1] - d[0]) - marginLeft) // 修改width
        .transition()
        .attr("y", (d, i) => x(i) + x.bandwidth() / n * d[2])
        .attr("height", x.bandwidth() / 3);

    rect2.transition()
        .duration(500)
        .delay((d, i) => i * 20)
        .attr("x", d => 2 * marginLeft - y(d[1] - d[0])) // 修改x坐标
        .attr("width", d => y(d[1] - d[0]) - marginLeft) // 修改width
        .transition()
        .attr("y", (d, i) => x(i) + x.bandwidth() / n * d[2])
        .attr("height", x.bandwidth() / 3);


}

function transitionStacked() {
    y.domain([0, y1Max]);

    rect.transition()
        .duration(500)
        .delay((d, i) => i * 20)
        .attr("x", d => marginLeft) // 修改x坐标
        .attr("width", d => y(d[1]) - marginLeft) // 修改width
        .transition()
        .attr("y", (d, i) => x(i))
        .attr("height", x.bandwidth());

    rect2.transition()
        .duration(500)
        .delay((d, i) => i * 20)
        .attr("x", d => 2 * marginLeft - y(d[1])) // 修改x坐标
        .attr("width", d => y(d[1]) - marginLeft) // 修改width
        .transition()
        .attr("y", (d, i) => x(i))
        .attr("height", x.bandwidth());


}

function update(layout) {
    if (layout === "stacked") transitionStacked();
    else transitionGrouped();
}

