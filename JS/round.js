const data = [
    {
        id: "2015.Star Wars EP. VII: The Force Awakens",
        title: "星球大战EP。VII",
        value: 2064615817,
        group: "华特迪士尼"
    },
    {
        id: "2019.Avengers: Endgame",
        title: "复仇者联盟：终局之战",
        value: 2788912285,
        group: "漫威"
    },
    { id: "2021.Spider-Man: No Way Home", title: "蜘蛛侠：无路回家", value: 1907836254, group: "索尼影业" },
    { id: "2009.Avatar", title: "阿凡达", value: 2923706026, group: "20世纪" },
    { id: "2022.Top Gun: Maverick", title: "壮志凌云：特立独行", value: 1472587508, group: "派拉蒙" },
    { id: "2018.Black Panther", title: "黑豹", value: 1336494320, group: "漫威" },
    { id: "2022.The Way of Water", title: "《降世神通：水之道》", value: 2319591720, group: "20世纪" },
    { id: "2018.Avengers: Infinity War", title: "复仇者联盟：无限战争", value: 2048359754, group: "漫威" },
    { id: "1997.Titanic", title: "泰坦尼克号", value: 2222985568, group: "派拉蒙" },
    { id: "2015.Jurassic World", title: "侏罗纪世界", value: 1669963641, group: "普遍的" },
    { id: "2023.Barbie", title: "芭比", value: 1440598229, group: "华纳兄弟" },
    { id: "2012.The Avengers", title: "复仇者", value: 1515100211, group: "漫威" },
    { id: "2017.Star Wars EP. VIII: The Last Jedi", title: "星球大战EP。VIII", value: 1331635141, group: "华特迪士尼" },
    { id: "2018.Incredibles 2", title: "超人总动员2", value: 1242805359, group: "华特迪士尼" },
    { id: "2023.The Super Mario Bros. Movie", title: "超级马里奥兄弟电影", value: 1361940838, group: "普遍的" },
    { id: "2019.The Lion King", title: "狮子王", value: 1646106779, group: "华特迪士尼" },
    { id: "2008.The Dark Knight", title: "黑暗骑士", value: 998725484, group: "华纳兄弟" },
    { id: "2016.Rogue One: A Star Wars Story", title: "侠盗一号：星球大战故事", value: 1055083596, group: "华特迪士尼" },
    { id: "2019.Star Wars: The Rise of Skywalker", title: "星球大战：天行者崛起", value: 1072767997, group: "华特迪士尼" },
    { id: "2017.Beauty and the Beast", title: "美女和野兽", value: 1268697483, group: "华特迪士尼" },
    { id: "2016.Finding Dory", title: "海底总动员2", value: 1025006125, group: "华特迪士尼" },
    { id: "2019.Frozen II", title: "冰雪奇缘2", value: 1453683476, group: "华特迪士尼" },
    { id: "1999.Star Wars EP.I: The Phantom Menace", title: "星球大战EP。一", value: 1027044677, group: "20 世纪" },
    { id: "1977.Star Wars EP.IV: A New Hope", title: "星球大战EP。IV", value: 775398007, group: "20 世纪" },
    { id: "2015.Avengers: Age of Ultron", title: "复仇者联盟：奥创纪元", value: 1395316979, group: "漫威" },
    { id: "2022.Black Panther: Wakanda Forever", title: "黑豹：永远的瓦坎达", value: 853985546, group: "漫威" },
    { id: "2012.The Dark Knight Rises", title: "黑暗骑士崛起", value: 1082228107, group: "华纳兄弟" },
    { id: "2004.Shrek 2", title: "怪物史莱克2", value: 935253978, group: "梦工厂" },
    { id: "1982.ET the Extra-Terrestrial", title: "ET 外星人", value: 797103542, group: "普遍的" },
    { id: "2019.Toy Story 4", title: "玩具总动员4", value: 1072817964, group: "华特迪士尼" },
    { id: "2019.Captain Marvel", title: "惊奇队长", value: 1129576094, group: "漫威" },
    { id: "2013.The Hunger Games: Catching Fire", title: "饥饿游戏星火燎原", value: 864808014, group: "狮门影业" },
    { id: "2006.Pirates of the Caribbean: Dead Man's Chest", title: "加勒比海盗聚魂箱", value: 1066179725, group: "华特迪士尼" },
    { id: "1994.The Lion King", title: "狮子王", value: 986193783, group: "华特迪士尼" },
    { id: "2018.Jurassic World: Fallen Kingdom", title: "侏罗纪世界：失落王国", value: 1308323302, group: "普遍的" },
    { id: "1993.Jurassic Park", title: "侏罗纪公园", value: 1058454230, group: "普遍的" },
    { id: "2010.Toy Story 3", title: "玩具总动员3", value: 1068879522, group: "华特迪士尼" },
    { id: "2017.Wonder Woman", title: "神奇女侠", value: 817691766, group: "华纳兄弟" },
    { id: "2022.Doctor Strange in the Multiverse of Madness", title: "疯狂多元宇宙中的奇异博士", value: 952224986, group: "漫威" },
    { id: "2013.Iron Man 3", title: "钢铁侠3", value: 1215392272, group: "漫威" },
    { id: "2016.Captain America: Civil War", title: "美国队长：内战", value: 1151899586, group: "漫威" },
    { id: "2012.The Hunger Games", title: "饥饿游戏", value: 677923379, group: "狮门影业" },
    { id: "2017.Jumanji: Welcome to the Jungle", title: "勇敢者游戏", value: 961632807, group: "索尼影业" },
    { id: "2002.Spider-Man", title: "蜘蛛侠", value: 821706375, group: "漫威" },
    { id: "2009.Transformers: Revenge of the Fallen", title: "变形金刚阵亡者的复仇", value: 836519699, group: "派拉蒙" },
    { id: "2013.Frozen", title: "冷冻", value: 1277605729, group: "华特迪士尼" },
    { id: "2019.Spider-Man: Far From Home", title: "蜘蛛侠：英雄远征", value: 1132107522, group: "漫威" },
    { id: "2017.Guardians of the Galaxy Vol. 2", title: "银河护卫队第二卷", value: 869087963, group: "漫威" },
    { id: "2023.Spider-Man: Across the Spider-Verse", title: "蜘蛛侠：平行宇宙", value: 682977332, group: "漫威" },
    { id: "2011.Harry Potter and the Deathly Hallows Part 2", title: "哈利·波特与死亡圣器", value: 1312443850, group: "华纳兄弟。" },
    { id: "2003.Finding Nemo", title: "海底总动员", value: 936094852, group: "华特迪士尼" },
    { id: "2005.Star Wars: Episode III - Revenge of the Sith", title: "星球大战EP。III", value: 848998877, group: "20 世纪…" },
    { id: "2003.The Lord of the Rings: The Return of the King", title: "指环王：王者归来", value: 1121386981, group: "新队" },
    { id: "2022.Jurassic World: Dominion", title: "侏罗纪世界：统治", value: 1004004533, group: "普遍的" },
    { id: "2004.Spider-Man 2", title: "蜘蛛侠2", value: 794697557, group: "漫威" },
    { id: "2004.The Passion of the Christ", title: "基督的受难", value: 622313635, group: "纽马基特…" },
    { id: "2022.Minions: The Rise of Gru", title: "小黄人格鲁的崛起", value: 940079614, group: "普遍的" },
    { id: "2022.The Batman", title: "蝙蝠侠", value: 765950479, group: "华纳兄弟。" },
    { id: "2016.The Secret Life of Pets", title: "宠物的秘密生活", value: 885302500, group: "普遍的" },
    { id: "2013.Despicable Me 2", title: "卑鄙的我2", value: 975216835, group: "普遍的" },
    { id: "2016.The Jungle Book", title: "丛林之书", value: 953535821, group: "华特迪士尼" },
    { id: "2016.Deadpool", title: "死池", value: 781947691, group: "20 世纪…" },
    { id: "2023.Guardians of the Galaxy Vol. 3", title: "银河护卫队三", value: 845468744, group: "漫威" },
    { id: "2015.Inside Out", title: "反了", value: 850566343, group: "华特迪士尼" },
    { id: "2019.Aladdin", title: "阿拉丁", value: 1046587513, group: "华特迪士尼" },
    { id: "2015.Furious 7", title: "速度与激情7", value: 1511986364, group: "普遍的" },
    { id: "2011.Transformers: Dark of the Moon", title: "变形金刚：月黑之时", value: 1123794079, group: "派拉蒙…" },
    { id: "2014.American Sniper", title: "美国狙击手", value: 547326372, group: "华纳兄弟。" },
    { id: "2022.Thor: Love and Thunder", title: "雷神4：爱与雷霆", value: 760928081, group: "漫威" },
    { id: "2002.The Lord of the Rings: The Two Towers", title: "指环王：双塔", value: 919148764, group: "新队" },
    { id: "2016.Zootopia", title: "疯狂动物城", value: 1002462578, group: "华特迪士尼" },
    { id: "2014.The Hunger Games: Mockingjay - Part 1", title: "饥饿游戏", value: 766575131, group: "狮门影业" },
    { id: "2007.Spider-Man 3", title: "蜘蛛侠3", value: 894860230, group: "漫威" },
    { id: "2015.Minions", title: "小黄人", value: 1157271759, group: "普遍的" },
    { id: "2019.Joker", title: "小丑", value: 1064085246, group: "华纳兄弟。" },
    { id: "2018.Aquaman", title: "海王", value: 1143758700, group: "华纳兄弟。" },
    { id: "2017.Spider-Man: Homecoming", title: "蜘蛛侠：英雄归来", value: 878271291, group: "漫威" },
    { id: "2010.Alice in Wonderland", title: "爱丽丝漫游仙境", value: 1025491110, group: "华特迪士尼" },
    { id: "2014.Guardians of the Galaxy", title: "银河护卫队", value: 770882395, group: "华特迪士尼" },
    { id: "2016.Batman v Superman: Dawn of Justice", title: "蝙蝠侠大战超人", value: 872395091, group: "华纳兄弟。" },
    { id: "1994.Forrest Gump", title: "阿甘", value: 679835137, group: "派拉蒙…" },
    { id: "2017.It", title: "它", value: 701012746, group: "华纳兄弟。" },
    { id: "2023.Oppenheimer", title: "奥本海默", value: 952605062, group: "普遍的" },
    { id: "2016.Suicide Squad", title: "自杀小队", value: 745744980, group: "华纳兄弟。" },
    { id: "2018.Deadpool 2", title: "死侍2", value: 786362370, group: "漫威" },
    { id: "2007.Shrek the Third", title: "史莱克三世", value: 807330936, group: "派拉蒙…" },
    { id: "2007.Transformers", title: "变形金刚", value: 708272592, group: "派拉蒙…" },
    { id: "2008.Iron Man", title: "钢铁侠", value: 585171547, group: "漫威" },
    { id: "2001.Harry Potter and the Sorcerer's Stone", title: "哈利·波特与魔法石", value: 963667273, group: "华纳兄弟。" },
    { id: "2008.Indiana Jones and the Kingdom of the Crystal Skull", title: "印第安纳琼斯与水晶头骨王国", value: 786635413, group: "派拉蒙…" },
    { id: "2019.Jumanji: The Next Level", title: "勇敢者游戏：更上一层楼", value: 798210215, group: "索尼影业..." },
    { id: "1983.Star Wars Ep. VI: Return of the Jedi", title: "星球大战EP。六", value: 482365284, group: "20 世纪…" },
    { id: "2001.The Lord of the Rings: The Fellowship of the Ring", title: "指环王：护戒使者", value: 891210039, group: "新队" },
    { id: "2017.Thor: Ragnarok", title: "雷神：诸神黄昏", value: 850482778, group: "漫威" },
    { id: "2010.Iron Man 2", title: "钢铁侠2", value: 621156389, group: "漫威" },
    { id: "2002.Star Wars Ep. II: Attack of the Clones", title: "星球大战EP。II", value: 656695615, group: "20 世纪…" },
    { id: "2007.Pirates of the Caribbean: At World's End", title: "加勒比海盗：世界的尽头", value: 960996492, group: "华特迪士尼" },
    { id: "1996.Independence Day", title: "独立日", value: 817400878, group: "20 世纪…" },
    { id: "2003.Pirates of the Caribbean: The Curse of the Black Pearl", title: "加勒比海盗：布莱克的诅咒", value: 654310819, group: "华特迪士尼" },
    { id: "2012.Skyfall", title: "天幕杀机", value: 1110526981, group: "索尼影业..." }
];





const width = 1200;
const height = width;
const margin = 0
const format = d3.format(",d");

// Custom color function based on group
const color = d => d.group === "漫威" ? "#c82d31" : "#898989";

const pack = d3.pack()
    .size([width - margin * 2, height - margin * 2])
    .padding(3);

const root = pack(d3.hierarchy({ children: data }).sum(d => d.value));

const svg = d3.select("#chart").append("svg")
    .attr("width", width)
    .attr("height", height)
    .attr("viewBox", [-margin, -margin, width, height])
    .attr("style", "max-width: 100%; height: auto; font: 10px sans-serif;")
    .attr("text-anchor", "middle");

const leaf = svg.selectAll("g")
    .data(root.leaves())
    .join("g")
    .attr("transform", d => `translate(${d.x},${d.y})`);

leaf.append("circle")
    .attr("fill-opacity", 0.7)
    .attr("fill", d => color(d.data)) // Use custom color function here
    .attr("r", d => d.r);

// Add text and adjust position to fit within the circles
leaf.append("text")
    .attr("dy", "0.3em")
    .selectAll("tspan")
    .data(d => {
        const lines = [d.data.title].concat(format(d.data.value));
        return lines;
    })
    .join("tspan")
    .attr("x", 0)
    .attr("y", (d, i, nodes) => {
        const lineNum = i;
        const lines = nodes.length;
        const lineHeight = 1.1;
        const offset = -((lines - 1) * lineHeight) / 2;
        return `${lineNum * lineHeight + offset}em`;
    })
    .text(d => d)
    .style("font-size", "10px")
    .style("fill", "white")
    .attr("fill", d => d === format(d.data.value) ? "#000" : null); // Ensure value is black

leaf.append("title")
    .text(d => `${d.data.title}\n\n${format(d.value)}`);