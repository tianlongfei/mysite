
var format = {
	digital_num: 2,		//	0-9
	angle_unit: 'DEG',	//	'RAD'
	date: 'US',			//	'Eur'
	seperator: 'US',	//	'Eur'
	cal_mode: 'Chn'		//	'AOS'
};

var displayer = {
	top_list: ["2nd", "INV", "HYP", "COMPUTE", "ENTER", "SET", "↑↓", "DEL", "INS", "BGN", "RAD", "◁", "*"], // on the top of the displayer
	value: null,	// on the right of the displayer
	variable: null,	// on the left of the displayer
	
	show: function(){
	}
};

var cal = {
	current_value: "",	// string, not numeric. 接收当前输入，定义为可转换为数字进行计算的字符串，比如“-0.258”，“25567.367”，不含分割符，但含小数点和负号
	current_value_sign: "+",	// current_value的符号，默认“+”
	max_len: 10, // current_value的最大长度，不算分割符，小数点，负号

	display_value: "0.00",	// 用于按下operator后显示，有的时候等于current_value，但有的时候不等于。
	
	// format.cal_mode = 'Chn'
	op1: null,	// numeric，来自current_value类型转换，parseFloat()
	operator: null,
	op2: null,	// numeric，来自current_value类型转换，parseFloat()

	fmt: function(v){
		// Math.
		return v;
	},

	enter_number: function(d){

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

		if (d.id == "point") {
			if (this.current_value == "") {
				this.current_value = "0.";
			} else if (this.current_value.indexOf(".") == -1) {
					this.current_value += ".";
			}
			document.getElementById('screen').innerHTML = this.current_value;
			return 0;
		}

		if (this.current_value == "0") {
			if (d.id in ["0","1","2","3","4","5","6","7","8","9"] ) {
				this.current_value = d.id;
				document.getElementById('screen').innerHTML = this.current_value;
				return 0;
			}
		}

		if (d.id == "pm") {
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
			return 0;
		}
		
		this.current_value += d.id;
		document.getElementById('screen').innerHTML = this.current_value;
		// document.getElementById('screen').innerHTML = parseFloat("-23.67855");

		document.getElementById('test').innerHTML = len;
		
		return 0;

		// displayer.value_str = this.fmt(this.current_value);

		
	},

	enter_operator: function(d) {
		// body...
	},



}


