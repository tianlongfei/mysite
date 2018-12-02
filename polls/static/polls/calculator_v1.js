var keys_1st = {	// html tag id: key
	"cpt": "cpt",
	"enter": "enter",
	"up": "up",
	"down": "down",
	"onoff": "onoff",
	"2nd": "2nd",
	"cf": "cf",	
	"npv": "npv",
	"irr": "irr",
	"back": "back",
	"n": "n",
	"iy": "iy",
	"pv": "pv",
	"pmt": "pmt",
	"fv": "fv",
	"percent": "percent",
	"sqrt": "sqrt",
	"square": "square",
	"reciprocal": "reciprocal",
	"inv": "inv",
	"lbracket": "lbracket",
	"rbracket": "rbracket",
	"pow": "pow",
	"ln": "ln",
	"sto": "sto",
	"rcl": "rcl",
	"clear": "clear",
	"7": "7",
	"8": "8",
	"9": "9",
	"4": "4",
	"5": "5",
	"6": "6",
	"1": "1",
	"2": "2",
	"3": "3",
	"0": "0",
	"point": "point",
	"pm": "pm",
	"/": "/",
	"*": "*",
	"-": "-",
	"+": "+",
	"=": "=",
};

var keys_2nd = {	// html tag id: key
	"cpt": "quit",
	"enter": "set",
	"up": "del",
	"down": "ins",
	"onoff": "onoff",	// no 2nd
	"2nd": "2nd",	// no 2nd
	"cf": "cf",		// no 2nd
	"npv": "npv",	// no 2nd
	"irr": "irr",	// no 2nd
	"back": "back",	// no 2nd
	"n": "xpy",
	"iy": "py",
	"pv": "amort",
	"pmt": "bgn",
	"fv": "clrtvm",
	"percent": "k",
	"sqrt": "sqrt",	// no 2nd
	"square": "square",	// no 2nd
	"reciprocal": "reciprocal",	// no 2nd
	"inv": "hyp",
	"lbracket": "sin",
	"rbracket": "cos",
	"pow": "tan",
	"ln": "ex",
	"sto": "round",
	"rcl": "rcl",	// no 2nd
	"clear": "clrwork",
	"7": "data",
	"8": "stat",
	"9": "bond",
	"4": "depr",
	"5": "changepercent",	// ⊿%
	"6": "brkevn",
	"1": "date",
	"2": "iconv",
	"3": "profit",
	"0": "mem",
	"point": "format",
	"pm": "reset",
	"/": "rand",
	"*": "factorial",	// 阶乘
	"-": "permutation",	// 排列
	"+": "combination",	// 组合
	"=": "ans",
};

var key_type = {	// key: key_type
	"cpt": "unknown",
	"enter": "unknown",
	"up": "unknown",
	"down": "unknown",
	"onoff": "unknown",
	"2nd": "func",
	"cf": "unknown",
	"npv": "unknown",
	"irr": "unknown",
	"back": "unknown",
	"n": "unknown",
	"iy": "unknown",
	"pv": "unknown",
	"pmt": "unknown",
	"fv": "unknown",
	"percent": "unknown",
	"sqrt": "operator",
	"square": "operator",
	"reciprocal": "operator",
	"inv": "func",
	"lbracket": "unknown",
	"rbracket": "unknown",
	"pow": "operator",
	"ln": "operator",
	"sto": "unknown",
	"rcl": "unknown",
	"clear": "func",
	"7": "number",
	"8": "number",
	"9": "number",
	"4": "number",
	"5": "number",
	"6": "number",
	"1": "number",
	"2": "number",
	"3": "number",
	"0": "number",
	"point": "number",
	"pm": "number",
	"/": "operator",
	"*": "operator",
	"-": "operator",
	"+": "operator",
	"=": "operator",
	"quit": "unknown",
	"set": "unknown",
	"del": "unknown",
	"ins": "unknown",
	"xpy": "unknown",
	"py": "unknown",
	"amort": "unknown",
	"bgn": "unknown",
	"clrtvm": "unknown",
	"k": "unknown",
	"hyp": "func",
	"sin": "operator",
	"cos": "operator",
	"tan": "operator",
	"ex": "operator",
	"round": "operator",
	"clrwork": "unknown",
	"data": "unknown",
	"stat": "unknown",
	"bond": "unknown",
	"depr": "unknown",
	"changepercent": "unknown",
	"brkevn": "unknown",
	"date": "unknown",
	"iconv": "unknown",
	"profit": "unknown",
	"mem": "unknown",
	"format": "unknown",
	"reset": "unknown",
	"rand": "number",
	"factorial": "operator",
	"permutation": "operator",
	"combination": "operator",
	"ans": "unknown", 
	// 反三角函数，在key为"sin"，"cos"，"tan"，且cal.is_inv == true && cal.is_hyp == false时，key = "a" + key
	"asin": "operator",
	"acos": "operator",
	"atan": "operator",
	// 双曲函数，在key为"sin"，"cos"，"tan"，且cal.is_inv == false && cal.is_hyp == true时，key = key + "h"
	"sinh": "operator",
	"cosh": "operator",
	"tanh": "operator",
	// 反双曲函数，在key为"sin"，"cos"，"tan"，且cal.is_hyp == true && cal.is_inv == true时，key = "a" + key + "h"
	"asinh": "operator",
	"acosh": "operator",
	"atanh": "operator",
};

var operator_type = {
	"sqrt": 1,
	"square": 1,
	"reciprocal": 1,
	"ln": 1,
	"sin": 1,
	"cos": 1,
	"tan": 1,
	"asin": 1,
	"acos": 1,
	"atan": 1,
	"sinh": 1,
	"cosh": 1,
	"tanh": 1,
	"asinh": 1,
	"acosh": 1,
	"atanh": 1,
	"ex": 1,
	"factorial": 1,
	"round": 1,
	"+": 2,
	"-": 2,
	"*": 2,
	"/": 2,
	"pow": 2,
	"permutation": 2,
	"combination": 2,
};

var format = {
	digital_num: 2,		//	0-9
	angle_unit: 'DEG',	//	'RAD'
	date: 'US',			//	'Eur'
	seperator: 'US',	//	'Eur'
	cal_mode: 'Chn'		//	'AOS'
};

var displayer = {
	top_bar_show: {		// on the top of the displayer
		"top_bar_2nd": false,
		"top_bar_inv": false,
		"top_bar_hyp": false,
		"top_bar_compute": false,
		"top_bar_enter": false,
		"top_bar_set": false,
		"top_bar_updown": false,
		"top_bar_del": false,
		"top_bar_ins": false,
		"top_bar_bgn": false,
		"top_bar_rad": false,
		"top_bar_assignment": false,
		"top_bar_type": false,
	},
	value: null,	// on the right of the displayer
	variable: null,	// on the left of the displayer
	show: function(){
		for (var k in this.top_bar_show) {
			if (this.top_bar_show[k]) {
				document.getElementById(k).style.visibility = "visible";
			} else {
				document.getElementById(k).style.visibility = "hidden";
			}
		}
	}

};

var cal = {
	current_value: "",	// string, not numeric. 该变量的定义为可转换为数字进行计算的字符串，比如“-0.258”，“25567.367”，不含分割符，但含小数点和负号
	current_value_sign: "+",
	max_len: 10, // current_value的最大长度，不算分割符，小数点，负号

	// func key
	is_2nd: false,
	is_inv: false,
	is_hyp: false,

	// format.cal_mode = 'Chn'
	op1: null,
	operator1: null,
	op2: null,
	operator2: null,
	result: null,

	// format.cal_mode = 'AOS'
	arithmetic: "",	// 算数表达式

	// for debug only
	show_status: function(){
		return "current_value: " + this.current_value + "op1: " + this.op1 + "operator1: " + this.operator1 + "result: " + this.result;
	},


	// enter key 入口
	enter_key: function(d){
		key = this.get_key_value(d);
		if (key_type[key] == "number") {
			this.enter_number(key);
		} else if (key_type[key] == "operator") {
			this.enter_operator(key);
		} else if (key_type[key] == "func") {
			this.enter_func_key(key);
		} else if (key_type[key] == "unknown") {
			document.getElementById("test").innerHTML = "未开发" + key + key_type[key];
			return 0;
		}

		if (key_type[key] != "func") {	// 更安全的做法是 ["2nd", "inv", "hyp"].indexOf(key) != -1，只要是这三个键，没变化，只要不是这三个键，都为false
			this.is_inv = false;
			this.is_hyp = false;
			displayer.top_bar_show.top_bar_inv = false;
			displayer.top_bar_show.top_bar_hyp = false;
			displayer.show();
		}

		if (key != "2nd") {		//	只要按的不是"2nd"，2nd状态都为false
			this.is_2nd = false;
			displayer.top_bar_show.top_bar_2nd = false;
			displayer.show();
		} 
	},

	// get key value when pressing a key
	get_key_value: function(d){
		if (this.is_2nd) {
			key = keys_2nd[d.id];
		} else {
			key = keys_1st[d.id];
		}
		if (this.is_inv && ["sin","cos","tan"].indexOf(key) != -1) {
			key = "a" + key;
		}
		if (this.is_hyp && ["sin","cos","tan","asin","acos","atan"].indexOf(key) != -1) {
			key = key + "h";
		}
		document.getElementById("thekey").innerHTML = key;
		return key;
	},

	// 按数字键响应函数
	enter_number: function(key){

		if (this.result != null) {
			if (key == "pm") {
				this.current_value = this.result;
			}
			this.result = null;			
		}

		len = this.current_value.length;
		if (this.current_value_sign == "-") {
			len = len - 1;
		}
		if (this.current_value.indexOf(".") != -1) {
			len = len - 1;
		}
		if (len >= this.max_len) {
			return 0;
		}

		if (key == "point") {
			if (this.current_value == "") {
				this.current_value = "0.";
			} else if (this.current_value.indexOf(".") == -1) {
					this.current_value += ".";
			}
			document.getElementById('screen').innerHTML = this.current_value;
			document.getElementById('status').innerHTML = this.show_status();	// display
			return 0;
		}

		if (this.current_value == "0") {
			if (["0","1","2","3","4","5","6","7","8","9"].indexOf(key) != -1) {
				this.current_value = key;
				document.getElementById('screen').innerHTML = this.current_value;
				document.getElementById('status').innerHTML = this.show_status();	// display
				return 0;
			}
		}

		if (key == "pm") {
			if (this.current_value == "") {
				return 0;
			}

			if (this.current_value_sign == "+") {
				this.current_value_sign = "-";
				this.current_value = this.current_value_sign + this.current_value;
			} else {
				this.current_value_sign = "+";
				this.current_value = this.current_value.slice(1);
			}
			document.getElementById('screen').innerHTML = this.current_value;
			document.getElementById('status').innerHTML = this.show_status();	// display
			return 0;
		}

		if (key == "rand") {
			this.current_value = Math.random().toFixed(this.max_len-1);			// 10位的随机数
			document.getElementById('screen').innerHTML = this.current_value;
			document.getElementById('status').innerHTML = this.show_status();	// display
			return 0;
		}

		this.current_value += key;
		document.getElementById('screen').innerHTML = this.current_value;
		// document.getElementById('screen').innerHTML = parseFloat("-23.67855");

		document.getElementById('test').innerHTML = len;
		document.getElementById('status').innerHTML = this.show_status();	// display
		// console.log(this.current_value);

		return 0;
	},


	// 按运算符响应函数
	enter_operator: function(key) {
		if (format.cal_mode == 'Chn') {
			this.enter_operator_chn(key);
		} else {
			this.enter_operator_aos(key);
		}
	},

	// Chn
	enter_operator_chn: function(key){
		// 情况1，8
		if (this.op1 == null && this.result == null) {
			if (this.current_value == "") { 
				this.current_value = "0";
			}

			if (key == '=') {
				this.result = this.current_value;
				this.current_value = "";
				document.getElementById('screen').innerHTML = this.result;	// display
				document.getElementById('status').innerHTML = this.show_status();	// display
				return 0;
			}

			if (operator_type[key] == 2) {
				this.op1 = this.current_value;
				this.operator1 = key;
				this.current_value = "";
				document.getElementById('screen').innerHTML = this.op1;		// display
			} else if (operator_type[key] == 1) {
				this.op2 = this.current_value;
				this.current_value = "";
				this.operator2 = key;
				this.calculate();
				document.getElementById('screen').innerHTML = this.result;	// display
			} else {
				document.getElementById('test').innerHTML = "未开发";
			}

			document.getElementById('status').innerHTML = this.show_status();	// debug

			return 0;
		}

		// 情况2，7
		if (this.op1 == null && this.result != null) {
			if (this.current_value == "") {
				this.current_value = this.result;
			}

			if (key == "=") {
				this.result = this.current_value;
				this.current_value = "";
				document.getElementById('screen').innerHTML = this.result;	// display
				document.getElementById('status').innerHTML = this.show_status();	// display
				return 0;
			}

			if (operator_type[key] == 2) {
				this.op1 = this.current_value;
				this.operator1 = key;
				this.current_value = "";
				this.result = null;
				document.getElementById('screen').innerHTML = this.op1;
			} else if (operator_type[key] == 1) {
				this.op2 = this.current_value;
				this.operator2 = key;
				this.current_value = "";
				this.result = null;
				this.calculate();
				document.getElementById('screen').innerHTML = this.result;	// display

			} else {
				document.getElementById('test').innerHTML = "未开发";
			}

			document.getElementById('status').innerHTML = this.show_status();	// display
			return 0;
		}

		// 情况3
		if (this.op1 != null && this.result == null && this.current_value == "") {
			if (key == "=") {
				this.result = this.op1;
				this.op1 = null;
				this.operator1 = null;
				document.getElementById('screen').innerHTML = this.result;	// display
				document.getElementById('status').innerHTML = this.show_status();	// display
				return 0;
			}

			if (operator_type[key] == 2) {
				this.operator1 = key;
				this.current_value = "";
				this.result = null;
				document.getElementById('screen').innerHTML = this.op1;
			} else if (operator_type[key] == 1) {
				this.op2 = this.op1;
				this.operator2 = key;
				this.current_value = "";	// redundant
				this.result = null;			// redundant
				this.calculate();
				document.getElementById('screen').innerHTML = this.result;	// display
			} else {
				document.getElementById('test').innerHTML = "未开发";
			}

			document.getElementById('status').innerHTML = this.show_status();	// display
			return 0;
		}

		// 情况4，6
		if (this.op1 != null && this.result != null) {
			if (this.current_value == "") {
				this.current_value = this.result;
			}

			if (key == "=") {
				this.op2 = this.current_value;
				this.current_value = "";
				this.result = null;
				this.calculate();
				document.getElementById('screen').innerHTML = this.result;			// display
				document.getElementById('status').innerHTML = this.show_status();	// display
				return 0;
			}

			if (operator_type[key] == 2) {
				this.op2 = this.current_value;
				this.current_value = "";
				this.result = null;
				this.calculate();

				this.op1 = this.result;
				this.operator1 = key;
				this.result = null;
				document.getElementById('screen').innerHTML = this.op1;
			} else if (operator_type[key] == 1) {
				this.op2 = this.current_value;
				this.operator2 = key;
				this.current_value = "";
				this.result = null;		// this.calculate()前先设置为null，规范，实际不影响结果
				this.calculate();
				document.getElementById('screen').innerHTML = this.result;	// display
			} else {
				document.getElementById('test').innerHTML = "未开发";
			}

			document.getElementById('status').innerHTML = this.show_status();	// display
			return 0;
		}

		// 情况5
		if (this.op1 != null && this.result == null && this.current_value != "") {
			if (key == "=") {
				this.op2 = this.current_value;
				this.current_value = "";
				this.calculate();
				document.getElementById('screen').innerHTML = this.result;	// display
				document.getElementById('status').innerHTML = this.show_status();	// display
				return 0;
			}

			if (operator_type[key] == 2) {
				this.op2 = this.current_value;
				this.current_value = "";
				this.result = null;
				this.calculate();
				this.op1 = this.result;
				this.operator1 = key;
				this.result = null;
				document.getElementById('screen').innerHTML = this.op1;	// display
			} else if (operator_type[key] == 1) {
				this.op2 = this.current_value;
				this.operator2 = key;
				this.current_value = "";
				this.result = null;
				this.calculate();
				document.getElementById('screen').innerHTML = this.result;	// display
			} else {
				document.getElementById('test').innerHTML = "未开发";
			}

			document.getElementById('status').innerHTML = this.show_status();	// display
			return 0;
		}
	},

	// Chn中计算部分的运算
	calculate: function(){
		if (this.operator2 != null && this.op2 != null) {
			this.result = this.cal_op(this.operator2);
			// document.getElementById('screen').innerHTML = this.result;	// display
			this.operator2 = null;
			this.op2 = null;
		} else if (this.operator1 != null && this.op1 != null && this.op2 != null) {
			this.result = this.cal_op(this.operator1);
			// document.getElementById('screen').innerHTML = this.result;	// display
			this.op1 = null;
			this.operator1 = null;
			this.op2 = null;
		} else {
			// this.result = "";
			// document.getElementById('screen').innerHTML = this.op1;	// display
		}
	},

	cal_op: function(operator){
		if (operator == "+") {
			return String(parseFloat(this.op1) + parseFloat(this.op2));
		} else if (operator == "-") {
			return String(parseFloat(this.op1) - parseFloat(this.op2));
		} else if (operator == "*") {
			return String(parseFloat(this.op1) * parseFloat(this.op2));
		} else if (operator == "/") {
			return String(parseFloat(this.op1) / parseFloat(this.op2));
		} else if (operator == "sqrt") {
			return String(Math.sqrt(parseFloat(this.op2)));
		} else if (operator == "square") {
			return String(Math.pow(parseFloat(this.op2), 2));
		} else if (operator == "reciprocal") {
			return String(1/parseFloat(this.op2));
		} else if (operator == "ln") {
			return String(Math.log(parseFloat(this.op2)));
		} else if (operator == "pow") {
			return String(Math.pow(parseFloat(this.op1), parseFloat(this.op2)));
		} else if (operator == "sin") {
			return String(Math.sin(parseFloat(this.op2)));
		} else if (operator == "cos") {
			return String(Math.cos(parseFloat(this.op2)));
		} else if (operator == "tan") {
			return String(Math.tan(parseFloat(this.op2)));
		} else if (operator == "asin") {
			return String(Math.asin(parseFloat(this.op2)));
		} else if (operator == "acos") {
			return String(Math.acos(parseFloat(this.op2)));
		} else if (operator == "atan") {
			return String(Math.atan(parseFloat(this.op2)));
		} else if (operator == "sinh") {
			return String(Math.sinh(parseFloat(this.op2)));
		} else if (operator == "cosh") {
			return String(Math.cosh(parseFloat(this.op2)));
		} else if (operator == "tanh") {
			return String(Math.tanh(parseFloat(this.op2)));
		} else if (operator == "asinh") {
			return String(Math.asinh(parseFloat(this.op2)));
		} else if (operator == "acosh") {
			return String(Math.acosh(parseFloat(this.op2)));
		} else if (operator == "atanh") {
			return String(Math.atanh(parseFloat(this.op2)));
		} else if (operator == "ex") {
			return String(Math.exp(parseFloat(this.op2)));
		} else if (operator == "factorial") {
			return String(this.factorial(parseFloat(this.op2)));
		} else if (operator == "permutation") {
			return String(this.permutation(parseFloat(this.op1), parseFloat(this.op2)));
		} else if (operator == "combination") {
			return String(this.combination(parseFloat(this.op1), parseFloat(this.op2)));
		} else if (operator == "round") {
			return String(parseFloat(this.op2).toFixed(format.digital_num));
		}
	},

	permutation: function(m,n){
		if (m < 0 || m % 1 != 0 || n < 0 || n % 1 != 0) {
			return "Error2";
		} else if (m < n) {
			return 0;
		} else {					// m == 0 || n == 0，阶乘都是1
	        var num = 1;
	        var count = 0;
	        for(var i = m; i > 0; i--){
	            if(count == n){		//当循环次数等于指定的相乘个数时，即跳出for循环
	                break;
	            }
	            num = num * i;
	            count++;
	        }
	        return num;
		}
    },

	factorial: function(num){
		return this.permutation(num, num);
	},

	combination: function(m, n){
		p1 = permutation(m, n);
		if (p1 == 'Error2') {
			return p1;
		}
		p2 = permutation(n, n);
		return p1/p2;
	},

	// AOS
	enter_operator_aos: function(key){
		return 0;
	},

	// 按功能键响应函数
	enter_func_key: function(key){

		if (key == '2nd') {
			this.is_2nd = !this.is_2nd;
			displayer.top_bar_show.top_bar_2nd = !displayer.top_bar_show.top_bar_2nd;
			displayer.show();
			return 0;
		}

		if (key == 'inv') {
			this.is_inv = !this.is_inv;
			displayer.top_bar_show.top_bar_inv = !displayer.top_bar_show.top_bar_inv;
			displayer.show();
			return 0;
		}

		if (key == 'hyp') {
			this.is_hyp = !this.is_hyp;
			displayer.top_bar_show.top_bar_hyp = !displayer.top_bar_show.top_bar_hyp;
			displayer.show();
			return 0;
		}
	},

};






