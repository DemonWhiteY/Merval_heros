const data = [
    {
        movie_title: "Iron Man",
        asia_pacific_box_office: 107.86,
        europe_box_office: 107.34,
        middle_east_and_africa_box_office: 8.29,
        north_america_box_office: 337.72,
        south_america_box_office: 24.15,
        China: 15.27
    },
    {
        movie_title: "The Incredible Hulk",
        asia_pacific_box_office: 45.66,
        europe_box_office: 53.54,
        middle_east_and_africa_box_office: 6.1,
        north_america_box_office: 148.86,
        south_america_box_office: 10.59,
        China: 9.34
    },
    {
        movie_title: "Iron Man 2",
        asia_pacific_box_office: 127.52,
        europe_box_office: 104.72,
        middle_east_and_africa_box_office: 14.59,
        north_america_box_office: 343.97,
        south_america_box_office: 33.12,
        China: 7.92
    },
    {
        movie_title: "Thor",
        asia_pacific_box_office: 88.32,
        europe_box_office: 107.12,
        middle_east_and_africa_box_office: 12.87,
        north_america_box_office: 211.16,
        south_america_box_office: 29.85,
        China: 0
    },
    {
        movie_title: "Captain America: The First Avenger",
        asia_pacific_box_office: 56.51,
        europe_box_office: 63.17,
        middle_east_and_africa_box_office: 8.41,
        north_america_box_office: 204.55,
        south_america_box_office: 37.88,
        China: 0
    },
    {
        movie_title: "The Avengers",
        asia_pacific_box_office: 386.51,
        europe_box_office: 253.15,
        middle_east_and_africa_box_office: 31.72,
        north_america_box_office: 708.57,
        south_america_box_office: 138.91,
        China: 86.3
    },
    {
        movie_title: "Iron Man 3",
        asia_pacific_box_office: 394.22,
        europe_box_office: 210.48,
        middle_east_and_africa_box_office: 26.15,
        north_america_box_office: 475.26,
        south_america_box_office: 108.7,
        China: 121.2
    },
    {
        movie_title: "Thor: The Dark World",
        asia_pacific_box_office: 185.27,
        europe_box_office: 128,
        middle_east_and_africa_box_office: 19.62,
        north_america_box_office: 245.9,
        south_america_box_office: 65.96,
        China: 55.34
    },
    {
        movie_title: "Captain America: The Winter Soldier",
        asia_pacific_box_office: 231.19,
        europe_box_office: 105.65,
        middle_east_and_africa_box_office: 16.58,
        north_america_box_office: 298.89,
        south_america_box_office: 62.12,
        China: 115.62
    },
    {
        movie_title: "Guardians of the Galaxy",
        asia_pacific_box_office: 191.33,
        europe_box_office: 141.56,
        middle_east_and_africa_box_office: 18.56,
        north_america_box_office: 373.25,
        south_america_box_office: 48.64,
        China: 86.35
    },
    {
        movie_title: "Avengers: Age of Ultron",
        asia_pacific_box_office: 517.69,
        europe_box_office: 218.57,
        middle_east_and_africa_box_office: 24.69,
        north_america_box_office: 525.97,
        south_america_box_office: 115.94,
        China: 240.11
    },
    {
        movie_title: "Ant-Man",
        asia_pacific_box_office: 203.65,
        europe_box_office: 71.98,
        middle_east_and_africa_box_office: 8.67,
        north_america_box_office: 200.84,
        south_america_box_office: 34.17,
        China: 105.37
    },
    {
        movie_title: "Captain America: Civil War",
        asia_pacific_box_office: 411.72,
        europe_box_office: 169.91,
        middle_east_and_africa_box_office: 24.18,
        north_america_box_office: 471.58,
        south_america_box_office: 75.95,
        China: 180.79
    },
    {
        movie_title: "Doctor Strange",
        asia_pacific_box_office: 257.14,
        europe_box_office: 112.01,
        middle_east_and_africa_box_office: 12.19,
        north_america_box_office: 255.01,
        south_america_box_office: 41.45,
        China: 109.19
    },
    {
        movie_title: "Guardians of the Galaxy Vol. 2",
        asia_pacific_box_office: 233.3,
        europe_box_office: 166.22,
        middle_east_and_africa_box_office: 9.25,
        north_america_box_office: 415.36,
        south_america_box_office: 39.68,
        China: 100.66
    },
    {
        movie_title: "Spider-Man: Homecoming",
        asia_pacific_box_office: 306.37,
        europe_box_office: 126.93,
        middle_east_and_africa_box_office: 18.29,
        north_america_box_office: 365.83,
        south_america_box_office: 62.71,
        China: 116.28
    },
    {
        movie_title: "Thor: Ragnarok",
        asia_pacific_box_office: 288.39,
        europe_box_office: 149.22,
        middle_east_and_africa_box_office: 14.85,
        north_america_box_office: 345.77,
        south_america_box_office: 55.75,
        China: 112.23
    },
    {
        movie_title: "Black Panther",
        asia_pacific_box_office: 306.93,
        europe_box_office: 210.23,
        middle_east_and_africa_box_office: 24.92,
        north_america_box_office: 743.43,
        south_america_box_office: 62.08,
        China: 105.06
    },
    {
        movie_title: "Avengers: Infinity War",
        asia_pacific_box_office: 763.62,
        europe_box_office: 338.28,
        middle_east_and_africa_box_office: 39.43,
        north_america_box_office: 775.1,
        south_america_box_office: 131.92,
        China: 359.54
    },
    {
        movie_title: "Ant-Man and the Wasp",
        asia_pacific_box_office: 262.8,
        europe_box_office: 84.32,
        middle_east_and_africa_box_office: 8.99,
        north_america_box_office: 238.21,
        south_america_box_office: 28.37,
        China: 121.2
    },
    {
        movie_title: "Captain Marvel",
        asia_pacific_box_office: 378.64,
        europe_box_office: 187.48,
        middle_east_and_africa_box_office: 19.87,
        north_america_box_office: 473.56,
        south_america_box_office: 68.9,
        China: 154.07
    },
    {
        movie_title: "Avengers: Endgame",
        asia_pacific_box_office: 1182.35,
        europe_box_office: 443.24,
        middle_east_and_africa_box_office: 45.34,
        north_america_box_office: 964.68,
        south_america_box_office: 161.86,
        China: 629.1
    },
    {
        movie_title: "Spider-Man: Far From Home",
        asia_pacific_box_office: 439.07,
        europe_box_office: 180.68,
        middle_east_and_africa_box_office: 25.5,
        north_america_box_office: 434.33,
        south_america_box_office: 52.32,
        China: 199
    },
    {
        movie_title: "Black Widow",
        asia_pacific_box_office: 70.86,
        europe_box_office: 90.42,
        middle_east_and_africa_box_office: 6.11,
        north_america_box_office: 198.93,
        south_america_box_office: 13.45,
        China: 0
    },
    {
        movie_title: "Shang-Chi and the Legend of the Ten Rings",
        asia_pacific_box_office: 81.4,
        europe_box_office: 88.98,
        middle_east_and_africa_box_office: 7.75,
        north_america_box_office: 237.91,
        south_america_box_office: 16.17,
        China: 0
    },
    {
        movie_title: "Eternals",
        asia_pacific_box_office: 101.14,
        europe_box_office: 86.07,
        middle_east_and_africa_box_office: 6.3,
        north_america_box_office: 184.73,
        south_america_box_office: 23.8,
        China: 0
    },
    {
        movie_title: "Spider-Man: No Way Home",
        asia_pacific_box_office: 360.73,
        europe_box_office: 375.3,
        middle_east_and_africa_box_office: 65.55,
        north_america_box_office: 953.91,
        south_america_box_office: 137.13,
        China: 0
    },
];

const keys = ["asia_pacific_box_office", "europe_box_office", "middle_east_and_africa_box_office", "north_america_box_office", "south_america_box_office", "China"];

const stack = d3.stack()
    .keys(keys)
    .order(d3.stackOrderNone)
    .offset(d3.stackOffsetNone);

const series = stack(data);

const width = 1200 * 1.4; // 增大图形尺寸
const height = 600 * 1.4; // 增大图形尺寸
const margin = { top: 40, right: 40, bottom: 100, left: 100 }; // 调整边距

const svg = d3.select("#chart").append("svg")
    .attr("width", width)
    .attr("height", height);

const x = d3.scaleBand()
    .domain(data.map(d => d.movie_title))
    .range([margin.left, width - margin.right])

    .padding(0.2); // 调整间距

const y = d3.scaleLinear()
    .domain([0, d3.max(series, d => d3.max(d, d => d[1]))])
    .nice()

    .range([height - margin.bottom, margin.top]);

const customColors = ['#5ec9db', '#4456c7', '#ffc900', '#e6a0c4', '#fe8c00', '#ff5338'];

const color = d3.scaleOrdinal()
    .domain(keys)
    .range(customColors);

const area = d3.area()
    .x((d, i) => x(data[i].movie_title) + x.bandwidth() / 2)
    .y0(d => y(d[0]))
    .y1(d => y(d[1]))
    .curve(d3.curveMonotoneX);



svg.append("g")
    .selectAll("path")
    .data(series)
    .join("path")
    .attr("fill", d => color(d.key))
    .attr("d", area)
    .append("title")
    .style("fill", "white")
    .text(d => d.key);

svg.append("g")
    .attr("transform", `translate(0,${height - margin.bottom})`)
    .call(d3.axisBottom(x).tickSizeOuter(0))
    .selectAll("text")
    .style("text-anchor", "end")
    .attr("dx", "-.8em")
    .attr("dy", ".15em")
    .attr("font-size", "10px")
    .attr("y", 5)
    .attr("x", -8)
    .attr("transform", "rotate(-45)") // 将标签旋转45度
    .call(wrap, x.bandwidth())
    .style("fill", "white");

svg.append("g")
    .attr("transform", `translate(${margin.left},0)`)
    .call(d3.axisLeft(y).ticks(null, "s").tickFormat(d3.format(".2s"))) // 更改纵坐标的格式为百万
    .append("text")
    .attr("x", 2)
    .attr("y", y(y.ticks().pop()) + 0.5)
    .attr("dy", "0.32em")
    .attr("fill", "#000")
    .attr("font-weight", "bold")
    .attr("text-anchor", "start")
    .text("Box Office (Millions USD)")
    .style("fill", "white");


function wrap(text, width) {
    text.each(function () {
        const text = d3.select(this);
        const words = text.text().split(/\s+/).reverse();
        let word;
        let line = [];
        let lineNumber = 0;
        const lineHeight = 1.1; // ems
        const y = text.attr("y");
        const dy = parseFloat(text.attr("dy"));
        let tspan = text.text(null).append("tspan").attr("x", 0).attr("y", y).attr("dy", dy + "em").style("fill", "white");;
        while (word = words.pop()) {
            line.push(word);
            tspan.text(line.join(" "));
            if (tspan.node().getComputedTextLength() > width) {
                line.pop();
                tspan.text(line.join(" "));
                line = [word];
                tspan = text.append("tspan").attr("x", 0).attr("y", y).attr("dy", `${++lineNumber * lineHeight + dy}em`).text(word)
                    .style("fill", "white");

            }
        }
    });
}
// 添加图例
// 原始的 D3.js 代码，保留不变

// 添加图例
const legend = svg.append("g")
    .attr("transform", `translate(${margin.left + 150},${margin.top})`); // 放置在图表的左上角

// 第一层图例
const legendFirstRow = legend.append("g")
    .attr("transform", `translate(0, 0)`);

legendFirstRow.selectAll(".legendRect")
    .data(keys.slice(0, 3)) // 取前三个地区的颜色和名称
    .enter()
    .append("rect")
    .attr("class", "legendRect")
    .attr("x", (d, i) => i * 150 * 1.5) // 调整间距
    .attr("y", 0)
    .attr("width", 20)
    .attr("height", 20)
    .attr("fill", d => color(d));

legendFirstRow.selectAll(".legendText")
    .data(keys.slice(0, 3))
    .enter()
    .append("text")
    .attr("class", "legendText")
    .attr("x", (d, i) => i * 150 * 1.5 + 25) // 调整间距
    .attr("y", 15)
    .text(d => d)
    .style("fill", "white")

// 第二层图例
const legendSecondRow = legend.append("g")
    .attr("transform", `translate(0, 30)`); // 第二层稍微下移

legendSecondRow.selectAll(".legendRect")
    .data(keys.slice(3, 6)) // 取后三个地区的颜色和名称
    .enter()
    .append("rect")
    .attr("class", "legendRect")
    .attr("x", (d, i) => i * 150 * 1.5) // 调整间距
    .attr("y", 0)
    .attr("width", 20)
    .attr("height", 20)
    .attr("fill", d => color(d));

legendSecondRow.selectAll(".legendText")
    .data(keys.slice(3, 6))
    .enter()
    .append("text")
    .attr("class", "legendText")
    .attr("x", (d, i) => i * 150 * 1.5 + 25) // 调整间距
    .attr("y", 15)
    .style("fill", "white")
    .text(d => d);