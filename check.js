a = [
    {
        label: "PRINT",
        kind: 'Command',
        nlsDetail: { "ja": "文字列を表示", "en": "Show String" },
    },
    {
        label: "PRINTL",
        kind: 'Command',
        nlsDetail: { "ja": "文字列を表示+改行", "en": "Show String + Line Break" },
    },
    {
        label: "PRINTW",
        kind: 'Command',
        nlsDetail: { "ja": "文字列を表示+待機", "en": "Show String + Wait" },
    },
    {
        label: "PRINTK",
        kind: 'Command',
        nlsDetail: { "ja": "文字列を表示+カナ強制", "en": "Show String + Forced Kana" },
    },
    {
        label: "PRINTKL",
        kind: 'Command',
        nlsDetail: { "ja": "文字列を表示+カナ強制+改行", "en": "Show String + Forced Kana + Line Break" },
    },
    {
        label: "PRINTKW",
        kind: 'Command',
        nlsDetail: { "ja": "文字列を表示+カナ強制+待機", "en": "Show String + Forced Kana + Wait" },
    },
    {
        label: "PRINTD",
        kind: 'Command',
        nlsDetail: { "ja": "文字列を表示+初期色", "en": "Show String + Initial Color" },
    },
    {
        label: "PRINTDL",
        kind: 'Command',
        nlsDetail: { "ja": "文字列を表示+初期色+改行", "en": "Show String + Initial Color + Line Break" },
    },
    {
        label: "PRINTDW",
        kind: 'Command',
        nlsDetail: { "ja": "文字列を表示+初期色+待機", "en": "Show String + Initial Color + Wait" },
    },
    {
        label: "PRINTV",
        kind: 'Command',
        nlsDetail: { "ja": "数式を表示", "en": "Show Formula" },
    },
    {
        label: "PRINTVL",
        kind: 'Command',
        nlsDetail: { "ja": "数式を表示+改行", "en": "Show Formula + Line Break" },
    },
    {
        label: "PRINTVW",
        kind: 'Command',
        nlsDetail: { "ja": "数式を表示+待機", "en": "Show Formula + Wait" },
    },
    {
        label: "PRINTVK",
        kind: 'Command',
        nlsDetail: { "ja": "数式を表示+カナ強制", "en": "Show Formula + Forced Kana" },
    },
    {
        label: "PRINTVKL",
        kind: 'Command',
        nlsDetail: { "ja": "数式を表示+カナ強制+改行", "en": "Show Formula + Forced Kana + Line Break" },
    },
    {
        label: "PRINTVKW",
        kind: 'Command',
        nlsDetail: { "ja": "数式を表示+カナ強制+待機", "en": "Show Formula + Forced Kana + Wait" },
    },
    {
        label: "PRINTVD",
        kind: 'Command',
        nlsDetail: { "ja": "数式を表示+初期色", "en": "Show Formula + Initial Color" },
    },
    {
        label: "PRINTVDL",
        kind: 'Command',
        nlsDetail: { "ja": "数式を表示+初期色+改行", "en": "Show Formula + Initial Color + Line Break" },
    },
    {
        label: "PRINTVDW",
        kind: 'Command',
        nlsDetail: { "ja": "数式を表示+初期色+待機", "en": "Show Formula + Initial Color + Wait" },
    },
    {
        label: "PRINTS",
        kind: 'Command',
        nlsDetail: { "ja": "文字列式を表示", "en": "Display String Expression" },
    },
    {
        label: "PRINTSL",
        kind: 'Command',
        nlsDetail: { "ja": "文字列式を表示+改行", "en": "Display String Expression + Line Break" },
    },
    {
        label: "PRINTSW",
        kind: 'Command',
        nlsDetail: { "ja": "文字列式を表示+待機", "en": "Display String Expression + Wait" },
    },
    {
        label: "PRINTSK",
        kind: 'Command',
        nlsDetail: { "ja": "文字列式を表示+カナ強制", "en": "Display String Expression + Forced Kana" },
    },
    {
        label: "PRINTSKL",
        kind: 'Command',
        nlsDetail: { "ja": "文字列式を表示+カナ強制+改行", "en": "Display String Expression + Forced Kana + Line Break" },
    },
    {
        label: "PRINTSKW",
        kind: 'Command',
        nlsDetail: { "ja": "文字列式を表示+カナ強制+待機", "en": "Display String Expression + Forced Kana + Wait" },
    },
    {
        label: "PRINTSD",
        kind: 'Command',
        nlsDetail: { "ja": "文字列式を表示+初期色", "en": "Display String Expression + Initial Color" },
    },
    {
        label: "PRINTSDL",
        kind: 'Command',
        nlsDetail: { "ja": "文字列式を表示+初期色+改行", "en": "Display String Expression + Initial Color + Line Break" },
    },
    {
        label: "PRINTSDW",
        kind: 'Command',
        nlsDetail: { "ja": "文字列式を表示+初期色+待機", "en": "Display String Expression + Initial Color + Wait" },
    },
    {
        label: "PRINTFORM",
        kind: 'Command',
        nlsDetail: { "ja": "書式付文字列を表示", "en": "Formatted Show String" },
    },
    {
        label: "PRINTFORML",
        kind: 'Command',
        nlsDetail: { "ja": "書式付文字列を表示+改行", "en": "Formatted Show String + Line Break" },
    },
    {
        label: "PRINTFORMW",
        kind: 'Command',
        nlsDetail: { "ja": "書式付文字列を表示+待機", "en": "Formatted Show String + Wait" },
    },
    {
        label: "PRINTFORMK",
        kind: 'Command',
        nlsDetail: { "ja": "書式付文字列を表示+カナ強制", "en": "Formatted Show String + Forced Kana" },
    },
    {
        label: "PRINTFORMKL",
        kind: 'Command',
        nlsDetail: { "ja": "書式付文字列を表示+カナ強制+改行", "en": "Formatted Show String + Forced Kana + Line Break" },
    },
    {
        label: "PRINTFORMKW",
        kind: 'Command',
        nlsDetail: { "ja": "書式付文字列を表示+カナ強制+待機", "en": "Formatted Show String + Forced Kana + Wait" },
    },
    {
        label: "PRINTFORMD",
        kind: 'Command',
        nlsDetail: { "ja": "書式付文字列を表示+初期色", "en": "Formatted Show String + Initial Color" },
    },
    {
        label: "PRINTFORMDL",
        kind: 'Command',
        nlsDetail: { "ja": "書式付文字列を表示+初期色+改行", "en": "Formatted Show String + Initial Color + Line Break" },
    },
    {
        label: "PRINTFORMDW",
        kind: 'Command',
        nlsDetail: { "ja": "書式付文字列を表示+初期色+待機", "en": "Formatted Show String + Initial Color + Wait" },
    },
    {
        label: "PRINTFORMS",
        kind: 'Command',
        nlsDetail: { "ja": "書式付文字列式を表示", "en": "Formatted Display String Expression" },
    },
    {
        label: "PRINTFORMSL",
        kind: 'Command',
        nlsDetail: { "ja": "書式付文字列式を表示+改行", "en": "Formatted Display String Expression + Line Break" },
    },
    {
        label: "PRINTFORMSW",
        kind: 'Command',
        nlsDetail: { "ja": "書式付文字列式を表示+待機", "en": "Formatted Display String Expression + Wait" },
    },
    {
        label: "PRINTFORMSK",
        kind: 'Command',
        nlsDetail: { "ja": "書式付文字列式を表示+カナ強制", "en": "Formatted Display String Expression + Forced Kana" },
    },
    {
        label: "PRINTFORMSKL",
        kind: 'Command',
        nlsDetail: { "ja": "書式付文字列式を表示+カナ強制+改行", "en": "Formatted Display String Expression + Forced Kana + Line Break" },
    },
    {
        label: "PRINTFORMSKW",
        kind: 'Command',
        nlsDetail: { "ja": "書式付文字列式を表示+カナ強制+待機", "en": "Formatted Display String Expression + Forced Kana + Wait" },
    },
    {
        label: "PRINTFORMSD",
        kind: 'Command',
        nlsDetail: { "ja": "書式付文字列式を表示+初期色", "en": "Formatted Display String Expression + Initial Color" },
    },
    {
        label: "PRINTFORMSDL",
        kind: 'Command',
        nlsDetail: { "ja": "書式付文字列式を表示+初期色+改行", "en": "Formatted Display String Expression + Initial Color + Line Break" },
    },
    {
        label: "PRINTFORMSDW",
        kind: 'Command',
        nlsDetail: { "ja": "書式付文字列式を表示+初期色+待機", "en": "Formatted Display String Expression + Initial Color + Wait" },
    },
    {
        label: "PRINTSINGLE",
        kind: 'Command',
        nlsDetail: { "ja": "文字列を表示", "en": "Show String" },
    },
    {
        label: "PRINTSINGLEK",
        kind: 'Command',
        nlsDetail: { "ja": "文字列を表示+カナ強制", "en": "Show String + Forced Kana" },
    },
    {
        label: "PRINTSINGLED",
        kind: 'Command',
        nlsDetail: { "ja": "文字列を表示+初期色", "en": "Show String + Initial Color" },
    },
    {
        label: "PRINTSINGLEV",
        kind: 'Command',
        nlsDetail: { "ja": "数式を表示", "en": "Show Formula" },
    },
    {
        label: "PRINTSINGLEVK",
        kind: 'Command',
        nlsDetail: { "ja": "数式を表示+カナ強制", "en": "Show Formula + Forced Kana" },
    },
    {
        label: "PRINTSINGLEVD",
        kind: 'Command',
        nlsDetail: { "ja": "数式を表示+初期色", "en": "Show Formula + Initial Color" },
    },
    {
        label: "PRINTSINGLES",
        kind: 'Command',
        nlsDetail: { "ja": "文字列式を表示", "en": "Display String Expression" },
    },
    {
        label: "PRINTSINGLESK",
        kind: 'Command',
        nlsDetail: { "ja": "文字列式を表示+カナ強制", "en": "Display String Expression + Forced Kana" },
    },
    {
        label: "PRINTSINGLESD",
        kind: 'Command',
        nlsDetail: { "ja": "文字列式を表示+初期色", "en": "Display String Expression + Initial Color" },
    },
    {
        label: "PRINTSINGLEFORM",
        kind: 'Command',
        nlsDetail: { "ja": "書式付文字列を表示", "en": "Formatted Show String" },
    },
    {
        label: "PRINTSINGLEFORMK",
        kind: 'Command',
        nlsDetail: { "ja": "書式付文字列を表示+カナ強制", "en": "Formatted Show String + Forced Kana" },
    },
    {
        label: "PRINTSINGLEFORMD",
        kind: 'Command',
        nlsDetail: { "ja": "書式付文字列を表示+初期色", "en": "Formatted Show String + Initial Color" },
    },
    {
        label: "PRINTSINGLEFORMS",
        kind: 'Command',
        nlsDetail: { "ja": "書式付文字列式を表示", "en": "Formatted Display String Expression" },
    },
    {
        label: "PRINTSINGLEFORMSK",
        kind: 'Command',
        nlsDetail: { "ja": "書式付文字列式を表示+カナ強制", "en": "Formatted Display String Expression + Forced Kana" },
    },
    {
        label: "PRINTSINGLEFORMSD",
        kind: 'Command',
        nlsDetail: { "ja": "書式付文字列式を表示+初期色", "en": "Formatted Display String Expression + Initial Color" },
    },
    {
        label: "PRINTC",
        kind: 'Command',
        nlsDetail: { "ja": "文字列を表示+右揃え", "en": "Show String + Right Justified" },
    },
    {
        label: "PRINTCK",
        kind: 'Command',
        nlsDetail: { "ja": "文字列を表示+右揃え+カナ強制", "en": "Show String + Right Justified + Forced Kana" },
    },
    {
        label: "PRINTCD",
        kind: 'Command',
        nlsDetail: { "ja": "文字列を表示+右揃え+初期色", "en": "Show String + Right Justified + Initial Color" },
    },
    {
        label: "PRINTLC",
        kind: 'Command',
        nlsDetail: { "ja": "文字列を表示+左揃え", "en": "Show String + Left Justified" },
    },
    {
        label: "PRINTLCK",
        kind: 'Command',
        nlsDetail: { "ja": "文字列を表示+左揃え+カナ強制", "en": "Show String + Left Justified + Forced Kana" },
    },
    {
        label: "PRINTLCD",
        kind: 'Command',
        nlsDetail: { "ja": "文字列を表示+左揃え+初期色", "en": "Show String + Left Justified + Initial Color" },
    },
    {
        label: "PRINTFORMC",
        kind: 'Command',
        nlsDetail: { "ja": "書式付文字列を表示+右揃え", "en": "Formatted Show String + Right Justified" },
    },
    {
        label: "PRINTFORMCK",
        kind: 'Command',
        nlsDetail: { "ja": "書式付文字列を表示+右揃え+カナ強制", "en": "Formatted Show String + Right Justified + Forced Kana" },
    },
    {
        label: "PRINTFORMCD",
        kind: 'Command',
        nlsDetail: { "ja": "書式付文字列を表示+右揃え+初期色", "en": "Formatted Show String + Right Justified + Initial Color" },
    },
    {
        label: "PRINTFORMLC",
        kind: 'Command',
        nlsDetail: { "ja": "書式付文字列を表示+左揃え", "en": "Formatted Show String + Left Justified" },
    },
    {
        label: "PRINTFORMLCK",
        kind: 'Command',
        nlsDetail: { "ja": "書式付文字列を表示+左揃え+カナ強制", "en": "Formatted Show String + Left Justified + Forced Kana" },
    },
    {
        label: "PRINTFORMLCD",
        kind: 'Command',
        nlsDetail: { "ja": "書式付文字列を表示+左揃え+初期色", "en": "Formatted Show String + Left Justified + Initial Color" },
    },
    {
        label: "DATA",
        kind: 'Command',
    },
    {
        label: "DATAFORM",
        kind: 'Command',
    },
    {
        label: "PRINTBUTTON",
        kind: 'Command',
        nlsDetail: { "ja": "ボタンを表示", "en": "Show Button" },
    },
    {
        label: "PRINTBUTTONC",
        kind: 'Command',
        nlsDetail: { "ja": "ボタンを表示+右揃え", "en": "Show Button + Right Justified" },
    },
    {
        label: "PRINTBUTTONLC",
        kind: 'Command',
        nlsDetail: { "ja": "ボタンを表示+左揃え", "en": "Show Button + Left Justified" },
    },
    {
        label: "PRINTPLAIN",
        kind: 'Command',
        nlsDetail: { "ja": "文字列を表示", "en": "Show String" },
    },
    {
        label: "PRINTPLAINFORM",
        kind: 'Command',
        nlsDetail: { "ja": "書式付文字列を表示", "en": "Formatted Show String" },
    },
    {
        label: "CUSTOMDRAWLINE",
        kind: 'Command',
        nlsDetail: { "ja": "横線を表示", "en": "Show Line" },
    },
    {
        label: "DRAWLINEFORM",
        kind: 'Command',
        nlsDetail: { "ja": "横線を表示", "en": "Show Line" },
    },
    {
        label: "REUSELASTLINE",
        kind: 'Command',
        nlsDetail: { "ja": "最終行を書き換え", "en": "Rewrite Last Line" },
    },
    {
        label: "PRINT_ABL",
        kind: 'Command',
        nlsDetail: { "ja": "キャラの能力を表示", "en": "Display Character's ABL" },
    },
    {
        label: "PRINT_TALENT",
        kind: 'Command',
        nlsDetail: { "ja": "キャラの素質を表示", "en": "Display Character's Talent" },
    },
    {
        label: "PRINT_MARK",
        kind: 'Command',
        nlsDetail: { "ja": "キャラの刻印を表示", "en": "Display Character's Stamp" },
    },
    {
        label: "PRINT_EXP",
        kind: 'Command',
        nlsDetail: { "ja": "キャラの経験を表示", "en": "Display Character's EXP" },
    },
    {
        label: "PRINT_PALAM",
        kind: 'Command',
        nlsDetail: { "ja": "キャラの調教中パラメータを表示", "en": "Display Character's PARAMS" },
    },
    {
        label: "PRINT_ITEM",
        kind: 'Command',
        nlsDetail: { "ja": "所持アイテムを表示", "en": "Display Possessed Items" },
    },
    {
        label: "PRINT_SHOPITEM",
        kind: 'Command',
        nlsDetail: { "ja": "販売アイテムを表示", "en": "Display Sales Items" },
    },
    {
        label: "UPCHECK",
        kind: 'Command',
        nlsDetail: { "ja": "調教中パラメータの変化を表示", "en": "Display changes in training parameters" },
    },
    {
        label: "DRAWLINE",
        kind: 'Command',
        nlsDetail: { "ja": "横線を表示", "en": "Show Line" },
    },
    {
        label: "CLEARLINE",
        kind: 'Command',
        nlsDetail: { "ja": "行を削除", "en": "Delete Line" },
    },
    {
        label: "PRINT_IMG",
        kind: 'Command',
        nlsDetail: { "ja": "画像を表示", "en": "Display IMG" },
    },
    {
        label: "PRINT_RECT",
        kind: 'Command',
        nlsDetail: { "ja": "矩形を表示", "en": "Display Rectangle" },
    },
    {
        label: "PRINT_SPACE",
        kind: 'Command',
        nlsDetail: { "ja": "空白を表示", "en": "Show Blank" },
    },
    {
        label: "SETCOLOR",
        kind: 'Command',
    },
    {
        label: "RESETCOLOR",
        kind: 'Command',
    },
    {
        label: "SETBGCOLOR",
        kind: 'Command',
    },
    {
        label: "RESETBGCOLOR",
        kind: 'Command',
    },
    {
        label: "SETCOLORBYNAME",
        kind: 'Command',
    },
    {
        label: "SETBGCOLORBYNAME",
        kind: 'Command',
    },
    {
        label: "GETCOLOR",
        kind: 'Command',
    },
    {
        label: "GETDEFCOLOR",
        kind: 'Command',
    },
    {
        label: "GETBGCOLOR",
        kind: 'Command',
    },
    {
        label: "GETDEFBGCOLOR",
        kind: 'Command',
    },
    {
        label: "GETFOCUSCOLOR",
        kind: 'Command',
    },
    {
        label: "FONTBOLD",
        kind: 'Command',
    },
    {
        label: "FONTITALIC",
        kind: 'Command',
    },
    {
        label: "FONTREGULAR",
        kind: 'Command',
    },
    {
        label: "FONTSTYLE",
        kind: 'Command',
    },
    {
        label: "GETSTYLE",
        kind: 'Command',
    },
    {
        label: "CHKFONT",
        kind: 'Command',
    },
    {
        label: "SETFONT",
        kind: 'Command',
    },
    {
        label: "GETFONT",
        kind: 'Command',
    },
    {
        label: "FORCEKANA",
        kind: 'Command',
    },
    {
        label: "ALIGNMENT",
        kind: 'Command',
    },
    {
        label: "CURRENTALIGN",
        kind: 'Command',
    },
    {
        label: "REDRAW",
        kind: 'Command',
    },
    {
        label: "CURRENTREDRAW",
        kind: 'Command',
    },
    {
        label: "PRINTCPERLINE",
        kind: 'Command',
    },
    {
        label: "LINEISEMPTY",
        kind: 'Command',
    },
    {
        label: "BARSTR",
        kind: 'Command',
    },
    {
        label: "MONEYSTR",
        kind: 'Command',
    },
    {
        label: "SKIPDISP",
        kind: 'Command',
    },
    {
        label: "ISSKIP",
        kind: 'Command',
    },
    {
        label: "MOUSESKIP",
        kind: 'Command',
    },
    {
        label: "TOUPPER",
        kind: 'Command',
    },
    {
        label: "TOLOWER",
        kind: 'Command',
    },
    {
        label: "TOHALF",
        kind: 'Command',
    },
    {
        label: "TOFULL",
        kind: 'Command',
    },
    {
        label: "TOSTR",
        kind: 'Command',
    },
    {
        label: "ISNUMERIC",
        kind: 'Command',
    },
    {
        label: "TOINT",
        kind: 'Command',
    },
    {
        label: "STRLEN",
        kind: 'Command',
    },
    {
        label: "STRLENU",
        kind: 'Command',
    },
    {
        label: "STRLENS",
        kind: 'Command',
    },
    {
        label: "STRLENSU",
        kind: 'Command',
    },
    {
        label: "STRLENFORM",
        kind: 'Command',
    },
    {
        label: "STRLENFORMU",
        kind: 'Command',
    },
    {
        label: "SUBSTRING",
        kind: 'Command',
    },
    {
        label: "SUBSTRINGU",
        kind: 'Command',
    },
    {
        label: "CHARATU",
        kind: 'Command',
    },
    {
        label: "STRFIND",
        kind: 'Command',
    },
    {
        label: "STRFINDU",
        kind: 'Command',
    },
    {
        label: "STRCOUNT",
        kind: 'Command',
    },
    {
        label: "SPLIT",
        kind: 'Command',
    },
    {
        label: "REPLACE",
        kind: 'Command',
    },
    {
        label: "ESCAPE",
        kind: 'Command',
    },
    {
        label: "UNICODE",
        kind: 'Command',
    },
    {
        label: "ENCODETOUNI",
        kind: 'Command',
    },
    {
        label: "POWER",
        kind: 'Command',
    },
    {
        label: "ABS",
        kind: 'Command',
    },
    {
        label: "SIGN",
        kind: 'Command',
    },
    {
        label: "SQRT",
        kind: 'Command',
    },
    {
        label: "GETBIT",
        kind: 'Command',
    },
    {
        label: "MAX",
        kind: 'Command',
    },
    {
        label: "MIN",
        kind: 'Command',
    },
    {
        label: "LIMIT",
        kind: 'Command',
    },
    {
        label: "INRANGE",
        kind: 'Command',
    },
    {
        label: "SETBIT",
        kind: 'Command',
    },
    {
        label: "CLEARBIT",
        kind: 'Command',
    },
    {
        label: "INVERTBIT",
        kind: 'Command',
    },
    {
        label: "ADDCHARA",
        kind: 'Command',
    },
    {
        label: "DELCHARA",
        kind: 'Command',
    },
    {
        label: "SWAPCHARA",
        kind: 'Command',
    },
    {
        label: "SORTCHARA",
        kind: 'Command',
    },
    {
        label: "GETCHARA",
        kind: 'Command',
    },
    {
        label: "ADDDEFCHARA",
        kind: 'Command',
    },
    {
        label: "ADDVOIDCHARA",
        kind: 'Command',
    },
    {
        label: "DELALLCHARA",
        kind: 'Command',
    },
    {
        label: "PICKUPCHARA",
        kind: 'Command',
    },
    {
        label: "EXISTCSV",
        kind: 'Command',
    },
    {
        label: "FINDCHARA",
        kind: 'Command',
    },
    {
        label: "FINDLASTCHARA",
        kind: 'Command',
    },
    {
        label: "COPYCHARA",
        kind: 'Command',
    },
    {
        label: "ADDCOPYCHARA",
        kind: 'Command',
    },
    {
        label: "VARSIZE",
        kind: 'Command',
    },
    {
        label: "RESETDATA",
        kind: 'Command',
    },
    {
        label: "RESETGLOBAL",
        kind: 'Command',
    },
    {
        label: "RESET_STAIN",
        kind: 'Command',
    },
    {
        label: "SWAP",
        kind: 'Command',
    },
    {
        label: "CSVNAME",
        kind: 'Command',
    },
    {
        label: "CSVCALLNAME",
        kind: 'Command',
    },
    {
        label: "CSVNICKNAME",
        kind: 'Command',
    },
    {
        label: "CSVMASTERNAME",
        kind: 'Command',
    },
    {
        label: "CSVBASE",
        kind: 'Command',
    },
    {
        label: "CSVCSTR",
        kind: 'Command',
    },
    {
        label: "CSVABL",
        kind: 'Command',
    },
    {
        label: "CSVTALENT",
        kind: 'Command',
    },
    {
        label: "CSVMARK",
        kind: 'Command',
    },
    {
        label: "CSVEXP",
        kind: 'Command',
    },
    {
        label: "CSVRELATION",
        kind: 'Command',
    },
    {
        label: "CSVJUEL",
        kind: 'Command',
    },
    {
        label: "CSVEQUIP",
        kind: 'Command',
    },
    {
        label: "CSVCFLAG",
        kind: 'Command',
    },
    {
        label: "GETNUM",
        kind: 'Command',
    },
    {
        label: "GETPALAMLV",
        kind: 'Command',
    },
    {
        label: "GETEXPLV",
        kind: 'Command',
    },
    {
        label: "FINDELEMENT",
        kind: 'Command',
    },
    {
        label: "FINDLASTELEMENT",
        kind: 'Command',
    },
    {
        label: "VARSET",
        kind: 'Command',
    },
    {
        label: "CVARSET",
        kind: 'Command',
    },
    {
        label: "ARRAYSHIFT",
        kind: 'Command',
    },
    {
        label: "ARRAYREMOVE",
        kind: 'Command',
    },
    {
        label: "ARRAYSORT",
        kind: 'Command',
    },
    {
        label: "ARRAYCOPY",
        kind: 'Command',
    },
    {
        label: "CUPCHECK",
        kind: 'Command',
    },
    {
        label: "SAVEDATA",
        kind: 'Command',
    },
    {
        label: "LOADDATA",
        kind: 'Command',
    },
    {
        label: "DELDATA",
        kind: 'Command',
    },
    {
        label: "CHKDATA",
        kind: 'Command',
    },
    {
        label: "SAVENOS",
        kind: 'Command',
    },
    {
        label: "SAVEGLOBAL",
        kind: 'Command',
    },
    {
        label: "LOADGLOBAL",
        kind: 'Command',
    },
    {
        label: "OUTPUTLOG",
        kind: 'Command',
    },
    {
        label: "SAVECHARA",
        kind: 'Command',
    },
    {
        label: "LOADCHARA",
        kind: 'Command',
    },
    {
        label: "CHKCHARADATA",
        kind: 'Command',
    },
    {
        label: "FIND_CHARADATA",
        kind: 'Command',
    },
    {
        label: "GETTIME",
        kind: 'Command',
    },
    {
        label: "GETMILLISECOND",
        kind: 'Command',
    },
    {
        label: "GETSECOND",
        kind: 'Command',
    },
    {
        label: "FORCEWAIT",
        kind: 'Command',
    },
    {
        label: "INPUT",
        kind: 'Command',
    },
    {
        label: "INPUTS",
        kind: 'Command',
    },
    {
        label: "TINPUT",
        kind: 'Command',
    },
    {
        label: "TINPUTS",
        kind: 'Command',
    },
    {
        label: "TWAIT",
        kind: 'Command',
    },
    {
        label: "ONEINPUT",
        kind: 'Command',
    },
    {
        label: "ONEINPUTS",
        kind: 'Command',
    },
    {
        label: "TONEINPUT",
        kind: 'Command',
    },
    {
        label: "TONEINPUTS",
        kind: 'Command',
    },
    {
        label: "WAITANYKEY",
        kind: 'Command',
    },
    {
        label: "BREAK",
        kind: 'Command',
    },
    {
        label: "CONTINUE",
        kind: 'Command',
    },
    {
        label: "RANDOMIZE",
        kind: 'Command',
    },
    {
        label: "DUMPRAND",
        kind: 'Command',
    },
    {
        label: "INITRAND",
        kind: 'Command',
    },
    {
        label: "BEGIN",
        kind: 'Command',
    },
    {
        label: "CALLTRAIN",
        kind: 'Command',
    },
    {
        label: "DOTRAIN",
        kind: 'Command',
    },
    {
        label: "THROW",
        kind: 'Command',
    },
    {
        label: "CALL",
        kind: 'Command',
    },
    {
        label: "JUMP",
        kind: 'Command',
    },
    {
        label: "GOTO",
        kind: 'Command',
    },
    {
        label: "CALLFORM",
        kind: 'Command',
    },
    {
        label: "JUMPFORM",
        kind: 'Command',
    },
    {
        label: "GOTOFORM",
        kind: 'Command',
    },
    {
        label: "TRYCALL",
        kind: 'Command',
    },
    {
        label: "TRYJUMP",
        kind: 'Command',
    },
    {
        label: "TRYGOTO",
        kind: 'Command',
    },
    {
        label: "TRYCALLFORM",
        kind: 'Command',
    },
    {
        label: "TRYJUMPFORM",
        kind: 'Command',
    },
    {
        label: "TRYGOTOFORM",
        kind: 'Command',
    },
    {
        label: "CALLF",
        kind: 'Command',
    },
    {
        label: "CALLFORMF",
        kind: 'Command',
    },
    {
        label: "CALLEVENT",
        kind: 'Command',
    },
    {
        label: "FUNC",
        kind: 'Command',
    },
    {
        label: "RETURN",
        kind: 'Command',
    },
    {
        label: "RETURNFORM",
        kind: 'Command',
    },
    {
        label: "RETURNF",
        kind: 'Command',
    },
    {
        label: "DEBUGPRINT",
        kind: 'Command',
    },
    {
        label: "DEBUGPRINTL",
        kind: 'Command',
    },
    {
        label: "DEBUGPRINTFORM",
        kind: 'Command',
    },
    {
        label: "DEBUGPRINTFORML",
        kind: 'Command',
    },
    {
        label: "DEBUGCLEAR",
        kind: 'Command',
    },
    {
        label: "ASSERT",
        kind: 'Command',
    },
    {
        label: "TOOLTIP_SETCOLOR",
        kind: 'Command',
    },
    {
        label: "TOOLTIP_SETDELAY",
        kind: 'Command',
    },
    {
        label: "HTML_PRINT",
        kind: 'Command',
    },
    {
        label: "HTML_TAGSPLIT",
        kind: 'Command',
    },
    {
        label: "CLEARTEXTBOX",
        kind: 'Command',
    },
    {
        label: "STOPCALLTRAIN",
        kind: 'Command',
    },
    {
        label: "TIMES",
        kind: 'Command',
    },
    {
        label: "BAR",
        kind: 'Command',
    },
    {
        label: "BARL",
        kind: 'Command',
    },
    {
        label: "PUTFORM",
        kind: 'Command',
    },
    {
        label: "SAVEGAME",
        kind: 'Command',
    },
    {
        label: "LOADGAME",
        kind: 'Command',
    },
    {
        label: "WAIT",
        kind: 'Command',
    },
    {
        label: "RESTART",
        kind: 'Command',
    },
    {
        label: "QUIT",
        kind: 'Command',
    },
    {
        label: "TOOLTIP_SETDURATION",
        kind: 'Command',
    },
    {
        label: "AWAIT",
        kind: 'Command',
    },
    {
        label: "STRJOIN",
        kind: 'Command',
    },
    {
        label: "GETKEY",
        kind: 'Command',
    },
    {
        label: "GETKEYTRIGGERED",
        kind: 'Command',
    },
    {
        label: "MOUSEX",
        kind: 'Command',
    },
    {
        label: "MOUSEY",
        kind: 'Command',
    },
    {
        label: "ISACTIVE",
        kind: 'Command',
    },
    {
        label: "SAVETEXT",
        kind: 'Command',
    },
    {
        label: "LOADTEXT",
        kind: 'Command',
    },
    {
        label: "SPRITECREATED",
        kind: 'Command',
    },
    {
        label: "SPRITEWIDTH",
        kind: 'Command',
    },
    {
        label: "SPRITEHEIGHT",
        kind: 'Command',
    },
    {
        label: "SPRITEPOSX",
        kind: 'Command',
    },
    {
        label: "SPRITEPOSY",
        kind: 'Command',
    },
    {
        label: "SPRITESETPOS",
        kind: 'Command',
    },
    {
        label: "SPRITEMOVE",
        kind: 'Command',
    },
    {
        label: "ARRAYMSORT",
        kind: 'Command',
    },
    {
        label: "GCREATED",
        kind: 'Command',
    },
    {
        label: "GWIDTH",
        kind: 'Command',
    },
    {
        label: "GHEIGHT",
        kind: 'Command',
    },
    {
        label: "GGETCOLOR",
        kind: 'Command',
    },
    {
        label: "GCREATE",
        kind: 'Command',
    },
    {
        label: "GCREATEFROMFILE",
        kind: 'Command',
    },
    {
        label: "GDISPOSE",
        kind: 'Command',
    },
    {
        label: "GCLEAR",
        kind: 'Command',
    },
    {
        label: "GFILLRECTANGLE",
        kind: 'Command',
    },
    {
        label: "GDRAWSPRITE",
        kind: 'Command',
    },
    {
        label: "GSETCOLOR",
        kind: 'Command',
    },
    {
        label: "GDRAWG",
        kind: 'Command',
    },
    {
        label: "GDRAWGWITHMASK",
        kind: 'Command',
    },
    {
        label: "GSETBRUSH",
        kind: 'Command',
    },
    {
        label: "GSETFONT",
        kind: 'Command',
    },
    {
        label: "GSETPEN",
        kind: 'Command',
    },
    {
        label: "GSAVE",
        kind: 'Command',
    },
    {
        label: "GLOAD",
        kind: 'Command',
    },
    {
        label: "SPRITECREATE",
        kind: 'Command',
    },
    {
        label: "SPRITEANIMECREATE",
        kind: 'Command',
    },
    {
        label: "SPRITEANIMEADDFRAME",
        kind: 'Command',
    },
    {
        label: "SPRITEDISPOSE",
        kind: 'Command',
    },
    {
        label: "SPRITEGETCOLOR",
        kind: 'Command',
    },
    {
        label: "CBGSETG",
        kind: 'Command',
    },
    {
        label: "CBGSETSPRITE",
        kind: 'Command',
    },
    {
        label: "CBGCLEAR",
        kind: 'Command',
    },
    {
        label: "CBGREMOVERANGE",
        kind: 'Command',
    },
    {
        label: "CBGSETBUTTONSPRITE",
        kind: 'Command',
    },
    {
        label: "CBGCLEARBUTTON",
        kind: 'Command',
    },
    {
        label: "CBGSETBMAPG",
        kind: 'Command',
    },
    {
        label: "CBGREMOVEBMAP",
        kind: 'Command',
    },
    {
        label: "INPUTMOUSEKEY",
        kind: 'Command',
    },
    {
        label: "SETANIMETIMER",
        kind: 'Command',
    },
    {
        label: "GETTIMES",
        kind: 'Command',
    },
    {
        label: "RAND",
        kind: 'Command',
    },
    {
        label: "CBRT",
        kind: 'Command',
    },
    {
        label: "LOG",
        kind: 'Command',
    },
    {
        label: "LOG10",
        kind: 'Command',
    },
    {
        label: "EXPONENT",
        kind: 'Command',
    },
    {
        label: "SUMARRAY",
        kind: 'Command',
    },
    {
        label: "MATCH",
        kind: 'Command',
    },
    {
        label: "MAXARRAY",
        kind: 'Command',
    },
    {
        label: "MINARRAY",
        kind: 'Command',
    },
    {
        label: "SUMCARRAY",
        kind: 'Command',
    },
    {
        label: "CMATCH",
        kind: 'Command',
    },
    {
        label: "MAXCARRAY",
        kind: 'Command',
    },
    {
        label: "MINCARRAY",
        kind: 'Command',
    },
    {
        label: "GROUPMATCH",
        kind: 'Command',
    },
    {
        label: "NOSAMES",
        kind: 'Command',
    },
    {
        label: "ALLSAMES",
        kind: 'Command',
    },
    {
        label: "MESSKIP",
        kind: 'Command',
    },
    {
        label: "CONVERT",
        kind: 'Command',
    },
    {
        label: "COLOR_FROMNAME",
        kind: 'Command',
    },
    {
        label: "COLOR_FROMRGB",
        kind: 'Command',
    },
    {
        label: "INRANGEARRAY",
        kind: 'Command',
    },
    {
        label: "INRANGECARRAY",
        kind: 'Command',
    },
    {
        label: "GETLINESTR",
        kind: 'Command',
    },
    {
        label: "PRINTCLENGTH",
        kind: 'Command',
    },
    {
        label: "STRFORM",
        kind: 'Command',
    },
    {
        label: "GETCONFIG",
        kind: 'Command',
    },
    {
        label: "GETCONFIGS",
        kind: 'Command',
    },
    {
        label: "HTML_POPPRINTINGSTR",
        kind: 'Command',
    },
    {
        label: "HTML_GETPRINTEDSTR",
        kind: 'Command',
    },
    {
        label: "HTML_ESCAPE",
        kind: 'Command',
    },
    {
        label: "HTML_TOPLAINTEXT",
        kind: 'Command',
    },
    {
        label: "CLIENTWIDTH",
        kind: 'Command',
    },
    {
        label: "CLIENTHEIGHT",
        kind: 'Command',
    },
    {
        label: "PRINTDATA",
        kind: 'Command',
    },
    {
        label: "PRINTDATAL",
        kind: 'Command',
    },
    {
        label: "PRINTDATAW",
        kind: 'Command',
    },
    {
        label: "PRINTDATAK",
        kind: 'Command',
    },
    {
        label: "PRINTDATAKL",
        kind: 'Command',
    },
    {
        label: "PRINTDATAKW",
        kind: 'Command',
    },
    {
        label: "PRINTDATAD",
        kind: 'Command',
    },
    {
        label: "PRINTDATADL",
        kind: 'Command',
    },
    {
        label: "PRINTDATADW",
        kind: 'Command',
    },
    {
        label: "STRDATA",
        kind: 'Command',
    },
    {
        label: "ENDDATA",
        kind: 'Command',
    },
    {
        label: "DATALIST",
        kind: 'Command',
    },
    {
        label: "ENDLIST",
        kind: 'Command',
    },
    {
        label: "NOSKIP",
        kind: 'Command',
    },
    {
        label: "ENDNOSKIP",
        kind: 'Command',
    },
    {
        label: "SIF",
        kind: 'Command',
    },
    {
        label: "IF",
        kind: 'Command',
    },
    {
        label: "ELSEIF",
        kind: 'Command',
    },
    {
        label: "ELSE",
        kind: 'Command',
    },
    {
        label: "ENDIF",
        kind: 'Command',
    },
    {
        label: "REPEAT",
        kind: 'Command',
    },
    {
        label: "REND",
        kind: 'Command',
    },
    {
        label: "FOR",
        kind: 'Command',
    },
    {
        label: "NEXT",
        kind: 'Command',
    },
    {
        label: "WHILE",
        kind: 'Command',
    },
    {
        label: "WEND",
        kind: 'Command',
    },
    {
        label: "DO",
        kind: 'Command',
    },
    {
        label: "LOOP",
        kind: 'Command',
    },
    {
        label: "SELECTCASE",
        kind: 'Command',
    },
    {
        label: "CASE",
        kind: 'Command',
    },
    {
        label: "IS",
        kind: 'Command',
    },
    {
        label: "TO",
        kind: 'Command',
    },
    {
        label: "CASEELSE",
        kind: 'Command',
    },
    {
        label: "ENDSELECT",
        kind: 'Command',
    },
    {
        label: "TRYCJUMP",
        kind: 'Command',
    },
    {
        label: "TRYCCALL",
        kind: 'Command',
    },
    {
        label: "TRYCGOTO",
        kind: 'Command',
    },
    {
        label: "TRYCJUMPFORM",
        kind: 'Command',
    },
    {
        label: "TRYCCALLFORM",
        kind: 'Command',
    },
    {
        label: "TRYCGOTOFORM",
        kind: 'Command',
    },
    {
        label: "CATCH",
        kind: 'Command',
    },
    {
        label: "ENDCATCH",
        kind: 'Command',
    },
    {
        label: "TRYCALLLIST",
        kind: 'Command',
    },
    {
        label: "TRYJUMPLIST",
        kind: 'Command',
    },
    {
        label: "TRYGOTOLIST",
        kind: 'Command',
    },
    {
        label: "ENDFUNC",
        kind: 'Command',
    },
    {
        label: "#DIM",
        kind: 'Command',
    },
    {
        label: "#DIMS",
        kind: 'Command',
    },
    {
        label: "#SINGLE",
        kind: 'Command',
    },
    {
        label: "#PRI",
        kind: 'Command',
    },
    {
        label: "#LATER",
        kind: 'Command',
    },
    {
        label: "#ONLY",
        kind: 'Command',
    },
    {
        label: "#FUNCTION",
        kind: 'Command',
    },
    {
        label: "#FUNCTIONS",
        kind: 'Command',
    },
    {
        label: "#LOCALSIZE",
        kind: 'Command',
    },
    {
        label: "#LOCALSSIZE",
        kind: 'Command',
    },
    {
        label: "#DEFINE",
        kind: 'Command',
    },
    {
        label: "IF_DEBUG",
        kind: 'Command',
    },
    {
        label: "IF_NDEBUG",
        kind: 'Command',
    },
    {
        label: "SKIPSTART",
        kind: 'Command',
    },
    {
        label: "SKIPEND",
        kind: 'Command',
    },
    {
        label: "SAVEDATA",
        kind: 'Command',
    },
    {
        label: "CHARADATA",
        kind: 'Command',
    },
    {
        label: "GLOBAL",
        kind: 'Command',
    },
    {
        label: "DYNAMIC",
        kind: 'Command',
    },
    {
        label: "STATIC",
        kind: 'Command',
    },
    {
        label: "CONST",
        kind: 'Command',
    },
    {
        label: "REF",
        kind: 'Command',
    },
    {
        label: "SHOP",
        kind: 'Command',
    },
    {
        label: "TRAIN",
        kind: 'Command',
    },
    {
        label: "ABLUP",
        kind: 'Command',
    },
    {
        label: "AFTERTRAIN",
        kind: 'Command',
    },
    {
        label: "TURNEND",
        kind: 'Command',
    },
    {
        label: "FIRST",
        kind: 'Command',
    },
    {
        label: "TITLE",
        kind: 'Command',
    },
    {
        label: "LEFT",
        kind: 'Command',
    },
    {
        label: "CENTER",
        kind: 'Command',
    },
    {
        label: "RIGHT",
        kind: 'Command',
    },
    {
        label: "FORWARD",
        kind: 'Command',
    },
    {
        label: "BACK",
        kind: 'Command',
    },
    {
        label: "DAY",
        kind: 'Command',
    },
    {
        label: "MONEY",
        kind: 'Command',
    },
    {
        label: "ITEM",
        kind: 'Command',
    },
    {
        label: "FLAG",
        kind: 'Command',
    },
    {
        label: "TFLAG",
        kind: 'Command',
    },
    {
        label: "UP",
        kind: 'Command',
    },
    {
        label: "PALAMLV",
        kind: 'Command',
    },
    {
        label: "EXPLV",
        kind: 'Command',
    },
    {
        label: "EJAC",
        kind: 'Command',
    },
    {
        label: "DOWN",
        kind: 'Command',
    },
    {
        label: "RESULT",
        kind: 'Command',
    },
    {
        label: "COUNT",
        kind: 'Command',
    },
    {
        label: "TARGET",
        kind: 'Command',
    },
    {
        label: "ASSI",
        kind: 'Command',
    },
    {
        label: "MASTER",
        kind: 'Command',
    },
    {
        label: "NOITEM",
        kind: 'Command',
    },
    {
        label: "LOSEBASE",
        kind: 'Command',
    },
    {
        label: "SELECTCOM",
        kind: 'Command',
    },
    {
        label: "ASSIPLAY",
        kind: 'Command',
    },
    {
        label: "PREVCOM",
        kind: 'Command',
    },
    {
        label: "TIME",
        kind: 'Command',
    },
    {
        label: "ITEMSALES",
        kind: 'Command',
    },
    {
        label: "PLAYER",
        kind: 'Command',
    },
    {
        label: "NEXTCOM",
        kind: 'Command',
    },
    {
        label: "PBAND",
        kind: 'Command',
    },
    {
        label: "BOUGHT",
        kind: 'Command',
    },
    {
        label: "A",
        kind: 'Command',
    },
    {
        label: "B",
        kind: 'Command',
    },
    {
        label: "C",
        kind: 'Command',
    },
    {
        label: "D",
        kind: 'Command',
    },
    {
        label: "E",
        kind: 'Command',
    },
    {
        label: "F",
        kind: 'Command',
    },
    {
        label: "G",
        kind: 'Command',
    },
    {
        label: "H",
        kind: 'Command',
    },
    {
        label: "I",
        kind: 'Command',
    },
    {
        label: "J",
        kind: 'Command',
    },
    {
        label: "K",
        kind: 'Command',
    },
    {
        label: "L",
        kind: 'Command',
    },
    {
        label: "M",
        kind: 'Command',
    },
    {
        label: "N",
        kind: 'Command',
    },
    {
        label: "O",
        kind: 'Command',
    },
    {
        label: "P",
        kind: 'Command',
    },
    {
        label: "Q",
        kind: 'Command',
    },
    {
        label: "R",
        kind: 'Command',
    },
    {
        label: "S",
        kind: 'Command',
    },
    {
        label: "T",
        kind: 'Command',
    },
    {
        label: "U",
        kind: 'Command',
    },
    {
        label: "V",
        kind: 'Command',
    },
    {
        label: "W",
        kind: 'Command',
    },
    {
        label: "X",
        kind: 'Command',
    },
    {
        label: "Y",
        kind: 'Command',
    },
    {
        label: "Z",
        kind: 'Command',
    },
    {
        label: "GLOBAL",
        kind: 'Command',
    },
    {
        label: "RANDDATA",
        kind: 'Command',
    },
    {
        label: "SAVESTR",
        kind: 'Command',
    },
    {
        label: "TSTR",
        kind: 'Command',
    },
    {
        label: "STR",
        kind: 'Command',
    },
    {
        label: "RESULTS",
        kind: 'Command',
    },
    {
        label: "GLOBALS",
        kind: 'Command',
    },
    {
        label: "SAVEDATA_TEXT",
        kind: 'Command',
    },
    {
        label: "ISASSI",
        kind: 'Command',
    },
    {
        label: "NO",
        kind: 'Command',
    },
    {
        label: "BASE",
        kind: 'Command',
    },
    {
        label: "MAXBASE",
        kind: 'Command',
    },
    {
        label: "ABL",
        kind: 'Command',
    },
    {
        label: "TALENT",
        kind: 'Command',
    },
    {
        label: "EXP",
        kind: 'Command',
    },
    {
        label: "MARK",
        kind: 'Command',
    },
    {
        label: "PALAM",
        kind: 'Command',
    },
    {
        label: "SOURCE",
        kind: 'Command',
    },
    {
        label: "EX",
        kind: 'Command',
    },
    {
        label: "CFLAG",
        kind: 'Command',
    },
    {
        label: "JUEL",
        kind: 'Command',
    },
    {
        label: "RELATION",
        kind: 'Command',
    },
    {
        label: "EQUIP",
        kind: 'Command',
    },
    {
        label: "TEQUIP",
        kind: 'Command',
    },
    {
        label: "STAIN",
        kind: 'Command',
    },
    {
        label: "GOTJUEL",
        kind: 'Command',
    },
    {
        label: "NOWEX",
        kind: 'Command',
    },
    {
        label: "DOWNBASE",
        kind: 'Command',
    },
    {
        label: "CUP",
        kind: 'Command',
    },
    {
        label: "CDOWN",
        kind: 'Command',
    },
    {
        label: "TCVAR",
        kind: 'Command',
    },
    {
        label: "NAME",
        kind: 'Command',
    },
    {
        label: "CALLNAME",
        kind: 'Command',
    },
    {
        label: "NICKNAME",
        kind: 'Command',
    },
    {
        label: "MASTERNAME",
        kind: 'Command',
    },
    {
        label: "CSTR",
        kind: 'Command',
    },
    {
        label: "CDFLAG",
        kind: 'Command',
    },
    {
        label: "DITEMTYPE",
        kind: 'Command',
    },
    {
        label: "DA",
        kind: 'Command',
    },
    {
        label: "DB",
        kind: 'Command',
    },
    {
        label: "DC",
        kind: 'Command',
    },
    {
        label: "DD",
        kind: 'Command',
    },
    {
        label: "DE",
        kind: 'Command',
    },
    {
        label: "TA",
        kind: 'Command',
    },
    {
        label: "TB",
        kind: 'Command',
    },
    {
        label: "ITEMPRICE",
        kind: 'Command',
    },
    {
        label: "ABLNAME",
        kind: 'Command',
    },
    {
        label: "TALENTNAME",
        kind: 'Command',
    },
    {
        label: "EXPNAME",
        kind: 'Command',
    },
    {
        label: "MARKNAME",
        kind: 'Command',
    },
    {
        label: "PALAMNAME",
        kind: 'Command',
    },
    {
        label: "ITEMNAME",
        kind: 'Command',
    },
    {
        label: "TRAINNAME",
        kind: 'Command',
    },
    {
        label: "BASENAME",
        kind: 'Command',
    },
    {
        label: "SOURCENAME",
        kind: 'Command',
    },
    {
        label: "EXNAME",
        kind: 'Command',
    },
    {
        label: "EQUIPNAME",
        kind: 'Command',
    },
    {
        label: "TEQUIPNAME",
        kind: 'Command',
    },
    {
        label: "FLAGNAME",
        kind: 'Command',
    },
    {
        label: "TFLAGNAME",
        kind: 'Command',
    },
    {
        label: "CFLAGNAME",
        kind: 'Command',
    },
    {
        label: "TCVARNAME",
        kind: 'Command',
    },
    {
        label: "CSTRNAME",
        kind: 'Command',
    },
    {
        label: "STAINNAME",
        kind: 'Command',
    },
    {
        label: "CDFLAGNAME1",
        kind: 'Command',
    },
    {
        label: "CDFLAGNAME2",
        kind: 'Command',
    },
    {
        label: "STRNAME",
        kind: 'Command',
    },
    {
        label: "TSTRNAME",
        kind: 'Command',
    },
    {
        label: "SAVESTRNAME",
        kind: 'Command',
    },
    {
        label: "GLOBALNAME",
        kind: 'Command',
    },
    {
        label: "GLOBALSNAME",
        kind: 'Command',
    },
    {
        label: "GAMEBASE_AUTHER",
        kind: 'Command',
    },
    {
        label: "GAMEBASE_AUTHOR",
        kind: 'Command',
    },
    {
        label: "GAMEBASE_INFO",
        kind: 'Command',
    },
    {
        label: "GAMEBASE_YEAR",
        kind: 'Command',
    },
    {
        label: "GAMEBASE_TITLE",
        kind: 'Command',
    },
    {
        label: "GAMEBASE_GAMECODE",
        kind: 'Command',
    },
    {
        label: "GAMEBASE_VERSION",
        kind: 'Command',
    },
    {
        label: "GAMEBASE_ALLOWVERSION",
        kind: 'Command',
    },
    {
        label: "GAMEBASE_DEFAULTCHARA",
        kind: 'Command',
    },
    {
        label: "GAMEBASE_NOITEM",
        kind: 'Command',
    },
    {
        label: "RAND",
        kind: 'Command',
    },
    {
        label: "CHARANUM",
        kind: 'Command',
    },
    {
        label: "LASTLOAD_TEXT",
        kind: 'Command',
    },
    {
        label: "LASTLOAD_VERSION",
        kind: 'Command',
    },
    {
        label: "LASTLOAD_NO",
        kind: 'Command',
    },
    {
        label: "LINECOUNT",
        kind: 'Command',
    },
    {
        label: "ISTIMEOUT",
        kind: 'Command',
    },
    {
        label: "__INT_MAX__",
        kind: 'Command',
    },
    {
        label: "__INT_MIN__",
        kind: 'Command',
    },
    {
        label: "EMUERA_VERSION",
        kind: 'Command',
    },
    {
        label: "WINDOW_TITLE",
        kind: 'Command',
    },
    {
        label: "MONEYLABEL",
        kind: 'Command',
    },
    {
        label: "DRAWLINESTR",
        kind: 'Command',
    },
    {
        label: "__FILE__",
        kind: 'Command',
    },
    {
        label: "__FUNCTION__",
        kind: 'Command',
    },
    {
        label: "__LINE__",
        kind: 'Command',
    },
    {
        label: "LOCAL",
        kind: 'Command',
    },
    {
        label: "ARG",
        kind: 'Command',
    },
    {
        label: "LOCALS",
        kind: 'Command',
    },
    {
        label: "ARGS",
        kind: 'Command',
    },
]
b = [{label:'PRINT',detail:{'zh-CN':{short:'输出',long:'输出-溢出后自动换行-跟随SetColor'}}},
{label:'PRINTL',detail:{'zh-CN':{short:'输出',long:'输出-溢出后自动换行-跟随SetColor-换行'}}},
{label:'PRINTW',detail:{'zh-CN':{short:'输出',long:'输出-溢出后自动换行-跟随SetColor-换行后等待'}}},
{label:'PRINTK',detail:{'zh-CN':{short:'输出',long:'输出-溢出后自动换行-跟随ForceKana'}}},
{label:'PRINTKL',detail:{'zh-CN':{short:'输出',long:'输出-溢出后自动换行-跟随ForceKana-换行'}}},
{label:'PRINTKW',detail:{'zh-CN':{short:'输出',long:'输出-溢出后自动换行-跟随ForceKana-换行后等待'}}},
{label:'PRINTD',detail:{'zh-CN':{short:'输出',long:'输出-溢出后自动换行-忽略SetColor'}}},
{label:'PRINTDL',detail:{'zh-CN':{short:'输出',long:'输出-溢出后自动换行-忽略SetColor-换行'}}},
{label:'PRINTDW',detail:{'zh-CN':{short:'输出',long:'输出-溢出后自动换行-忽略SetColor-换行后等待'}}},
{label:'PRINTLC',detail:{'zh-CN':{short:'输出',long:'输出-溢出后自动换行-左对齐-跟随SetColor'}}},
{label:'PRINTLCW',detail:{'zh-CN':{short:'输出',long:'输出-溢出后自动换行-左对齐-跟随SetColor-换行后等待'}}},
{label:'PRINTLCK',detail:{'zh-CN':{short:'输出',long:'输出-溢出后自动换行-左对齐-跟随ForceKana'}}},
{label:'PRINTLCKW',detail:{'zh-CN':{short:'输出',long:'输出-溢出后自动换行-左对齐-跟随ForceKana-换行后等待'}}},
{label:'PRINTLCD',detail:{'zh-CN':{short:'输出',long:'输出-溢出后自动换行-左对齐-忽略SetColor'}}},
{label:'PRINTLCDW',detail:{'zh-CN':{short:'输出',long:'输出-溢出后自动换行-左对齐-忽略SetColor-换行后等待'}}},
{label:'PRINTC',detail:{'zh-CN':{short:'输出',long:'输出-溢出后自动换行-右对齐-跟随SetColor'}}},
{label:'PRINTCW',detail:{'zh-CN':{short:'输出',long:'输出-溢出后自动换行-右对齐-跟随SetColor-换行后等待'}}},
{label:'PRINTCK',detail:{'zh-CN':{short:'输出',long:'输出-溢出后自动换行-右对齐-跟随ForceKana'}}},
{label:'PRINTCKW',detail:{'zh-CN':{short:'输出',long:'输出-溢出后自动换行-右对齐-跟随ForceKana-换行后等待'}}},
{label:'PRINTCD',detail:{'zh-CN':{short:'输出',long:'输出-溢出后自动换行-右对齐-忽略SetColor'}}},
{label:'PRINTCDW',detail:{'zh-CN':{short:'输出',long:'输出-溢出后自动换行-右对齐-忽略SetColor-换行后等待'}}},
{label:'PRINTV',detail:{'zh-CN':{short:'输出',long:'输出-溢出后自动换行-数值表达式-跟随SetColor'}}},
{label:'PRINTVL',detail:{'zh-CN':{short:'输出',long:'输出-溢出后自动换行-数值表达式-跟随SetColor-换行'}}},
{label:'PRINTVW',detail:{'zh-CN':{short:'输出',long:'输出-溢出后自动换行-数值表达式-跟随SetColor-换行后等待'}}},
{label:'PRINTVK',detail:{'zh-CN':{short:'输出',long:'输出-溢出后自动换行-数值表达式-跟随ForceKana'}}},
{label:'PRINTVKL',detail:{'zh-CN':{short:'输出',long:'输出-溢出后自动换行-数值表达式-跟随ForceKana-换行'}}},
{label:'PRINTVKW',detail:{'zh-CN':{short:'输出',long:'输出-溢出后自动换行-数值表达式-跟随ForceKana-换行后等待'}}},
{label:'PRINTVD',detail:{'zh-CN':{short:'输出',long:'输出-溢出后自动换行-数值表达式-忽略SetColor'}}},
{label:'PRINTVDL',detail:{'zh-CN':{short:'输出',long:'输出-溢出后自动换行-数值表达式-忽略SetColor-换行'}}},
{label:'PRINTVDW',detail:{'zh-CN':{short:'输出',long:'输出-溢出后自动换行-数值表达式-忽略SetColor-换行后等待'}}},
{label:'PRINTVLC',detail:{'zh-CN':{short:'输出',long:'输出-溢出后自动换行-数值表达式-左对齐-跟随SetColor'}}},
{label:'PRINTVLCW',detail:{'zh-CN':{short:'输出',long:'输出-溢出后自动换行-数值表达式-左对齐-跟随SetColor-换行后等待'}}},
{label:'PRINTVLCK',detail:{'zh-CN':{short:'输出',long:'输出-溢出后自动换行-数值表达式-左对齐-跟随ForceKana'}}},
{label:'PRINTVLCKW',detail:{'zh-CN':{short:'输出',long:'输出-溢出后自动换行-数值表达式-左对齐-跟随ForceKana-换行后等待'}}},
{label:'PRINTVLCD',detail:{'zh-CN':{short:'输出',long:'输出-溢出后自动换行-数值表达式-左对齐-忽略SetColor'}}},
{label:'PRINTVLCDW',detail:{'zh-CN':{short:'输出',long:'输出-溢出后自动换行-数值表达式-左对齐-忽略SetColor-换行后等待'}}},
{label:'PRINTVC',detail:{'zh-CN':{short:'输出',long:'输出-溢出后自动换行-数值表达式-右对齐-跟随SetColor'}}},
{label:'PRINTVCW',detail:{'zh-CN':{short:'输出',long:'输出-溢出后自动换行-数值表达式-右对齐-跟随SetColor-换行后等待'}}},
{label:'PRINTVCK',detail:{'zh-CN':{short:'输出',long:'输出-溢出后自动换行-数值表达式-右对齐-跟随ForceKana'}}},
{label:'PRINTVCKW',detail:{'zh-CN':{short:'输出',long:'输出-溢出后自动换行-数值表达式-右对齐-跟随ForceKana-换行后等待'}}},
{label:'PRINTVCD',detail:{'zh-CN':{short:'输出',long:'输出-溢出后自动换行-数值表达式-右对齐-忽略SetColor'}}},
{label:'PRINTVCDW',detail:{'zh-CN':{short:'输出',long:'输出-溢出后自动换行-数值表达式-右对齐-忽略SetColor-换行后等待'}}},
{label:'PRINTS',detail:{'zh-CN':{short:'输出',long:'输出-溢出后自动换行-字符串表达式-跟随SetColor'}}},
{label:'PRINTSL',detail:{'zh-CN':{short:'输出',long:'输出-溢出后自动换行-字符串表达式-跟随SetColor-换行'}}},
{label:'PRINTSW',detail:{'zh-CN':{short:'输出',long:'输出-溢出后自动换行-字符串表达式-跟随SetColor-换行后等待'}}},
{label:'PRINTSK',detail:{'zh-CN':{short:'输出',long:'输出-溢出后自动换行-字符串表达式-跟随ForceKana'}}},
{label:'PRINTSKL',detail:{'zh-CN':{short:'输出',long:'输出-溢出后自动换行-字符串表达式-跟随ForceKana-换行'}}},
{label:'PRINTSKW',detail:{'zh-CN':{short:'输出',long:'输出-溢出后自动换行-字符串表达式-跟随ForceKana-换行后等待'}}},
{label:'PRINTSD',detail:{'zh-CN':{short:'输出',long:'输出-溢出后自动换行-字符串表达式-忽略SetColor'}}},
{label:'PRINTSDL',detail:{'zh-CN':{short:'输出',long:'输出-溢出后自动换行-字符串表达式-忽略SetColor-换行'}}},
{label:'PRINTSDW',detail:{'zh-CN':{short:'输出',long:'输出-溢出后自动换行-字符串表达式-忽略SetColor-换行后等待'}}},
{label:'PRINTSLC',detail:{'zh-CN':{short:'输出',long:'输出-溢出后自动换行-字符串表达式-左对齐-跟随SetColor'}}},
{label:'PRINTSLCW',detail:{'zh-CN':{short:'输出',long:'输出-溢出后自动换行-字符串表达式-左对齐-跟随SetColor-换行后等待'}}},
{label:'PRINTSLCK',detail:{'zh-CN':{short:'输出',long:'输出-溢出后自动换行-字符串表达式-左对齐-跟随ForceKana'}}},
{label:'PRINTSLCKW',detail:{'zh-CN':{short:'输出',long:'输出-溢出后自动换行-字符串表达式-左对齐-跟随ForceKana-换行后等待'}}},
{label:'PRINTSLCD',detail:{'zh-CN':{short:'输出',long:'输出-溢出后自动换行-字符串表达式-左对齐-忽略SetColor'}}},
{label:'PRINTSLCDW',detail:{'zh-CN':{short:'输出',long:'输出-溢出后自动换行-字符串表达式-左对齐-忽略SetColor-换行后等待'}}},
{label:'PRINTSC',detail:{'zh-CN':{short:'输出',long:'输出-溢出后自动换行-字符串表达式-右对齐-跟随SetColor'}}},
{label:'PRINTSCW',detail:{'zh-CN':{short:'输出',long:'输出-溢出后自动换行-字符串表达式-右对齐-跟随SetColor-换行后等待'}}},
{label:'PRINTSCK',detail:{'zh-CN':{short:'输出',long:'输出-溢出后自动换行-字符串表达式-右对齐-跟随ForceKana'}}},
{label:'PRINTSCKW',detail:{'zh-CN':{short:'输出',long:'输出-溢出后自动换行-字符串表达式-右对齐-跟随ForceKana-换行后等待'}}},
{label:'PRINTSCD',detail:{'zh-CN':{short:'输出',long:'输出-溢出后自动换行-字符串表达式-右对齐-忽略SetColor'}}},
{label:'PRINTSCDW',detail:{'zh-CN':{short:'输出',long:'输出-溢出后自动换行-字符串表达式-右对齐-忽略SetColor-换行后等待'}}},
{label:'PRINTFORM',detail:{'zh-CN':{short:'输出',long:'输出-溢出后自动换行-格式化字符串-跟随SetColor'}}},
{label:'PRINTFORML',detail:{'zh-CN':{short:'输出',long:'输出-溢出后自动换行-格式化字符串-跟随SetColor-换行'}}},
{label:'PRINTFORMW',detail:{'zh-CN':{short:'输出',long:'输出-溢出后自动换行-格式化字符串-跟随SetColor-换行后等待'}}},
{label:'PRINTFORMK',detail:{'zh-CN':{short:'输出',long:'输出-溢出后自动换行-格式化字符串-跟随ForceKana'}}},
{label:'PRINTFORMKL',detail:{'zh-CN':{short:'输出',long:'输出-溢出后自动换行-格式化字符串-跟随ForceKana-换行'}}},
{label:'PRINTFORMKW',detail:{'zh-CN':{short:'输出',long:'输出-溢出后自动换行-格式化字符串-跟随ForceKana-换行后等待'}}},
{label:'PRINTFORMD',detail:{'zh-CN':{short:'输出',long:'输出-溢出后自动换行-格式化字符串-忽略SetColor'}}},
{label:'PRINTFORMDL',detail:{'zh-CN':{short:'输出',long:'输出-溢出后自动换行-格式化字符串-忽略SetColor-换行'}}},
{label:'PRINTFORMDW',detail:{'zh-CN':{short:'输出',long:'输出-溢出后自动换行-格式化字符串-忽略SetColor-换行后等待'}}},
{label:'PRINTFORMLC',detail:{'zh-CN':{short:'输出',long:'输出-溢出后自动换行-格式化字符串-左对齐-跟随SetColor'}}},
{label:'PRINTFORMLCW',detail:{'zh-CN':{short:'输出',long:'输出-溢出后自动换行-格式化字符串-左对齐-跟随SetColor-换行后等待'}}},
{label:'PRINTFORMLCK',detail:{'zh-CN':{short:'输出',long:'输出-溢出后自动换行-格式化字符串-左对齐-跟随ForceKana'}}},
{label:'PRINTFORMLCKW',detail:{'zh-CN':{short:'输出',long:'输出-溢出后自动换行-格式化字符串-左对齐-跟随ForceKana-换行后等待'}}},
{label:'PRINTFORMLCD',detail:{'zh-CN':{short:'输出',long:'输出-溢出后自动换行-格式化字符串-左对齐-忽略SetColor'}}},
{label:'PRINTFORMLCDW',detail:{'zh-CN':{short:'输出',long:'输出-溢出后自动换行-格式化字符串-左对齐-忽略SetColor-换行后等待'}}},
{label:'PRINTFORMC',detail:{'zh-CN':{short:'输出',long:'输出-溢出后自动换行-格式化字符串-右对齐-跟随SetColor'}}},
{label:'PRINTFORMCW',detail:{'zh-CN':{short:'输出',long:'输出-溢出后自动换行-格式化字符串-右对齐-跟随SetColor-换行后等待'}}},
{label:'PRINTFORMCK',detail:{'zh-CN':{short:'输出',long:'输出-溢出后自动换行-格式化字符串-右对齐-跟随ForceKana'}}},
{label:'PRINTFORMCKW',detail:{'zh-CN':{short:'输出',long:'输出-溢出后自动换行-格式化字符串-右对齐-跟随ForceKana-换行后等待'}}},
{label:'PRINTFORMCD',detail:{'zh-CN':{short:'输出',long:'输出-溢出后自动换行-格式化字符串-右对齐-忽略SetColor'}}},
{label:'PRINTFORMCDW',detail:{'zh-CN':{short:'输出',long:'输出-溢出后自动换行-格式化字符串-右对齐-忽略SetColor-换行后等待'}}},
{label:'PRINTFORMS',detail:{'zh-CN':{short:'输出',long:'输出-溢出后自动换行-格式化字符串表达式-跟随SetColor'}}},
{label:'PRINTFORMSL',detail:{'zh-CN':{short:'输出',long:'输出-溢出后自动换行-格式化字符串表达式-跟随SetColor-换行'}}},
{label:'PRINTFORMSW',detail:{'zh-CN':{short:'输出',long:'输出-溢出后自动换行-格式化字符串表达式-跟随SetColor-换行后等待'}}},
{label:'PRINTFORMSK',detail:{'zh-CN':{short:'输出',long:'输出-溢出后自动换行-格式化字符串表达式-跟随ForceKana'}}},
{label:'PRINTFORMSKL',detail:{'zh-CN':{short:'输出',long:'输出-溢出后自动换行-格式化字符串表达式-跟随ForceKana-换行'}}},
{label:'PRINTFORMSKW',detail:{'zh-CN':{short:'输出',long:'输出-溢出后自动换行-格式化字符串表达式-跟随ForceKana-换行后等待'}}},
{label:'PRINTFORMSD',detail:{'zh-CN':{short:'输出',long:'输出-溢出后自动换行-格式化字符串表达式-忽略SetColor'}}},
{label:'PRINTFORMSDL',detail:{'zh-CN':{short:'输出',long:'输出-溢出后自动换行-格式化字符串表达式-忽略SetColor-换行'}}},
{label:'PRINTFORMSDW',detail:{'zh-CN':{short:'输出',long:'输出-溢出后自动换行-格式化字符串表达式-忽略SetColor-换行后等待'}}},
{label:'PRINTFORMSLC',detail:{'zh-CN':{short:'输出',long:'输出-溢出后自动换行-格式化字符串表达式-左对齐-跟随SetColor'}}},
{label:'PRINTFORMSLCW',detail:{'zh-CN':{short:'输出',long:'输出-溢出后自动换行-格式化字符串表达式-左对齐-跟随SetColor-换行后等待'}}},
{label:'PRINTFORMSLCK',detail:{'zh-CN':{short:'输出',long:'输出-溢出后自动换行-格式化字符串表达式-左对齐-跟随ForceKana'}}},
{label:'PRINTFORMSLCKW',detail:{'zh-CN':{short:'输出',long:'输出-溢出后自动换行-格式化字符串表达式-左对齐-跟随ForceKana-换行后等待'}}},
{label:'PRINTFORMSLCD',detail:{'zh-CN':{short:'输出',long:'输出-溢出后自动换行-格式化字符串表达式-左对齐-忽略SetColor'}}},
{label:'PRINTFORMSLCDW',detail:{'zh-CN':{short:'输出',long:'输出-溢出后自动换行-格式化字符串表达式-左对齐-忽略SetColor-换行后等待'}}},
{label:'PRINTFORMSC',detail:{'zh-CN':{short:'输出',long:'输出-溢出后自动换行-格式化字符串表达式-右对齐-跟随SetColor'}}},
{label:'PRINTFORMSCW',detail:{'zh-CN':{short:'输出',long:'输出-溢出后自动换行-格式化字符串表达式-右对齐-跟随SetColor-换行后等待'}}},
{label:'PRINTFORMSCK',detail:{'zh-CN':{short:'输出',long:'输出-溢出后自动换行-格式化字符串表达式-右对齐-跟随ForceKana'}}},
{label:'PRINTFORMSCKW',detail:{'zh-CN':{short:'输出',long:'输出-溢出后自动换行-格式化字符串表达式-右对齐-跟随ForceKana-换行后等待'}}},
{label:'PRINTFORMSCD',detail:{'zh-CN':{short:'输出',long:'输出-溢出后自动换行-格式化字符串表达式-右对齐-忽略SetColor'}}},
{label:'PRINTFORMSCDW',detail:{'zh-CN':{short:'输出',long:'输出-溢出后自动换行-格式化字符串表达式-右对齐-忽略SetColor-换行后等待'}}},
{label:'PRINTSINGLE',detail:{'zh-CN':{short:'输出',long:'输出-溢出后不换行-跟随SetColor'}}},
{label:'PRINTSINGLEW',detail:{'zh-CN':{short:'输出',long:'输出-溢出后不换行-跟随SetColor-换行后等待'}}},
{label:'PRINTSINGLEK',detail:{'zh-CN':{short:'输出',long:'输出-溢出后不换行-跟随ForceKana'}}},
{label:'PRINTSINGLEKW',detail:{'zh-CN':{short:'输出',long:'输出-溢出后不换行-跟随ForceKana-换行后等待'}}},
{label:'PRINTSINGLED',detail:{'zh-CN':{short:'输出',long:'输出-溢出后不换行-忽略SetColor'}}},
{label:'PRINTSINGLEDW',detail:{'zh-CN':{short:'输出',long:'输出-溢出后不换行-忽略SetColor-换行后等待'}}},
{label:'PRINTSINGLELC',detail:{'zh-CN':{short:'输出',long:'输出-溢出后不换行-左对齐-跟随SetColor'}}},
{label:'PRINTSINGLELCW',detail:{'zh-CN':{short:'输出',long:'输出-溢出后不换行-左对齐-跟随SetColor-换行后等待'}}},
{label:'PRINTSINGLELCK',detail:{'zh-CN':{short:'输出',long:'输出-溢出后不换行-左对齐-跟随ForceKana'}}},
{label:'PRINTSINGLELCKW',detail:{'zh-CN':{short:'输出',long:'输出-溢出后不换行-左对齐-跟随ForceKana-换行后等待'}}},
{label:'PRINTSINGLELCD',detail:{'zh-CN':{short:'输出',long:'输出-溢出后不换行-左对齐-忽略SetColor'}}},
{label:'PRINTSINGLELCDW',detail:{'zh-CN':{short:'输出',long:'输出-溢出后不换行-左对齐-忽略SetColor-换行后等待'}}},
{label:'PRINTSINGLEC',detail:{'zh-CN':{short:'输出',long:'输出-溢出后不换行-右对齐-跟随SetColor'}}},
{label:'PRINTSINGLECW',detail:{'zh-CN':{short:'输出',long:'输出-溢出后不换行-右对齐-跟随SetColor-换行后等待'}}},
{label:'PRINTSINGLECK',detail:{'zh-CN':{short:'输出',long:'输出-溢出后不换行-右对齐-跟随ForceKana'}}},
{label:'PRINTSINGLECKW',detail:{'zh-CN':{short:'输出',long:'输出-溢出后不换行-右对齐-跟随ForceKana-换行后等待'}}},
{label:'PRINTSINGLECD',detail:{'zh-CN':{short:'输出',long:'输出-溢出后不换行-右对齐-忽略SetColor'}}},
{label:'PRINTSINGLECDW',detail:{'zh-CN':{short:'输出',long:'输出-溢出后不换行-右对齐-忽略SetColor-换行后等待'}}},
{label:'PRINTSINGLEV',detail:{'zh-CN':{short:'输出',long:'输出-溢出后不换行-数值表达式-跟随SetColor'}}},
{label:'PRINTSINGLEVW',detail:{'zh-CN':{short:'输出',long:'输出-溢出后不换行-数值表达式-跟随SetColor-换行后等待'}}},
{label:'PRINTSINGLEVK',detail:{'zh-CN':{short:'输出',long:'输出-溢出后不换行-数值表达式-跟随ForceKana'}}},
{label:'PRINTSINGLEVKW',detail:{'zh-CN':{short:'输出',long:'输出-溢出后不换行-数值表达式-跟随ForceKana-换行后等待'}}},
{label:'PRINTSINGLEVD',detail:{'zh-CN':{short:'输出',long:'输出-溢出后不换行-数值表达式-忽略SetColor'}}},
{label:'PRINTSINGLEVDW',detail:{'zh-CN':{short:'输出',long:'输出-溢出后不换行-数值表达式-忽略SetColor-换行后等待'}}},
{label:'PRINTSINGLEVLC',detail:{'zh-CN':{short:'输出',long:'输出-溢出后不换行-数值表达式-左对齐-跟随SetColor'}}},
{label:'PRINTSINGLEVLCW',detail:{'zh-CN':{short:'输出',long:'输出-溢出后不换行-数值表达式-左对齐-跟随SetColor-换行后等待'}}},
{label:'PRINTSINGLEVLCK',detail:{'zh-CN':{short:'输出',long:'输出-溢出后不换行-数值表达式-左对齐-跟随ForceKana'}}},
{label:'PRINTSINGLEVLCKW',detail:{'zh-CN':{short:'输出',long:'输出-溢出后不换行-数值表达式-左对齐-跟随ForceKana-换行后等待'}}},
{label:'PRINTSINGLEVLCD',detail:{'zh-CN':{short:'输出',long:'输出-溢出后不换行-数值表达式-左对齐-忽略SetColor'}}},
{label:'PRINTSINGLEVLCDW',detail:{'zh-CN':{short:'输出',long:'输出-溢出后不换行-数值表达式-左对齐-忽略SetColor-换行后等待'}}},
{label:'PRINTSINGLEVC',detail:{'zh-CN':{short:'输出',long:'输出-溢出后不换行-数值表达式-右对齐-跟随SetColor'}}},
{label:'PRINTSINGLEVCW',detail:{'zh-CN':{short:'输出',long:'输出-溢出后不换行-数值表达式-右对齐-跟随SetColor-换行后等待'}}},
{label:'PRINTSINGLEVCK',detail:{'zh-CN':{short:'输出',long:'输出-溢出后不换行-数值表达式-右对齐-跟随ForceKana'}}},
{label:'PRINTSINGLEVCKW',detail:{'zh-CN':{short:'输出',long:'输出-溢出后不换行-数值表达式-右对齐-跟随ForceKana-换行后等待'}}},
{label:'PRINTSINGLEVCD',detail:{'zh-CN':{short:'输出',long:'输出-溢出后不换行-数值表达式-右对齐-忽略SetColor'}}},
{label:'PRINTSINGLEVCDW',detail:{'zh-CN':{short:'输出',long:'输出-溢出后不换行-数值表达式-右对齐-忽略SetColor-换行后等待'}}},
{label:'PRINTSINGLES',detail:{'zh-CN':{short:'输出',long:'输出-溢出后不换行-字符串表达式-跟随SetColor'}}},
{label:'PRINTSINGLESW',detail:{'zh-CN':{short:'输出',long:'输出-溢出后不换行-字符串表达式-跟随SetColor-换行后等待'}}},
{label:'PRINTSINGLESK',detail:{'zh-CN':{short:'输出',long:'输出-溢出后不换行-字符串表达式-跟随ForceKana'}}},
{label:'PRINTSINGLESKW',detail:{'zh-CN':{short:'输出',long:'输出-溢出后不换行-字符串表达式-跟随ForceKana-换行后等待'}}},
{label:'PRINTSINGLESD',detail:{'zh-CN':{short:'输出',long:'输出-溢出后不换行-字符串表达式-忽略SetColor'}}},
{label:'PRINTSINGLESDW',detail:{'zh-CN':{short:'输出',long:'输出-溢出后不换行-字符串表达式-忽略SetColor-换行后等待'}}},
{label:'PRINTSINGLESLC',detail:{'zh-CN':{short:'输出',long:'输出-溢出后不换行-字符串表达式-左对齐-跟随SetColor'}}},
{label:'PRINTSINGLESLCW',detail:{'zh-CN':{short:'输出',long:'输出-溢出后不换行-字符串表达式-左对齐-跟随SetColor-换行后等待'}}},
{label:'PRINTSINGLESLCK',detail:{'zh-CN':{short:'输出',long:'输出-溢出后不换行-字符串表达式-左对齐-跟随ForceKana'}}},
{label:'PRINTSINGLESLCKW',detail:{'zh-CN':{short:'输出',long:'输出-溢出后不换行-字符串表达式-左对齐-跟随ForceKana-换行后等待'}}},
{label:'PRINTSINGLESLCD',detail:{'zh-CN':{short:'输出',long:'输出-溢出后不换行-字符串表达式-左对齐-忽略SetColor'}}},
{label:'PRINTSINGLESLCDW',detail:{'zh-CN':{short:'输出',long:'输出-溢出后不换行-字符串表达式-左对齐-忽略SetColor-换行后等待'}}},
{label:'PRINTSINGLESC',detail:{'zh-CN':{short:'输出',long:'输出-溢出后不换行-字符串表达式-右对齐-跟随SetColor'}}},
{label:'PRINTSINGLESCW',detail:{'zh-CN':{short:'输出',long:'输出-溢出后不换行-字符串表达式-右对齐-跟随SetColor-换行后等待'}}},
{label:'PRINTSINGLESCK',detail:{'zh-CN':{short:'输出',long:'输出-溢出后不换行-字符串表达式-右对齐-跟随ForceKana'}}},
{label:'PRINTSINGLESCKW',detail:{'zh-CN':{short:'输出',long:'输出-溢出后不换行-字符串表达式-右对齐-跟随ForceKana-换行后等待'}}},
{label:'PRINTSINGLESCD',detail:{'zh-CN':{short:'输出',long:'输出-溢出后不换行-字符串表达式-右对齐-忽略SetColor'}}},
{label:'PRINTSINGLESCDW',detail:{'zh-CN':{short:'输出',long:'输出-溢出后不换行-字符串表达式-右对齐-忽略SetColor-换行后等待'}}},
{label:'PRINTSINGLEFORM',detail:{'zh-CN':{short:'输出',long:'输出-溢出后不换行-格式化字符串-跟随SetColor'}}},
{label:'PRINTSINGLEFORMW',detail:{'zh-CN':{short:'输出',long:'输出-溢出后不换行-格式化字符串-跟随SetColor-换行后等待'}}},
{label:'PRINTSINGLEFORMK',detail:{'zh-CN':{short:'输出',long:'输出-溢出后不换行-格式化字符串-跟随ForceKana'}}},
{label:'PRINTSINGLEFORMKW',detail:{'zh-CN':{short:'输出',long:'输出-溢出后不换行-格式化字符串-跟随ForceKana-换行后等待'}}},
{label:'PRINTSINGLEFORMD',detail:{'zh-CN':{short:'输出',long:'输出-溢出后不换行-格式化字符串-忽略SetColor'}}},
{label:'PRINTSINGLEFORMDW',detail:{'zh-CN':{short:'输出',long:'输出-溢出后不换行-格式化字符串-忽略SetColor-换行后等待'}}},
{label:'PRINTSINGLEFORMLC',detail:{'zh-CN':{short:'输出',long:'输出-溢出后不换行-格式化字符串-左对齐-跟随SetColor'}}},
{label:'PRINTSINGLEFORMLCW',detail:{'zh-CN':{short:'输出',long:'输出-溢出后不换行-格式化字符串-左对齐-跟随SetColor-换行后等待'}}},
{label:'PRINTSINGLEFORMLCK',detail:{'zh-CN':{short:'输出',long:'输出-溢出后不换行-格式化字符串-左对齐-跟随ForceKana'}}},
{label:'PRINTSINGLEFORMLCKW',detail:{'zh-CN':{short:'输出',long:'输出-溢出后不换行-格式化字符串-左对齐-跟随ForceKana-换行后等待'}}},
{label:'PRINTSINGLEFORMLCD',detail:{'zh-CN':{short:'输出',long:'输出-溢出后不换行-格式化字符串-左对齐-忽略SetColor'}}},
{label:'PRINTSINGLEFORMLCDW',detail:{'zh-CN':{short:'输出',long:'输出-溢出后不换行-格式化字符串-左对齐-忽略SetColor-换行后等待'}}},
{label:'PRINTSINGLEFORMC',detail:{'zh-CN':{short:'输出',long:'输出-溢出后不换行-格式化字符串-右对齐-跟随SetColor'}}},
{label:'PRINTSINGLEFORMCW',detail:{'zh-CN':{short:'输出',long:'输出-溢出后不换行-格式化字符串-右对齐-跟随SetColor-换行后等待'}}},
{label:'PRINTSINGLEFORMCK',detail:{'zh-CN':{short:'输出',long:'输出-溢出后不换行-格式化字符串-右对齐-跟随ForceKana'}}},
{label:'PRINTSINGLEFORMCKW',detail:{'zh-CN':{short:'输出',long:'输出-溢出后不换行-格式化字符串-右对齐-跟随ForceKana-换行后等待'}}},
{label:'PRINTSINGLEFORMCD',detail:{'zh-CN':{short:'输出',long:'输出-溢出后不换行-格式化字符串-右对齐-忽略SetColor'}}},
{label:'PRINTSINGLEFORMCDW',detail:{'zh-CN':{short:'输出',long:'输出-溢出后不换行-格式化字符串-右对齐-忽略SetColor-换行后等待'}}},
{label:'PRINTSINGLEFORMS',detail:{'zh-CN':{short:'输出',long:'输出-溢出后不换行-格式化字符串表达式-跟随SetColor'}}},
{label:'PRINTSINGLEFORMSW',detail:{'zh-CN':{short:'输出',long:'输出-溢出后不换行-格式化字符串表达式-跟随SetColor-换行后等待'}}},
{label:'PRINTSINGLEFORMSK',detail:{'zh-CN':{short:'输出',long:'输出-溢出后不换行-格式化字符串表达式-跟随ForceKana'}}},
{label:'PRINTSINGLEFORMSKW',detail:{'zh-CN':{short:'输出',long:'输出-溢出后不换行-格式化字符串表达式-跟随ForceKana-换行后等待'}}},
{label:'PRINTSINGLEFORMSD',detail:{'zh-CN':{short:'输出',long:'输出-溢出后不换行-格式化字符串表达式-忽略SetColor'}}},
{label:'PRINTSINGLEFORMSDW',detail:{'zh-CN':{short:'输出',long:'输出-溢出后不换行-格式化字符串表达式-忽略SetColor-换行后等待'}}},
{label:'PRINTSINGLEFORMSLC',detail:{'zh-CN':{short:'输出',long:'输出-溢出后不换行-格式化字符串表达式-左对齐-跟随SetColor'}}},
{label:'PRINTSINGLEFORMSLCW',detail:{'zh-CN':{short:'输出',long:'输出-溢出后不换行-格式化字符串表达式-左对齐-跟随SetColor-换行后等待'}}},
{label:'PRINTSINGLEFORMSLCK',detail:{'zh-CN':{short:'输出',long:'输出-溢出后不换行-格式化字符串表达式-左对齐-跟随ForceKana'}}},
{label:'PRINTSINGLEFORMSLCKW',detail:{'zh-CN':{short:'输出',long:'输出-溢出后不换行-格式化字符串表达式-左对齐-跟随ForceKana-换行后等待'}}},
{label:'PRINTSINGLEFORMSLCD',detail:{'zh-CN':{short:'输出',long:'输出-溢出后不换行-格式化字符串表达式-左对齐-忽略SetColor'}}},
{label:'PRINTSINGLEFORMSLCDW',detail:{'zh-CN':{short:'输出',long:'输出-溢出后不换行-格式化字符串表达式-左对齐-忽略SetColor-换行后等待'}}},
{label:'PRINTSINGLEFORMSC',detail:{'zh-CN':{short:'输出',long:'输出-溢出后不换行-格式化字符串表达式-右对齐-跟随SetColor'}}},
{label:'PRINTSINGLEFORMSCW',detail:{'zh-CN':{short:'输出',long:'输出-溢出后不换行-格式化字符串表达式-右对齐-跟随SetColor-换行后等待'}}},
{label:'PRINTSINGLEFORMSCK',detail:{'zh-CN':{short:'输出',long:'输出-溢出后不换行-格式化字符串表达式-右对齐-跟随ForceKana'}}},
{label:'PRINTSINGLEFORMSCKW',detail:{'zh-CN':{short:'输出',long:'输出-溢出后不换行-格式化字符串表达式-右对齐-跟随ForceKana-换行后等待'}}},
{label:'PRINTSINGLEFORMSCD',detail:{'zh-CN':{short:'输出',long:'输出-溢出后不换行-格式化字符串表达式-右对齐-忽略SetColor'}}},
{label:'PRINTSINGLEFORMSCDW',detail:{'zh-CN':{short:'输出',long:'输出-溢出后不换行-格式化字符串表达式-右对齐-忽略SetColor-换行后等待'}}}
]
for(let ia in a){
    for(ib in b){
        if(a[ia]['label'].substr(5) == 'PRINT')console.log(b[ib]['label']);
        
    }
}
