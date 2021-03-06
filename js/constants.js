﻿/*
 *  CosmiCalc - CosmicBreak assembly simulator with jQuery
 *
 *  Copyright (c) 2010-2011 Nukms
 *  Licensed under the MIT(MIT-LICENSE.txt) license.
 *
 */

/*  Naming Rules
 *
 *  CONST VARS:  WORD_WORD
 *  GLOBAL VARS: Word_word
 *  LOCAL VARS:  word_word
 *  FUNCTIONS:   wordWord
 *
 */


/* CONST VARS */
var VERSION = "4.1.6",
		LAST_MODIFIED = "2021.06.29",

	WEB_ACCESS_QUERY = "?mode=getData&target=",

	SCROLL_OFFSET = 70,

	MESSAGE_DEF_TIME = 3000,	// [msec]
	MESSAGE_WARNING_TIME = 30000,	// [msec]
	MESSAGE_ERROR_TIME = 300000,	// [msec]


	SIZE_TO_CLASS = {
		"-":"",
		SS:".siz_m, .siz_l, .siz_ll",
		S:".siz_l, .siz_ll",
		M:".siz_ss, .siz_ll",
		L:".siz_ss, .siz_s",
		LL:".siz_ss, .siz_s, .siz_m"
	},

	SIZE_TO_NUMLIC = {
		"-":"",
		SS:0,
		S:1,
		M:2,
		L:3,
		LL:4
	},

	COMPRESS_CHARS = "abcdefghijklmnopqrstvwxyz",

	PARTS_DATA_DEF = {
		fixed: {slot: 3},
		bd: {
			wbid: 0,
			cartridge: {hpup:0,hpup2:0,lv1:"",lv6:"",lv9:""}
		},
		wb: {type:"lacs",size:"-"},
		hd: {
			type: "lacs",
			size: "-",
			slot: 3,
		},
		lg: {
			type: "lacs",
			size: "-",
			slot: 3,
			builtin: {lg:1}
		},
		bs: {
			type: "lacs",
			size: "-",
			slot: 3,
			builtin: {bs:1}
		},
		am: {
			type: "lacs",
			size: "-",
			slot: 3,
		},
		wp: {type:"lacs",size:"-",slot:3},
		hdac: {type:"lacs",size:"-",slot:3},
		fcac: {type:"lacs",size:"-",slot:3}
	},

	JOINT_DEF = {
		bd:{joint:{wb:1,lg:1,bs:1,hd:1,am:2}},
		hd:{joint:{hdac:1,fcac:1}},
		am:{joint:{wp:1}}
	},

	INI = {
		browsercheck:0,
		webAccess:0,
		accessData:[],
		timeout:5000,
		dataFolder:"data/",
		henkan:false,
		mapInitMax:50,
		maxDataSize:200000,
		maxErrorCount:100,
		loadSaveData:false
	};

/* GLOBAL VARS */
var Parts_none = {
		name: "-",
		type: "-",
		size: "-",
		cost: 0,
		capa: 0,
		hp: 0,
		str: 0,
		tec: 0,
		wlk: 0,
		fly: 0,
		tgh: 0,
		slot: 0,
		cartridge: {hpup:0,hpup2:0}
	},
	Parts_data = {
		fixed: [],
		bd: [],
		wb: [],
		hd: [],
		lg: [],
		bs: [],
		am: [],
		wp: [],
		hdac: [],
		fcac: []
	},

	Result = {
		type:"-",
		size:"-",
		cost:0,
		capa:0,
		hp:0,
		str:0,
		tec:0,
		wlk:0,
		fly:0,
		tgh:0,
		bs:0,
		lg:0,
		hd:0,
		am:0,
		wp:0,
		lv:0,
		reinforce:0,
		extune:0
	};

var Master = {
	material: [],
	tuneup: [],
	cartridge: [],
	defaultwb: []
};
Master.cartridge.ex = [];
var Selected_cartridge = [];

var Settings = {
	coefficient: {	//ダメージ係数1000倍
		tec: 16,
		str: 24
	},
	save_slot: 0
};
var Assembly = {
	robo_name:{},
	bd:{},
	wb:{},
	cartridge:{}
};

var Prop = {
	target: {},
	changed: false
};
var Template = {};
var pdvTimer = 0;
var Images = [];
var Message;

var Res_elms,
	PDV_elms,
	List_elms;

var Narrow_down = {
	pointer: 0,
	expr: [],
	operand: ">=",
	ctrg: [],
	ms: "m",
	type: "l",
	size: "M"
};

var UnRedo = function(trg, deep){
	UnRedo.r_stack = [];
	$("#REDO").addClass("disabled");
	UnRedo.set(1, trg, deep);
};
(jQuery);
