/** Generated from https://keisan.casio.com/exec/system/1224682277 */
const str = `00:00	-24.84	344.74
00:15	-25.50	348.48
00:30	-25.97	352.27
00:45	-26.26	356.10
01:00	-26.36	359.95
01:15	-26.27	3.80
01:30	-25.98	7.63
01:45	-25.52	11.43
02:00	-24.86	15.17
02:15	-24.03	18.85
02:30	-23.03	22.46
02:45	-21.87	25.97
03:00	-20.55	29.39
03:15	-19.09	32.72
03:30	-17.49	35.94
03:45	-15.77	39.06
04:00	-13.93	42.07
04:15	-11.98	44.99
04:30	-9.93	47.81
04:45	-7.79	50.55
05:00	-5.54	53.20
05:15	-2.90	55.77
05:30	-0.17	58.27
05:45	1.99	60.70
06:00	4.37	63.08
06:15	6.87	65.41
06:30	9.45	67.70
06:45	12.07	69.95
07:00	14.75	72.18
07:15	17.46	74.39
07:30	20.20	76.59
07:45	22.97	78.80
08:00	25.77	81.02
08:15	28.58	83.27
08:30	31.40	85.56
08:45	34.24	87.90
09:00	37.08	90.32
09:15	39.91	92.83
09:30	42.75	95.45
09:45	45.57	98.23
10:00	48.36	101.19
10:15	51.13	104.38
10:30	53.86	107.86
10:45	56.54	111.69
11:00	59.13	115.96
11:15	61.63	120.78
11:30	64.00	126.28
11:45	66.20	132.62
12:00	68.16	139.95
12:15	69.83	148.40
12:30	71.11	158.00
12:45	71.93	168.60
13:00	72.21	179.79
13:15	71.94	190.99
13:30	71.14	201.62
13:45	69.88	211.26
14:00	68.22	219.75
14:15	66.27	227.11
14:30	64.08	233.48
14:45	61.71	239.01
15:00	59.22	243.85
15:15	56.62	248.14
15:30	53.95	251.99
15:45	51.22	255.47
16:00	48.45	258.67
16:15	45.66	261.64
16:30	42.84	264.42
16:45	40.00	267.05
17:00	37.16	269.56
17:15	34.32	271.98
17:30	31.49	274.33
17:45	28.66	276.61
18:00	25.85	278.86
18:15	23.06	281.08
18:30	20.28	283.29
18:45	17.54	285.50
19:00	14.82	287.71
19:15	12.15	289.93
19:30	9.51	292.18
19:45	6.93	294.47
20:00	4.43	296.80
20:15	2.04	299.17
20:30	-0.13	301.61
20:45	-2.84	304.10
21:00	-5.49	306.67
21:15	-7.76	309.32
21:30	-9.90	312.05
21:45	-11.96	314.87
22:00	-13.91	317.78
22:15	-15.76	320.80
22:30	-17.49	323.91
22:45	-19.10	327.13
23:00	-20.57	330.45
23:15	-21.89	333.87
23:30	-23.06	337.39
23:45	-24.07	340.99
24:00	-24.91	344.67`;

const allLines = str.split("\n");
const size = Math.round(allLines.length / 16);

const lines = allLines.filter((line, index) => {
   return (index % size) === 0;
});

let index = 15;
const result = lines.map((line) => {
    if (index > 16)
        index = 0;
    const div = line.split("\t");
    return {
        "fileName": `build/photos/${(index++) + 1}.jpg`,
        "isPrimary": ( index === 0 ),
        "isForLight": ( index === 10 ),
        "isForDark": ( index === 16 ),
        "altitude": Number(div[1]),
        "azimuth": Number(div[2]),
        "time": div[0]
    };
});

process.stdout.write(JSON.stringify(result, null, 4));
process.exit(0);