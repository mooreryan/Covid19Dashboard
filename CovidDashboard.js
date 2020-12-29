(function(scope){
'use strict';

function F(arity, fun, wrapper) {
  wrapper.a = arity;
  wrapper.f = fun;
  return wrapper;
}

function F2(fun) {
  return F(2, fun, function(a) { return function(b) { return fun(a,b); }; })
}
function F3(fun) {
  return F(3, fun, function(a) {
    return function(b) { return function(c) { return fun(a, b, c); }; };
  });
}
function F4(fun) {
  return F(4, fun, function(a) { return function(b) { return function(c) {
    return function(d) { return fun(a, b, c, d); }; }; };
  });
}
function F5(fun) {
  return F(5, fun, function(a) { return function(b) { return function(c) {
    return function(d) { return function(e) { return fun(a, b, c, d, e); }; }; }; };
  });
}
function F6(fun) {
  return F(6, fun, function(a) { return function(b) { return function(c) {
    return function(d) { return function(e) { return function(f) {
    return fun(a, b, c, d, e, f); }; }; }; }; };
  });
}
function F7(fun) {
  return F(7, fun, function(a) { return function(b) { return function(c) {
    return function(d) { return function(e) { return function(f) {
    return function(g) { return fun(a, b, c, d, e, f, g); }; }; }; }; }; };
  });
}
function F8(fun) {
  return F(8, fun, function(a) { return function(b) { return function(c) {
    return function(d) { return function(e) { return function(f) {
    return function(g) { return function(h) {
    return fun(a, b, c, d, e, f, g, h); }; }; }; }; }; }; };
  });
}
function F9(fun) {
  return F(9, fun, function(a) { return function(b) { return function(c) {
    return function(d) { return function(e) { return function(f) {
    return function(g) { return function(h) { return function(i) {
    return fun(a, b, c, d, e, f, g, h, i); }; }; }; }; }; }; }; };
  });
}

function A2(fun, a, b) {
  return fun.a === 2 ? fun.f(a, b) : fun(a)(b);
}
function A3(fun, a, b, c) {
  return fun.a === 3 ? fun.f(a, b, c) : fun(a)(b)(c);
}
function A4(fun, a, b, c, d) {
  return fun.a === 4 ? fun.f(a, b, c, d) : fun(a)(b)(c)(d);
}
function A5(fun, a, b, c, d, e) {
  return fun.a === 5 ? fun.f(a, b, c, d, e) : fun(a)(b)(c)(d)(e);
}
function A6(fun, a, b, c, d, e, f) {
  return fun.a === 6 ? fun.f(a, b, c, d, e, f) : fun(a)(b)(c)(d)(e)(f);
}
function A7(fun, a, b, c, d, e, f, g) {
  return fun.a === 7 ? fun.f(a, b, c, d, e, f, g) : fun(a)(b)(c)(d)(e)(f)(g);
}
function A8(fun, a, b, c, d, e, f, g, h) {
  return fun.a === 8 ? fun.f(a, b, c, d, e, f, g, h) : fun(a)(b)(c)(d)(e)(f)(g)(h);
}
function A9(fun, a, b, c, d, e, f, g, h, i) {
  return fun.a === 9 ? fun.f(a, b, c, d, e, f, g, h, i) : fun(a)(b)(c)(d)(e)(f)(g)(h)(i);
}




var _JsArray_empty = [];

function _JsArray_singleton(value)
{
    return [value];
}

function _JsArray_length(array)
{
    return array.length;
}

var _JsArray_initialize = F3(function(size, offset, func)
{
    var result = new Array(size);

    for (var i = 0; i < size; i++)
    {
        result[i] = func(offset + i);
    }

    return result;
});

var _JsArray_initializeFromList = F2(function (max, ls)
{
    var result = new Array(max);

    for (var i = 0; i < max && ls.b; i++)
    {
        result[i] = ls.a;
        ls = ls.b;
    }

    result.length = i;
    return _Utils_Tuple2(result, ls);
});

var _JsArray_unsafeGet = F2(function(index, array)
{
    return array[index];
});

var _JsArray_unsafeSet = F3(function(index, value, array)
{
    var length = array.length;
    var result = new Array(length);

    for (var i = 0; i < length; i++)
    {
        result[i] = array[i];
    }

    result[index] = value;
    return result;
});

var _JsArray_push = F2(function(value, array)
{
    var length = array.length;
    var result = new Array(length + 1);

    for (var i = 0; i < length; i++)
    {
        result[i] = array[i];
    }

    result[length] = value;
    return result;
});

var _JsArray_foldl = F3(function(func, acc, array)
{
    var length = array.length;

    for (var i = 0; i < length; i++)
    {
        acc = A2(func, array[i], acc);
    }

    return acc;
});

var _JsArray_foldr = F3(function(func, acc, array)
{
    for (var i = array.length - 1; i >= 0; i--)
    {
        acc = A2(func, array[i], acc);
    }

    return acc;
});

var _JsArray_map = F2(function(func, array)
{
    var length = array.length;
    var result = new Array(length);

    for (var i = 0; i < length; i++)
    {
        result[i] = func(array[i]);
    }

    return result;
});

var _JsArray_indexedMap = F3(function(func, offset, array)
{
    var length = array.length;
    var result = new Array(length);

    for (var i = 0; i < length; i++)
    {
        result[i] = A2(func, offset + i, array[i]);
    }

    return result;
});

var _JsArray_slice = F3(function(from, to, array)
{
    return array.slice(from, to);
});

var _JsArray_appendN = F3(function(n, dest, source)
{
    var destLen = dest.length;
    var itemsToCopy = n - destLen;

    if (itemsToCopy > source.length)
    {
        itemsToCopy = source.length;
    }

    var size = destLen + itemsToCopy;
    var result = new Array(size);

    for (var i = 0; i < destLen; i++)
    {
        result[i] = dest[i];
    }

    for (var i = 0; i < itemsToCopy; i++)
    {
        result[i + destLen] = source[i];
    }

    return result;
});



// LOG

var _Debug_log = F2(function(tag, value)
{
	return value;
});

var _Debug_log_UNUSED = F2(function(tag, value)
{
	console.log(tag + ': ' + _Debug_toString(value));
	return value;
});


// TODOS

function _Debug_todo(moduleName, region)
{
	return function(message) {
		_Debug_crash(8, moduleName, region, message);
	};
}

function _Debug_todoCase(moduleName, region, value)
{
	return function(message) {
		_Debug_crash(9, moduleName, region, value, message);
	};
}


// TO STRING

function _Debug_toString(value)
{
	return '<internals>';
}

function _Debug_toString_UNUSED(value)
{
	return _Debug_toAnsiString(false, value);
}

function _Debug_toAnsiString(ansi, value)
{
	if (typeof value === 'function')
	{
		return _Debug_internalColor(ansi, '<function>');
	}

	if (typeof value === 'boolean')
	{
		return _Debug_ctorColor(ansi, value ? 'True' : 'False');
	}

	if (typeof value === 'number')
	{
		return _Debug_numberColor(ansi, value + '');
	}

	if (value instanceof String)
	{
		return _Debug_charColor(ansi, "'" + _Debug_addSlashes(value, true) + "'");
	}

	if (typeof value === 'string')
	{
		return _Debug_stringColor(ansi, '"' + _Debug_addSlashes(value, false) + '"');
	}

	if (typeof value === 'object' && '$' in value)
	{
		var tag = value.$;

		if (typeof tag === 'number')
		{
			return _Debug_internalColor(ansi, '<internals>');
		}

		if (tag[0] === '#')
		{
			var output = [];
			for (var k in value)
			{
				if (k === '$') continue;
				output.push(_Debug_toAnsiString(ansi, value[k]));
			}
			return '(' + output.join(',') + ')';
		}

		if (tag === 'Set_elm_builtin')
		{
			return _Debug_ctorColor(ansi, 'Set')
				+ _Debug_fadeColor(ansi, '.fromList') + ' '
				+ _Debug_toAnsiString(ansi, $elm$core$Set$toList(value));
		}

		if (tag === 'RBNode_elm_builtin' || tag === 'RBEmpty_elm_builtin')
		{
			return _Debug_ctorColor(ansi, 'Dict')
				+ _Debug_fadeColor(ansi, '.fromList') + ' '
				+ _Debug_toAnsiString(ansi, $elm$core$Dict$toList(value));
		}

		if (tag === 'Array_elm_builtin')
		{
			return _Debug_ctorColor(ansi, 'Array')
				+ _Debug_fadeColor(ansi, '.fromList') + ' '
				+ _Debug_toAnsiString(ansi, $elm$core$Array$toList(value));
		}

		if (tag === '::' || tag === '[]')
		{
			var output = '[';

			value.b && (output += _Debug_toAnsiString(ansi, value.a), value = value.b)

			for (; value.b; value = value.b) // WHILE_CONS
			{
				output += ',' + _Debug_toAnsiString(ansi, value.a);
			}
			return output + ']';
		}

		var output = '';
		for (var i in value)
		{
			if (i === '$') continue;
			var str = _Debug_toAnsiString(ansi, value[i]);
			var c0 = str[0];
			var parenless = c0 === '{' || c0 === '(' || c0 === '[' || c0 === '<' || c0 === '"' || str.indexOf(' ') < 0;
			output += ' ' + (parenless ? str : '(' + str + ')');
		}
		return _Debug_ctorColor(ansi, tag) + output;
	}

	if (typeof DataView === 'function' && value instanceof DataView)
	{
		return _Debug_stringColor(ansi, '<' + value.byteLength + ' bytes>');
	}

	if (typeof File !== 'undefined' && value instanceof File)
	{
		return _Debug_internalColor(ansi, '<' + value.name + '>');
	}

	if (typeof value === 'object')
	{
		var output = [];
		for (var key in value)
		{
			var field = key[0] === '_' ? key.slice(1) : key;
			output.push(_Debug_fadeColor(ansi, field) + ' = ' + _Debug_toAnsiString(ansi, value[key]));
		}
		if (output.length === 0)
		{
			return '{}';
		}
		return '{ ' + output.join(', ') + ' }';
	}

	return _Debug_internalColor(ansi, '<internals>');
}

function _Debug_addSlashes(str, isChar)
{
	var s = str
		.replace(/\\/g, '\\\\')
		.replace(/\n/g, '\\n')
		.replace(/\t/g, '\\t')
		.replace(/\r/g, '\\r')
		.replace(/\v/g, '\\v')
		.replace(/\0/g, '\\0');

	if (isChar)
	{
		return s.replace(/\'/g, '\\\'');
	}
	else
	{
		return s.replace(/\"/g, '\\"');
	}
}

function _Debug_ctorColor(ansi, string)
{
	return ansi ? '\x1b[96m' + string + '\x1b[0m' : string;
}

function _Debug_numberColor(ansi, string)
{
	return ansi ? '\x1b[95m' + string + '\x1b[0m' : string;
}

function _Debug_stringColor(ansi, string)
{
	return ansi ? '\x1b[93m' + string + '\x1b[0m' : string;
}

function _Debug_charColor(ansi, string)
{
	return ansi ? '\x1b[92m' + string + '\x1b[0m' : string;
}

function _Debug_fadeColor(ansi, string)
{
	return ansi ? '\x1b[37m' + string + '\x1b[0m' : string;
}

function _Debug_internalColor(ansi, string)
{
	return ansi ? '\x1b[36m' + string + '\x1b[0m' : string;
}

function _Debug_toHexDigit(n)
{
	return String.fromCharCode(n < 10 ? 48 + n : 55 + n);
}


// CRASH


function _Debug_crash(identifier)
{
	throw new Error('https://github.com/elm/core/blob/1.0.0/hints/' + identifier + '.md');
}


function _Debug_crash_UNUSED(identifier, fact1, fact2, fact3, fact4)
{
	switch(identifier)
	{
		case 0:
			throw new Error('What node should I take over? In JavaScript I need something like:\n\n    Elm.Main.init({\n        node: document.getElementById("elm-node")\n    })\n\nYou need to do this with any Browser.sandbox or Browser.element program.');

		case 1:
			throw new Error('Browser.application programs cannot handle URLs like this:\n\n    ' + document.location.href + '\n\nWhat is the root? The root of your file system? Try looking at this program with `elm reactor` or some other server.');

		case 2:
			var jsonErrorString = fact1;
			throw new Error('Problem with the flags given to your Elm program on initialization.\n\n' + jsonErrorString);

		case 3:
			var portName = fact1;
			throw new Error('There can only be one port named `' + portName + '`, but your program has multiple.');

		case 4:
			var portName = fact1;
			var problem = fact2;
			throw new Error('Trying to send an unexpected type of value through port `' + portName + '`:\n' + problem);

		case 5:
			throw new Error('Trying to use `(==)` on functions.\nThere is no way to know if functions are "the same" in the Elm sense.\nRead more about this at https://package.elm-lang.org/packages/elm/core/latest/Basics#== which describes why it is this way and what the better version will look like.');

		case 6:
			var moduleName = fact1;
			throw new Error('Your page is loading multiple Elm scripts with a module named ' + moduleName + '. Maybe a duplicate script is getting loaded accidentally? If not, rename one of them so I know which is which!');

		case 8:
			var moduleName = fact1;
			var region = fact2;
			var message = fact3;
			throw new Error('TODO in module `' + moduleName + '` ' + _Debug_regionToString(region) + '\n\n' + message);

		case 9:
			var moduleName = fact1;
			var region = fact2;
			var value = fact3;
			var message = fact4;
			throw new Error(
				'TODO in module `' + moduleName + '` from the `case` expression '
				+ _Debug_regionToString(region) + '\n\nIt received the following value:\n\n    '
				+ _Debug_toString(value).replace('\n', '\n    ')
				+ '\n\nBut the branch that handles it says:\n\n    ' + message.replace('\n', '\n    ')
			);

		case 10:
			throw new Error('Bug in https://github.com/elm/virtual-dom/issues');

		case 11:
			throw new Error('Cannot perform mod 0. Division by zero error.');
	}
}

function _Debug_regionToString(region)
{
	if (region.X.I === region.ae.I)
	{
		return 'on line ' + region.X.I;
	}
	return 'on lines ' + region.X.I + ' through ' + region.ae.I;
}



// EQUALITY

function _Utils_eq(x, y)
{
	for (
		var pair, stack = [], isEqual = _Utils_eqHelp(x, y, 0, stack);
		isEqual && (pair = stack.pop());
		isEqual = _Utils_eqHelp(pair.a, pair.b, 0, stack)
		)
	{}

	return isEqual;
}

function _Utils_eqHelp(x, y, depth, stack)
{
	if (x === y)
	{
		return true;
	}

	if (typeof x !== 'object' || x === null || y === null)
	{
		typeof x === 'function' && _Debug_crash(5);
		return false;
	}

	if (depth > 100)
	{
		stack.push(_Utils_Tuple2(x,y));
		return true;
	}

	/**_UNUSED/
	if (x.$ === 'Set_elm_builtin')
	{
		x = $elm$core$Set$toList(x);
		y = $elm$core$Set$toList(y);
	}
	if (x.$ === 'RBNode_elm_builtin' || x.$ === 'RBEmpty_elm_builtin')
	{
		x = $elm$core$Dict$toList(x);
		y = $elm$core$Dict$toList(y);
	}
	//*/

	/**/
	if (x.$ < 0)
	{
		x = $elm$core$Dict$toList(x);
		y = $elm$core$Dict$toList(y);
	}
	//*/

	for (var key in x)
	{
		if (!_Utils_eqHelp(x[key], y[key], depth + 1, stack))
		{
			return false;
		}
	}
	return true;
}

var _Utils_equal = F2(_Utils_eq);
var _Utils_notEqual = F2(function(a, b) { return !_Utils_eq(a,b); });



// COMPARISONS

// Code in Generate/JavaScript.hs, Basics.js, and List.js depends on
// the particular integer values assigned to LT, EQ, and GT.

function _Utils_cmp(x, y, ord)
{
	if (typeof x !== 'object')
	{
		return x === y ? /*EQ*/ 0 : x < y ? /*LT*/ -1 : /*GT*/ 1;
	}

	/**_UNUSED/
	if (x instanceof String)
	{
		var a = x.valueOf();
		var b = y.valueOf();
		return a === b ? 0 : a < b ? -1 : 1;
	}
	//*/

	/**/
	if (typeof x.$ === 'undefined')
	//*/
	/**_UNUSED/
	if (x.$[0] === '#')
	//*/
	{
		return (ord = _Utils_cmp(x.a, y.a))
			? ord
			: (ord = _Utils_cmp(x.b, y.b))
				? ord
				: _Utils_cmp(x.c, y.c);
	}

	// traverse conses until end of a list or a mismatch
	for (; x.b && y.b && !(ord = _Utils_cmp(x.a, y.a)); x = x.b, y = y.b) {} // WHILE_CONSES
	return ord || (x.b ? /*GT*/ 1 : y.b ? /*LT*/ -1 : /*EQ*/ 0);
}

var _Utils_lt = F2(function(a, b) { return _Utils_cmp(a, b) < 0; });
var _Utils_le = F2(function(a, b) { return _Utils_cmp(a, b) < 1; });
var _Utils_gt = F2(function(a, b) { return _Utils_cmp(a, b) > 0; });
var _Utils_ge = F2(function(a, b) { return _Utils_cmp(a, b) >= 0; });

var _Utils_compare = F2(function(x, y)
{
	var n = _Utils_cmp(x, y);
	return n < 0 ? $elm$core$Basics$LT : n ? $elm$core$Basics$GT : $elm$core$Basics$EQ;
});


// COMMON VALUES

var _Utils_Tuple0 = 0;
var _Utils_Tuple0_UNUSED = { $: '#0' };

function _Utils_Tuple2(a, b) { return { a: a, b: b }; }
function _Utils_Tuple2_UNUSED(a, b) { return { $: '#2', a: a, b: b }; }

function _Utils_Tuple3(a, b, c) { return { a: a, b: b, c: c }; }
function _Utils_Tuple3_UNUSED(a, b, c) { return { $: '#3', a: a, b: b, c: c }; }

function _Utils_chr(c) { return c; }
function _Utils_chr_UNUSED(c) { return new String(c); }


// RECORDS

function _Utils_update(oldRecord, updatedFields)
{
	var newRecord = {};

	for (var key in oldRecord)
	{
		newRecord[key] = oldRecord[key];
	}

	for (var key in updatedFields)
	{
		newRecord[key] = updatedFields[key];
	}

	return newRecord;
}


// APPEND

var _Utils_append = F2(_Utils_ap);

function _Utils_ap(xs, ys)
{
	// append Strings
	if (typeof xs === 'string')
	{
		return xs + ys;
	}

	// append Lists
	if (!xs.b)
	{
		return ys;
	}
	var root = _List_Cons(xs.a, ys);
	xs = xs.b
	for (var curr = root; xs.b; xs = xs.b) // WHILE_CONS
	{
		curr = curr.b = _List_Cons(xs.a, ys);
	}
	return root;
}



var _List_Nil = { $: 0 };
var _List_Nil_UNUSED = { $: '[]' };

function _List_Cons(hd, tl) { return { $: 1, a: hd, b: tl }; }
function _List_Cons_UNUSED(hd, tl) { return { $: '::', a: hd, b: tl }; }


var _List_cons = F2(_List_Cons);

function _List_fromArray(arr)
{
	var out = _List_Nil;
	for (var i = arr.length; i--; )
	{
		out = _List_Cons(arr[i], out);
	}
	return out;
}

function _List_toArray(xs)
{
	for (var out = []; xs.b; xs = xs.b) // WHILE_CONS
	{
		out.push(xs.a);
	}
	return out;
}

var _List_map2 = F3(function(f, xs, ys)
{
	for (var arr = []; xs.b && ys.b; xs = xs.b, ys = ys.b) // WHILE_CONSES
	{
		arr.push(A2(f, xs.a, ys.a));
	}
	return _List_fromArray(arr);
});

var _List_map3 = F4(function(f, xs, ys, zs)
{
	for (var arr = []; xs.b && ys.b && zs.b; xs = xs.b, ys = ys.b, zs = zs.b) // WHILE_CONSES
	{
		arr.push(A3(f, xs.a, ys.a, zs.a));
	}
	return _List_fromArray(arr);
});

var _List_map4 = F5(function(f, ws, xs, ys, zs)
{
	for (var arr = []; ws.b && xs.b && ys.b && zs.b; ws = ws.b, xs = xs.b, ys = ys.b, zs = zs.b) // WHILE_CONSES
	{
		arr.push(A4(f, ws.a, xs.a, ys.a, zs.a));
	}
	return _List_fromArray(arr);
});

var _List_map5 = F6(function(f, vs, ws, xs, ys, zs)
{
	for (var arr = []; vs.b && ws.b && xs.b && ys.b && zs.b; vs = vs.b, ws = ws.b, xs = xs.b, ys = ys.b, zs = zs.b) // WHILE_CONSES
	{
		arr.push(A5(f, vs.a, ws.a, xs.a, ys.a, zs.a));
	}
	return _List_fromArray(arr);
});

var _List_sortBy = F2(function(f, xs)
{
	return _List_fromArray(_List_toArray(xs).sort(function(a, b) {
		return _Utils_cmp(f(a), f(b));
	}));
});

var _List_sortWith = F2(function(f, xs)
{
	return _List_fromArray(_List_toArray(xs).sort(function(a, b) {
		var ord = A2(f, a, b);
		return ord === $elm$core$Basics$EQ ? 0 : ord === $elm$core$Basics$LT ? -1 : 1;
	}));
});



// MATH

var _Basics_add = F2(function(a, b) { return a + b; });
var _Basics_sub = F2(function(a, b) { return a - b; });
var _Basics_mul = F2(function(a, b) { return a * b; });
var _Basics_fdiv = F2(function(a, b) { return a / b; });
var _Basics_idiv = F2(function(a, b) { return (a / b) | 0; });
var _Basics_pow = F2(Math.pow);

var _Basics_remainderBy = F2(function(b, a) { return a % b; });

// https://www.microsoft.com/en-us/research/wp-content/uploads/2016/02/divmodnote-letter.pdf
var _Basics_modBy = F2(function(modulus, x)
{
	var answer = x % modulus;
	return modulus === 0
		? _Debug_crash(11)
		:
	((answer > 0 && modulus < 0) || (answer < 0 && modulus > 0))
		? answer + modulus
		: answer;
});


// TRIGONOMETRY

var _Basics_pi = Math.PI;
var _Basics_e = Math.E;
var _Basics_cos = Math.cos;
var _Basics_sin = Math.sin;
var _Basics_tan = Math.tan;
var _Basics_acos = Math.acos;
var _Basics_asin = Math.asin;
var _Basics_atan = Math.atan;
var _Basics_atan2 = F2(Math.atan2);


// MORE MATH

function _Basics_toFloat(x) { return x; }
function _Basics_truncate(n) { return n | 0; }
function _Basics_isInfinite(n) { return n === Infinity || n === -Infinity; }

var _Basics_ceiling = Math.ceil;
var _Basics_floor = Math.floor;
var _Basics_round = Math.round;
var _Basics_sqrt = Math.sqrt;
var _Basics_log = Math.log;
var _Basics_isNaN = isNaN;


// BOOLEANS

function _Basics_not(bool) { return !bool; }
var _Basics_and = F2(function(a, b) { return a && b; });
var _Basics_or  = F2(function(a, b) { return a || b; });
var _Basics_xor = F2(function(a, b) { return a !== b; });



var _String_cons = F2(function(chr, str)
{
	return chr + str;
});

function _String_uncons(string)
{
	var word = string.charCodeAt(0);
	return !isNaN(word)
		? $elm$core$Maybe$Just(
			0xD800 <= word && word <= 0xDBFF
				? _Utils_Tuple2(_Utils_chr(string[0] + string[1]), string.slice(2))
				: _Utils_Tuple2(_Utils_chr(string[0]), string.slice(1))
		)
		: $elm$core$Maybe$Nothing;
}

var _String_append = F2(function(a, b)
{
	return a + b;
});

function _String_length(str)
{
	return str.length;
}

var _String_map = F2(function(func, string)
{
	var len = string.length;
	var array = new Array(len);
	var i = 0;
	while (i < len)
	{
		var word = string.charCodeAt(i);
		if (0xD800 <= word && word <= 0xDBFF)
		{
			array[i] = func(_Utils_chr(string[i] + string[i+1]));
			i += 2;
			continue;
		}
		array[i] = func(_Utils_chr(string[i]));
		i++;
	}
	return array.join('');
});

var _String_filter = F2(function(isGood, str)
{
	var arr = [];
	var len = str.length;
	var i = 0;
	while (i < len)
	{
		var char = str[i];
		var word = str.charCodeAt(i);
		i++;
		if (0xD800 <= word && word <= 0xDBFF)
		{
			char += str[i];
			i++;
		}

		if (isGood(_Utils_chr(char)))
		{
			arr.push(char);
		}
	}
	return arr.join('');
});

function _String_reverse(str)
{
	var len = str.length;
	var arr = new Array(len);
	var i = 0;
	while (i < len)
	{
		var word = str.charCodeAt(i);
		if (0xD800 <= word && word <= 0xDBFF)
		{
			arr[len - i] = str[i + 1];
			i++;
			arr[len - i] = str[i - 1];
			i++;
		}
		else
		{
			arr[len - i] = str[i];
			i++;
		}
	}
	return arr.join('');
}

var _String_foldl = F3(function(func, state, string)
{
	var len = string.length;
	var i = 0;
	while (i < len)
	{
		var char = string[i];
		var word = string.charCodeAt(i);
		i++;
		if (0xD800 <= word && word <= 0xDBFF)
		{
			char += string[i];
			i++;
		}
		state = A2(func, _Utils_chr(char), state);
	}
	return state;
});

var _String_foldr = F3(function(func, state, string)
{
	var i = string.length;
	while (i--)
	{
		var char = string[i];
		var word = string.charCodeAt(i);
		if (0xDC00 <= word && word <= 0xDFFF)
		{
			i--;
			char = string[i] + char;
		}
		state = A2(func, _Utils_chr(char), state);
	}
	return state;
});

var _String_split = F2(function(sep, str)
{
	return str.split(sep);
});

var _String_join = F2(function(sep, strs)
{
	return strs.join(sep);
});

var _String_slice = F3(function(start, end, str) {
	return str.slice(start, end);
});

function _String_trim(str)
{
	return str.trim();
}

function _String_trimLeft(str)
{
	return str.replace(/^\s+/, '');
}

function _String_trimRight(str)
{
	return str.replace(/\s+$/, '');
}

function _String_words(str)
{
	return _List_fromArray(str.trim().split(/\s+/g));
}

function _String_lines(str)
{
	return _List_fromArray(str.split(/\r\n|\r|\n/g));
}

function _String_toUpper(str)
{
	return str.toUpperCase();
}

function _String_toLower(str)
{
	return str.toLowerCase();
}

var _String_any = F2(function(isGood, string)
{
	var i = string.length;
	while (i--)
	{
		var char = string[i];
		var word = string.charCodeAt(i);
		if (0xDC00 <= word && word <= 0xDFFF)
		{
			i--;
			char = string[i] + char;
		}
		if (isGood(_Utils_chr(char)))
		{
			return true;
		}
	}
	return false;
});

var _String_all = F2(function(isGood, string)
{
	var i = string.length;
	while (i--)
	{
		var char = string[i];
		var word = string.charCodeAt(i);
		if (0xDC00 <= word && word <= 0xDFFF)
		{
			i--;
			char = string[i] + char;
		}
		if (!isGood(_Utils_chr(char)))
		{
			return false;
		}
	}
	return true;
});

var _String_contains = F2(function(sub, str)
{
	return str.indexOf(sub) > -1;
});

var _String_startsWith = F2(function(sub, str)
{
	return str.indexOf(sub) === 0;
});

var _String_endsWith = F2(function(sub, str)
{
	return str.length >= sub.length &&
		str.lastIndexOf(sub) === str.length - sub.length;
});

var _String_indexes = F2(function(sub, str)
{
	var subLen = sub.length;

	if (subLen < 1)
	{
		return _List_Nil;
	}

	var i = 0;
	var is = [];

	while ((i = str.indexOf(sub, i)) > -1)
	{
		is.push(i);
		i = i + subLen;
	}

	return _List_fromArray(is);
});


// TO STRING

function _String_fromNumber(number)
{
	return number + '';
}


// INT CONVERSIONS

function _String_toInt(str)
{
	var total = 0;
	var code0 = str.charCodeAt(0);
	var start = code0 == 0x2B /* + */ || code0 == 0x2D /* - */ ? 1 : 0;

	for (var i = start; i < str.length; ++i)
	{
		var code = str.charCodeAt(i);
		if (code < 0x30 || 0x39 < code)
		{
			return $elm$core$Maybe$Nothing;
		}
		total = 10 * total + code - 0x30;
	}

	return i == start
		? $elm$core$Maybe$Nothing
		: $elm$core$Maybe$Just(code0 == 0x2D ? -total : total);
}


// FLOAT CONVERSIONS

function _String_toFloat(s)
{
	// check if it is a hex, octal, or binary number
	if (s.length === 0 || /[\sxbo]/.test(s))
	{
		return $elm$core$Maybe$Nothing;
	}
	var n = +s;
	// faster isNaN check
	return n === n ? $elm$core$Maybe$Just(n) : $elm$core$Maybe$Nothing;
}

function _String_fromList(chars)
{
	return _List_toArray(chars).join('');
}




function _Char_toCode(char)
{
	var code = char.charCodeAt(0);
	if (0xD800 <= code && code <= 0xDBFF)
	{
		return (code - 0xD800) * 0x400 + char.charCodeAt(1) - 0xDC00 + 0x10000
	}
	return code;
}

function _Char_fromCode(code)
{
	return _Utils_chr(
		(code < 0 || 0x10FFFF < code)
			? '\uFFFD'
			:
		(code <= 0xFFFF)
			? String.fromCharCode(code)
			:
		(code -= 0x10000,
			String.fromCharCode(Math.floor(code / 0x400) + 0xD800, code % 0x400 + 0xDC00)
		)
	);
}

function _Char_toUpper(char)
{
	return _Utils_chr(char.toUpperCase());
}

function _Char_toLower(char)
{
	return _Utils_chr(char.toLowerCase());
}

function _Char_toLocaleUpper(char)
{
	return _Utils_chr(char.toLocaleUpperCase());
}

function _Char_toLocaleLower(char)
{
	return _Utils_chr(char.toLocaleLowerCase());
}



/**_UNUSED/
function _Json_errorToString(error)
{
	return $elm$json$Json$Decode$errorToString(error);
}
//*/


// CORE DECODERS

function _Json_succeed(msg)
{
	return {
		$: 0,
		a: msg
	};
}

function _Json_fail(msg)
{
	return {
		$: 1,
		a: msg
	};
}

function _Json_decodePrim(decoder)
{
	return { $: 2, b: decoder };
}

var _Json_decodeInt = _Json_decodePrim(function(value) {
	return (typeof value !== 'number')
		? _Json_expecting('an INT', value)
		:
	(-2147483647 < value && value < 2147483647 && (value | 0) === value)
		? $elm$core$Result$Ok(value)
		:
	(isFinite(value) && !(value % 1))
		? $elm$core$Result$Ok(value)
		: _Json_expecting('an INT', value);
});

var _Json_decodeBool = _Json_decodePrim(function(value) {
	return (typeof value === 'boolean')
		? $elm$core$Result$Ok(value)
		: _Json_expecting('a BOOL', value);
});

var _Json_decodeFloat = _Json_decodePrim(function(value) {
	return (typeof value === 'number')
		? $elm$core$Result$Ok(value)
		: _Json_expecting('a FLOAT', value);
});

var _Json_decodeValue = _Json_decodePrim(function(value) {
	return $elm$core$Result$Ok(_Json_wrap(value));
});

var _Json_decodeString = _Json_decodePrim(function(value) {
	return (typeof value === 'string')
		? $elm$core$Result$Ok(value)
		: (value instanceof String)
			? $elm$core$Result$Ok(value + '')
			: _Json_expecting('a STRING', value);
});

function _Json_decodeList(decoder) { return { $: 3, b: decoder }; }
function _Json_decodeArray(decoder) { return { $: 4, b: decoder }; }

function _Json_decodeNull(value) { return { $: 5, c: value }; }

var _Json_decodeField = F2(function(field, decoder)
{
	return {
		$: 6,
		d: field,
		b: decoder
	};
});

var _Json_decodeIndex = F2(function(index, decoder)
{
	return {
		$: 7,
		e: index,
		b: decoder
	};
});

function _Json_decodeKeyValuePairs(decoder)
{
	return {
		$: 8,
		b: decoder
	};
}

function _Json_mapMany(f, decoders)
{
	return {
		$: 9,
		f: f,
		g: decoders
	};
}

var _Json_andThen = F2(function(callback, decoder)
{
	return {
		$: 10,
		b: decoder,
		h: callback
	};
});

function _Json_oneOf(decoders)
{
	return {
		$: 11,
		g: decoders
	};
}


// DECODING OBJECTS

var _Json_map1 = F2(function(f, d1)
{
	return _Json_mapMany(f, [d1]);
});

var _Json_map2 = F3(function(f, d1, d2)
{
	return _Json_mapMany(f, [d1, d2]);
});

var _Json_map3 = F4(function(f, d1, d2, d3)
{
	return _Json_mapMany(f, [d1, d2, d3]);
});

var _Json_map4 = F5(function(f, d1, d2, d3, d4)
{
	return _Json_mapMany(f, [d1, d2, d3, d4]);
});

var _Json_map5 = F6(function(f, d1, d2, d3, d4, d5)
{
	return _Json_mapMany(f, [d1, d2, d3, d4, d5]);
});

var _Json_map6 = F7(function(f, d1, d2, d3, d4, d5, d6)
{
	return _Json_mapMany(f, [d1, d2, d3, d4, d5, d6]);
});

var _Json_map7 = F8(function(f, d1, d2, d3, d4, d5, d6, d7)
{
	return _Json_mapMany(f, [d1, d2, d3, d4, d5, d6, d7]);
});

var _Json_map8 = F9(function(f, d1, d2, d3, d4, d5, d6, d7, d8)
{
	return _Json_mapMany(f, [d1, d2, d3, d4, d5, d6, d7, d8]);
});


// DECODE

var _Json_runOnString = F2(function(decoder, string)
{
	try
	{
		var value = JSON.parse(string);
		return _Json_runHelp(decoder, value);
	}
	catch (e)
	{
		return $elm$core$Result$Err(A2($elm$json$Json$Decode$Failure, 'This is not valid JSON! ' + e.message, _Json_wrap(string)));
	}
});

var _Json_run = F2(function(decoder, value)
{
	return _Json_runHelp(decoder, _Json_unwrap(value));
});

function _Json_runHelp(decoder, value)
{
	switch (decoder.$)
	{
		case 2:
			return decoder.b(value);

		case 5:
			return (value === null)
				? $elm$core$Result$Ok(decoder.c)
				: _Json_expecting('null', value);

		case 3:
			if (!_Json_isArray(value))
			{
				return _Json_expecting('a LIST', value);
			}
			return _Json_runArrayDecoder(decoder.b, value, _List_fromArray);

		case 4:
			if (!_Json_isArray(value))
			{
				return _Json_expecting('an ARRAY', value);
			}
			return _Json_runArrayDecoder(decoder.b, value, _Json_toElmArray);

		case 6:
			var field = decoder.d;
			if (typeof value !== 'object' || value === null || !(field in value))
			{
				return _Json_expecting('an OBJECT with a field named `' + field + '`', value);
			}
			var result = _Json_runHelp(decoder.b, value[field]);
			return ($elm$core$Result$isOk(result)) ? result : $elm$core$Result$Err(A2($elm$json$Json$Decode$Field, field, result.a));

		case 7:
			var index = decoder.e;
			if (!_Json_isArray(value))
			{
				return _Json_expecting('an ARRAY', value);
			}
			if (index >= value.length)
			{
				return _Json_expecting('a LONGER array. Need index ' + index + ' but only see ' + value.length + ' entries', value);
			}
			var result = _Json_runHelp(decoder.b, value[index]);
			return ($elm$core$Result$isOk(result)) ? result : $elm$core$Result$Err(A2($elm$json$Json$Decode$Index, index, result.a));

		case 8:
			if (typeof value !== 'object' || value === null || _Json_isArray(value))
			{
				return _Json_expecting('an OBJECT', value);
			}

			var keyValuePairs = _List_Nil;
			// TODO test perf of Object.keys and switch when support is good enough
			for (var key in value)
			{
				if (value.hasOwnProperty(key))
				{
					var result = _Json_runHelp(decoder.b, value[key]);
					if (!$elm$core$Result$isOk(result))
					{
						return $elm$core$Result$Err(A2($elm$json$Json$Decode$Field, key, result.a));
					}
					keyValuePairs = _List_Cons(_Utils_Tuple2(key, result.a), keyValuePairs);
				}
			}
			return $elm$core$Result$Ok($elm$core$List$reverse(keyValuePairs));

		case 9:
			var answer = decoder.f;
			var decoders = decoder.g;
			for (var i = 0; i < decoders.length; i++)
			{
				var result = _Json_runHelp(decoders[i], value);
				if (!$elm$core$Result$isOk(result))
				{
					return result;
				}
				answer = answer(result.a);
			}
			return $elm$core$Result$Ok(answer);

		case 10:
			var result = _Json_runHelp(decoder.b, value);
			return (!$elm$core$Result$isOk(result))
				? result
				: _Json_runHelp(decoder.h(result.a), value);

		case 11:
			var errors = _List_Nil;
			for (var temp = decoder.g; temp.b; temp = temp.b) // WHILE_CONS
			{
				var result = _Json_runHelp(temp.a, value);
				if ($elm$core$Result$isOk(result))
				{
					return result;
				}
				errors = _List_Cons(result.a, errors);
			}
			return $elm$core$Result$Err($elm$json$Json$Decode$OneOf($elm$core$List$reverse(errors)));

		case 1:
			return $elm$core$Result$Err(A2($elm$json$Json$Decode$Failure, decoder.a, _Json_wrap(value)));

		case 0:
			return $elm$core$Result$Ok(decoder.a);
	}
}

function _Json_runArrayDecoder(decoder, value, toElmValue)
{
	var len = value.length;
	var array = new Array(len);
	for (var i = 0; i < len; i++)
	{
		var result = _Json_runHelp(decoder, value[i]);
		if (!$elm$core$Result$isOk(result))
		{
			return $elm$core$Result$Err(A2($elm$json$Json$Decode$Index, i, result.a));
		}
		array[i] = result.a;
	}
	return $elm$core$Result$Ok(toElmValue(array));
}

function _Json_isArray(value)
{
	return Array.isArray(value) || (typeof FileList !== 'undefined' && value instanceof FileList);
}

function _Json_toElmArray(array)
{
	return A2($elm$core$Array$initialize, array.length, function(i) { return array[i]; });
}

function _Json_expecting(type, value)
{
	return $elm$core$Result$Err(A2($elm$json$Json$Decode$Failure, 'Expecting ' + type, _Json_wrap(value)));
}


// EQUALITY

function _Json_equality(x, y)
{
	if (x === y)
	{
		return true;
	}

	if (x.$ !== y.$)
	{
		return false;
	}

	switch (x.$)
	{
		case 0:
		case 1:
			return x.a === y.a;

		case 2:
			return x.b === y.b;

		case 5:
			return x.c === y.c;

		case 3:
		case 4:
		case 8:
			return _Json_equality(x.b, y.b);

		case 6:
			return x.d === y.d && _Json_equality(x.b, y.b);

		case 7:
			return x.e === y.e && _Json_equality(x.b, y.b);

		case 9:
			return x.f === y.f && _Json_listEquality(x.g, y.g);

		case 10:
			return x.h === y.h && _Json_equality(x.b, y.b);

		case 11:
			return _Json_listEquality(x.g, y.g);
	}
}

function _Json_listEquality(aDecoders, bDecoders)
{
	var len = aDecoders.length;
	if (len !== bDecoders.length)
	{
		return false;
	}
	for (var i = 0; i < len; i++)
	{
		if (!_Json_equality(aDecoders[i], bDecoders[i]))
		{
			return false;
		}
	}
	return true;
}


// ENCODE

var _Json_encode = F2(function(indentLevel, value)
{
	return JSON.stringify(_Json_unwrap(value), null, indentLevel) + '';
});

function _Json_wrap_UNUSED(value) { return { $: 0, a: value }; }
function _Json_unwrap_UNUSED(value) { return value.a; }

function _Json_wrap(value) { return value; }
function _Json_unwrap(value) { return value; }

function _Json_emptyArray() { return []; }
function _Json_emptyObject() { return {}; }

var _Json_addField = F3(function(key, value, object)
{
	object[key] = _Json_unwrap(value);
	return object;
});

function _Json_addEntry(func)
{
	return F2(function(entry, array)
	{
		array.push(_Json_unwrap(func(entry)));
		return array;
	});
}

var _Json_encodeNull = _Json_wrap(null);



// TASKS

function _Scheduler_succeed(value)
{
	return {
		$: 0,
		a: value
	};
}

function _Scheduler_fail(error)
{
	return {
		$: 1,
		a: error
	};
}

function _Scheduler_binding(callback)
{
	return {
		$: 2,
		b: callback,
		c: null
	};
}

var _Scheduler_andThen = F2(function(callback, task)
{
	return {
		$: 3,
		b: callback,
		d: task
	};
});

var _Scheduler_onError = F2(function(callback, task)
{
	return {
		$: 4,
		b: callback,
		d: task
	};
});

function _Scheduler_receive(callback)
{
	return {
		$: 5,
		b: callback
	};
}


// PROCESSES

var _Scheduler_guid = 0;

function _Scheduler_rawSpawn(task)
{
	var proc = {
		$: 0,
		e: _Scheduler_guid++,
		f: task,
		g: null,
		h: []
	};

	_Scheduler_enqueue(proc);

	return proc;
}

function _Scheduler_spawn(task)
{
	return _Scheduler_binding(function(callback) {
		callback(_Scheduler_succeed(_Scheduler_rawSpawn(task)));
	});
}

function _Scheduler_rawSend(proc, msg)
{
	proc.h.push(msg);
	_Scheduler_enqueue(proc);
}

var _Scheduler_send = F2(function(proc, msg)
{
	return _Scheduler_binding(function(callback) {
		_Scheduler_rawSend(proc, msg);
		callback(_Scheduler_succeed(_Utils_Tuple0));
	});
});

function _Scheduler_kill(proc)
{
	return _Scheduler_binding(function(callback) {
		var task = proc.f;
		if (task.$ === 2 && task.c)
		{
			task.c();
		}

		proc.f = null;

		callback(_Scheduler_succeed(_Utils_Tuple0));
	});
}


/* STEP PROCESSES

type alias Process =
  { $ : tag
  , id : unique_id
  , root : Task
  , stack : null | { $: SUCCEED | FAIL, a: callback, b: stack }
  , mailbox : [msg]
  }

*/


var _Scheduler_working = false;
var _Scheduler_queue = [];


function _Scheduler_enqueue(proc)
{
	_Scheduler_queue.push(proc);
	if (_Scheduler_working)
	{
		return;
	}
	_Scheduler_working = true;
	while (proc = _Scheduler_queue.shift())
	{
		_Scheduler_step(proc);
	}
	_Scheduler_working = false;
}


function _Scheduler_step(proc)
{
	while (proc.f)
	{
		var rootTag = proc.f.$;
		if (rootTag === 0 || rootTag === 1)
		{
			while (proc.g && proc.g.$ !== rootTag)
			{
				proc.g = proc.g.i;
			}
			if (!proc.g)
			{
				return;
			}
			proc.f = proc.g.b(proc.f.a);
			proc.g = proc.g.i;
		}
		else if (rootTag === 2)
		{
			proc.f.c = proc.f.b(function(newRoot) {
				proc.f = newRoot;
				_Scheduler_enqueue(proc);
			});
			return;
		}
		else if (rootTag === 5)
		{
			if (proc.h.length === 0)
			{
				return;
			}
			proc.f = proc.f.b(proc.h.shift());
		}
		else // if (rootTag === 3 || rootTag === 4)
		{
			proc.g = {
				$: rootTag === 3 ? 0 : 1,
				b: proc.f.b,
				i: proc.g
			};
			proc.f = proc.f.d;
		}
	}
}



function _Process_sleep(time)
{
	return _Scheduler_binding(function(callback) {
		var id = setTimeout(function() {
			callback(_Scheduler_succeed(_Utils_Tuple0));
		}, time);

		return function() { clearTimeout(id); };
	});
}




// PROGRAMS


var _Platform_worker = F4(function(impl, flagDecoder, debugMetadata, args)
{
	return _Platform_initialize(
		flagDecoder,
		args,
		impl.aS,
		impl.a6,
		impl.a3,
		function() { return function() {} }
	);
});



// INITIALIZE A PROGRAM


function _Platform_initialize(flagDecoder, args, init, update, subscriptions, stepperBuilder)
{
	var result = A2(_Json_run, flagDecoder, _Json_wrap(args ? args['flags'] : undefined));
	$elm$core$Result$isOk(result) || _Debug_crash(2 /**_UNUSED/, _Json_errorToString(result.a) /**/);
	var managers = {};
	var initPair = init(result.a);
	var model = initPair.a;
	var stepper = stepperBuilder(sendToApp, model);
	var ports = _Platform_setupEffects(managers, sendToApp);

	function sendToApp(msg, viewMetadata)
	{
		var pair = A2(update, msg, model);
		stepper(model = pair.a, viewMetadata);
		_Platform_enqueueEffects(managers, pair.b, subscriptions(model));
	}

	_Platform_enqueueEffects(managers, initPair.b, subscriptions(model));

	return ports ? { ports: ports } : {};
}



// TRACK PRELOADS
//
// This is used by code in elm/browser and elm/http
// to register any HTTP requests that are triggered by init.
//


var _Platform_preload;


function _Platform_registerPreload(url)
{
	_Platform_preload.add(url);
}



// EFFECT MANAGERS


var _Platform_effectManagers = {};


function _Platform_setupEffects(managers, sendToApp)
{
	var ports;

	// setup all necessary effect managers
	for (var key in _Platform_effectManagers)
	{
		var manager = _Platform_effectManagers[key];

		if (manager.a)
		{
			ports = ports || {};
			ports[key] = manager.a(key, sendToApp);
		}

		managers[key] = _Platform_instantiateManager(manager, sendToApp);
	}

	return ports;
}


function _Platform_createManager(init, onEffects, onSelfMsg, cmdMap, subMap)
{
	return {
		b: init,
		c: onEffects,
		d: onSelfMsg,
		e: cmdMap,
		f: subMap
	};
}


function _Platform_instantiateManager(info, sendToApp)
{
	var router = {
		g: sendToApp,
		h: undefined
	};

	var onEffects = info.c;
	var onSelfMsg = info.d;
	var cmdMap = info.e;
	var subMap = info.f;

	function loop(state)
	{
		return A2(_Scheduler_andThen, loop, _Scheduler_receive(function(msg)
		{
			var value = msg.a;

			if (msg.$ === 0)
			{
				return A3(onSelfMsg, router, value, state);
			}

			return cmdMap && subMap
				? A4(onEffects, router, value.i, value.j, state)
				: A3(onEffects, router, cmdMap ? value.i : value.j, state);
		}));
	}

	return router.h = _Scheduler_rawSpawn(A2(_Scheduler_andThen, loop, info.b));
}



// ROUTING


var _Platform_sendToApp = F2(function(router, msg)
{
	return _Scheduler_binding(function(callback)
	{
		router.g(msg);
		callback(_Scheduler_succeed(_Utils_Tuple0));
	});
});


var _Platform_sendToSelf = F2(function(router, msg)
{
	return A2(_Scheduler_send, router.h, {
		$: 0,
		a: msg
	});
});



// BAGS


function _Platform_leaf(home)
{
	return function(value)
	{
		return {
			$: 1,
			k: home,
			l: value
		};
	};
}


function _Platform_batch(list)
{
	return {
		$: 2,
		m: list
	};
}


var _Platform_map = F2(function(tagger, bag)
{
	return {
		$: 3,
		n: tagger,
		o: bag
	}
});



// PIPE BAGS INTO EFFECT MANAGERS
//
// Effects must be queued!
//
// Say your init contains a synchronous command, like Time.now or Time.here
//
//   - This will produce a batch of effects (FX_1)
//   - The synchronous task triggers the subsequent `update` call
//   - This will produce a batch of effects (FX_2)
//
// If we just start dispatching FX_2, subscriptions from FX_2 can be processed
// before subscriptions from FX_1. No good! Earlier versions of this code had
// this problem, leading to these reports:
//
//   https://github.com/elm/core/issues/980
//   https://github.com/elm/core/pull/981
//   https://github.com/elm/compiler/issues/1776
//
// The queue is necessary to avoid ordering issues for synchronous commands.


// Why use true/false here? Why not just check the length of the queue?
// The goal is to detect "are we currently dispatching effects?" If we
// are, we need to bail and let the ongoing while loop handle things.
//
// Now say the queue has 1 element. When we dequeue the final element,
// the queue will be empty, but we are still actively dispatching effects.
// So you could get queue jumping in a really tricky category of cases.
//
var _Platform_effectsQueue = [];
var _Platform_effectsActive = false;


function _Platform_enqueueEffects(managers, cmdBag, subBag)
{
	_Platform_effectsQueue.push({ p: managers, q: cmdBag, r: subBag });

	if (_Platform_effectsActive) return;

	_Platform_effectsActive = true;
	for (var fx; fx = _Platform_effectsQueue.shift(); )
	{
		_Platform_dispatchEffects(fx.p, fx.q, fx.r);
	}
	_Platform_effectsActive = false;
}


function _Platform_dispatchEffects(managers, cmdBag, subBag)
{
	var effectsDict = {};
	_Platform_gatherEffects(true, cmdBag, effectsDict, null);
	_Platform_gatherEffects(false, subBag, effectsDict, null);

	for (var home in managers)
	{
		_Scheduler_rawSend(managers[home], {
			$: 'fx',
			a: effectsDict[home] || { i: _List_Nil, j: _List_Nil }
		});
	}
}


function _Platform_gatherEffects(isCmd, bag, effectsDict, taggers)
{
	switch (bag.$)
	{
		case 1:
			var home = bag.k;
			var effect = _Platform_toEffect(isCmd, home, taggers, bag.l);
			effectsDict[home] = _Platform_insert(isCmd, effect, effectsDict[home]);
			return;

		case 2:
			for (var list = bag.m; list.b; list = list.b) // WHILE_CONS
			{
				_Platform_gatherEffects(isCmd, list.a, effectsDict, taggers);
			}
			return;

		case 3:
			_Platform_gatherEffects(isCmd, bag.o, effectsDict, {
				s: bag.n,
				t: taggers
			});
			return;
	}
}


function _Platform_toEffect(isCmd, home, taggers, value)
{
	function applyTaggers(x)
	{
		for (var temp = taggers; temp; temp = temp.t)
		{
			x = temp.s(x);
		}
		return x;
	}

	var map = isCmd
		? _Platform_effectManagers[home].e
		: _Platform_effectManagers[home].f;

	return A2(map, applyTaggers, value)
}


function _Platform_insert(isCmd, newEffect, effects)
{
	effects = effects || { i: _List_Nil, j: _List_Nil };

	isCmd
		? (effects.i = _List_Cons(newEffect, effects.i))
		: (effects.j = _List_Cons(newEffect, effects.j));

	return effects;
}



// PORTS


function _Platform_checkPortName(name)
{
	if (_Platform_effectManagers[name])
	{
		_Debug_crash(3, name)
	}
}



// OUTGOING PORTS


function _Platform_outgoingPort(name, converter)
{
	_Platform_checkPortName(name);
	_Platform_effectManagers[name] = {
		e: _Platform_outgoingPortMap,
		u: converter,
		a: _Platform_setupOutgoingPort
	};
	return _Platform_leaf(name);
}


var _Platform_outgoingPortMap = F2(function(tagger, value) { return value; });


function _Platform_setupOutgoingPort(name)
{
	var subs = [];
	var converter = _Platform_effectManagers[name].u;

	// CREATE MANAGER

	var init = _Process_sleep(0);

	_Platform_effectManagers[name].b = init;
	_Platform_effectManagers[name].c = F3(function(router, cmdList, state)
	{
		for ( ; cmdList.b; cmdList = cmdList.b) // WHILE_CONS
		{
			// grab a separate reference to subs in case unsubscribe is called
			var currentSubs = subs;
			var value = _Json_unwrap(converter(cmdList.a));
			for (var i = 0; i < currentSubs.length; i++)
			{
				currentSubs[i](value);
			}
		}
		return init;
	});

	// PUBLIC API

	function subscribe(callback)
	{
		subs.push(callback);
	}

	function unsubscribe(callback)
	{
		// copy subs into a new array in case unsubscribe is called within a
		// subscribed callback
		subs = subs.slice();
		var index = subs.indexOf(callback);
		if (index >= 0)
		{
			subs.splice(index, 1);
		}
	}

	return {
		subscribe: subscribe,
		unsubscribe: unsubscribe
	};
}



// INCOMING PORTS


function _Platform_incomingPort(name, converter)
{
	_Platform_checkPortName(name);
	_Platform_effectManagers[name] = {
		f: _Platform_incomingPortMap,
		u: converter,
		a: _Platform_setupIncomingPort
	};
	return _Platform_leaf(name);
}


var _Platform_incomingPortMap = F2(function(tagger, finalTagger)
{
	return function(value)
	{
		return tagger(finalTagger(value));
	};
});


function _Platform_setupIncomingPort(name, sendToApp)
{
	var subs = _List_Nil;
	var converter = _Platform_effectManagers[name].u;

	// CREATE MANAGER

	var init = _Scheduler_succeed(null);

	_Platform_effectManagers[name].b = init;
	_Platform_effectManagers[name].c = F3(function(router, subList, state)
	{
		subs = subList;
		return init;
	});

	// PUBLIC API

	function send(incomingValue)
	{
		var result = A2(_Json_run, converter, _Json_wrap(incomingValue));

		$elm$core$Result$isOk(result) || _Debug_crash(4, name, result.a);

		var value = result.a;
		for (var temp = subs; temp.b; temp = temp.b) // WHILE_CONS
		{
			sendToApp(temp.a(value));
		}
	}

	return { send: send };
}



// EXPORT ELM MODULES
//
// Have DEBUG and PROD versions so that we can (1) give nicer errors in
// debug mode and (2) not pay for the bits needed for that in prod mode.
//


function _Platform_export(exports)
{
	scope['Elm']
		? _Platform_mergeExportsProd(scope['Elm'], exports)
		: scope['Elm'] = exports;
}


function _Platform_mergeExportsProd(obj, exports)
{
	for (var name in exports)
	{
		(name in obj)
			? (name == 'init')
				? _Debug_crash(6)
				: _Platform_mergeExportsProd(obj[name], exports[name])
			: (obj[name] = exports[name]);
	}
}


function _Platform_export_UNUSED(exports)
{
	scope['Elm']
		? _Platform_mergeExportsDebug('Elm', scope['Elm'], exports)
		: scope['Elm'] = exports;
}


function _Platform_mergeExportsDebug(moduleName, obj, exports)
{
	for (var name in exports)
	{
		(name in obj)
			? (name == 'init')
				? _Debug_crash(6, moduleName)
				: _Platform_mergeExportsDebug(moduleName + '.' + name, obj[name], exports[name])
			: (obj[name] = exports[name]);
	}
}




// HELPERS


var _VirtualDom_divertHrefToApp;

var _VirtualDom_doc = typeof document !== 'undefined' ? document : {};


function _VirtualDom_appendChild(parent, child)
{
	parent.appendChild(child);
}

var _VirtualDom_init = F4(function(virtualNode, flagDecoder, debugMetadata, args)
{
	// NOTE: this function needs _Platform_export available to work

	/**/
	var node = args['node'];
	//*/
	/**_UNUSED/
	var node = args && args['node'] ? args['node'] : _Debug_crash(0);
	//*/

	node.parentNode.replaceChild(
		_VirtualDom_render(virtualNode, function() {}),
		node
	);

	return {};
});



// TEXT


function _VirtualDom_text(string)
{
	return {
		$: 0,
		a: string
	};
}



// NODE


var _VirtualDom_nodeNS = F2(function(namespace, tag)
{
	return F2(function(factList, kidList)
	{
		for (var kids = [], descendantsCount = 0; kidList.b; kidList = kidList.b) // WHILE_CONS
		{
			var kid = kidList.a;
			descendantsCount += (kid.b || 0);
			kids.push(kid);
		}
		descendantsCount += kids.length;

		return {
			$: 1,
			c: tag,
			d: _VirtualDom_organizeFacts(factList),
			e: kids,
			f: namespace,
			b: descendantsCount
		};
	});
});


var _VirtualDom_node = _VirtualDom_nodeNS(undefined);



// KEYED NODE


var _VirtualDom_keyedNodeNS = F2(function(namespace, tag)
{
	return F2(function(factList, kidList)
	{
		for (var kids = [], descendantsCount = 0; kidList.b; kidList = kidList.b) // WHILE_CONS
		{
			var kid = kidList.a;
			descendantsCount += (kid.b.b || 0);
			kids.push(kid);
		}
		descendantsCount += kids.length;

		return {
			$: 2,
			c: tag,
			d: _VirtualDom_organizeFacts(factList),
			e: kids,
			f: namespace,
			b: descendantsCount
		};
	});
});


var _VirtualDom_keyedNode = _VirtualDom_keyedNodeNS(undefined);



// CUSTOM


function _VirtualDom_custom(factList, model, render, diff)
{
	return {
		$: 3,
		d: _VirtualDom_organizeFacts(factList),
		g: model,
		h: render,
		i: diff
	};
}



// MAP


var _VirtualDom_map = F2(function(tagger, node)
{
	return {
		$: 4,
		j: tagger,
		k: node,
		b: 1 + (node.b || 0)
	};
});



// LAZY


function _VirtualDom_thunk(refs, thunk)
{
	return {
		$: 5,
		l: refs,
		m: thunk,
		k: undefined
	};
}

var _VirtualDom_lazy = F2(function(func, a)
{
	return _VirtualDom_thunk([func, a], function() {
		return func(a);
	});
});

var _VirtualDom_lazy2 = F3(function(func, a, b)
{
	return _VirtualDom_thunk([func, a, b], function() {
		return A2(func, a, b);
	});
});

var _VirtualDom_lazy3 = F4(function(func, a, b, c)
{
	return _VirtualDom_thunk([func, a, b, c], function() {
		return A3(func, a, b, c);
	});
});

var _VirtualDom_lazy4 = F5(function(func, a, b, c, d)
{
	return _VirtualDom_thunk([func, a, b, c, d], function() {
		return A4(func, a, b, c, d);
	});
});

var _VirtualDom_lazy5 = F6(function(func, a, b, c, d, e)
{
	return _VirtualDom_thunk([func, a, b, c, d, e], function() {
		return A5(func, a, b, c, d, e);
	});
});

var _VirtualDom_lazy6 = F7(function(func, a, b, c, d, e, f)
{
	return _VirtualDom_thunk([func, a, b, c, d, e, f], function() {
		return A6(func, a, b, c, d, e, f);
	});
});

var _VirtualDom_lazy7 = F8(function(func, a, b, c, d, e, f, g)
{
	return _VirtualDom_thunk([func, a, b, c, d, e, f, g], function() {
		return A7(func, a, b, c, d, e, f, g);
	});
});

var _VirtualDom_lazy8 = F9(function(func, a, b, c, d, e, f, g, h)
{
	return _VirtualDom_thunk([func, a, b, c, d, e, f, g, h], function() {
		return A8(func, a, b, c, d, e, f, g, h);
	});
});



// FACTS


var _VirtualDom_on = F2(function(key, handler)
{
	return {
		$: 'a0',
		n: key,
		o: handler
	};
});
var _VirtualDom_style = F2(function(key, value)
{
	return {
		$: 'a1',
		n: key,
		o: value
	};
});
var _VirtualDom_property = F2(function(key, value)
{
	return {
		$: 'a2',
		n: key,
		o: value
	};
});
var _VirtualDom_attribute = F2(function(key, value)
{
	return {
		$: 'a3',
		n: key,
		o: value
	};
});
var _VirtualDom_attributeNS = F3(function(namespace, key, value)
{
	return {
		$: 'a4',
		n: key,
		o: { f: namespace, o: value }
	};
});



// XSS ATTACK VECTOR CHECKS


function _VirtualDom_noScript(tag)
{
	return tag == 'script' ? 'p' : tag;
}

function _VirtualDom_noOnOrFormAction(key)
{
	return /^(on|formAction$)/i.test(key) ? 'data-' + key : key;
}

function _VirtualDom_noInnerHtmlOrFormAction(key)
{
	return key == 'innerHTML' || key == 'formAction' ? 'data-' + key : key;
}

function _VirtualDom_noJavaScriptUri(value)
{
	return /^javascript:/i.test(value.replace(/\s/g,'')) ? '' : value;
}

function _VirtualDom_noJavaScriptUri_UNUSED(value)
{
	return /^javascript:/i.test(value.replace(/\s/g,''))
		? 'javascript:alert("This is an XSS vector. Please use ports or web components instead.")'
		: value;
}

function _VirtualDom_noJavaScriptOrHtmlUri(value)
{
	return /^\s*(javascript:|data:text\/html)/i.test(value) ? '' : value;
}

function _VirtualDom_noJavaScriptOrHtmlUri_UNUSED(value)
{
	return /^\s*(javascript:|data:text\/html)/i.test(value)
		? 'javascript:alert("This is an XSS vector. Please use ports or web components instead.")'
		: value;
}



// MAP FACTS


var _VirtualDom_mapAttribute = F2(function(func, attr)
{
	return (attr.$ === 'a0')
		? A2(_VirtualDom_on, attr.n, _VirtualDom_mapHandler(func, attr.o))
		: attr;
});

function _VirtualDom_mapHandler(func, handler)
{
	var tag = $elm$virtual_dom$VirtualDom$toHandlerInt(handler);

	// 0 = Normal
	// 1 = MayStopPropagation
	// 2 = MayPreventDefault
	// 3 = Custom

	return {
		$: handler.$,
		a:
			!tag
				? A2($elm$json$Json$Decode$map, func, handler.a)
				:
			A3($elm$json$Json$Decode$map2,
				tag < 3
					? _VirtualDom_mapEventTuple
					: _VirtualDom_mapEventRecord,
				$elm$json$Json$Decode$succeed(func),
				handler.a
			)
	};
}

var _VirtualDom_mapEventTuple = F2(function(func, tuple)
{
	return _Utils_Tuple2(func(tuple.a), tuple.b);
});

var _VirtualDom_mapEventRecord = F2(function(func, record)
{
	return {
		q: func(record.q),
		Z: record.Z,
		V: record.V
	}
});



// ORGANIZE FACTS


function _VirtualDom_organizeFacts(factList)
{
	for (var facts = {}; factList.b; factList = factList.b) // WHILE_CONS
	{
		var entry = factList.a;

		var tag = entry.$;
		var key = entry.n;
		var value = entry.o;

		if (tag === 'a2')
		{
			(key === 'className')
				? _VirtualDom_addClass(facts, key, _Json_unwrap(value))
				: facts[key] = _Json_unwrap(value);

			continue;
		}

		var subFacts = facts[tag] || (facts[tag] = {});
		(tag === 'a3' && key === 'class')
			? _VirtualDom_addClass(subFacts, key, value)
			: subFacts[key] = value;
	}

	return facts;
}

function _VirtualDom_addClass(object, key, newClass)
{
	var classes = object[key];
	object[key] = classes ? classes + ' ' + newClass : newClass;
}



// RENDER


function _VirtualDom_render(vNode, eventNode)
{
	var tag = vNode.$;

	if (tag === 5)
	{
		return _VirtualDom_render(vNode.k || (vNode.k = vNode.m()), eventNode);
	}

	if (tag === 0)
	{
		return _VirtualDom_doc.createTextNode(vNode.a);
	}

	if (tag === 4)
	{
		var subNode = vNode.k;
		var tagger = vNode.j;

		while (subNode.$ === 4)
		{
			typeof tagger !== 'object'
				? tagger = [tagger, subNode.j]
				: tagger.push(subNode.j);

			subNode = subNode.k;
		}

		var subEventRoot = { j: tagger, p: eventNode };
		var domNode = _VirtualDom_render(subNode, subEventRoot);
		domNode.elm_event_node_ref = subEventRoot;
		return domNode;
	}

	if (tag === 3)
	{
		var domNode = vNode.h(vNode.g);
		_VirtualDom_applyFacts(domNode, eventNode, vNode.d);
		return domNode;
	}

	// at this point `tag` must be 1 or 2

	var domNode = vNode.f
		? _VirtualDom_doc.createElementNS(vNode.f, vNode.c)
		: _VirtualDom_doc.createElement(vNode.c);

	if (_VirtualDom_divertHrefToApp && vNode.c == 'a')
	{
		domNode.addEventListener('click', _VirtualDom_divertHrefToApp(domNode));
	}

	_VirtualDom_applyFacts(domNode, eventNode, vNode.d);

	for (var kids = vNode.e, i = 0; i < kids.length; i++)
	{
		_VirtualDom_appendChild(domNode, _VirtualDom_render(tag === 1 ? kids[i] : kids[i].b, eventNode));
	}

	return domNode;
}



// APPLY FACTS


function _VirtualDom_applyFacts(domNode, eventNode, facts)
{
	for (var key in facts)
	{
		var value = facts[key];

		key === 'a1'
			? _VirtualDom_applyStyles(domNode, value)
			:
		key === 'a0'
			? _VirtualDom_applyEvents(domNode, eventNode, value)
			:
		key === 'a3'
			? _VirtualDom_applyAttrs(domNode, value)
			:
		key === 'a4'
			? _VirtualDom_applyAttrsNS(domNode, value)
			:
		((key !== 'value' && key !== 'checked') || domNode[key] !== value) && (domNode[key] = value);
	}
}



// APPLY STYLES


function _VirtualDom_applyStyles(domNode, styles)
{
	var domNodeStyle = domNode.style;

	for (var key in styles)
	{
		domNodeStyle[key] = styles[key];
	}
}



// APPLY ATTRS


function _VirtualDom_applyAttrs(domNode, attrs)
{
	for (var key in attrs)
	{
		var value = attrs[key];
		typeof value !== 'undefined'
			? domNode.setAttribute(key, value)
			: domNode.removeAttribute(key);
	}
}



// APPLY NAMESPACED ATTRS


function _VirtualDom_applyAttrsNS(domNode, nsAttrs)
{
	for (var key in nsAttrs)
	{
		var pair = nsAttrs[key];
		var namespace = pair.f;
		var value = pair.o;

		typeof value !== 'undefined'
			? domNode.setAttributeNS(namespace, key, value)
			: domNode.removeAttributeNS(namespace, key);
	}
}



// APPLY EVENTS


function _VirtualDom_applyEvents(domNode, eventNode, events)
{
	var allCallbacks = domNode.elmFs || (domNode.elmFs = {});

	for (var key in events)
	{
		var newHandler = events[key];
		var oldCallback = allCallbacks[key];

		if (!newHandler)
		{
			domNode.removeEventListener(key, oldCallback);
			allCallbacks[key] = undefined;
			continue;
		}

		if (oldCallback)
		{
			var oldHandler = oldCallback.q;
			if (oldHandler.$ === newHandler.$)
			{
				oldCallback.q = newHandler;
				continue;
			}
			domNode.removeEventListener(key, oldCallback);
		}

		oldCallback = _VirtualDom_makeCallback(eventNode, newHandler);
		domNode.addEventListener(key, oldCallback,
			_VirtualDom_passiveSupported
			&& { passive: $elm$virtual_dom$VirtualDom$toHandlerInt(newHandler) < 2 }
		);
		allCallbacks[key] = oldCallback;
	}
}



// PASSIVE EVENTS


var _VirtualDom_passiveSupported;

try
{
	window.addEventListener('t', null, Object.defineProperty({}, 'passive', {
		get: function() { _VirtualDom_passiveSupported = true; }
	}));
}
catch(e) {}



// EVENT HANDLERS


function _VirtualDom_makeCallback(eventNode, initialHandler)
{
	function callback(event)
	{
		var handler = callback.q;
		var result = _Json_runHelp(handler.a, event);

		if (!$elm$core$Result$isOk(result))
		{
			return;
		}

		var tag = $elm$virtual_dom$VirtualDom$toHandlerInt(handler);

		// 0 = Normal
		// 1 = MayStopPropagation
		// 2 = MayPreventDefault
		// 3 = Custom

		var value = result.a;
		var message = !tag ? value : tag < 3 ? value.a : value.q;
		var stopPropagation = tag == 1 ? value.b : tag == 3 && value.Z;
		var currentEventNode = (
			stopPropagation && event.stopPropagation(),
			(tag == 2 ? value.b : tag == 3 && value.V) && event.preventDefault(),
			eventNode
		);
		var tagger;
		var i;
		while (tagger = currentEventNode.j)
		{
			if (typeof tagger == 'function')
			{
				message = tagger(message);
			}
			else
			{
				for (var i = tagger.length; i--; )
				{
					message = tagger[i](message);
				}
			}
			currentEventNode = currentEventNode.p;
		}
		currentEventNode(message, stopPropagation); // stopPropagation implies isSync
	}

	callback.q = initialHandler;

	return callback;
}

function _VirtualDom_equalEvents(x, y)
{
	return x.$ == y.$ && _Json_equality(x.a, y.a);
}



// DIFF


// TODO: Should we do patches like in iOS?
//
// type Patch
//   = At Int Patch
//   | Batch (List Patch)
//   | Change ...
//
// How could it not be better?
//
function _VirtualDom_diff(x, y)
{
	var patches = [];
	_VirtualDom_diffHelp(x, y, patches, 0);
	return patches;
}


function _VirtualDom_pushPatch(patches, type, index, data)
{
	var patch = {
		$: type,
		r: index,
		s: data,
		t: undefined,
		u: undefined
	};
	patches.push(patch);
	return patch;
}


function _VirtualDom_diffHelp(x, y, patches, index)
{
	if (x === y)
	{
		return;
	}

	var xType = x.$;
	var yType = y.$;

	// Bail if you run into different types of nodes. Implies that the
	// structure has changed significantly and it's not worth a diff.
	if (xType !== yType)
	{
		if (xType === 1 && yType === 2)
		{
			y = _VirtualDom_dekey(y);
			yType = 1;
		}
		else
		{
			_VirtualDom_pushPatch(patches, 0, index, y);
			return;
		}
	}

	// Now we know that both nodes are the same $.
	switch (yType)
	{
		case 5:
			var xRefs = x.l;
			var yRefs = y.l;
			var i = xRefs.length;
			var same = i === yRefs.length;
			while (same && i--)
			{
				same = xRefs[i] === yRefs[i];
			}
			if (same)
			{
				y.k = x.k;
				return;
			}
			y.k = y.m();
			var subPatches = [];
			_VirtualDom_diffHelp(x.k, y.k, subPatches, 0);
			subPatches.length > 0 && _VirtualDom_pushPatch(patches, 1, index, subPatches);
			return;

		case 4:
			// gather nested taggers
			var xTaggers = x.j;
			var yTaggers = y.j;
			var nesting = false;

			var xSubNode = x.k;
			while (xSubNode.$ === 4)
			{
				nesting = true;

				typeof xTaggers !== 'object'
					? xTaggers = [xTaggers, xSubNode.j]
					: xTaggers.push(xSubNode.j);

				xSubNode = xSubNode.k;
			}

			var ySubNode = y.k;
			while (ySubNode.$ === 4)
			{
				nesting = true;

				typeof yTaggers !== 'object'
					? yTaggers = [yTaggers, ySubNode.j]
					: yTaggers.push(ySubNode.j);

				ySubNode = ySubNode.k;
			}

			// Just bail if different numbers of taggers. This implies the
			// structure of the virtual DOM has changed.
			if (nesting && xTaggers.length !== yTaggers.length)
			{
				_VirtualDom_pushPatch(patches, 0, index, y);
				return;
			}

			// check if taggers are "the same"
			if (nesting ? !_VirtualDom_pairwiseRefEqual(xTaggers, yTaggers) : xTaggers !== yTaggers)
			{
				_VirtualDom_pushPatch(patches, 2, index, yTaggers);
			}

			// diff everything below the taggers
			_VirtualDom_diffHelp(xSubNode, ySubNode, patches, index + 1);
			return;

		case 0:
			if (x.a !== y.a)
			{
				_VirtualDom_pushPatch(patches, 3, index, y.a);
			}
			return;

		case 1:
			_VirtualDom_diffNodes(x, y, patches, index, _VirtualDom_diffKids);
			return;

		case 2:
			_VirtualDom_diffNodes(x, y, patches, index, _VirtualDom_diffKeyedKids);
			return;

		case 3:
			if (x.h !== y.h)
			{
				_VirtualDom_pushPatch(patches, 0, index, y);
				return;
			}

			var factsDiff = _VirtualDom_diffFacts(x.d, y.d);
			factsDiff && _VirtualDom_pushPatch(patches, 4, index, factsDiff);

			var patch = y.i(x.g, y.g);
			patch && _VirtualDom_pushPatch(patches, 5, index, patch);

			return;
	}
}

// assumes the incoming arrays are the same length
function _VirtualDom_pairwiseRefEqual(as, bs)
{
	for (var i = 0; i < as.length; i++)
	{
		if (as[i] !== bs[i])
		{
			return false;
		}
	}

	return true;
}

function _VirtualDom_diffNodes(x, y, patches, index, diffKids)
{
	// Bail if obvious indicators have changed. Implies more serious
	// structural changes such that it's not worth it to diff.
	if (x.c !== y.c || x.f !== y.f)
	{
		_VirtualDom_pushPatch(patches, 0, index, y);
		return;
	}

	var factsDiff = _VirtualDom_diffFacts(x.d, y.d);
	factsDiff && _VirtualDom_pushPatch(patches, 4, index, factsDiff);

	diffKids(x, y, patches, index);
}



// DIFF FACTS


// TODO Instead of creating a new diff object, it's possible to just test if
// there *is* a diff. During the actual patch, do the diff again and make the
// modifications directly. This way, there's no new allocations. Worth it?
function _VirtualDom_diffFacts(x, y, category)
{
	var diff;

	// look for changes and removals
	for (var xKey in x)
	{
		if (xKey === 'a1' || xKey === 'a0' || xKey === 'a3' || xKey === 'a4')
		{
			var subDiff = _VirtualDom_diffFacts(x[xKey], y[xKey] || {}, xKey);
			if (subDiff)
			{
				diff = diff || {};
				diff[xKey] = subDiff;
			}
			continue;
		}

		// remove if not in the new facts
		if (!(xKey in y))
		{
			diff = diff || {};
			diff[xKey] =
				!category
					? (typeof x[xKey] === 'string' ? '' : null)
					:
				(category === 'a1')
					? ''
					:
				(category === 'a0' || category === 'a3')
					? undefined
					:
				{ f: x[xKey].f, o: undefined };

			continue;
		}

		var xValue = x[xKey];
		var yValue = y[xKey];

		// reference equal, so don't worry about it
		if (xValue === yValue && xKey !== 'value' && xKey !== 'checked'
			|| category === 'a0' && _VirtualDom_equalEvents(xValue, yValue))
		{
			continue;
		}

		diff = diff || {};
		diff[xKey] = yValue;
	}

	// add new stuff
	for (var yKey in y)
	{
		if (!(yKey in x))
		{
			diff = diff || {};
			diff[yKey] = y[yKey];
		}
	}

	return diff;
}



// DIFF KIDS


function _VirtualDom_diffKids(xParent, yParent, patches, index)
{
	var xKids = xParent.e;
	var yKids = yParent.e;

	var xLen = xKids.length;
	var yLen = yKids.length;

	// FIGURE OUT IF THERE ARE INSERTS OR REMOVALS

	if (xLen > yLen)
	{
		_VirtualDom_pushPatch(patches, 6, index, {
			v: yLen,
			i: xLen - yLen
		});
	}
	else if (xLen < yLen)
	{
		_VirtualDom_pushPatch(patches, 7, index, {
			v: xLen,
			e: yKids
		});
	}

	// PAIRWISE DIFF EVERYTHING ELSE

	for (var minLen = xLen < yLen ? xLen : yLen, i = 0; i < minLen; i++)
	{
		var xKid = xKids[i];
		_VirtualDom_diffHelp(xKid, yKids[i], patches, ++index);
		index += xKid.b || 0;
	}
}



// KEYED DIFF


function _VirtualDom_diffKeyedKids(xParent, yParent, patches, rootIndex)
{
	var localPatches = [];

	var changes = {}; // Dict String Entry
	var inserts = []; // Array { index : Int, entry : Entry }
	// type Entry = { tag : String, vnode : VNode, index : Int, data : _ }

	var xKids = xParent.e;
	var yKids = yParent.e;
	var xLen = xKids.length;
	var yLen = yKids.length;
	var xIndex = 0;
	var yIndex = 0;

	var index = rootIndex;

	while (xIndex < xLen && yIndex < yLen)
	{
		var x = xKids[xIndex];
		var y = yKids[yIndex];

		var xKey = x.a;
		var yKey = y.a;
		var xNode = x.b;
		var yNode = y.b;

		var newMatch = undefined;
		var oldMatch = undefined;

		// check if keys match

		if (xKey === yKey)
		{
			index++;
			_VirtualDom_diffHelp(xNode, yNode, localPatches, index);
			index += xNode.b || 0;

			xIndex++;
			yIndex++;
			continue;
		}

		// look ahead 1 to detect insertions and removals.

		var xNext = xKids[xIndex + 1];
		var yNext = yKids[yIndex + 1];

		if (xNext)
		{
			var xNextKey = xNext.a;
			var xNextNode = xNext.b;
			oldMatch = yKey === xNextKey;
		}

		if (yNext)
		{
			var yNextKey = yNext.a;
			var yNextNode = yNext.b;
			newMatch = xKey === yNextKey;
		}


		// swap x and y
		if (newMatch && oldMatch)
		{
			index++;
			_VirtualDom_diffHelp(xNode, yNextNode, localPatches, index);
			_VirtualDom_insertNode(changes, localPatches, xKey, yNode, yIndex, inserts);
			index += xNode.b || 0;

			index++;
			_VirtualDom_removeNode(changes, localPatches, xKey, xNextNode, index);
			index += xNextNode.b || 0;

			xIndex += 2;
			yIndex += 2;
			continue;
		}

		// insert y
		if (newMatch)
		{
			index++;
			_VirtualDom_insertNode(changes, localPatches, yKey, yNode, yIndex, inserts);
			_VirtualDom_diffHelp(xNode, yNextNode, localPatches, index);
			index += xNode.b || 0;

			xIndex += 1;
			yIndex += 2;
			continue;
		}

		// remove x
		if (oldMatch)
		{
			index++;
			_VirtualDom_removeNode(changes, localPatches, xKey, xNode, index);
			index += xNode.b || 0;

			index++;
			_VirtualDom_diffHelp(xNextNode, yNode, localPatches, index);
			index += xNextNode.b || 0;

			xIndex += 2;
			yIndex += 1;
			continue;
		}

		// remove x, insert y
		if (xNext && xNextKey === yNextKey)
		{
			index++;
			_VirtualDom_removeNode(changes, localPatches, xKey, xNode, index);
			_VirtualDom_insertNode(changes, localPatches, yKey, yNode, yIndex, inserts);
			index += xNode.b || 0;

			index++;
			_VirtualDom_diffHelp(xNextNode, yNextNode, localPatches, index);
			index += xNextNode.b || 0;

			xIndex += 2;
			yIndex += 2;
			continue;
		}

		break;
	}

	// eat up any remaining nodes with removeNode and insertNode

	while (xIndex < xLen)
	{
		index++;
		var x = xKids[xIndex];
		var xNode = x.b;
		_VirtualDom_removeNode(changes, localPatches, x.a, xNode, index);
		index += xNode.b || 0;
		xIndex++;
	}

	while (yIndex < yLen)
	{
		var endInserts = endInserts || [];
		var y = yKids[yIndex];
		_VirtualDom_insertNode(changes, localPatches, y.a, y.b, undefined, endInserts);
		yIndex++;
	}

	if (localPatches.length > 0 || inserts.length > 0 || endInserts)
	{
		_VirtualDom_pushPatch(patches, 8, rootIndex, {
			w: localPatches,
			x: inserts,
			y: endInserts
		});
	}
}



// CHANGES FROM KEYED DIFF


var _VirtualDom_POSTFIX = '_elmW6BL';


function _VirtualDom_insertNode(changes, localPatches, key, vnode, yIndex, inserts)
{
	var entry = changes[key];

	// never seen this key before
	if (!entry)
	{
		entry = {
			c: 0,
			z: vnode,
			r: yIndex,
			s: undefined
		};

		inserts.push({ r: yIndex, A: entry });
		changes[key] = entry;

		return;
	}

	// this key was removed earlier, a match!
	if (entry.c === 1)
	{
		inserts.push({ r: yIndex, A: entry });

		entry.c = 2;
		var subPatches = [];
		_VirtualDom_diffHelp(entry.z, vnode, subPatches, entry.r);
		entry.r = yIndex;
		entry.s.s = {
			w: subPatches,
			A: entry
		};

		return;
	}

	// this key has already been inserted or moved, a duplicate!
	_VirtualDom_insertNode(changes, localPatches, key + _VirtualDom_POSTFIX, vnode, yIndex, inserts);
}


function _VirtualDom_removeNode(changes, localPatches, key, vnode, index)
{
	var entry = changes[key];

	// never seen this key before
	if (!entry)
	{
		var patch = _VirtualDom_pushPatch(localPatches, 9, index, undefined);

		changes[key] = {
			c: 1,
			z: vnode,
			r: index,
			s: patch
		};

		return;
	}

	// this key was inserted earlier, a match!
	if (entry.c === 0)
	{
		entry.c = 2;
		var subPatches = [];
		_VirtualDom_diffHelp(vnode, entry.z, subPatches, index);

		_VirtualDom_pushPatch(localPatches, 9, index, {
			w: subPatches,
			A: entry
		});

		return;
	}

	// this key has already been removed or moved, a duplicate!
	_VirtualDom_removeNode(changes, localPatches, key + _VirtualDom_POSTFIX, vnode, index);
}



// ADD DOM NODES
//
// Each DOM node has an "index" assigned in order of traversal. It is important
// to minimize our crawl over the actual DOM, so these indexes (along with the
// descendantsCount of virtual nodes) let us skip touching entire subtrees of
// the DOM if we know there are no patches there.


function _VirtualDom_addDomNodes(domNode, vNode, patches, eventNode)
{
	_VirtualDom_addDomNodesHelp(domNode, vNode, patches, 0, 0, vNode.b, eventNode);
}


// assumes `patches` is non-empty and indexes increase monotonically.
function _VirtualDom_addDomNodesHelp(domNode, vNode, patches, i, low, high, eventNode)
{
	var patch = patches[i];
	var index = patch.r;

	while (index === low)
	{
		var patchType = patch.$;

		if (patchType === 1)
		{
			_VirtualDom_addDomNodes(domNode, vNode.k, patch.s, eventNode);
		}
		else if (patchType === 8)
		{
			patch.t = domNode;
			patch.u = eventNode;

			var subPatches = patch.s.w;
			if (subPatches.length > 0)
			{
				_VirtualDom_addDomNodesHelp(domNode, vNode, subPatches, 0, low, high, eventNode);
			}
		}
		else if (patchType === 9)
		{
			patch.t = domNode;
			patch.u = eventNode;

			var data = patch.s;
			if (data)
			{
				data.A.s = domNode;
				var subPatches = data.w;
				if (subPatches.length > 0)
				{
					_VirtualDom_addDomNodesHelp(domNode, vNode, subPatches, 0, low, high, eventNode);
				}
			}
		}
		else
		{
			patch.t = domNode;
			patch.u = eventNode;
		}

		i++;

		if (!(patch = patches[i]) || (index = patch.r) > high)
		{
			return i;
		}
	}

	var tag = vNode.$;

	if (tag === 4)
	{
		var subNode = vNode.k;

		while (subNode.$ === 4)
		{
			subNode = subNode.k;
		}

		return _VirtualDom_addDomNodesHelp(domNode, subNode, patches, i, low + 1, high, domNode.elm_event_node_ref);
	}

	// tag must be 1 or 2 at this point

	var vKids = vNode.e;
	var childNodes = domNode.childNodes;
	for (var j = 0; j < vKids.length; j++)
	{
		low++;
		var vKid = tag === 1 ? vKids[j] : vKids[j].b;
		var nextLow = low + (vKid.b || 0);
		if (low <= index && index <= nextLow)
		{
			i = _VirtualDom_addDomNodesHelp(childNodes[j], vKid, patches, i, low, nextLow, eventNode);
			if (!(patch = patches[i]) || (index = patch.r) > high)
			{
				return i;
			}
		}
		low = nextLow;
	}
	return i;
}



// APPLY PATCHES


function _VirtualDom_applyPatches(rootDomNode, oldVirtualNode, patches, eventNode)
{
	if (patches.length === 0)
	{
		return rootDomNode;
	}

	_VirtualDom_addDomNodes(rootDomNode, oldVirtualNode, patches, eventNode);
	return _VirtualDom_applyPatchesHelp(rootDomNode, patches);
}

function _VirtualDom_applyPatchesHelp(rootDomNode, patches)
{
	for (var i = 0; i < patches.length; i++)
	{
		var patch = patches[i];
		var localDomNode = patch.t
		var newNode = _VirtualDom_applyPatch(localDomNode, patch);
		if (localDomNode === rootDomNode)
		{
			rootDomNode = newNode;
		}
	}
	return rootDomNode;
}

function _VirtualDom_applyPatch(domNode, patch)
{
	switch (patch.$)
	{
		case 0:
			return _VirtualDom_applyPatchRedraw(domNode, patch.s, patch.u);

		case 4:
			_VirtualDom_applyFacts(domNode, patch.u, patch.s);
			return domNode;

		case 3:
			domNode.replaceData(0, domNode.length, patch.s);
			return domNode;

		case 1:
			return _VirtualDom_applyPatchesHelp(domNode, patch.s);

		case 2:
			if (domNode.elm_event_node_ref)
			{
				domNode.elm_event_node_ref.j = patch.s;
			}
			else
			{
				domNode.elm_event_node_ref = { j: patch.s, p: patch.u };
			}
			return domNode;

		case 6:
			var data = patch.s;
			for (var i = 0; i < data.i; i++)
			{
				domNode.removeChild(domNode.childNodes[data.v]);
			}
			return domNode;

		case 7:
			var data = patch.s;
			var kids = data.e;
			var i = data.v;
			var theEnd = domNode.childNodes[i];
			for (; i < kids.length; i++)
			{
				domNode.insertBefore(_VirtualDom_render(kids[i], patch.u), theEnd);
			}
			return domNode;

		case 9:
			var data = patch.s;
			if (!data)
			{
				domNode.parentNode.removeChild(domNode);
				return domNode;
			}
			var entry = data.A;
			if (typeof entry.r !== 'undefined')
			{
				domNode.parentNode.removeChild(domNode);
			}
			entry.s = _VirtualDom_applyPatchesHelp(domNode, data.w);
			return domNode;

		case 8:
			return _VirtualDom_applyPatchReorder(domNode, patch);

		case 5:
			return patch.s(domNode);

		default:
			_Debug_crash(10); // 'Ran into an unknown patch!'
	}
}


function _VirtualDom_applyPatchRedraw(domNode, vNode, eventNode)
{
	var parentNode = domNode.parentNode;
	var newNode = _VirtualDom_render(vNode, eventNode);

	if (!newNode.elm_event_node_ref)
	{
		newNode.elm_event_node_ref = domNode.elm_event_node_ref;
	}

	if (parentNode && newNode !== domNode)
	{
		parentNode.replaceChild(newNode, domNode);
	}
	return newNode;
}


function _VirtualDom_applyPatchReorder(domNode, patch)
{
	var data = patch.s;

	// remove end inserts
	var frag = _VirtualDom_applyPatchReorderEndInsertsHelp(data.y, patch);

	// removals
	domNode = _VirtualDom_applyPatchesHelp(domNode, data.w);

	// inserts
	var inserts = data.x;
	for (var i = 0; i < inserts.length; i++)
	{
		var insert = inserts[i];
		var entry = insert.A;
		var node = entry.c === 2
			? entry.s
			: _VirtualDom_render(entry.z, patch.u);
		domNode.insertBefore(node, domNode.childNodes[insert.r]);
	}

	// add end inserts
	if (frag)
	{
		_VirtualDom_appendChild(domNode, frag);
	}

	return domNode;
}


function _VirtualDom_applyPatchReorderEndInsertsHelp(endInserts, patch)
{
	if (!endInserts)
	{
		return;
	}

	var frag = _VirtualDom_doc.createDocumentFragment();
	for (var i = 0; i < endInserts.length; i++)
	{
		var insert = endInserts[i];
		var entry = insert.A;
		_VirtualDom_appendChild(frag, entry.c === 2
			? entry.s
			: _VirtualDom_render(entry.z, patch.u)
		);
	}
	return frag;
}


function _VirtualDom_virtualize(node)
{
	// TEXT NODES

	if (node.nodeType === 3)
	{
		return _VirtualDom_text(node.textContent);
	}


	// WEIRD NODES

	if (node.nodeType !== 1)
	{
		return _VirtualDom_text('');
	}


	// ELEMENT NODES

	var attrList = _List_Nil;
	var attrs = node.attributes;
	for (var i = attrs.length; i--; )
	{
		var attr = attrs[i];
		var name = attr.name;
		var value = attr.value;
		attrList = _List_Cons( A2(_VirtualDom_attribute, name, value), attrList );
	}

	var tag = node.tagName.toLowerCase();
	var kidList = _List_Nil;
	var kids = node.childNodes;

	for (var i = kids.length; i--; )
	{
		kidList = _List_Cons(_VirtualDom_virtualize(kids[i]), kidList);
	}
	return A3(_VirtualDom_node, tag, attrList, kidList);
}

function _VirtualDom_dekey(keyedNode)
{
	var keyedKids = keyedNode.e;
	var len = keyedKids.length;
	var kids = new Array(len);
	for (var i = 0; i < len; i++)
	{
		kids[i] = keyedKids[i].b;
	}

	return {
		$: 1,
		c: keyedNode.c,
		d: keyedNode.d,
		e: kids,
		f: keyedNode.f,
		b: keyedNode.b
	};
}




// ELEMENT


var _Debugger_element;

var _Browser_element = _Debugger_element || F4(function(impl, flagDecoder, debugMetadata, args)
{
	return _Platform_initialize(
		flagDecoder,
		args,
		impl.aS,
		impl.a6,
		impl.a3,
		function(sendToApp, initialModel) {
			var view = impl.a8;
			/**/
			var domNode = args['node'];
			//*/
			/**_UNUSED/
			var domNode = args && args['node'] ? args['node'] : _Debug_crash(0);
			//*/
			var currNode = _VirtualDom_virtualize(domNode);

			return _Browser_makeAnimator(initialModel, function(model)
			{
				var nextNode = view(model);
				var patches = _VirtualDom_diff(currNode, nextNode);
				domNode = _VirtualDom_applyPatches(domNode, currNode, patches, sendToApp);
				currNode = nextNode;
			});
		}
	);
});



// DOCUMENT


var _Debugger_document;

var _Browser_document = _Debugger_document || F4(function(impl, flagDecoder, debugMetadata, args)
{
	return _Platform_initialize(
		flagDecoder,
		args,
		impl.aS,
		impl.a6,
		impl.a3,
		function(sendToApp, initialModel) {
			var divertHrefToApp = impl.W && impl.W(sendToApp)
			var view = impl.a8;
			var title = _VirtualDom_doc.title;
			var bodyNode = _VirtualDom_doc.body;
			var currNode = _VirtualDom_virtualize(bodyNode);
			return _Browser_makeAnimator(initialModel, function(model)
			{
				_VirtualDom_divertHrefToApp = divertHrefToApp;
				var doc = view(model);
				var nextNode = _VirtualDom_node('body')(_List_Nil)(doc.aH);
				var patches = _VirtualDom_diff(currNode, nextNode);
				bodyNode = _VirtualDom_applyPatches(bodyNode, currNode, patches, sendToApp);
				currNode = nextNode;
				_VirtualDom_divertHrefToApp = 0;
				(title !== doc.a5) && (_VirtualDom_doc.title = title = doc.a5);
			});
		}
	);
});



// ANIMATION


var _Browser_cancelAnimationFrame =
	typeof cancelAnimationFrame !== 'undefined'
		? cancelAnimationFrame
		: function(id) { clearTimeout(id); };

var _Browser_requestAnimationFrame =
	typeof requestAnimationFrame !== 'undefined'
		? requestAnimationFrame
		: function(callback) { return setTimeout(callback, 1000 / 60); };


function _Browser_makeAnimator(model, draw)
{
	draw(model);

	var state = 0;

	function updateIfNeeded()
	{
		state = state === 1
			? 0
			: ( _Browser_requestAnimationFrame(updateIfNeeded), draw(model), 1 );
	}

	return function(nextModel, isSync)
	{
		model = nextModel;

		isSync
			? ( draw(model),
				state === 2 && (state = 1)
				)
			: ( state === 0 && _Browser_requestAnimationFrame(updateIfNeeded),
				state = 2
				);
	};
}



// APPLICATION


function _Browser_application(impl)
{
	var onUrlChange = impl.aW;
	var onUrlRequest = impl.aX;
	var key = function() { key.a(onUrlChange(_Browser_getUrl())); };

	return _Browser_document({
		W: function(sendToApp)
		{
			key.a = sendToApp;
			_Browser_window.addEventListener('popstate', key);
			_Browser_window.navigator.userAgent.indexOf('Trident') < 0 || _Browser_window.addEventListener('hashchange', key);

			return F2(function(domNode, event)
			{
				if (!event.ctrlKey && !event.metaKey && !event.shiftKey && event.button < 1 && !domNode.target && !domNode.hasAttribute('download'))
				{
					event.preventDefault();
					var href = domNode.href;
					var curr = _Browser_getUrl();
					var next = $elm$url$Url$fromString(href).a;
					sendToApp(onUrlRequest(
						(next
							&& curr.ap === next.ap
							&& curr.ah === next.ah
							&& curr.am.a === next.am.a
						)
							? $elm$browser$Browser$Internal(next)
							: $elm$browser$Browser$External(href)
					));
				}
			});
		},
		aS: function(flags)
		{
			return A3(impl.aS, flags, _Browser_getUrl(), key);
		},
		a8: impl.a8,
		a6: impl.a6,
		a3: impl.a3
	});
}

function _Browser_getUrl()
{
	return $elm$url$Url$fromString(_VirtualDom_doc.location.href).a || _Debug_crash(1);
}

var _Browser_go = F2(function(key, n)
{
	return A2($elm$core$Task$perform, $elm$core$Basics$never, _Scheduler_binding(function() {
		n && history.go(n);
		key();
	}));
});

var _Browser_pushUrl = F2(function(key, url)
{
	return A2($elm$core$Task$perform, $elm$core$Basics$never, _Scheduler_binding(function() {
		history.pushState({}, '', url);
		key();
	}));
});

var _Browser_replaceUrl = F2(function(key, url)
{
	return A2($elm$core$Task$perform, $elm$core$Basics$never, _Scheduler_binding(function() {
		history.replaceState({}, '', url);
		key();
	}));
});



// GLOBAL EVENTS


var _Browser_fakeNode = { addEventListener: function() {}, removeEventListener: function() {} };
var _Browser_doc = typeof document !== 'undefined' ? document : _Browser_fakeNode;
var _Browser_window = typeof window !== 'undefined' ? window : _Browser_fakeNode;

var _Browser_on = F3(function(node, eventName, sendToSelf)
{
	return _Scheduler_spawn(_Scheduler_binding(function(callback)
	{
		function handler(event)	{ _Scheduler_rawSpawn(sendToSelf(event)); }
		node.addEventListener(eventName, handler, _VirtualDom_passiveSupported && { passive: true });
		return function() { node.removeEventListener(eventName, handler); };
	}));
});

var _Browser_decodeEvent = F2(function(decoder, event)
{
	var result = _Json_runHelp(decoder, event);
	return $elm$core$Result$isOk(result) ? $elm$core$Maybe$Just(result.a) : $elm$core$Maybe$Nothing;
});



// PAGE VISIBILITY


function _Browser_visibilityInfo()
{
	return (typeof _VirtualDom_doc.hidden !== 'undefined')
		? { aQ: 'hidden', aI: 'visibilitychange' }
		:
	(typeof _VirtualDom_doc.mozHidden !== 'undefined')
		? { aQ: 'mozHidden', aI: 'mozvisibilitychange' }
		:
	(typeof _VirtualDom_doc.msHidden !== 'undefined')
		? { aQ: 'msHidden', aI: 'msvisibilitychange' }
		:
	(typeof _VirtualDom_doc.webkitHidden !== 'undefined')
		? { aQ: 'webkitHidden', aI: 'webkitvisibilitychange' }
		: { aQ: 'hidden', aI: 'visibilitychange' };
}



// ANIMATION FRAMES


function _Browser_rAF()
{
	return _Scheduler_binding(function(callback)
	{
		var id = _Browser_requestAnimationFrame(function() {
			callback(_Scheduler_succeed(Date.now()));
		});

		return function() {
			_Browser_cancelAnimationFrame(id);
		};
	});
}


function _Browser_now()
{
	return _Scheduler_binding(function(callback)
	{
		callback(_Scheduler_succeed(Date.now()));
	});
}



// DOM STUFF


function _Browser_withNode(id, doStuff)
{
	return _Scheduler_binding(function(callback)
	{
		_Browser_requestAnimationFrame(function() {
			var node = document.getElementById(id);
			callback(node
				? _Scheduler_succeed(doStuff(node))
				: _Scheduler_fail($elm$browser$Browser$Dom$NotFound(id))
			);
		});
	});
}


function _Browser_withWindow(doStuff)
{
	return _Scheduler_binding(function(callback)
	{
		_Browser_requestAnimationFrame(function() {
			callback(_Scheduler_succeed(doStuff()));
		});
	});
}


// FOCUS and BLUR


var _Browser_call = F2(function(functionName, id)
{
	return _Browser_withNode(id, function(node) {
		node[functionName]();
		return _Utils_Tuple0;
	});
});



// WINDOW VIEWPORT


function _Browser_getViewport()
{
	return {
		av: _Browser_getScene(),
		aB: {
			aC: _Browser_window.pageXOffset,
			aD: _Browser_window.pageYOffset,
			_: _Browser_doc.documentElement.clientWidth,
			S: _Browser_doc.documentElement.clientHeight
		}
	};
}

function _Browser_getScene()
{
	var body = _Browser_doc.body;
	var elem = _Browser_doc.documentElement;
	return {
		_: Math.max(body.scrollWidth, body.offsetWidth, elem.scrollWidth, elem.offsetWidth, elem.clientWidth),
		S: Math.max(body.scrollHeight, body.offsetHeight, elem.scrollHeight, elem.offsetHeight, elem.clientHeight)
	};
}

var _Browser_setViewport = F2(function(x, y)
{
	return _Browser_withWindow(function()
	{
		_Browser_window.scroll(x, y);
		return _Utils_Tuple0;
	});
});



// ELEMENT VIEWPORT


function _Browser_getViewportOf(id)
{
	return _Browser_withNode(id, function(node)
	{
		return {
			av: {
				_: node.scrollWidth,
				S: node.scrollHeight
			},
			aB: {
				aC: node.scrollLeft,
				aD: node.scrollTop,
				_: node.clientWidth,
				S: node.clientHeight
			}
		};
	});
}


var _Browser_setViewportOf = F3(function(id, x, y)
{
	return _Browser_withNode(id, function(node)
	{
		node.scrollLeft = x;
		node.scrollTop = y;
		return _Utils_Tuple0;
	});
});



// ELEMENT


function _Browser_getElement(id)
{
	return _Browser_withNode(id, function(node)
	{
		var rect = node.getBoundingClientRect();
		var x = _Browser_window.pageXOffset;
		var y = _Browser_window.pageYOffset;
		return {
			av: _Browser_getScene(),
			aB: {
				aC: x,
				aD: y,
				_: _Browser_doc.documentElement.clientWidth,
				S: _Browser_doc.documentElement.clientHeight
			},
			aM: {
				aC: x + rect.left,
				aD: y + rect.top,
				_: rect.width,
				S: rect.height
			}
		};
	});
}



// LOAD and RELOAD


function _Browser_reload(skipCache)
{
	return A2($elm$core$Task$perform, $elm$core$Basics$never, _Scheduler_binding(function(callback)
	{
		_VirtualDom_doc.location.reload(skipCache);
	}));
}

function _Browser_load(url)
{
	return A2($elm$core$Task$perform, $elm$core$Basics$never, _Scheduler_binding(function(callback)
	{
		try
		{
			_Browser_window.location = url;
		}
		catch(err)
		{
			// Only Firefox can throw a NS_ERROR_MALFORMED_URI exception here.
			// Other browsers reload the page, so let's be consistent about that.
			_VirtualDom_doc.location.reload(false);
		}
	}));
}



function _Time_now(millisToPosix)
{
	return _Scheduler_binding(function(callback)
	{
		callback(_Scheduler_succeed(millisToPosix(Date.now())));
	});
}

var _Time_setInterval = F2(function(interval, task)
{
	return _Scheduler_binding(function(callback)
	{
		var id = setInterval(function() { _Scheduler_rawSpawn(task); }, interval);
		return function() { clearInterval(id); };
	});
});

function _Time_here()
{
	return _Scheduler_binding(function(callback)
	{
		callback(_Scheduler_succeed(
			A2($elm$time$Time$customZone, -(new Date().getTimezoneOffset()), _List_Nil)
		));
	});
}


function _Time_getZoneName()
{
	return _Scheduler_binding(function(callback)
	{
		try
		{
			var name = $elm$time$Time$Name(Intl.DateTimeFormat().resolvedOptions().timeZone);
		}
		catch (e)
		{
			var name = $elm$time$Time$Offset(new Date().getTimezoneOffset());
		}
		callback(_Scheduler_succeed(name));
	});
}



// SEND REQUEST

var _Http_toTask = F3(function(router, toTask, request)
{
	return _Scheduler_binding(function(callback)
	{
		function done(response) {
			callback(toTask(request.aN.a(response)));
		}

		var xhr = new XMLHttpRequest();
		xhr.addEventListener('error', function() { done($elm$http$Http$NetworkError_); });
		xhr.addEventListener('timeout', function() { done($elm$http$Http$Timeout_); });
		xhr.addEventListener('load', function() { done(_Http_toResponse(request.aN.b, xhr)); });
		$elm$core$Maybe$isJust(request.aA) && _Http_track(router, xhr, request.aA.a);

		try {
			xhr.open(request.aU, request.a7, true);
		} catch (e) {
			return done($elm$http$Http$BadUrl_(request.a7));
		}

		_Http_configureRequest(xhr, request);

		request.aH.a && xhr.setRequestHeader('Content-Type', request.aH.a);
		xhr.send(request.aH.b);

		return function() { xhr.c = true; xhr.abort(); };
	});
});


// CONFIGURE

function _Http_configureRequest(xhr, request)
{
	for (var headers = request.aP; headers.b; headers = headers.b) // WHILE_CONS
	{
		xhr.setRequestHeader(headers.a.a, headers.a.b);
	}
	xhr.timeout = request.a4.a || 0;
	xhr.responseType = request.aN.d;
	xhr.withCredentials = request.aF;
}


// RESPONSES

function _Http_toResponse(toBody, xhr)
{
	return A2(
		200 <= xhr.status && xhr.status < 300 ? $elm$http$Http$GoodStatus_ : $elm$http$Http$BadStatus_,
		_Http_toMetadata(xhr),
		toBody(xhr.response)
	);
}


// METADATA

function _Http_toMetadata(xhr)
{
	return {
		a7: xhr.responseURL,
		a1: xhr.status,
		a2: xhr.statusText,
		aP: _Http_parseHeaders(xhr.getAllResponseHeaders())
	};
}


// HEADERS

function _Http_parseHeaders(rawHeaders)
{
	if (!rawHeaders)
	{
		return $elm$core$Dict$empty;
	}

	var headers = $elm$core$Dict$empty;
	var headerPairs = rawHeaders.split('\r\n');
	for (var i = headerPairs.length; i--; )
	{
		var headerPair = headerPairs[i];
		var index = headerPair.indexOf(': ');
		if (index > 0)
		{
			var key = headerPair.substring(0, index);
			var value = headerPair.substring(index + 2);

			headers = A3($elm$core$Dict$update, key, function(oldValue) {
				return $elm$core$Maybe$Just($elm$core$Maybe$isJust(oldValue)
					? value + ', ' + oldValue.a
					: value
				);
			}, headers);
		}
	}
	return headers;
}


// EXPECT

var _Http_expect = F3(function(type, toBody, toValue)
{
	return {
		$: 0,
		d: type,
		b: toBody,
		a: toValue
	};
});

var _Http_mapExpect = F2(function(func, expect)
{
	return {
		$: 0,
		d: expect.d,
		b: expect.b,
		a: function(x) { return func(expect.a(x)); }
	};
});

function _Http_toDataView(arrayBuffer)
{
	return new DataView(arrayBuffer);
}


// BODY and PARTS

var _Http_emptyBody = { $: 0 };
var _Http_pair = F2(function(a, b) { return { $: 0, a: a, b: b }; });

function _Http_toFormData(parts)
{
	for (var formData = new FormData(); parts.b; parts = parts.b) // WHILE_CONS
	{
		var part = parts.a;
		formData.append(part.a, part.b);
	}
	return formData;
}

var _Http_bytesToBlob = F2(function(mime, bytes)
{
	return new Blob([bytes], { type: mime });
});


// PROGRESS

function _Http_track(router, xhr, tracker)
{
	// TODO check out lengthComputable on loadstart event

	xhr.upload.addEventListener('progress', function(event) {
		if (xhr.c) { return; }
		_Scheduler_rawSpawn(A2($elm$core$Platform$sendToSelf, router, _Utils_Tuple2(tracker, $elm$http$Http$Sending({
			a0: event.loaded,
			aw: event.total
		}))));
	});
	xhr.addEventListener('progress', function(event) {
		if (xhr.c) { return; }
		_Scheduler_rawSpawn(A2($elm$core$Platform$sendToSelf, router, _Utils_Tuple2(tracker, $elm$http$Http$Receiving({
			aZ: event.loaded,
			aw: event.lengthComputable ? $elm$core$Maybe$Just(event.total) : $elm$core$Maybe$Nothing
		}))));
	});
}


var _Bitwise_and = F2(function(a, b)
{
	return a & b;
});

var _Bitwise_or = F2(function(a, b)
{
	return a | b;
});

var _Bitwise_xor = F2(function(a, b)
{
	return a ^ b;
});

function _Bitwise_complement(a)
{
	return ~a;
};

var _Bitwise_shiftLeftBy = F2(function(offset, a)
{
	return a << offset;
});

var _Bitwise_shiftRightBy = F2(function(offset, a)
{
	return a >> offset;
});

var _Bitwise_shiftRightZfBy = F2(function(offset, a)
{
	return a >>> offset;
});
var $elm$core$Maybe$Just = function (a) {
	return {$: 0, a: a};
};
var $elm$core$Maybe$Nothing = {$: 1};
var $elm$core$List$cons = _List_cons;
var $elm$core$Elm$JsArray$foldr = _JsArray_foldr;
var $elm$core$Array$foldr = F3(
	function (func, baseCase, _v0) {
		var tree = _v0.c;
		var tail = _v0.d;
		var helper = F2(
			function (node, acc) {
				if (!node.$) {
					var subTree = node.a;
					return A3($elm$core$Elm$JsArray$foldr, helper, acc, subTree);
				} else {
					var values = node.a;
					return A3($elm$core$Elm$JsArray$foldr, func, acc, values);
				}
			});
		return A3(
			$elm$core$Elm$JsArray$foldr,
			helper,
			A3($elm$core$Elm$JsArray$foldr, func, baseCase, tail),
			tree);
	});
var $elm$core$Array$toList = function (array) {
	return A3($elm$core$Array$foldr, $elm$core$List$cons, _List_Nil, array);
};
var $elm$core$Dict$foldr = F3(
	function (func, acc, t) {
		foldr:
		while (true) {
			if (t.$ === -2) {
				return acc;
			} else {
				var key = t.b;
				var value = t.c;
				var left = t.d;
				var right = t.e;
				var $temp$func = func,
					$temp$acc = A3(
					func,
					key,
					value,
					A3($elm$core$Dict$foldr, func, acc, right)),
					$temp$t = left;
				func = $temp$func;
				acc = $temp$acc;
				t = $temp$t;
				continue foldr;
			}
		}
	});
var $elm$core$Dict$toList = function (dict) {
	return A3(
		$elm$core$Dict$foldr,
		F3(
			function (key, value, list) {
				return A2(
					$elm$core$List$cons,
					_Utils_Tuple2(key, value),
					list);
			}),
		_List_Nil,
		dict);
};
var $elm$core$Dict$keys = function (dict) {
	return A3(
		$elm$core$Dict$foldr,
		F3(
			function (key, value, keyList) {
				return A2($elm$core$List$cons, key, keyList);
			}),
		_List_Nil,
		dict);
};
var $elm$core$Set$toList = function (_v0) {
	var dict = _v0;
	return $elm$core$Dict$keys(dict);
};
var $elm$core$Basics$EQ = 1;
var $elm$core$Basics$GT = 2;
var $elm$core$Basics$LT = 0;
var $elm$core$Result$Err = function (a) {
	return {$: 1, a: a};
};
var $elm$json$Json$Decode$Failure = F2(
	function (a, b) {
		return {$: 3, a: a, b: b};
	});
var $elm$json$Json$Decode$Field = F2(
	function (a, b) {
		return {$: 0, a: a, b: b};
	});
var $elm$json$Json$Decode$Index = F2(
	function (a, b) {
		return {$: 1, a: a, b: b};
	});
var $elm$core$Result$Ok = function (a) {
	return {$: 0, a: a};
};
var $elm$json$Json$Decode$OneOf = function (a) {
	return {$: 2, a: a};
};
var $elm$core$Basics$False = 1;
var $elm$core$Basics$add = _Basics_add;
var $elm$core$String$all = _String_all;
var $elm$core$Basics$and = _Basics_and;
var $elm$core$Basics$append = _Utils_append;
var $elm$json$Json$Encode$encode = _Json_encode;
var $elm$core$String$fromInt = _String_fromNumber;
var $elm$core$String$join = F2(
	function (sep, chunks) {
		return A2(
			_String_join,
			sep,
			_List_toArray(chunks));
	});
var $elm$core$String$split = F2(
	function (sep, string) {
		return _List_fromArray(
			A2(_String_split, sep, string));
	});
var $elm$json$Json$Decode$indent = function (str) {
	return A2(
		$elm$core$String$join,
		'\n    ',
		A2($elm$core$String$split, '\n', str));
};
var $elm$core$List$foldl = F3(
	function (func, acc, list) {
		foldl:
		while (true) {
			if (!list.b) {
				return acc;
			} else {
				var x = list.a;
				var xs = list.b;
				var $temp$func = func,
					$temp$acc = A2(func, x, acc),
					$temp$list = xs;
				func = $temp$func;
				acc = $temp$acc;
				list = $temp$list;
				continue foldl;
			}
		}
	});
var $elm$core$List$length = function (xs) {
	return A3(
		$elm$core$List$foldl,
		F2(
			function (_v0, i) {
				return i + 1;
			}),
		0,
		xs);
};
var $elm$core$List$map2 = _List_map2;
var $elm$core$Basics$le = _Utils_le;
var $elm$core$Basics$sub = _Basics_sub;
var $elm$core$List$rangeHelp = F3(
	function (lo, hi, list) {
		rangeHelp:
		while (true) {
			if (_Utils_cmp(lo, hi) < 1) {
				var $temp$lo = lo,
					$temp$hi = hi - 1,
					$temp$list = A2($elm$core$List$cons, hi, list);
				lo = $temp$lo;
				hi = $temp$hi;
				list = $temp$list;
				continue rangeHelp;
			} else {
				return list;
			}
		}
	});
var $elm$core$List$range = F2(
	function (lo, hi) {
		return A3($elm$core$List$rangeHelp, lo, hi, _List_Nil);
	});
var $elm$core$List$indexedMap = F2(
	function (f, xs) {
		return A3(
			$elm$core$List$map2,
			f,
			A2(
				$elm$core$List$range,
				0,
				$elm$core$List$length(xs) - 1),
			xs);
	});
var $elm$core$Char$toCode = _Char_toCode;
var $elm$core$Char$isLower = function (_char) {
	var code = $elm$core$Char$toCode(_char);
	return (97 <= code) && (code <= 122);
};
var $elm$core$Char$isUpper = function (_char) {
	var code = $elm$core$Char$toCode(_char);
	return (code <= 90) && (65 <= code);
};
var $elm$core$Basics$or = _Basics_or;
var $elm$core$Char$isAlpha = function (_char) {
	return $elm$core$Char$isLower(_char) || $elm$core$Char$isUpper(_char);
};
var $elm$core$Char$isDigit = function (_char) {
	var code = $elm$core$Char$toCode(_char);
	return (code <= 57) && (48 <= code);
};
var $elm$core$Char$isAlphaNum = function (_char) {
	return $elm$core$Char$isLower(_char) || ($elm$core$Char$isUpper(_char) || $elm$core$Char$isDigit(_char));
};
var $elm$core$List$reverse = function (list) {
	return A3($elm$core$List$foldl, $elm$core$List$cons, _List_Nil, list);
};
var $elm$core$String$uncons = _String_uncons;
var $elm$json$Json$Decode$errorOneOf = F2(
	function (i, error) {
		return '\n\n(' + ($elm$core$String$fromInt(i + 1) + (') ' + $elm$json$Json$Decode$indent(
			$elm$json$Json$Decode$errorToString(error))));
	});
var $elm$json$Json$Decode$errorToString = function (error) {
	return A2($elm$json$Json$Decode$errorToStringHelp, error, _List_Nil);
};
var $elm$json$Json$Decode$errorToStringHelp = F2(
	function (error, context) {
		errorToStringHelp:
		while (true) {
			switch (error.$) {
				case 0:
					var f = error.a;
					var err = error.b;
					var isSimple = function () {
						var _v1 = $elm$core$String$uncons(f);
						if (_v1.$ === 1) {
							return false;
						} else {
							var _v2 = _v1.a;
							var _char = _v2.a;
							var rest = _v2.b;
							return $elm$core$Char$isAlpha(_char) && A2($elm$core$String$all, $elm$core$Char$isAlphaNum, rest);
						}
					}();
					var fieldName = isSimple ? ('.' + f) : ('[\'' + (f + '\']'));
					var $temp$error = err,
						$temp$context = A2($elm$core$List$cons, fieldName, context);
					error = $temp$error;
					context = $temp$context;
					continue errorToStringHelp;
				case 1:
					var i = error.a;
					var err = error.b;
					var indexName = '[' + ($elm$core$String$fromInt(i) + ']');
					var $temp$error = err,
						$temp$context = A2($elm$core$List$cons, indexName, context);
					error = $temp$error;
					context = $temp$context;
					continue errorToStringHelp;
				case 2:
					var errors = error.a;
					if (!errors.b) {
						return 'Ran into a Json.Decode.oneOf with no possibilities' + function () {
							if (!context.b) {
								return '!';
							} else {
								return ' at json' + A2(
									$elm$core$String$join,
									'',
									$elm$core$List$reverse(context));
							}
						}();
					} else {
						if (!errors.b.b) {
							var err = errors.a;
							var $temp$error = err,
								$temp$context = context;
							error = $temp$error;
							context = $temp$context;
							continue errorToStringHelp;
						} else {
							var starter = function () {
								if (!context.b) {
									return 'Json.Decode.oneOf';
								} else {
									return 'The Json.Decode.oneOf at json' + A2(
										$elm$core$String$join,
										'',
										$elm$core$List$reverse(context));
								}
							}();
							var introduction = starter + (' failed in the following ' + ($elm$core$String$fromInt(
								$elm$core$List$length(errors)) + ' ways:'));
							return A2(
								$elm$core$String$join,
								'\n\n',
								A2(
									$elm$core$List$cons,
									introduction,
									A2($elm$core$List$indexedMap, $elm$json$Json$Decode$errorOneOf, errors)));
						}
					}
				default:
					var msg = error.a;
					var json = error.b;
					var introduction = function () {
						if (!context.b) {
							return 'Problem with the given value:\n\n';
						} else {
							return 'Problem with the value at json' + (A2(
								$elm$core$String$join,
								'',
								$elm$core$List$reverse(context)) + ':\n\n    ');
						}
					}();
					return introduction + ($elm$json$Json$Decode$indent(
						A2($elm$json$Json$Encode$encode, 4, json)) + ('\n\n' + msg));
			}
		}
	});
var $elm$core$Array$branchFactor = 32;
var $elm$core$Array$Array_elm_builtin = F4(
	function (a, b, c, d) {
		return {$: 0, a: a, b: b, c: c, d: d};
	});
var $elm$core$Elm$JsArray$empty = _JsArray_empty;
var $elm$core$Basics$ceiling = _Basics_ceiling;
var $elm$core$Basics$fdiv = _Basics_fdiv;
var $elm$core$Basics$logBase = F2(
	function (base, number) {
		return _Basics_log(number) / _Basics_log(base);
	});
var $elm$core$Basics$toFloat = _Basics_toFloat;
var $elm$core$Array$shiftStep = $elm$core$Basics$ceiling(
	A2($elm$core$Basics$logBase, 2, $elm$core$Array$branchFactor));
var $elm$core$Array$empty = A4($elm$core$Array$Array_elm_builtin, 0, $elm$core$Array$shiftStep, $elm$core$Elm$JsArray$empty, $elm$core$Elm$JsArray$empty);
var $elm$core$Elm$JsArray$initialize = _JsArray_initialize;
var $elm$core$Array$Leaf = function (a) {
	return {$: 1, a: a};
};
var $elm$core$Basics$apL = F2(
	function (f, x) {
		return f(x);
	});
var $elm$core$Basics$apR = F2(
	function (x, f) {
		return f(x);
	});
var $elm$core$Basics$eq = _Utils_equal;
var $elm$core$Basics$floor = _Basics_floor;
var $elm$core$Elm$JsArray$length = _JsArray_length;
var $elm$core$Basics$gt = _Utils_gt;
var $elm$core$Basics$max = F2(
	function (x, y) {
		return (_Utils_cmp(x, y) > 0) ? x : y;
	});
var $elm$core$Basics$mul = _Basics_mul;
var $elm$core$Array$SubTree = function (a) {
	return {$: 0, a: a};
};
var $elm$core$Elm$JsArray$initializeFromList = _JsArray_initializeFromList;
var $elm$core$Array$compressNodes = F2(
	function (nodes, acc) {
		compressNodes:
		while (true) {
			var _v0 = A2($elm$core$Elm$JsArray$initializeFromList, $elm$core$Array$branchFactor, nodes);
			var node = _v0.a;
			var remainingNodes = _v0.b;
			var newAcc = A2(
				$elm$core$List$cons,
				$elm$core$Array$SubTree(node),
				acc);
			if (!remainingNodes.b) {
				return $elm$core$List$reverse(newAcc);
			} else {
				var $temp$nodes = remainingNodes,
					$temp$acc = newAcc;
				nodes = $temp$nodes;
				acc = $temp$acc;
				continue compressNodes;
			}
		}
	});
var $elm$core$Tuple$first = function (_v0) {
	var x = _v0.a;
	return x;
};
var $elm$core$Array$treeFromBuilder = F2(
	function (nodeList, nodeListSize) {
		treeFromBuilder:
		while (true) {
			var newNodeSize = $elm$core$Basics$ceiling(nodeListSize / $elm$core$Array$branchFactor);
			if (newNodeSize === 1) {
				return A2($elm$core$Elm$JsArray$initializeFromList, $elm$core$Array$branchFactor, nodeList).a;
			} else {
				var $temp$nodeList = A2($elm$core$Array$compressNodes, nodeList, _List_Nil),
					$temp$nodeListSize = newNodeSize;
				nodeList = $temp$nodeList;
				nodeListSize = $temp$nodeListSize;
				continue treeFromBuilder;
			}
		}
	});
var $elm$core$Array$builderToArray = F2(
	function (reverseNodeList, builder) {
		if (!builder.a) {
			return A4(
				$elm$core$Array$Array_elm_builtin,
				$elm$core$Elm$JsArray$length(builder.b),
				$elm$core$Array$shiftStep,
				$elm$core$Elm$JsArray$empty,
				builder.b);
		} else {
			var treeLen = builder.a * $elm$core$Array$branchFactor;
			var depth = $elm$core$Basics$floor(
				A2($elm$core$Basics$logBase, $elm$core$Array$branchFactor, treeLen - 1));
			var correctNodeList = reverseNodeList ? $elm$core$List$reverse(builder.c) : builder.c;
			var tree = A2($elm$core$Array$treeFromBuilder, correctNodeList, builder.a);
			return A4(
				$elm$core$Array$Array_elm_builtin,
				$elm$core$Elm$JsArray$length(builder.b) + treeLen,
				A2($elm$core$Basics$max, 5, depth * $elm$core$Array$shiftStep),
				tree,
				builder.b);
		}
	});
var $elm$core$Basics$idiv = _Basics_idiv;
var $elm$core$Basics$lt = _Utils_lt;
var $elm$core$Array$initializeHelp = F5(
	function (fn, fromIndex, len, nodeList, tail) {
		initializeHelp:
		while (true) {
			if (fromIndex < 0) {
				return A2(
					$elm$core$Array$builderToArray,
					false,
					{c: nodeList, a: (len / $elm$core$Array$branchFactor) | 0, b: tail});
			} else {
				var leaf = $elm$core$Array$Leaf(
					A3($elm$core$Elm$JsArray$initialize, $elm$core$Array$branchFactor, fromIndex, fn));
				var $temp$fn = fn,
					$temp$fromIndex = fromIndex - $elm$core$Array$branchFactor,
					$temp$len = len,
					$temp$nodeList = A2($elm$core$List$cons, leaf, nodeList),
					$temp$tail = tail;
				fn = $temp$fn;
				fromIndex = $temp$fromIndex;
				len = $temp$len;
				nodeList = $temp$nodeList;
				tail = $temp$tail;
				continue initializeHelp;
			}
		}
	});
var $elm$core$Basics$remainderBy = _Basics_remainderBy;
var $elm$core$Array$initialize = F2(
	function (len, fn) {
		if (len <= 0) {
			return $elm$core$Array$empty;
		} else {
			var tailLen = len % $elm$core$Array$branchFactor;
			var tail = A3($elm$core$Elm$JsArray$initialize, tailLen, len - tailLen, fn);
			var initialFromIndex = (len - tailLen) - $elm$core$Array$branchFactor;
			return A5($elm$core$Array$initializeHelp, fn, initialFromIndex, len, _List_Nil, tail);
		}
	});
var $elm$core$Basics$True = 0;
var $elm$core$Result$isOk = function (result) {
	if (!result.$) {
		return true;
	} else {
		return false;
	}
};
var $elm$json$Json$Decode$andThen = _Json_andThen;
var $elm$json$Json$Decode$bool = _Json_decodeBool;
var $elm$json$Json$Decode$map = _Json_map1;
var $elm$json$Json$Decode$map2 = _Json_map2;
var $elm$json$Json$Decode$succeed = _Json_succeed;
var $elm$virtual_dom$VirtualDom$toHandlerInt = function (handler) {
	switch (handler.$) {
		case 0:
			return 0;
		case 1:
			return 1;
		case 2:
			return 2;
		default:
			return 3;
	}
};
var $elm$browser$Browser$External = function (a) {
	return {$: 1, a: a};
};
var $elm$browser$Browser$Internal = function (a) {
	return {$: 0, a: a};
};
var $elm$core$Basics$identity = function (x) {
	return x;
};
var $elm$browser$Browser$Dom$NotFound = $elm$core$Basics$identity;
var $elm$url$Url$Http = 0;
var $elm$url$Url$Https = 1;
var $elm$url$Url$Url = F6(
	function (protocol, host, port_, path, query, fragment) {
		return {ag: fragment, ah: host, ak: path, am: port_, ap: protocol, aq: query};
	});
var $elm$core$String$contains = _String_contains;
var $elm$core$String$length = _String_length;
var $elm$core$String$slice = _String_slice;
var $elm$core$String$dropLeft = F2(
	function (n, string) {
		return (n < 1) ? string : A3(
			$elm$core$String$slice,
			n,
			$elm$core$String$length(string),
			string);
	});
var $elm$core$String$indexes = _String_indexes;
var $elm$core$String$isEmpty = function (string) {
	return string === '';
};
var $elm$core$String$left = F2(
	function (n, string) {
		return (n < 1) ? '' : A3($elm$core$String$slice, 0, n, string);
	});
var $elm$core$String$toInt = _String_toInt;
var $elm$url$Url$chompBeforePath = F5(
	function (protocol, path, params, frag, str) {
		if ($elm$core$String$isEmpty(str) || A2($elm$core$String$contains, '@', str)) {
			return $elm$core$Maybe$Nothing;
		} else {
			var _v0 = A2($elm$core$String$indexes, ':', str);
			if (!_v0.b) {
				return $elm$core$Maybe$Just(
					A6($elm$url$Url$Url, protocol, str, $elm$core$Maybe$Nothing, path, params, frag));
			} else {
				if (!_v0.b.b) {
					var i = _v0.a;
					var _v1 = $elm$core$String$toInt(
						A2($elm$core$String$dropLeft, i + 1, str));
					if (_v1.$ === 1) {
						return $elm$core$Maybe$Nothing;
					} else {
						var port_ = _v1;
						return $elm$core$Maybe$Just(
							A6(
								$elm$url$Url$Url,
								protocol,
								A2($elm$core$String$left, i, str),
								port_,
								path,
								params,
								frag));
					}
				} else {
					return $elm$core$Maybe$Nothing;
				}
			}
		}
	});
var $elm$url$Url$chompBeforeQuery = F4(
	function (protocol, params, frag, str) {
		if ($elm$core$String$isEmpty(str)) {
			return $elm$core$Maybe$Nothing;
		} else {
			var _v0 = A2($elm$core$String$indexes, '/', str);
			if (!_v0.b) {
				return A5($elm$url$Url$chompBeforePath, protocol, '/', params, frag, str);
			} else {
				var i = _v0.a;
				return A5(
					$elm$url$Url$chompBeforePath,
					protocol,
					A2($elm$core$String$dropLeft, i, str),
					params,
					frag,
					A2($elm$core$String$left, i, str));
			}
		}
	});
var $elm$url$Url$chompBeforeFragment = F3(
	function (protocol, frag, str) {
		if ($elm$core$String$isEmpty(str)) {
			return $elm$core$Maybe$Nothing;
		} else {
			var _v0 = A2($elm$core$String$indexes, '?', str);
			if (!_v0.b) {
				return A4($elm$url$Url$chompBeforeQuery, protocol, $elm$core$Maybe$Nothing, frag, str);
			} else {
				var i = _v0.a;
				return A4(
					$elm$url$Url$chompBeforeQuery,
					protocol,
					$elm$core$Maybe$Just(
						A2($elm$core$String$dropLeft, i + 1, str)),
					frag,
					A2($elm$core$String$left, i, str));
			}
		}
	});
var $elm$url$Url$chompAfterProtocol = F2(
	function (protocol, str) {
		if ($elm$core$String$isEmpty(str)) {
			return $elm$core$Maybe$Nothing;
		} else {
			var _v0 = A2($elm$core$String$indexes, '#', str);
			if (!_v0.b) {
				return A3($elm$url$Url$chompBeforeFragment, protocol, $elm$core$Maybe$Nothing, str);
			} else {
				var i = _v0.a;
				return A3(
					$elm$url$Url$chompBeforeFragment,
					protocol,
					$elm$core$Maybe$Just(
						A2($elm$core$String$dropLeft, i + 1, str)),
					A2($elm$core$String$left, i, str));
			}
		}
	});
var $elm$core$String$startsWith = _String_startsWith;
var $elm$url$Url$fromString = function (str) {
	return A2($elm$core$String$startsWith, 'http://', str) ? A2(
		$elm$url$Url$chompAfterProtocol,
		0,
		A2($elm$core$String$dropLeft, 7, str)) : (A2($elm$core$String$startsWith, 'https://', str) ? A2(
		$elm$url$Url$chompAfterProtocol,
		1,
		A2($elm$core$String$dropLeft, 8, str)) : $elm$core$Maybe$Nothing);
};
var $elm$core$Basics$never = function (_v0) {
	never:
	while (true) {
		var nvr = _v0;
		var $temp$_v0 = nvr;
		_v0 = $temp$_v0;
		continue never;
	}
};
var $elm$core$Task$Perform = $elm$core$Basics$identity;
var $elm$core$Task$succeed = _Scheduler_succeed;
var $elm$core$Task$init = $elm$core$Task$succeed(0);
var $elm$core$List$foldrHelper = F4(
	function (fn, acc, ctr, ls) {
		if (!ls.b) {
			return acc;
		} else {
			var a = ls.a;
			var r1 = ls.b;
			if (!r1.b) {
				return A2(fn, a, acc);
			} else {
				var b = r1.a;
				var r2 = r1.b;
				if (!r2.b) {
					return A2(
						fn,
						a,
						A2(fn, b, acc));
				} else {
					var c = r2.a;
					var r3 = r2.b;
					if (!r3.b) {
						return A2(
							fn,
							a,
							A2(
								fn,
								b,
								A2(fn, c, acc)));
					} else {
						var d = r3.a;
						var r4 = r3.b;
						var res = (ctr > 500) ? A3(
							$elm$core$List$foldl,
							fn,
							acc,
							$elm$core$List$reverse(r4)) : A4($elm$core$List$foldrHelper, fn, acc, ctr + 1, r4);
						return A2(
							fn,
							a,
							A2(
								fn,
								b,
								A2(
									fn,
									c,
									A2(fn, d, res))));
					}
				}
			}
		}
	});
var $elm$core$List$foldr = F3(
	function (fn, acc, ls) {
		return A4($elm$core$List$foldrHelper, fn, acc, 0, ls);
	});
var $elm$core$List$map = F2(
	function (f, xs) {
		return A3(
			$elm$core$List$foldr,
			F2(
				function (x, acc) {
					return A2(
						$elm$core$List$cons,
						f(x),
						acc);
				}),
			_List_Nil,
			xs);
	});
var $elm$core$Task$andThen = _Scheduler_andThen;
var $elm$core$Task$map = F2(
	function (func, taskA) {
		return A2(
			$elm$core$Task$andThen,
			function (a) {
				return $elm$core$Task$succeed(
					func(a));
			},
			taskA);
	});
var $elm$core$Task$map2 = F3(
	function (func, taskA, taskB) {
		return A2(
			$elm$core$Task$andThen,
			function (a) {
				return A2(
					$elm$core$Task$andThen,
					function (b) {
						return $elm$core$Task$succeed(
							A2(func, a, b));
					},
					taskB);
			},
			taskA);
	});
var $elm$core$Task$sequence = function (tasks) {
	return A3(
		$elm$core$List$foldr,
		$elm$core$Task$map2($elm$core$List$cons),
		$elm$core$Task$succeed(_List_Nil),
		tasks);
};
var $elm$core$Platform$sendToApp = _Platform_sendToApp;
var $elm$core$Task$spawnCmd = F2(
	function (router, _v0) {
		var task = _v0;
		return _Scheduler_spawn(
			A2(
				$elm$core$Task$andThen,
				$elm$core$Platform$sendToApp(router),
				task));
	});
var $elm$core$Task$onEffects = F3(
	function (router, commands, state) {
		return A2(
			$elm$core$Task$map,
			function (_v0) {
				return 0;
			},
			$elm$core$Task$sequence(
				A2(
					$elm$core$List$map,
					$elm$core$Task$spawnCmd(router),
					commands)));
	});
var $elm$core$Task$onSelfMsg = F3(
	function (_v0, _v1, _v2) {
		return $elm$core$Task$succeed(0);
	});
var $elm$core$Task$cmdMap = F2(
	function (tagger, _v0) {
		var task = _v0;
		return A2($elm$core$Task$map, tagger, task);
	});
_Platform_effectManagers['Task'] = _Platform_createManager($elm$core$Task$init, $elm$core$Task$onEffects, $elm$core$Task$onSelfMsg, $elm$core$Task$cmdMap);
var $elm$core$Task$command = _Platform_leaf('Task');
var $elm$core$Task$perform = F2(
	function (toMessage, task) {
		return $elm$core$Task$command(
			A2($elm$core$Task$map, toMessage, task));
	});
var $elm$browser$Browser$element = _Browser_element;
var $elm$json$Json$Decode$field = _Json_decodeField;
var $author$project$Main$CheckFetchData = function (a) {
	return {$: 2, a: a};
};
var $author$project$Main$StartingData = F2(
	function (data, lastDataFetchTime) {
		return {u: data, j: lastDataFetchTime};
	});
var $elm$json$Json$Decode$decodeString = _Json_runOnString;
var $elm$time$Time$Posix = $elm$core$Basics$identity;
var $elm$time$Time$millisToPosix = $elm$core$Basics$identity;
var $elm$json$Json$Decode$string = _Json_decodeString;
var $author$project$Main$dataDecoder = A2($elm$json$Json$Decode$field, 'data', $elm$json$Json$Decode$string);
var $elm$json$Json$Decode$int = _Json_decodeInt;
var $author$project$Main$posixTimeDecoder = A2(
	$elm$json$Json$Decode$andThen,
	function (ms) {
		return $elm$json$Json$Decode$succeed(
			$elm$time$Time$millisToPosix(ms));
	},
	$elm$json$Json$Decode$int);
var $author$project$Main$lastDataFetchTimeDecoder = A2($elm$json$Json$Decode$field, 'lastDataFetchTime', $author$project$Main$posixTimeDecoder);
var $author$project$Main$startingDataDecoder = A3($elm$json$Json$Decode$map2, $author$project$Main$StartingData, $author$project$Main$dataDecoder, $author$project$Main$lastDataFetchTimeDecoder);
var $author$project$Main$decodeStartingData = function (str) {
	var _v0 = A2($elm$json$Json$Decode$decodeString, $author$project$Main$startingDataDecoder, str);
	if (!_v0.$) {
		var startingData = _v0.a;
		return startingData;
	} else {
		return A2(
			$author$project$Main$StartingData,
			'',
			$elm$time$Time$millisToPosix(0));
	}
};
var $elm$core$Set$Set_elm_builtin = $elm$core$Basics$identity;
var $elm$core$Dict$RBEmpty_elm_builtin = {$: -2};
var $elm$core$Dict$empty = $elm$core$Dict$RBEmpty_elm_builtin;
var $elm$core$Set$empty = $elm$core$Dict$empty;
var $elm$time$Time$Name = function (a) {
	return {$: 0, a: a};
};
var $elm$time$Time$Offset = function (a) {
	return {$: 1, a: a};
};
var $elm$time$Time$Zone = F2(
	function (a, b) {
		return {$: 0, a: a, b: b};
	});
var $elm$time$Time$customZone = $elm$time$Time$Zone;
var $elm$time$Time$now = _Time_now($elm$time$Time$millisToPosix);
var $elm$core$List$drop = F2(
	function (n, list) {
		drop:
		while (true) {
			if (n <= 0) {
				return list;
			} else {
				if (!list.b) {
					return list;
				} else {
					var x = list.a;
					var xs = list.b;
					var $temp$n = n - 1,
						$temp$list = xs;
					n = $temp$n;
					list = $temp$list;
					continue drop;
				}
			}
		}
	});
var $elm$core$List$head = function (list) {
	if (list.b) {
		var x = list.a;
		var xs = list.b;
		return $elm$core$Maybe$Just(x);
	} else {
		return $elm$core$Maybe$Nothing;
	}
};
var $elm$core$Basics$composeL = F3(
	function (g, f, x) {
		return g(
			f(x));
	});
var $elm$core$List$filter = F2(
	function (isGood, list) {
		return A3(
			$elm$core$List$foldr,
			F2(
				function (x, xs) {
					return isGood(x) ? A2($elm$core$List$cons, x, xs) : xs;
				}),
			_List_Nil,
			list);
	});
var $elm$core$String$lines = _String_lines;
var $elm$core$Basics$not = _Basics_not;
var $elm$core$Basics$neq = _Utils_notEqual;
var $elm$core$List$tail = function (list) {
	if (list.b) {
		var x = list.a;
		var xs = list.b;
		return $elm$core$Maybe$Just(xs);
	} else {
		return $elm$core$Maybe$Nothing;
	}
};
var $elm$core$Maybe$withDefault = F2(
	function (_default, maybe) {
		if (!maybe.$) {
			var value = maybe.a;
			return value;
		} else {
			return _default;
		}
	});
var $lovasoa$elm_csv$Helper$parseRemaining = F5(
	function (separator, quoted, startOfLine, remaining, result) {
		parseRemaining:
		while (true) {
			if (remaining === '') {
				return result;
			} else {
				if ((separator !== '') && ((!quoted) && A2($elm$core$String$startsWith, separator, remaining))) {
					var nextChars = A2(
						$elm$core$String$dropLeft,
						$elm$core$String$length(separator),
						remaining);
					var newResult = startOfLine ? _List_fromArray(
						['', '']) : A2($elm$core$List$cons, '', result);
					var newQuoted = false;
					var $temp$separator = separator,
						$temp$quoted = false,
						$temp$startOfLine = false,
						$temp$remaining = nextChars,
						$temp$result = newResult;
					separator = $temp$separator;
					quoted = $temp$quoted;
					startOfLine = $temp$startOfLine;
					remaining = $temp$remaining;
					result = $temp$result;
					continue parseRemaining;
				} else {
					var others = A2(
						$elm$core$Maybe$withDefault,
						_List_Nil,
						$elm$core$List$tail(result));
					var nextNextChar = A3($elm$core$String$slice, 1, 2, remaining);
					var nextChar = A3($elm$core$String$slice, 0, 1, remaining);
					var isEscapedQuote = (!quoted) && (((nextChar === '\\') || (nextChar === '\"')) && (nextNextChar === '\"'));
					var nextChars = A2(
						$elm$core$String$dropLeft,
						isEscapedQuote ? 2 : 1,
						remaining);
					var endQuote = quoted && ((nextChar === '\"') && (!isEscapedQuote));
					var current = A2(
						$elm$core$Maybe$withDefault,
						'',
						$elm$core$List$head(result));
					var startQuote = (nextChar === '\"') && ((nextNextChar !== '\"') && (current === ''));
					var newChar = isEscapedQuote ? '\"' : ((startQuote || endQuote) ? '' : nextChar);
					var newDone = A2(
						$elm$core$List$cons,
						_Utils_ap(current, newChar),
						others);
					var newQuoted = (quoted && (!endQuote)) || startQuote;
					var $temp$separator = separator,
						$temp$quoted = newQuoted,
						$temp$startOfLine = false,
						$temp$remaining = nextChars,
						$temp$result = newDone;
					separator = $temp$separator;
					quoted = $temp$quoted;
					startOfLine = $temp$startOfLine;
					remaining = $temp$remaining;
					result = $temp$result;
					continue parseRemaining;
				}
			}
		}
	});
var $lovasoa$elm_csv$Helper$splitLineWith = F2(
	function (separator, line) {
		return $elm$core$List$reverse(
			A5($lovasoa$elm_csv$Helper$parseRemaining, separator, false, true, line, _List_Nil));
	});
var $lovasoa$elm_csv$Csv$splitWith = F2(
	function (separator, lines) {
		var values = A2(
			$elm$core$List$filter,
			A2($elm$core$Basics$composeL, $elm$core$Basics$not, $elm$core$String$isEmpty),
			$elm$core$String$lines(lines));
		return A2(
			$elm$core$List$map,
			$lovasoa$elm_csv$Helper$splitLineWith(separator),
			values);
	});
var $lovasoa$elm_csv$Csv$parseWith = F2(
	function (separator, lines) {
		var values = A2($lovasoa$elm_csv$Csv$splitWith, separator, lines);
		var records = A2($elm$core$List$drop, 1, values);
		var headers = A2(
			$elm$core$Maybe$withDefault,
			_List_Nil,
			$elm$core$List$head(values));
		return {aP: headers, a_: records};
	});
var $lovasoa$elm_csv$Csv$parse = $lovasoa$elm_csv$Csv$parseWith(',');
var $author$project$TimeSeries$firstConfirmedCountIndex = 11;
var $author$project$TimeSeries$firstDateIndex = $author$project$TimeSeries$firstConfirmedCountIndex;
var $elm$core$Dict$Black = 1;
var $elm$core$Dict$RBNode_elm_builtin = F5(
	function (a, b, c, d, e) {
		return {$: -1, a: a, b: b, c: c, d: d, e: e};
	});
var $elm$core$Dict$Red = 0;
var $elm$core$Dict$balance = F5(
	function (color, key, value, left, right) {
		if ((right.$ === -1) && (!right.a)) {
			var _v1 = right.a;
			var rK = right.b;
			var rV = right.c;
			var rLeft = right.d;
			var rRight = right.e;
			if ((left.$ === -1) && (!left.a)) {
				var _v3 = left.a;
				var lK = left.b;
				var lV = left.c;
				var lLeft = left.d;
				var lRight = left.e;
				return A5(
					$elm$core$Dict$RBNode_elm_builtin,
					0,
					key,
					value,
					A5($elm$core$Dict$RBNode_elm_builtin, 1, lK, lV, lLeft, lRight),
					A5($elm$core$Dict$RBNode_elm_builtin, 1, rK, rV, rLeft, rRight));
			} else {
				return A5(
					$elm$core$Dict$RBNode_elm_builtin,
					color,
					rK,
					rV,
					A5($elm$core$Dict$RBNode_elm_builtin, 0, key, value, left, rLeft),
					rRight);
			}
		} else {
			if ((((left.$ === -1) && (!left.a)) && (left.d.$ === -1)) && (!left.d.a)) {
				var _v5 = left.a;
				var lK = left.b;
				var lV = left.c;
				var _v6 = left.d;
				var _v7 = _v6.a;
				var llK = _v6.b;
				var llV = _v6.c;
				var llLeft = _v6.d;
				var llRight = _v6.e;
				var lRight = left.e;
				return A5(
					$elm$core$Dict$RBNode_elm_builtin,
					0,
					lK,
					lV,
					A5($elm$core$Dict$RBNode_elm_builtin, 1, llK, llV, llLeft, llRight),
					A5($elm$core$Dict$RBNode_elm_builtin, 1, key, value, lRight, right));
			} else {
				return A5($elm$core$Dict$RBNode_elm_builtin, color, key, value, left, right);
			}
		}
	});
var $elm$core$Basics$compare = _Utils_compare;
var $elm$core$Dict$insertHelp = F3(
	function (key, value, dict) {
		if (dict.$ === -2) {
			return A5($elm$core$Dict$RBNode_elm_builtin, 0, key, value, $elm$core$Dict$RBEmpty_elm_builtin, $elm$core$Dict$RBEmpty_elm_builtin);
		} else {
			var nColor = dict.a;
			var nKey = dict.b;
			var nValue = dict.c;
			var nLeft = dict.d;
			var nRight = dict.e;
			var _v1 = A2($elm$core$Basics$compare, key, nKey);
			switch (_v1) {
				case 0:
					return A5(
						$elm$core$Dict$balance,
						nColor,
						nKey,
						nValue,
						A3($elm$core$Dict$insertHelp, key, value, nLeft),
						nRight);
				case 1:
					return A5($elm$core$Dict$RBNode_elm_builtin, nColor, nKey, value, nLeft, nRight);
				default:
					return A5(
						$elm$core$Dict$balance,
						nColor,
						nKey,
						nValue,
						nLeft,
						A3($elm$core$Dict$insertHelp, key, value, nRight));
			}
		}
	});
var $elm$core$Dict$insert = F3(
	function (key, value, dict) {
		var _v0 = A3($elm$core$Dict$insertHelp, key, value, dict);
		if ((_v0.$ === -1) && (!_v0.a)) {
			var _v1 = _v0.a;
			var k = _v0.b;
			var v = _v0.c;
			var l = _v0.d;
			var r = _v0.e;
			return A5($elm$core$Dict$RBNode_elm_builtin, 1, k, v, l, r);
		} else {
			var x = _v0;
			return x;
		}
	});
var $elm$core$Dict$fromList = function (assocs) {
	return A3(
		$elm$core$List$foldl,
		F2(
			function (_v0, dict) {
				var key = _v0.a;
				var value = _v0.b;
				return A3($elm$core$Dict$insert, key, value, dict);
			}),
		$elm$core$Dict$empty,
		assocs);
};
var $author$project$TimeSeries$countyIndex = 5;
var $author$project$TimeSeries$defaultCounty = 'NA';
var $author$project$TimeSeries$defaultState = 'NA';
var $author$project$Count$Count = $elm$core$Basics$identity;
var $author$project$Count$default = 0;
var $author$project$Count$fromIntWithDefault = function (n) {
	return (n < 0) ? $author$project$Count$default : n;
};
var $elm$core$Dict$get = F2(
	function (targetKey, dict) {
		get:
		while (true) {
			if (dict.$ === -2) {
				return $elm$core$Maybe$Nothing;
			} else {
				var key = dict.b;
				var value = dict.c;
				var left = dict.d;
				var right = dict.e;
				var _v1 = A2($elm$core$Basics$compare, targetKey, key);
				switch (_v1) {
					case 0:
						var $temp$targetKey = targetKey,
							$temp$dict = left;
						targetKey = $temp$targetKey;
						dict = $temp$dict;
						continue get;
					case 1:
						return $elm$core$Maybe$Just(value);
					default:
						var $temp$targetKey = targetKey,
							$temp$dict = right;
						targetKey = $temp$targetKey;
						dict = $temp$dict;
						continue get;
				}
			}
		}
	});
var $elm_community$list_extra$List$Extra$getAt = F2(
	function (idx, xs) {
		return (idx < 0) ? $elm$core$Maybe$Nothing : $elm$core$List$head(
			A2($elm$core$List$drop, idx, xs));
	});
var $author$project$TimeSeries$getAtWithDefault = F3(
	function (_default, index, data) {
		var _v0 = A2($elm_community$list_extra$List$Extra$getAt, index, data);
		if (!_v0.$) {
			var item = _v0.a;
			return (item === '') ? _default : item;
		} else {
			return _default;
		}
	});
var $author$project$TimeSeries$mkKey = F2(
	function (state, county) {
		return state + (', ' + county);
	});
var $author$project$Count$fromStringWithDefault = function (s) {
	var _v0 = $elm$core$String$toInt(s);
	if (!_v0.$) {
		var i = _v0.a;
		return $author$project$Count$fromIntWithDefault(i);
	} else {
		return $author$project$Count$default;
	}
};
var $author$project$TimeSeries$parseConfirmedCounts = function (data) {
	return A2(
		$elm$core$List$map,
		$author$project$Count$fromStringWithDefault,
		A2($elm$core$List$drop, $author$project$TimeSeries$firstConfirmedCountIndex, data));
};
var $author$project$PopulationData$populationData = $elm$core$Dict$fromList(
	_List_fromArray(
		[
			_Utils_Tuple2('United States, United States', 328239523),
			_Utils_Tuple2('Alabama, Alabama', 4903185),
			_Utils_Tuple2('Alabama, Autauga', 55869),
			_Utils_Tuple2('Alabama, Baldwin', 223234),
			_Utils_Tuple2('Alabama, Barbour', 24686),
			_Utils_Tuple2('Alabama, Bibb', 22394),
			_Utils_Tuple2('Alabama, Blount', 57826),
			_Utils_Tuple2('Alabama, Bullock', 10101),
			_Utils_Tuple2('Alabama, Butler', 19448),
			_Utils_Tuple2('Alabama, Calhoun', 113605),
			_Utils_Tuple2('Alabama, Chambers', 33254),
			_Utils_Tuple2('Alabama, Cherokee', 26196),
			_Utils_Tuple2('Alabama, Chilton', 44428),
			_Utils_Tuple2('Alabama, Choctaw', 12589),
			_Utils_Tuple2('Alabama, Clarke', 23622),
			_Utils_Tuple2('Alabama, Clay', 13235),
			_Utils_Tuple2('Alabama, Cleburne', 14910),
			_Utils_Tuple2('Alabama, Coffee', 52342),
			_Utils_Tuple2('Alabama, Colbert', 55241),
			_Utils_Tuple2('Alabama, Conecuh', 12067),
			_Utils_Tuple2('Alabama, Coosa', 10663),
			_Utils_Tuple2('Alabama, Covington', 37049),
			_Utils_Tuple2('Alabama, Crenshaw', 13772),
			_Utils_Tuple2('Alabama, Cullman', 83768),
			_Utils_Tuple2('Alabama, Dale', 49172),
			_Utils_Tuple2('Alabama, Dallas', 37196),
			_Utils_Tuple2('Alabama, DeKalb', 71513),
			_Utils_Tuple2('Alabama, Elmore', 81209),
			_Utils_Tuple2('Alabama, Escambia', 36633),
			_Utils_Tuple2('Alabama, Etowah', 102268),
			_Utils_Tuple2('Alabama, Fayette', 16302),
			_Utils_Tuple2('Alabama, Franklin', 31362),
			_Utils_Tuple2('Alabama, Geneva', 26271),
			_Utils_Tuple2('Alabama, Greene', 8111),
			_Utils_Tuple2('Alabama, Hale', 14651),
			_Utils_Tuple2('Alabama, Henry', 17205),
			_Utils_Tuple2('Alabama, Houston', 105882),
			_Utils_Tuple2('Alabama, Jackson', 51626),
			_Utils_Tuple2('Alabama, Jefferson', 658573),
			_Utils_Tuple2('Alabama, Lamar', 13805),
			_Utils_Tuple2('Alabama, Lauderdale', 92729),
			_Utils_Tuple2('Alabama, Lawrence', 32924),
			_Utils_Tuple2('Alabama, Lee', 164542),
			_Utils_Tuple2('Alabama, Limestone', 98915),
			_Utils_Tuple2('Alabama, Lowndes', 9726),
			_Utils_Tuple2('Alabama, Macon', 18068),
			_Utils_Tuple2('Alabama, Madison', 372909),
			_Utils_Tuple2('Alabama, Marengo', 18863),
			_Utils_Tuple2('Alabama, Marion', 29709),
			_Utils_Tuple2('Alabama, Marshall', 96774),
			_Utils_Tuple2('Alabama, Mobile', 413210),
			_Utils_Tuple2('Alabama, Monroe', 20733),
			_Utils_Tuple2('Alabama, Montgomery', 226486),
			_Utils_Tuple2('Alabama, Morgan', 119679),
			_Utils_Tuple2('Alabama, Perry', 8923),
			_Utils_Tuple2('Alabama, Pickens', 19930),
			_Utils_Tuple2('Alabama, Pike', 33114),
			_Utils_Tuple2('Alabama, Randolph', 22722),
			_Utils_Tuple2('Alabama, Russell', 57961),
			_Utils_Tuple2('Alabama, St. Clair', 89512),
			_Utils_Tuple2('Alabama, Shelby', 217702),
			_Utils_Tuple2('Alabama, Sumter', 12427),
			_Utils_Tuple2('Alabama, Talladega', 79978),
			_Utils_Tuple2('Alabama, Tallapoosa', 40367),
			_Utils_Tuple2('Alabama, Tuscaloosa', 209355),
			_Utils_Tuple2('Alabama, Walker', 63521),
			_Utils_Tuple2('Alabama, Washington', 16326),
			_Utils_Tuple2('Alabama, Wilcox', 10373),
			_Utils_Tuple2('Alabama, Winston', 23629),
			_Utils_Tuple2('Alaska, Alaska', 731545),
			_Utils_Tuple2('Alaska, Aleutians East', 3337),
			_Utils_Tuple2('Alaska, Aleutians West', 5634),
			_Utils_Tuple2('Alaska, Anchorage', 288000),
			_Utils_Tuple2('Alaska, Bethel', 18386),
			_Utils_Tuple2('Alaska, Bristol Bay', 836),
			_Utils_Tuple2('Alaska, Denali', 2097),
			_Utils_Tuple2('Alaska, Dillingham', 4916),
			_Utils_Tuple2('Alaska, Fairbanks North Star', 96849),
			_Utils_Tuple2('Alaska, Haines', 2530),
			_Utils_Tuple2('Alaska, Hoonah-Angoon', 2148),
			_Utils_Tuple2('Alaska, Juneau', 31974),
			_Utils_Tuple2('Alaska, Kenai Peninsula', 58708),
			_Utils_Tuple2('Alaska, Ketchikan Gateway', 13901),
			_Utils_Tuple2('Alaska, Kodiak Island', 12998),
			_Utils_Tuple2('Alaska, Kusilvak', 8314),
			_Utils_Tuple2('Alaska, Lake and Peninsula', 1592),
			_Utils_Tuple2('Alaska, Matanuska-Susitna', 108317),
			_Utils_Tuple2('Alaska, Nome', 10004),
			_Utils_Tuple2('Alaska, North Slope', 9832),
			_Utils_Tuple2('Alaska, Northwest Arctic', 7621),
			_Utils_Tuple2('Alaska, Petersburg', 3266),
			_Utils_Tuple2('Alaska, Prince of Wales-Hyder', 6203),
			_Utils_Tuple2('Alaska, Sitka', 8493),
			_Utils_Tuple2('Alaska, Skagway', 1183),
			_Utils_Tuple2('Alaska, Southeast Fairbanks', 6893),
			_Utils_Tuple2('Alaska, Valdez-Cordova', 9202),
			_Utils_Tuple2('Alaska, Wrangell', 2502),
			_Utils_Tuple2('Alaska, Yakutat', 579),
			_Utils_Tuple2('Alaska, Yukon-Koyukuk', 5230),
			_Utils_Tuple2('Arizona, Arizona', 7278717),
			_Utils_Tuple2('Arizona, Apache', 71887),
			_Utils_Tuple2('Arizona, Cochise', 125922),
			_Utils_Tuple2('Arizona, Coconino', 143476),
			_Utils_Tuple2('Arizona, Gila', 54018),
			_Utils_Tuple2('Arizona, Graham', 38837),
			_Utils_Tuple2('Arizona, Greenlee', 9498),
			_Utils_Tuple2('Arizona, La Paz', 21108),
			_Utils_Tuple2('Arizona, Maricopa', 4485414),
			_Utils_Tuple2('Arizona, Mohave', 212181),
			_Utils_Tuple2('Arizona, Navajo', 110924),
			_Utils_Tuple2('Arizona, Pima', 1047279),
			_Utils_Tuple2('Arizona, Pinal', 462789),
			_Utils_Tuple2('Arizona, Santa Cruz', 46498),
			_Utils_Tuple2('Arizona, Yavapai', 235099),
			_Utils_Tuple2('Arizona, Yuma', 213787),
			_Utils_Tuple2('Arkansas, Arkansas', 3017804),
			_Utils_Tuple2('Arkansas, Arkansas', 17486),
			_Utils_Tuple2('Arkansas, Ashley', 19657),
			_Utils_Tuple2('Arkansas, Baxter', 41932),
			_Utils_Tuple2('Arkansas, Benton', 279141),
			_Utils_Tuple2('Arkansas, Boone', 37432),
			_Utils_Tuple2('Arkansas, Bradley', 10763),
			_Utils_Tuple2('Arkansas, Calhoun', 5189),
			_Utils_Tuple2('Arkansas, Carroll', 28380),
			_Utils_Tuple2('Arkansas, Chicot', 10118),
			_Utils_Tuple2('Arkansas, Clark', 22320),
			_Utils_Tuple2('Arkansas, Clay', 14551),
			_Utils_Tuple2('Arkansas, Cleburne', 24919),
			_Utils_Tuple2('Arkansas, Cleveland', 7956),
			_Utils_Tuple2('Arkansas, Columbia', 23457),
			_Utils_Tuple2('Arkansas, Conway', 20846),
			_Utils_Tuple2('Arkansas, Craighead', 110332),
			_Utils_Tuple2('Arkansas, Crawford', 63257),
			_Utils_Tuple2('Arkansas, Crittenden', 47955),
			_Utils_Tuple2('Arkansas, Cross', 16419),
			_Utils_Tuple2('Arkansas, Dallas', 7009),
			_Utils_Tuple2('Arkansas, Desha', 11361),
			_Utils_Tuple2('Arkansas, Drew', 18219),
			_Utils_Tuple2('Arkansas, Faulkner', 126007),
			_Utils_Tuple2('Arkansas, Franklin', 17715),
			_Utils_Tuple2('Arkansas, Fulton', 12477),
			_Utils_Tuple2('Arkansas, Garland', 99386),
			_Utils_Tuple2('Arkansas, Grant', 18265),
			_Utils_Tuple2('Arkansas, Greene', 45325),
			_Utils_Tuple2('Arkansas, Hempstead', 21532),
			_Utils_Tuple2('Arkansas, Hot Spring', 33771),
			_Utils_Tuple2('Arkansas, Howard', 13202),
			_Utils_Tuple2('Arkansas, Independence', 37825),
			_Utils_Tuple2('Arkansas, Izard', 13629),
			_Utils_Tuple2('Arkansas, Jackson', 16719),
			_Utils_Tuple2('Arkansas, Jefferson', 66824),
			_Utils_Tuple2('Arkansas, Johnson', 26578),
			_Utils_Tuple2('Arkansas, Lafayette', 6624),
			_Utils_Tuple2('Arkansas, Lawrence', 16406),
			_Utils_Tuple2('Arkansas, Lee', 8857),
			_Utils_Tuple2('Arkansas, Lincoln', 13024),
			_Utils_Tuple2('Arkansas, Little River', 12259),
			_Utils_Tuple2('Arkansas, Logan', 21466),
			_Utils_Tuple2('Arkansas, Lonoke', 73309),
			_Utils_Tuple2('Arkansas, Madison', 16576),
			_Utils_Tuple2('Arkansas, Marion', 16694),
			_Utils_Tuple2('Arkansas, Miller', 43257),
			_Utils_Tuple2('Arkansas, Mississippi', 40651),
			_Utils_Tuple2('Arkansas, Monroe', 6701),
			_Utils_Tuple2('Arkansas, Montgomery', 8986),
			_Utils_Tuple2('Arkansas, Nevada', 8252),
			_Utils_Tuple2('Arkansas, Newton', 7753),
			_Utils_Tuple2('Arkansas, Ouachita', 23382),
			_Utils_Tuple2('Arkansas, Perry', 10455),
			_Utils_Tuple2('Arkansas, Phillips', 17782),
			_Utils_Tuple2('Arkansas, Pike', 10718),
			_Utils_Tuple2('Arkansas, Poinsett', 23528),
			_Utils_Tuple2('Arkansas, Polk', 19964),
			_Utils_Tuple2('Arkansas, Pope', 64072),
			_Utils_Tuple2('Arkansas, Prairie', 8062),
			_Utils_Tuple2('Arkansas, Pulaski', 391911),
			_Utils_Tuple2('Arkansas, Randolph', 17958),
			_Utils_Tuple2('Arkansas, St. Francis', 24994),
			_Utils_Tuple2('Arkansas, Saline', 122437),
			_Utils_Tuple2('Arkansas, Scott', 10281),
			_Utils_Tuple2('Arkansas, Searcy', 7881),
			_Utils_Tuple2('Arkansas, Sebastian', 127827),
			_Utils_Tuple2('Arkansas, Sevier', 17007),
			_Utils_Tuple2('Arkansas, Sharp', 17442),
			_Utils_Tuple2('Arkansas, Stone', 12506),
			_Utils_Tuple2('Arkansas, Union', 38682),
			_Utils_Tuple2('Arkansas, Van Buren', 16545),
			_Utils_Tuple2('Arkansas, Washington', 239187),
			_Utils_Tuple2('Arkansas, White', 78753),
			_Utils_Tuple2('Arkansas, Woodruff', 6320),
			_Utils_Tuple2('Arkansas, Yell', 21341),
			_Utils_Tuple2('California, California', 39512223),
			_Utils_Tuple2('California, Alameda', 1671329),
			_Utils_Tuple2('California, Alpine', 1129),
			_Utils_Tuple2('California, Amador', 39752),
			_Utils_Tuple2('California, Butte', 219186),
			_Utils_Tuple2('California, Calaveras', 45905),
			_Utils_Tuple2('California, Colusa', 21547),
			_Utils_Tuple2('California, Contra Costa', 1153526),
			_Utils_Tuple2('California, Del Norte', 27812),
			_Utils_Tuple2('California, El Dorado', 192843),
			_Utils_Tuple2('California, Fresno', 999101),
			_Utils_Tuple2('California, Glenn', 28393),
			_Utils_Tuple2('California, Humboldt', 135558),
			_Utils_Tuple2('California, Imperial', 181215),
			_Utils_Tuple2('California, Inyo', 18039),
			_Utils_Tuple2('California, Kern', 900202),
			_Utils_Tuple2('California, Kings', 152940),
			_Utils_Tuple2('California, Lake', 64386),
			_Utils_Tuple2('California, Lassen', 30573),
			_Utils_Tuple2('California, Los Angeles', 10039107),
			_Utils_Tuple2('California, Madera', 157327),
			_Utils_Tuple2('California, Marin', 258826),
			_Utils_Tuple2('California, Mariposa', 17203),
			_Utils_Tuple2('California, Mendocino', 86749),
			_Utils_Tuple2('California, Merced', 277680),
			_Utils_Tuple2('California, Modoc', 8841),
			_Utils_Tuple2('California, Mono', 14444),
			_Utils_Tuple2('California, Monterey', 434061),
			_Utils_Tuple2('California, Napa', 137744),
			_Utils_Tuple2('California, Nevada', 99755),
			_Utils_Tuple2('California, Orange', 3175692),
			_Utils_Tuple2('California, Placer', 398329),
			_Utils_Tuple2('California, Plumas', 18807),
			_Utils_Tuple2('California, Riverside', 2470546),
			_Utils_Tuple2('California, Sacramento', 1552058),
			_Utils_Tuple2('California, San Benito', 62808),
			_Utils_Tuple2('California, San Bernardino', 2180085),
			_Utils_Tuple2('California, San Diego', 3338330),
			_Utils_Tuple2('California, San Francisco', 881549),
			_Utils_Tuple2('California, San Joaquin', 762148),
			_Utils_Tuple2('California, San Luis Obispo', 283111),
			_Utils_Tuple2('California, San Mateo', 766573),
			_Utils_Tuple2('California, Santa Barbara', 446499),
			_Utils_Tuple2('California, Santa Clara', 1927852),
			_Utils_Tuple2('California, Santa Cruz', 273213),
			_Utils_Tuple2('California, Shasta', 180080),
			_Utils_Tuple2('California, Sierra', 3005),
			_Utils_Tuple2('California, Siskiyou', 43539),
			_Utils_Tuple2('California, Solano', 447643),
			_Utils_Tuple2('California, Sonoma', 494336),
			_Utils_Tuple2('California, Stanislaus', 550660),
			_Utils_Tuple2('California, Sutter', 96971),
			_Utils_Tuple2('California, Tehama', 65084),
			_Utils_Tuple2('California, Trinity', 12285),
			_Utils_Tuple2('California, Tulare', 466195),
			_Utils_Tuple2('California, Tuolumne', 54478),
			_Utils_Tuple2('California, Ventura', 846006),
			_Utils_Tuple2('California, Yolo', 220500),
			_Utils_Tuple2('California, Yuba', 78668),
			_Utils_Tuple2('Colorado, Colorado', 5758736),
			_Utils_Tuple2('Colorado, Adams', 517421),
			_Utils_Tuple2('Colorado, Alamosa', 16233),
			_Utils_Tuple2('Colorado, Arapahoe', 656590),
			_Utils_Tuple2('Colorado, Archuleta', 14029),
			_Utils_Tuple2('Colorado, Baca', 3581),
			_Utils_Tuple2('Colorado, Bent', 5577),
			_Utils_Tuple2('Colorado, Boulder', 326196),
			_Utils_Tuple2('Colorado, Broomfield', 70465),
			_Utils_Tuple2('Colorado, Chaffee', 20356),
			_Utils_Tuple2('Colorado, Cheyenne', 1831),
			_Utils_Tuple2('Colorado, Clear Creek', 9700),
			_Utils_Tuple2('Colorado, Conejos', 8205),
			_Utils_Tuple2('Colorado, Costilla', 3887),
			_Utils_Tuple2('Colorado, Crowley', 6061),
			_Utils_Tuple2('Colorado, Custer', 5068),
			_Utils_Tuple2('Colorado, Delta', 31162),
			_Utils_Tuple2('Colorado, Denver', 727211),
			_Utils_Tuple2('Colorado, Dolores', 2055),
			_Utils_Tuple2('Colorado, Douglas', 351154),
			_Utils_Tuple2('Colorado, Eagle', 55127),
			_Utils_Tuple2('Colorado, Elbert', 26729),
			_Utils_Tuple2('Colorado, El Paso', 720403),
			_Utils_Tuple2('Colorado, Fremont', 47839),
			_Utils_Tuple2('Colorado, Garfield', 60061),
			_Utils_Tuple2('Colorado, Gilpin', 6243),
			_Utils_Tuple2('Colorado, Grand', 15734),
			_Utils_Tuple2('Colorado, Gunnison', 17462),
			_Utils_Tuple2('Colorado, Hinsdale', 820),
			_Utils_Tuple2('Colorado, Huerfano', 6897),
			_Utils_Tuple2('Colorado, Jackson', 1392),
			_Utils_Tuple2('Colorado, Jefferson', 582881),
			_Utils_Tuple2('Colorado, Kiowa', 1406),
			_Utils_Tuple2('Colorado, Kit Carson', 7097),
			_Utils_Tuple2('Colorado, Lake', 8127),
			_Utils_Tuple2('Colorado, La Plata', 56221),
			_Utils_Tuple2('Colorado, Larimer', 356899),
			_Utils_Tuple2('Colorado, Las Animas', 14506),
			_Utils_Tuple2('Colorado, Lincoln', 5701),
			_Utils_Tuple2('Colorado, Logan', 22409),
			_Utils_Tuple2('Colorado, Mesa', 154210),
			_Utils_Tuple2('Colorado, Mineral', 769),
			_Utils_Tuple2('Colorado, Moffat', 13283),
			_Utils_Tuple2('Colorado, Montezuma', 26183),
			_Utils_Tuple2('Colorado, Montrose', 42758),
			_Utils_Tuple2('Colorado, Morgan', 29068),
			_Utils_Tuple2('Colorado, Otero', 18278),
			_Utils_Tuple2('Colorado, Ouray', 4952),
			_Utils_Tuple2('Colorado, Park', 18845),
			_Utils_Tuple2('Colorado, Phillips', 4265),
			_Utils_Tuple2('Colorado, Pitkin', 17767),
			_Utils_Tuple2('Colorado, Prowers', 12172),
			_Utils_Tuple2('Colorado, Pueblo', 168424),
			_Utils_Tuple2('Colorado, Rio Blanco', 6324),
			_Utils_Tuple2('Colorado, Rio Grande', 11267),
			_Utils_Tuple2('Colorado, Routt', 25638),
			_Utils_Tuple2('Colorado, Saguache', 6824),
			_Utils_Tuple2('Colorado, San Juan', 728),
			_Utils_Tuple2('Colorado, San Miguel', 8179),
			_Utils_Tuple2('Colorado, Sedgwick', 2248),
			_Utils_Tuple2('Colorado, Summit', 31011),
			_Utils_Tuple2('Colorado, Teller', 25388),
			_Utils_Tuple2('Colorado, Washington', 4908),
			_Utils_Tuple2('Colorado, Weld', 324492),
			_Utils_Tuple2('Colorado, Yuma', 10019),
			_Utils_Tuple2('Connecticut, Connecticut', 3565287),
			_Utils_Tuple2('Connecticut, Fairfield', 943332),
			_Utils_Tuple2('Connecticut, Hartford', 891720),
			_Utils_Tuple2('Connecticut, Litchfield', 180333),
			_Utils_Tuple2('Connecticut, Middlesex', 162436),
			_Utils_Tuple2('Connecticut, New Haven', 854757),
			_Utils_Tuple2('Connecticut, New London', 265206),
			_Utils_Tuple2('Connecticut, Tolland', 150721),
			_Utils_Tuple2('Connecticut, Windham', 116782),
			_Utils_Tuple2('Delaware, Delaware', 973764),
			_Utils_Tuple2('Delaware, Kent', 180786),
			_Utils_Tuple2('Delaware, New Castle', 558753),
			_Utils_Tuple2('Delaware, Sussex', 234225),
			_Utils_Tuple2('District of Columbia, District of Columbia', 705749),
			_Utils_Tuple2('District of Columbia, District of Columbia', 705749),
			_Utils_Tuple2('Florida, Florida', 21477737),
			_Utils_Tuple2('Florida, Alachua', 269043),
			_Utils_Tuple2('Florida, Baker', 29210),
			_Utils_Tuple2('Florida, Bay', 174705),
			_Utils_Tuple2('Florida, Bradford', 28201),
			_Utils_Tuple2('Florida, Brevard', 601942),
			_Utils_Tuple2('Florida, Broward', 1952778),
			_Utils_Tuple2('Florida, Calhoun', 14105),
			_Utils_Tuple2('Florida, Charlotte', 188910),
			_Utils_Tuple2('Florida, Citrus', 149657),
			_Utils_Tuple2('Florida, Clay', 219252),
			_Utils_Tuple2('Florida, Collier', 384902),
			_Utils_Tuple2('Florida, Columbia', 71686),
			_Utils_Tuple2('Florida, DeSoto', 38001),
			_Utils_Tuple2('Florida, Dixie', 16826),
			_Utils_Tuple2('Florida, Duval', 957755),
			_Utils_Tuple2('Florida, Escambia', 318316),
			_Utils_Tuple2('Florida, Flagler', 115081),
			_Utils_Tuple2('Florida, Franklin', 12125),
			_Utils_Tuple2('Florida, Gadsden', 45660),
			_Utils_Tuple2('Florida, Gilchrist', 18582),
			_Utils_Tuple2('Florida, Glades', 13811),
			_Utils_Tuple2('Florida, Gulf', 13639),
			_Utils_Tuple2('Florida, Hamilton', 14428),
			_Utils_Tuple2('Florida, Hardee', 26937),
			_Utils_Tuple2('Florida, Hendry', 42022),
			_Utils_Tuple2('Florida, Hernando', 193920),
			_Utils_Tuple2('Florida, Highlands', 106221),
			_Utils_Tuple2('Florida, Hillsborough', 1471968),
			_Utils_Tuple2('Florida, Holmes', 19617),
			_Utils_Tuple2('Florida, Indian River', 159923),
			_Utils_Tuple2('Florida, Jackson', 46414),
			_Utils_Tuple2('Florida, Jefferson', 14246),
			_Utils_Tuple2('Florida, Lafayette', 8422),
			_Utils_Tuple2('Florida, Lake', 367118),
			_Utils_Tuple2('Florida, Lee', 770577),
			_Utils_Tuple2('Florida, Leon', 293582),
			_Utils_Tuple2('Florida, Levy', 41503),
			_Utils_Tuple2('Florida, Liberty', 8354),
			_Utils_Tuple2('Florida, Madison', 18493),
			_Utils_Tuple2('Florida, Manatee', 403253),
			_Utils_Tuple2('Florida, Marion', 365579),
			_Utils_Tuple2('Florida, Martin', 161000),
			_Utils_Tuple2('Florida, Miami-Dade', 2716940),
			_Utils_Tuple2('Florida, Monroe', 74228),
			_Utils_Tuple2('Florida, Nassau', 88625),
			_Utils_Tuple2('Florida, Okaloosa', 210738),
			_Utils_Tuple2('Florida, Okeechobee', 42168),
			_Utils_Tuple2('Florida, Orange', 1393452),
			_Utils_Tuple2('Florida, Osceola', 375751),
			_Utils_Tuple2('Florida, Palm Beach', 1496770),
			_Utils_Tuple2('Florida, Pasco', 553947),
			_Utils_Tuple2('Florida, Pinellas', 974996),
			_Utils_Tuple2('Florida, Polk', 724777),
			_Utils_Tuple2('Florida, Putnam', 74521),
			_Utils_Tuple2('Florida, St. Johns', 264672),
			_Utils_Tuple2('Florida, St. Lucie', 328297),
			_Utils_Tuple2('Florida, Santa Rosa', 184313),
			_Utils_Tuple2('Florida, Sarasota', 433742),
			_Utils_Tuple2('Florida, Seminole', 471826),
			_Utils_Tuple2('Florida, Sumter', 132420),
			_Utils_Tuple2('Florida, Suwannee', 44417),
			_Utils_Tuple2('Florida, Taylor', 21569),
			_Utils_Tuple2('Florida, Union', 15237),
			_Utils_Tuple2('Florida, Volusia', 553284),
			_Utils_Tuple2('Florida, Wakulla', 33739),
			_Utils_Tuple2('Florida, Walton', 74071),
			_Utils_Tuple2('Florida, Washington', 25473),
			_Utils_Tuple2('Georgia, Georgia', 10617423),
			_Utils_Tuple2('Georgia, Appling', 18386),
			_Utils_Tuple2('Georgia, Atkinson', 8165),
			_Utils_Tuple2('Georgia, Bacon', 11164),
			_Utils_Tuple2('Georgia, Baker', 3038),
			_Utils_Tuple2('Georgia, Baldwin', 44890),
			_Utils_Tuple2('Georgia, Banks', 19234),
			_Utils_Tuple2('Georgia, Barrow', 83240),
			_Utils_Tuple2('Georgia, Bartow', 107738),
			_Utils_Tuple2('Georgia, Ben Hill', 16700),
			_Utils_Tuple2('Georgia, Berrien', 19397),
			_Utils_Tuple2('Georgia, Bibb', 153159),
			_Utils_Tuple2('Georgia, Bleckley', 12873),
			_Utils_Tuple2('Georgia, Brantley', 19109),
			_Utils_Tuple2('Georgia, Brooks', 15457),
			_Utils_Tuple2('Georgia, Bryan', 39627),
			_Utils_Tuple2('Georgia, Bulloch', 79608),
			_Utils_Tuple2('Georgia, Burke', 22383),
			_Utils_Tuple2('Georgia, Butts', 24936),
			_Utils_Tuple2('Georgia, Calhoun', 6189),
			_Utils_Tuple2('Georgia, Camden', 54666),
			_Utils_Tuple2('Georgia, Candler', 10803),
			_Utils_Tuple2('Georgia, Carroll', 119992),
			_Utils_Tuple2('Georgia, Catoosa', 67580),
			_Utils_Tuple2('Georgia, Charlton', 13392),
			_Utils_Tuple2('Georgia, Chatham', 289430),
			_Utils_Tuple2('Georgia, Chattahoochee', 10907),
			_Utils_Tuple2('Georgia, Chattooga', 24789),
			_Utils_Tuple2('Georgia, Cherokee', 258773),
			_Utils_Tuple2('Georgia, Clarke', 128331),
			_Utils_Tuple2('Georgia, Clay', 2834),
			_Utils_Tuple2('Georgia, Clayton', 292256),
			_Utils_Tuple2('Georgia, Clinch', 6618),
			_Utils_Tuple2('Georgia, Cobb', 760141),
			_Utils_Tuple2('Georgia, Coffee', 43273),
			_Utils_Tuple2('Georgia, Colquitt', 45600),
			_Utils_Tuple2('Georgia, Columbia', 156714),
			_Utils_Tuple2('Georgia, Cook', 17270),
			_Utils_Tuple2('Georgia, Coweta', 148509),
			_Utils_Tuple2('Georgia, Crawford', 12404),
			_Utils_Tuple2('Georgia, Crisp', 22372),
			_Utils_Tuple2('Georgia, Dade', 16116),
			_Utils_Tuple2('Georgia, Dawson', 26108),
			_Utils_Tuple2('Georgia, Decatur', 26404),
			_Utils_Tuple2('Georgia, DeKalb', 759297),
			_Utils_Tuple2('Georgia, Dodge', 20605),
			_Utils_Tuple2('Georgia, Dooly', 13390),
			_Utils_Tuple2('Georgia, Dougherty', 87956),
			_Utils_Tuple2('Georgia, Douglas', 146343),
			_Utils_Tuple2('Georgia, Early', 10190),
			_Utils_Tuple2('Georgia, Echols', 4006),
			_Utils_Tuple2('Georgia, Effingham', 64296),
			_Utils_Tuple2('Georgia, Elbert', 19194),
			_Utils_Tuple2('Georgia, Emanuel', 22646),
			_Utils_Tuple2('Georgia, Evans', 10654),
			_Utils_Tuple2('Georgia, Fannin', 26188),
			_Utils_Tuple2('Georgia, Fayette', 114421),
			_Utils_Tuple2('Georgia, Floyd', 98498),
			_Utils_Tuple2('Georgia, Forsyth', 244252),
			_Utils_Tuple2('Georgia, Franklin', 23349),
			_Utils_Tuple2('Georgia, Fulton', 1063937),
			_Utils_Tuple2('Georgia, Gilmer', 31369),
			_Utils_Tuple2('Georgia, Glascock', 2971),
			_Utils_Tuple2('Georgia, Glynn', 85292),
			_Utils_Tuple2('Georgia, Gordon', 57963),
			_Utils_Tuple2('Georgia, Grady', 24633),
			_Utils_Tuple2('Georgia, Greene', 18324),
			_Utils_Tuple2('Georgia, Gwinnett', 936250),
			_Utils_Tuple2('Georgia, Habersham', 45328),
			_Utils_Tuple2('Georgia, Hall', 204441),
			_Utils_Tuple2('Georgia, Hancock', 8457),
			_Utils_Tuple2('Georgia, Haralson', 29792),
			_Utils_Tuple2('Georgia, Harris', 35236),
			_Utils_Tuple2('Georgia, Hart', 26205),
			_Utils_Tuple2('Georgia, Heard', 11923),
			_Utils_Tuple2('Georgia, Henry', 234561),
			_Utils_Tuple2('Georgia, Houston', 157863),
			_Utils_Tuple2('Georgia, Irwin', 9416),
			_Utils_Tuple2('Georgia, Jackson', 72977),
			_Utils_Tuple2('Georgia, Jasper', 14219),
			_Utils_Tuple2('Georgia, Jeff Davis', 15115),
			_Utils_Tuple2('Georgia, Jefferson', 15362),
			_Utils_Tuple2('Georgia, Jenkins', 8676),
			_Utils_Tuple2('Georgia, Johnson', 9643),
			_Utils_Tuple2('Georgia, Jones', 28735),
			_Utils_Tuple2('Georgia, Lamar', 19077),
			_Utils_Tuple2('Georgia, Lanier', 10423),
			_Utils_Tuple2('Georgia, Laurens', 47546),
			_Utils_Tuple2('Georgia, Lee', 29992),
			_Utils_Tuple2('Georgia, Liberty', 61435),
			_Utils_Tuple2('Georgia, Lincoln', 7921),
			_Utils_Tuple2('Georgia, Long', 19559),
			_Utils_Tuple2('Georgia, Lowndes', 117406),
			_Utils_Tuple2('Georgia, Lumpkin', 33610),
			_Utils_Tuple2('Georgia, McDuffie', 21312),
			_Utils_Tuple2('Georgia, McIntosh', 14378),
			_Utils_Tuple2('Georgia, Macon', 12947),
			_Utils_Tuple2('Georgia, Madison', 29880),
			_Utils_Tuple2('Georgia, Marion', 8359),
			_Utils_Tuple2('Georgia, Meriwether', 21167),
			_Utils_Tuple2('Georgia, Miller', 5718),
			_Utils_Tuple2('Georgia, Mitchell', 21863),
			_Utils_Tuple2('Georgia, Monroe', 27578),
			_Utils_Tuple2('Georgia, Montgomery', 9172),
			_Utils_Tuple2('Georgia, Morgan', 19276),
			_Utils_Tuple2('Georgia, Murray', 40096),
			_Utils_Tuple2('Georgia, Muscogee', 195769),
			_Utils_Tuple2('Georgia, Newton', 111744),
			_Utils_Tuple2('Georgia, Oconee', 40280),
			_Utils_Tuple2('Georgia, Oglethorpe', 15259),
			_Utils_Tuple2('Georgia, Paulding', 168667),
			_Utils_Tuple2('Georgia, Peach', 27546),
			_Utils_Tuple2('Georgia, Pickens', 32591),
			_Utils_Tuple2('Georgia, Pierce', 19465),
			_Utils_Tuple2('Georgia, Pike', 18962),
			_Utils_Tuple2('Georgia, Polk', 42613),
			_Utils_Tuple2('Georgia, Pulaski', 11137),
			_Utils_Tuple2('Georgia, Putnam', 22119),
			_Utils_Tuple2('Georgia, Quitman', 2299),
			_Utils_Tuple2('Georgia, Rabun', 17137),
			_Utils_Tuple2('Georgia, Randolph', 6778),
			_Utils_Tuple2('Georgia, Richmond', 202518),
			_Utils_Tuple2('Georgia, Rockdale', 90896),
			_Utils_Tuple2('Georgia, Schley', 5257),
			_Utils_Tuple2('Georgia, Screven', 13966),
			_Utils_Tuple2('Georgia, Seminole', 8090),
			_Utils_Tuple2('Georgia, Spalding', 66703),
			_Utils_Tuple2('Georgia, Stephens', 25925),
			_Utils_Tuple2('Georgia, Stewart', 6621),
			_Utils_Tuple2('Georgia, Sumter', 29524),
			_Utils_Tuple2('Georgia, Talbot', 6195),
			_Utils_Tuple2('Georgia, Taliaferro', 1537),
			_Utils_Tuple2('Georgia, Tattnall', 25286),
			_Utils_Tuple2('Georgia, Taylor', 8020),
			_Utils_Tuple2('Georgia, Telfair', 15860),
			_Utils_Tuple2('Georgia, Terrell', 8531),
			_Utils_Tuple2('Georgia, Thomas', 44451),
			_Utils_Tuple2('Georgia, Tift', 40644),
			_Utils_Tuple2('Georgia, Toombs', 26830),
			_Utils_Tuple2('Georgia, Towns', 12037),
			_Utils_Tuple2('Georgia, Treutlen', 6901),
			_Utils_Tuple2('Georgia, Troup', 69922),
			_Utils_Tuple2('Georgia, Turner', 7985),
			_Utils_Tuple2('Georgia, Twiggs', 8120),
			_Utils_Tuple2('Georgia, Union', 24511),
			_Utils_Tuple2('Georgia, Upson', 26320),
			_Utils_Tuple2('Georgia, Walker', 69761),
			_Utils_Tuple2('Georgia, Walton', 94593),
			_Utils_Tuple2('Georgia, Ware', 35734),
			_Utils_Tuple2('Georgia, Warren', 5254),
			_Utils_Tuple2('Georgia, Washington', 20374),
			_Utils_Tuple2('Georgia, Wayne', 29927),
			_Utils_Tuple2('Georgia, Webster', 2607),
			_Utils_Tuple2('Georgia, Wheeler', 7855),
			_Utils_Tuple2('Georgia, White', 30798),
			_Utils_Tuple2('Georgia, Whitfield', 104628),
			_Utils_Tuple2('Georgia, Wilcox', 8635),
			_Utils_Tuple2('Georgia, Wilkes', 9777),
			_Utils_Tuple2('Georgia, Wilkinson', 8954),
			_Utils_Tuple2('Georgia, Worth', 20247),
			_Utils_Tuple2('Hawaii, Hawaii', 1415872),
			_Utils_Tuple2('Hawaii, Hawaii', 201513),
			_Utils_Tuple2('Hawaii, Honolulu', 974563),
			_Utils_Tuple2('Hawaii, Kalawao', 86),
			_Utils_Tuple2('Hawaii, Kauai', 72293),
			_Utils_Tuple2('Hawaii, Maui', 167417),
			_Utils_Tuple2('Idaho, Idaho', 1787065),
			_Utils_Tuple2('Idaho, Ada', 481587),
			_Utils_Tuple2('Idaho, Adams', 4294),
			_Utils_Tuple2('Idaho, Bannock', 87808),
			_Utils_Tuple2('Idaho, Bear Lake', 6125),
			_Utils_Tuple2('Idaho, Benewah', 9298),
			_Utils_Tuple2('Idaho, Bingham', 46811),
			_Utils_Tuple2('Idaho, Blaine', 23021),
			_Utils_Tuple2('Idaho, Boise', 7831),
			_Utils_Tuple2('Idaho, Bonner', 45739),
			_Utils_Tuple2('Idaho, Bonneville', 119062),
			_Utils_Tuple2('Idaho, Boundary', 12245),
			_Utils_Tuple2('Idaho, Butte', 2597),
			_Utils_Tuple2('Idaho, Camas', 1106),
			_Utils_Tuple2('Idaho, Canyon', 229849),
			_Utils_Tuple2('Idaho, Caribou', 7155),
			_Utils_Tuple2('Idaho, Cassia', 24030),
			_Utils_Tuple2('Idaho, Clark', 845),
			_Utils_Tuple2('Idaho, Clearwater', 8756),
			_Utils_Tuple2('Idaho, Custer', 4315),
			_Utils_Tuple2('Idaho, Elmore', 27511),
			_Utils_Tuple2('Idaho, Franklin', 13876),
			_Utils_Tuple2('Idaho, Fremont', 13099),
			_Utils_Tuple2('Idaho, Gem', 18112),
			_Utils_Tuple2('Idaho, Gooding', 15179),
			_Utils_Tuple2('Idaho, Idaho', 16667),
			_Utils_Tuple2('Idaho, Jefferson', 29871),
			_Utils_Tuple2('Idaho, Jerome', 24412),
			_Utils_Tuple2('Idaho, Kootenai', 165697),
			_Utils_Tuple2('Idaho, Latah', 40108),
			_Utils_Tuple2('Idaho, Lemhi', 8027),
			_Utils_Tuple2('Idaho, Lewis', 3838),
			_Utils_Tuple2('Idaho, Lincoln', 5366),
			_Utils_Tuple2('Idaho, Madison', 39907),
			_Utils_Tuple2('Idaho, Minidoka', 21039),
			_Utils_Tuple2('Idaho, Nez Perce', 40408),
			_Utils_Tuple2('Idaho, Oneida', 4531),
			_Utils_Tuple2('Idaho, Owyhee', 11823),
			_Utils_Tuple2('Idaho, Payette', 23951),
			_Utils_Tuple2('Idaho, Power', 7681),
			_Utils_Tuple2('Idaho, Shoshone', 12882),
			_Utils_Tuple2('Idaho, Teton', 12142),
			_Utils_Tuple2('Idaho, Twin Falls', 86878),
			_Utils_Tuple2('Idaho, Valley', 11392),
			_Utils_Tuple2('Idaho, Washington', 10194),
			_Utils_Tuple2('Illinois, Illinois', 12671821),
			_Utils_Tuple2('Illinois, Adams', 65435),
			_Utils_Tuple2('Illinois, Alexander', 5761),
			_Utils_Tuple2('Illinois, Bond', 16426),
			_Utils_Tuple2('Illinois, Boone', 53544),
			_Utils_Tuple2('Illinois, Brown', 6578),
			_Utils_Tuple2('Illinois, Bureau', 32628),
			_Utils_Tuple2('Illinois, Calhoun', 4739),
			_Utils_Tuple2('Illinois, Carroll', 14305),
			_Utils_Tuple2('Illinois, Cass', 12147),
			_Utils_Tuple2('Illinois, Champaign', 209689),
			_Utils_Tuple2('Illinois, Christian', 32304),
			_Utils_Tuple2('Illinois, Clark', 15441),
			_Utils_Tuple2('Illinois, Clay', 13184),
			_Utils_Tuple2('Illinois, Clinton', 37562),
			_Utils_Tuple2('Illinois, Coles', 50621),
			_Utils_Tuple2('Illinois, Cook', 5150233),
			_Utils_Tuple2('Illinois, Crawford', 18667),
			_Utils_Tuple2('Illinois, Cumberland', 10766),
			_Utils_Tuple2('Illinois, DeKalb', 104897),
			_Utils_Tuple2('Illinois, De Witt', 15638),
			_Utils_Tuple2('Illinois, Douglas', 19465),
			_Utils_Tuple2('Illinois, DuPage', 922921),
			_Utils_Tuple2('Illinois, Edgar', 17161),
			_Utils_Tuple2('Illinois, Edwards', 6395),
			_Utils_Tuple2('Illinois, Effingham', 34008),
			_Utils_Tuple2('Illinois, Fayette', 21336),
			_Utils_Tuple2('Illinois, Ford', 12961),
			_Utils_Tuple2('Illinois, Franklin', 38469),
			_Utils_Tuple2('Illinois, Fulton', 34340),
			_Utils_Tuple2('Illinois, Gallatin', 4828),
			_Utils_Tuple2('Illinois, Greene', 12969),
			_Utils_Tuple2('Illinois, Grundy', 51054),
			_Utils_Tuple2('Illinois, Hamilton', 8116),
			_Utils_Tuple2('Illinois, Hancock', 17708),
			_Utils_Tuple2('Illinois, Hardin', 3821),
			_Utils_Tuple2('Illinois, Henderson', 6646),
			_Utils_Tuple2('Illinois, Henry', 48913),
			_Utils_Tuple2('Illinois, Iroquois', 27114),
			_Utils_Tuple2('Illinois, Jackson', 56750),
			_Utils_Tuple2('Illinois, Jasper', 9610),
			_Utils_Tuple2('Illinois, Jefferson', 37684),
			_Utils_Tuple2('Illinois, Jersey', 21773),
			_Utils_Tuple2('Illinois, Jo Daviess', 21235),
			_Utils_Tuple2('Illinois, Johnson', 12417),
			_Utils_Tuple2('Illinois, Kane', 532403),
			_Utils_Tuple2('Illinois, Kankakee', 109862),
			_Utils_Tuple2('Illinois, Kendall', 128990),
			_Utils_Tuple2('Illinois, Knox', 49699),
			_Utils_Tuple2('Illinois, Lake', 696535),
			_Utils_Tuple2('Illinois, LaSalle', 108669),
			_Utils_Tuple2('Illinois, Lawrence', 15678),
			_Utils_Tuple2('Illinois, Lee', 34096),
			_Utils_Tuple2('Illinois, Livingston', 35648),
			_Utils_Tuple2('Illinois, Logan', 28618),
			_Utils_Tuple2('Illinois, McDonough', 29682),
			_Utils_Tuple2('Illinois, McHenry', 307774),
			_Utils_Tuple2('Illinois, McLean', 171517),
			_Utils_Tuple2('Illinois, Macon', 104009),
			_Utils_Tuple2('Illinois, Macoupin', 44926),
			_Utils_Tuple2('Illinois, Madison', 262966),
			_Utils_Tuple2('Illinois, Marion', 37205),
			_Utils_Tuple2('Illinois, Marshall', 11438),
			_Utils_Tuple2('Illinois, Mason', 13359),
			_Utils_Tuple2('Illinois, Massac', 13772),
			_Utils_Tuple2('Illinois, Menard', 12196),
			_Utils_Tuple2('Illinois, Mercer', 15437),
			_Utils_Tuple2('Illinois, Monroe', 34637),
			_Utils_Tuple2('Illinois, Montgomery', 28414),
			_Utils_Tuple2('Illinois, Morgan', 33658),
			_Utils_Tuple2('Illinois, Moultrie', 14501),
			_Utils_Tuple2('Illinois, Ogle', 50643),
			_Utils_Tuple2('Illinois, Peoria', 179179),
			_Utils_Tuple2('Illinois, Perry', 20916),
			_Utils_Tuple2('Illinois, Piatt', 16344),
			_Utils_Tuple2('Illinois, Pike', 15561),
			_Utils_Tuple2('Illinois, Pope', 4177),
			_Utils_Tuple2('Illinois, Pulaski', 5335),
			_Utils_Tuple2('Illinois, Putnam', 5739),
			_Utils_Tuple2('Illinois, Randolph', 31782),
			_Utils_Tuple2('Illinois, Richland', 15513),
			_Utils_Tuple2('Illinois, Rock Island', 141879),
			_Utils_Tuple2('Illinois, St. Clair', 259686),
			_Utils_Tuple2('Illinois, Saline', 23491),
			_Utils_Tuple2('Illinois, Sangamon', 194672),
			_Utils_Tuple2('Illinois, Schuyler', 6768),
			_Utils_Tuple2('Illinois, Scott', 4951),
			_Utils_Tuple2('Illinois, Shelby', 21634),
			_Utils_Tuple2('Illinois, Stark', 5342),
			_Utils_Tuple2('Illinois, Stephenson', 44498),
			_Utils_Tuple2('Illinois, Tazewell', 131803),
			_Utils_Tuple2('Illinois, Union', 16653),
			_Utils_Tuple2('Illinois, Vermilion', 75758),
			_Utils_Tuple2('Illinois, Wabash', 11520),
			_Utils_Tuple2('Illinois, Warren', 16844),
			_Utils_Tuple2('Illinois, Washington', 13887),
			_Utils_Tuple2('Illinois, Wayne', 16215),
			_Utils_Tuple2('Illinois, White', 13537),
			_Utils_Tuple2('Illinois, Whiteside', 55175),
			_Utils_Tuple2('Illinois, Will', 690743),
			_Utils_Tuple2('Illinois, Williamson', 66597),
			_Utils_Tuple2('Illinois, Winnebago', 282572),
			_Utils_Tuple2('Illinois, Woodford', 38459),
			_Utils_Tuple2('Indiana, Indiana', 6732219),
			_Utils_Tuple2('Indiana, Adams', 35777),
			_Utils_Tuple2('Indiana, Allen', 379299),
			_Utils_Tuple2('Indiana, Bartholomew', 83779),
			_Utils_Tuple2('Indiana, Benton', 8748),
			_Utils_Tuple2('Indiana, Blackford', 11758),
			_Utils_Tuple2('Indiana, Boone', 67843),
			_Utils_Tuple2('Indiana, Brown', 15092),
			_Utils_Tuple2('Indiana, Carroll', 20257),
			_Utils_Tuple2('Indiana, Cass', 37689),
			_Utils_Tuple2('Indiana, Clark', 118302),
			_Utils_Tuple2('Indiana, Clay', 26225),
			_Utils_Tuple2('Indiana, Clinton', 32399),
			_Utils_Tuple2('Indiana, Crawford', 10577),
			_Utils_Tuple2('Indiana, Daviess', 33351),
			_Utils_Tuple2('Indiana, Dearborn', 49458),
			_Utils_Tuple2('Indiana, Decatur', 26559),
			_Utils_Tuple2('Indiana, DeKalb', 43475),
			_Utils_Tuple2('Indiana, Delaware', 114135),
			_Utils_Tuple2('Indiana, Dubois', 42736),
			_Utils_Tuple2('Indiana, Elkhart', 206341),
			_Utils_Tuple2('Indiana, Fayette', 23102),
			_Utils_Tuple2('Indiana, Floyd', 78522),
			_Utils_Tuple2('Indiana, Fountain', 16346),
			_Utils_Tuple2('Indiana, Franklin', 22758),
			_Utils_Tuple2('Indiana, Fulton', 19974),
			_Utils_Tuple2('Indiana, Gibson', 33659),
			_Utils_Tuple2('Indiana, Grant', 65769),
			_Utils_Tuple2('Indiana, Greene', 31922),
			_Utils_Tuple2('Indiana, Hamilton', 338011),
			_Utils_Tuple2('Indiana, Hancock', 78168),
			_Utils_Tuple2('Indiana, Harrison', 40515),
			_Utils_Tuple2('Indiana, Hendricks', 170311),
			_Utils_Tuple2('Indiana, Henry', 47972),
			_Utils_Tuple2('Indiana, Howard', 82544),
			_Utils_Tuple2('Indiana, Huntington', 36520),
			_Utils_Tuple2('Indiana, Jackson', 44231),
			_Utils_Tuple2('Indiana, Jasper', 33562),
			_Utils_Tuple2('Indiana, Jay', 20436),
			_Utils_Tuple2('Indiana, Jefferson', 32308),
			_Utils_Tuple2('Indiana, Jennings', 27735),
			_Utils_Tuple2('Indiana, Johnson', 158167),
			_Utils_Tuple2('Indiana, Knox', 36594),
			_Utils_Tuple2('Indiana, Kosciusko', 79456),
			_Utils_Tuple2('Indiana, LaGrange', 39614),
			_Utils_Tuple2('Indiana, Lake', 485493),
			_Utils_Tuple2('Indiana, LaPorte', 109888),
			_Utils_Tuple2('Indiana, Lawrence', 45370),
			_Utils_Tuple2('Indiana, Madison', 129569),
			_Utils_Tuple2('Indiana, Marion', 964582),
			_Utils_Tuple2('Indiana, Marshall', 46258),
			_Utils_Tuple2('Indiana, Martin', 10255),
			_Utils_Tuple2('Indiana, Miami', 35516),
			_Utils_Tuple2('Indiana, Monroe', 148431),
			_Utils_Tuple2('Indiana, Montgomery', 38338),
			_Utils_Tuple2('Indiana, Morgan', 70489),
			_Utils_Tuple2('Indiana, Newton', 13984),
			_Utils_Tuple2('Indiana, Noble', 47744),
			_Utils_Tuple2('Indiana, Ohio', 5875),
			_Utils_Tuple2('Indiana, Orange', 19646),
			_Utils_Tuple2('Indiana, Owen', 20799),
			_Utils_Tuple2('Indiana, Parke', 16937),
			_Utils_Tuple2('Indiana, Perry', 19169),
			_Utils_Tuple2('Indiana, Pike', 12389),
			_Utils_Tuple2('Indiana, Porter', 170389),
			_Utils_Tuple2('Indiana, Posey', 25427),
			_Utils_Tuple2('Indiana, Pulaski', 12353),
			_Utils_Tuple2('Indiana, Putnam', 37576),
			_Utils_Tuple2('Indiana, Randolph', 24665),
			_Utils_Tuple2('Indiana, Ripley', 28324),
			_Utils_Tuple2('Indiana, Rush', 16581),
			_Utils_Tuple2('Indiana, St. Joseph', 271826),
			_Utils_Tuple2('Indiana, Scott', 23873),
			_Utils_Tuple2('Indiana, Shelby', 44729),
			_Utils_Tuple2('Indiana, Spencer', 20277),
			_Utils_Tuple2('Indiana, Starke', 22995),
			_Utils_Tuple2('Indiana, Steuben', 34594),
			_Utils_Tuple2('Indiana, Sullivan', 20669),
			_Utils_Tuple2('Indiana, Switzerland', 10751),
			_Utils_Tuple2('Indiana, Tippecanoe', 195732),
			_Utils_Tuple2('Indiana, Tipton', 15148),
			_Utils_Tuple2('Indiana, Union', 7054),
			_Utils_Tuple2('Indiana, Vanderburgh', 181451),
			_Utils_Tuple2('Indiana, Vermillion', 15498),
			_Utils_Tuple2('Indiana, Vigo', 107038),
			_Utils_Tuple2('Indiana, Wabash', 30996),
			_Utils_Tuple2('Indiana, Warren', 8265),
			_Utils_Tuple2('Indiana, Warrick', 62998),
			_Utils_Tuple2('Indiana, Washington', 28036),
			_Utils_Tuple2('Indiana, Wayne', 65884),
			_Utils_Tuple2('Indiana, Wells', 28296),
			_Utils_Tuple2('Indiana, White', 24102),
			_Utils_Tuple2('Indiana, Whitley', 33964),
			_Utils_Tuple2('Iowa, Iowa', 3155070),
			_Utils_Tuple2('Iowa, Adair', 7152),
			_Utils_Tuple2('Iowa, Adams', 3602),
			_Utils_Tuple2('Iowa, Allamakee', 13687),
			_Utils_Tuple2('Iowa, Appanoose', 12426),
			_Utils_Tuple2('Iowa, Audubon', 5496),
			_Utils_Tuple2('Iowa, Benton', 25645),
			_Utils_Tuple2('Iowa, Black Hawk', 131228),
			_Utils_Tuple2('Iowa, Boone', 26234),
			_Utils_Tuple2('Iowa, Bremer', 25062),
			_Utils_Tuple2('Iowa, Buchanan', 21175),
			_Utils_Tuple2('Iowa, Buena Vista', 19620),
			_Utils_Tuple2('Iowa, Butler', 14439),
			_Utils_Tuple2('Iowa, Calhoun', 9668),
			_Utils_Tuple2('Iowa, Carroll', 20165),
			_Utils_Tuple2('Iowa, Cass', 12836),
			_Utils_Tuple2('Iowa, Cedar', 18627),
			_Utils_Tuple2('Iowa, Cerro Gordo', 42450),
			_Utils_Tuple2('Iowa, Cherokee', 11235),
			_Utils_Tuple2('Iowa, Chickasaw', 11933),
			_Utils_Tuple2('Iowa, Clarke', 9395),
			_Utils_Tuple2('Iowa, Clay', 16016),
			_Utils_Tuple2('Iowa, Clayton', 17549),
			_Utils_Tuple2('Iowa, Clinton', 46429),
			_Utils_Tuple2('Iowa, Crawford', 16820),
			_Utils_Tuple2('Iowa, Dallas', 93453),
			_Utils_Tuple2('Iowa, Davis', 9000),
			_Utils_Tuple2('Iowa, Decatur', 7870),
			_Utils_Tuple2('Iowa, Delaware', 17011),
			_Utils_Tuple2('Iowa, Des Moines', 38967),
			_Utils_Tuple2('Iowa, Dickinson', 17258),
			_Utils_Tuple2('Iowa, Dubuque', 97311),
			_Utils_Tuple2('Iowa, Emmet', 9208),
			_Utils_Tuple2('Iowa, Fayette', 19650),
			_Utils_Tuple2('Iowa, Floyd', 15642),
			_Utils_Tuple2('Iowa, Franklin', 10070),
			_Utils_Tuple2('Iowa, Fremont', 6960),
			_Utils_Tuple2('Iowa, Greene', 8888),
			_Utils_Tuple2('Iowa, Grundy', 12232),
			_Utils_Tuple2('Iowa, Guthrie', 10689),
			_Utils_Tuple2('Iowa, Hamilton', 14773),
			_Utils_Tuple2('Iowa, Hancock', 10630),
			_Utils_Tuple2('Iowa, Hardin', 16846),
			_Utils_Tuple2('Iowa, Harrison', 14049),
			_Utils_Tuple2('Iowa, Henry', 19954),
			_Utils_Tuple2('Iowa, Howard', 9158),
			_Utils_Tuple2('Iowa, Humboldt', 9558),
			_Utils_Tuple2('Iowa, Ida', 6860),
			_Utils_Tuple2('Iowa, Iowa', 16184),
			_Utils_Tuple2('Iowa, Jackson', 19439),
			_Utils_Tuple2('Iowa, Jasper', 37185),
			_Utils_Tuple2('Iowa, Jefferson', 18295),
			_Utils_Tuple2('Iowa, Johnson', 151140),
			_Utils_Tuple2('Iowa, Jones', 20681),
			_Utils_Tuple2('Iowa, Keokuk', 10246),
			_Utils_Tuple2('Iowa, Kossuth', 14813),
			_Utils_Tuple2('Iowa, Lee', 33657),
			_Utils_Tuple2('Iowa, Linn', 226706),
			_Utils_Tuple2('Iowa, Louisa', 11035),
			_Utils_Tuple2('Iowa, Lucas', 8600),
			_Utils_Tuple2('Iowa, Lyon', 11755),
			_Utils_Tuple2('Iowa, Madison', 16338),
			_Utils_Tuple2('Iowa, Mahaska', 22095),
			_Utils_Tuple2('Iowa, Marion', 33253),
			_Utils_Tuple2('Iowa, Marshall', 39369),
			_Utils_Tuple2('Iowa, Mills', 15109),
			_Utils_Tuple2('Iowa, Mitchell', 10586),
			_Utils_Tuple2('Iowa, Monona', 8615),
			_Utils_Tuple2('Iowa, Monroe', 7707),
			_Utils_Tuple2('Iowa, Montgomery', 9917),
			_Utils_Tuple2('Iowa, Muscatine', 42664),
			_Utils_Tuple2('Iowa, O\'Brien', 13753),
			_Utils_Tuple2('Iowa, Osceola', 5958),
			_Utils_Tuple2('Iowa, Page', 15107),
			_Utils_Tuple2('Iowa, Palo Alto', 8886),
			_Utils_Tuple2('Iowa, Plymouth', 25177),
			_Utils_Tuple2('Iowa, Pocahontas', 6619),
			_Utils_Tuple2('Iowa, Polk', 490161),
			_Utils_Tuple2('Iowa, Pottawattamie', 93206),
			_Utils_Tuple2('Iowa, Poweshiek', 18504),
			_Utils_Tuple2('Iowa, Ringgold', 4894),
			_Utils_Tuple2('Iowa, Sac', 9721),
			_Utils_Tuple2('Iowa, Scott', 172943),
			_Utils_Tuple2('Iowa, Shelby', 11454),
			_Utils_Tuple2('Iowa, Sioux', 34855),
			_Utils_Tuple2('Iowa, Story', 97117),
			_Utils_Tuple2('Iowa, Tama', 16854),
			_Utils_Tuple2('Iowa, Taylor', 6121),
			_Utils_Tuple2('Iowa, Union', 12241),
			_Utils_Tuple2('Iowa, Van Buren', 7044),
			_Utils_Tuple2('Iowa, Wapello', 34969),
			_Utils_Tuple2('Iowa, Warren', 51466),
			_Utils_Tuple2('Iowa, Washington', 21965),
			_Utils_Tuple2('Iowa, Wayne', 6441),
			_Utils_Tuple2('Iowa, Webster', 35904),
			_Utils_Tuple2('Iowa, Winnebago', 10354),
			_Utils_Tuple2('Iowa, Winneshiek', 19991),
			_Utils_Tuple2('Iowa, Woodbury', 103107),
			_Utils_Tuple2('Iowa, Worth', 7381),
			_Utils_Tuple2('Iowa, Wright', 12562),
			_Utils_Tuple2('Kansas, Kansas', 2913314),
			_Utils_Tuple2('Kansas, Allen', 12369),
			_Utils_Tuple2('Kansas, Anderson', 7858),
			_Utils_Tuple2('Kansas, Atchison', 16073),
			_Utils_Tuple2('Kansas, Barber', 4427),
			_Utils_Tuple2('Kansas, Barton', 25779),
			_Utils_Tuple2('Kansas, Bourbon', 14534),
			_Utils_Tuple2('Kansas, Brown', 9564),
			_Utils_Tuple2('Kansas, Butler', 66911),
			_Utils_Tuple2('Kansas, Chase', 2648),
			_Utils_Tuple2('Kansas, Chautauqua', 3250),
			_Utils_Tuple2('Kansas, Cherokee', 19939),
			_Utils_Tuple2('Kansas, Cheyenne', 2657),
			_Utils_Tuple2('Kansas, Clark', 1994),
			_Utils_Tuple2('Kansas, Clay', 8002),
			_Utils_Tuple2('Kansas, Cloud', 8786),
			_Utils_Tuple2('Kansas, Coffey', 8179),
			_Utils_Tuple2('Kansas, Comanche', 1700),
			_Utils_Tuple2('Kansas, Cowley', 34908),
			_Utils_Tuple2('Kansas, Crawford', 38818),
			_Utils_Tuple2('Kansas, Decatur', 2827),
			_Utils_Tuple2('Kansas, Dickinson', 18466),
			_Utils_Tuple2('Kansas, Doniphan', 7600),
			_Utils_Tuple2('Kansas, Douglas', 122259),
			_Utils_Tuple2('Kansas, Edwards', 2798),
			_Utils_Tuple2('Kansas, Elk', 2530),
			_Utils_Tuple2('Kansas, Ellis', 28553),
			_Utils_Tuple2('Kansas, Ellsworth', 6102),
			_Utils_Tuple2('Kansas, Finney', 36467),
			_Utils_Tuple2('Kansas, Ford', 33619),
			_Utils_Tuple2('Kansas, Franklin', 25544),
			_Utils_Tuple2('Kansas, Geary', 31670),
			_Utils_Tuple2('Kansas, Gove', 2636),
			_Utils_Tuple2('Kansas, Graham', 2482),
			_Utils_Tuple2('Kansas, Grant', 7150),
			_Utils_Tuple2('Kansas, Gray', 5988),
			_Utils_Tuple2('Kansas, Greeley', 1232),
			_Utils_Tuple2('Kansas, Greenwood', 5982),
			_Utils_Tuple2('Kansas, Hamilton', 2539),
			_Utils_Tuple2('Kansas, Harper', 5436),
			_Utils_Tuple2('Kansas, Harvey', 34429),
			_Utils_Tuple2('Kansas, Haskell', 3968),
			_Utils_Tuple2('Kansas, Hodgeman', 1794),
			_Utils_Tuple2('Kansas, Jackson', 13171),
			_Utils_Tuple2('Kansas, Jefferson', 19043),
			_Utils_Tuple2('Kansas, Jewell', 2879),
			_Utils_Tuple2('Kansas, Johnson', 602401),
			_Utils_Tuple2('Kansas, Kearny', 3838),
			_Utils_Tuple2('Kansas, Kingman', 7152),
			_Utils_Tuple2('Kansas, Kiowa', 2475),
			_Utils_Tuple2('Kansas, Labette', 19618),
			_Utils_Tuple2('Kansas, Lane', 1535),
			_Utils_Tuple2('Kansas, Leavenworth', 81758),
			_Utils_Tuple2('Kansas, Lincoln', 2962),
			_Utils_Tuple2('Kansas, Linn', 9703),
			_Utils_Tuple2('Kansas, Logan', 2794),
			_Utils_Tuple2('Kansas, Lyon', 33195),
			_Utils_Tuple2('Kansas, McPherson', 28542),
			_Utils_Tuple2('Kansas, Marion', 11884),
			_Utils_Tuple2('Kansas, Marshall', 9707),
			_Utils_Tuple2('Kansas, Meade', 4033),
			_Utils_Tuple2('Kansas, Miami', 34237),
			_Utils_Tuple2('Kansas, Mitchell', 5979),
			_Utils_Tuple2('Kansas, Montgomery', 31829),
			_Utils_Tuple2('Kansas, Morris', 5620),
			_Utils_Tuple2('Kansas, Morton', 2587),
			_Utils_Tuple2('Kansas, Nemaha', 10231),
			_Utils_Tuple2('Kansas, Neosho', 16007),
			_Utils_Tuple2('Kansas, Ness', 2750),
			_Utils_Tuple2('Kansas, Norton', 5361),
			_Utils_Tuple2('Kansas, Osage', 15949),
			_Utils_Tuple2('Kansas, Osborne', 3421),
			_Utils_Tuple2('Kansas, Ottawa', 5704),
			_Utils_Tuple2('Kansas, Pawnee', 6414),
			_Utils_Tuple2('Kansas, Phillips', 5234),
			_Utils_Tuple2('Kansas, Pottawatomie', 24383),
			_Utils_Tuple2('Kansas, Pratt', 9164),
			_Utils_Tuple2('Kansas, Rawlins', 2530),
			_Utils_Tuple2('Kansas, Reno', 61998),
			_Utils_Tuple2('Kansas, Republic', 4636),
			_Utils_Tuple2('Kansas, Rice', 9537),
			_Utils_Tuple2('Kansas, Riley', 74232),
			_Utils_Tuple2('Kansas, Rooks', 4920),
			_Utils_Tuple2('Kansas, Rush', 3036),
			_Utils_Tuple2('Kansas, Russell', 6856),
			_Utils_Tuple2('Kansas, Saline', 54224),
			_Utils_Tuple2('Kansas, Scott', 4823),
			_Utils_Tuple2('Kansas, Sedgwick', 516042),
			_Utils_Tuple2('Kansas, Seward', 21428),
			_Utils_Tuple2('Kansas, Shawnee', 176875),
			_Utils_Tuple2('Kansas, Sheridan', 2521),
			_Utils_Tuple2('Kansas, Sherman', 5917),
			_Utils_Tuple2('Kansas, Smith', 3583),
			_Utils_Tuple2('Kansas, Stafford', 4156),
			_Utils_Tuple2('Kansas, Stanton', 2006),
			_Utils_Tuple2('Kansas, Stevens', 5485),
			_Utils_Tuple2('Kansas, Sumner', 22836),
			_Utils_Tuple2('Kansas, Thomas', 7777),
			_Utils_Tuple2('Kansas, Trego', 2803),
			_Utils_Tuple2('Kansas, Wabaunsee', 6931),
			_Utils_Tuple2('Kansas, Wallace', 1518),
			_Utils_Tuple2('Kansas, Washington', 5406),
			_Utils_Tuple2('Kansas, Wichita', 2119),
			_Utils_Tuple2('Kansas, Wilson', 8525),
			_Utils_Tuple2('Kansas, Woodson', 3138),
			_Utils_Tuple2('Kansas, Wyandotte', 165429),
			_Utils_Tuple2('Kentucky, Kentucky', 4467673),
			_Utils_Tuple2('Kentucky, Adair', 19202),
			_Utils_Tuple2('Kentucky, Allen', 21315),
			_Utils_Tuple2('Kentucky, Anderson', 22747),
			_Utils_Tuple2('Kentucky, Ballard', 7888),
			_Utils_Tuple2('Kentucky, Barren', 44249),
			_Utils_Tuple2('Kentucky, Bath', 12500),
			_Utils_Tuple2('Kentucky, Bell', 26032),
			_Utils_Tuple2('Kentucky, Boone', 133581),
			_Utils_Tuple2('Kentucky, Bourbon', 19788),
			_Utils_Tuple2('Kentucky, Boyd', 46718),
			_Utils_Tuple2('Kentucky, Boyle', 30060),
			_Utils_Tuple2('Kentucky, Bracken', 8303),
			_Utils_Tuple2('Kentucky, Breathitt', 12630),
			_Utils_Tuple2('Kentucky, Breckinridge', 20477),
			_Utils_Tuple2('Kentucky, Bullitt', 81676),
			_Utils_Tuple2('Kentucky, Butler', 12879),
			_Utils_Tuple2('Kentucky, Caldwell', 12747),
			_Utils_Tuple2('Kentucky, Calloway', 39001),
			_Utils_Tuple2('Kentucky, Campbell', 93584),
			_Utils_Tuple2('Kentucky, Carlisle', 4760),
			_Utils_Tuple2('Kentucky, Carroll', 10631),
			_Utils_Tuple2('Kentucky, Carter', 26797),
			_Utils_Tuple2('Kentucky, Casey', 16159),
			_Utils_Tuple2('Kentucky, Christian', 70461),
			_Utils_Tuple2('Kentucky, Clark', 36263),
			_Utils_Tuple2('Kentucky, Clay', 19901),
			_Utils_Tuple2('Kentucky, Clinton', 10218),
			_Utils_Tuple2('Kentucky, Crittenden', 8806),
			_Utils_Tuple2('Kentucky, Cumberland', 6614),
			_Utils_Tuple2('Kentucky, Daviess', 101511),
			_Utils_Tuple2('Kentucky, Edmonson', 12150),
			_Utils_Tuple2('Kentucky, Elliott', 7517),
			_Utils_Tuple2('Kentucky, Estill', 14106),
			_Utils_Tuple2('Kentucky, Fayette', 323152),
			_Utils_Tuple2('Kentucky, Fleming', 14581),
			_Utils_Tuple2('Kentucky, Floyd', 35589),
			_Utils_Tuple2('Kentucky, Franklin', 50991),
			_Utils_Tuple2('Kentucky, Fulton', 5969),
			_Utils_Tuple2('Kentucky, Gallatin', 8869),
			_Utils_Tuple2('Kentucky, Garrard', 17666),
			_Utils_Tuple2('Kentucky, Grant', 25069),
			_Utils_Tuple2('Kentucky, Graves', 37266),
			_Utils_Tuple2('Kentucky, Grayson', 26427),
			_Utils_Tuple2('Kentucky, Green', 10941),
			_Utils_Tuple2('Kentucky, Greenup', 35098),
			_Utils_Tuple2('Kentucky, Hancock', 8722),
			_Utils_Tuple2('Kentucky, Hardin', 110958),
			_Utils_Tuple2('Kentucky, Harlan', 26010),
			_Utils_Tuple2('Kentucky, Harrison', 18886),
			_Utils_Tuple2('Kentucky, Hart', 19035),
			_Utils_Tuple2('Kentucky, Henderson', 45210),
			_Utils_Tuple2('Kentucky, Henry', 16126),
			_Utils_Tuple2('Kentucky, Hickman', 4380),
			_Utils_Tuple2('Kentucky, Hopkins', 44686),
			_Utils_Tuple2('Kentucky, Jackson', 13329),
			_Utils_Tuple2('Kentucky, Jefferson', 766757),
			_Utils_Tuple2('Kentucky, Jessamine', 54115),
			_Utils_Tuple2('Kentucky, Johnson', 22188),
			_Utils_Tuple2('Kentucky, Kenton', 166998),
			_Utils_Tuple2('Kentucky, Knott', 14806),
			_Utils_Tuple2('Kentucky, Knox', 31145),
			_Utils_Tuple2('Kentucky, Larue', 14398),
			_Utils_Tuple2('Kentucky, Laurel', 60813),
			_Utils_Tuple2('Kentucky, Lawrence', 15317),
			_Utils_Tuple2('Kentucky, Lee', 7403),
			_Utils_Tuple2('Kentucky, Leslie', 9877),
			_Utils_Tuple2('Kentucky, Letcher', 21553),
			_Utils_Tuple2('Kentucky, Lewis', 13275),
			_Utils_Tuple2('Kentucky, Lincoln', 24549),
			_Utils_Tuple2('Kentucky, Livingston', 9194),
			_Utils_Tuple2('Kentucky, Logan', 27102),
			_Utils_Tuple2('Kentucky, Lyon', 8210),
			_Utils_Tuple2('Kentucky, McCracken', 65418),
			_Utils_Tuple2('Kentucky, McCreary', 17231),
			_Utils_Tuple2('Kentucky, McLean', 9207),
			_Utils_Tuple2('Kentucky, Madison', 92987),
			_Utils_Tuple2('Kentucky, Magoffin', 12161),
			_Utils_Tuple2('Kentucky, Marion', 19273),
			_Utils_Tuple2('Kentucky, Marshall', 31100),
			_Utils_Tuple2('Kentucky, Martin', 11195),
			_Utils_Tuple2('Kentucky, Mason', 17070),
			_Utils_Tuple2('Kentucky, Meade', 28572),
			_Utils_Tuple2('Kentucky, Menifee', 6489),
			_Utils_Tuple2('Kentucky, Mercer', 21933),
			_Utils_Tuple2('Kentucky, Metcalfe', 10071),
			_Utils_Tuple2('Kentucky, Monroe', 10650),
			_Utils_Tuple2('Kentucky, Montgomery', 28157),
			_Utils_Tuple2('Kentucky, Morgan', 13309),
			_Utils_Tuple2('Kentucky, Muhlenberg', 30622),
			_Utils_Tuple2('Kentucky, Nelson', 46233),
			_Utils_Tuple2('Kentucky, Nicholas', 7269),
			_Utils_Tuple2('Kentucky, Ohio', 23994),
			_Utils_Tuple2('Kentucky, Oldham', 66799),
			_Utils_Tuple2('Kentucky, Owen', 10901),
			_Utils_Tuple2('Kentucky, Owsley', 4415),
			_Utils_Tuple2('Kentucky, Pendleton', 14590),
			_Utils_Tuple2('Kentucky, Perry', 25758),
			_Utils_Tuple2('Kentucky, Pike', 57876),
			_Utils_Tuple2('Kentucky, Powell', 12359),
			_Utils_Tuple2('Kentucky, Pulaski', 64979),
			_Utils_Tuple2('Kentucky, Robertson', 2108),
			_Utils_Tuple2('Kentucky, Rockcastle', 16695),
			_Utils_Tuple2('Kentucky, Rowan', 24460),
			_Utils_Tuple2('Kentucky, Russell', 17923),
			_Utils_Tuple2('Kentucky, Scott', 57004),
			_Utils_Tuple2('Kentucky, Shelby', 49024),
			_Utils_Tuple2('Kentucky, Simpson', 18572),
			_Utils_Tuple2('Kentucky, Spencer', 19351),
			_Utils_Tuple2('Kentucky, Taylor', 25769),
			_Utils_Tuple2('Kentucky, Todd', 12294),
			_Utils_Tuple2('Kentucky, Trigg', 14651),
			_Utils_Tuple2('Kentucky, Trimble', 8471),
			_Utils_Tuple2('Kentucky, Union', 14381),
			_Utils_Tuple2('Kentucky, Warren', 132896),
			_Utils_Tuple2('Kentucky, Washington', 12095),
			_Utils_Tuple2('Kentucky, Wayne', 20333),
			_Utils_Tuple2('Kentucky, Webster', 12942),
			_Utils_Tuple2('Kentucky, Whitley', 36264),
			_Utils_Tuple2('Kentucky, Wolfe', 7157),
			_Utils_Tuple2('Kentucky, Woodford', 26734),
			_Utils_Tuple2('Louisiana, Louisiana', 4648794),
			_Utils_Tuple2('Louisiana, Acadia', 62045),
			_Utils_Tuple2('Louisiana, Allen', 25627),
			_Utils_Tuple2('Louisiana, Ascension', 126604),
			_Utils_Tuple2('Louisiana, Assumption', 21891),
			_Utils_Tuple2('Louisiana, Avoyelles', 40144),
			_Utils_Tuple2('Louisiana, Beauregard', 37497),
			_Utils_Tuple2('Louisiana, Bienville', 13241),
			_Utils_Tuple2('Louisiana, Bossier', 127039),
			_Utils_Tuple2('Louisiana, Caddo', 240204),
			_Utils_Tuple2('Louisiana, Calcasieu', 203436),
			_Utils_Tuple2('Louisiana, Caldwell', 9918),
			_Utils_Tuple2('Louisiana, Cameron', 6973),
			_Utils_Tuple2('Louisiana, Catahoula', 9494),
			_Utils_Tuple2('Louisiana, Claiborne', 15670),
			_Utils_Tuple2('Louisiana, Concordia', 19259),
			_Utils_Tuple2('Louisiana, De Soto', 27463),
			_Utils_Tuple2('Louisiana, East Baton Rouge', 440059),
			_Utils_Tuple2('Louisiana, East Carroll', 6861),
			_Utils_Tuple2('Louisiana, East Feliciana', 19135),
			_Utils_Tuple2('Louisiana, Evangeline', 33395),
			_Utils_Tuple2('Louisiana, Franklin', 20015),
			_Utils_Tuple2('Louisiana, Grant', 22389),
			_Utils_Tuple2('Louisiana, Iberia', 69830),
			_Utils_Tuple2('Louisiana, Iberville', 32511),
			_Utils_Tuple2('Louisiana, Jackson', 15744),
			_Utils_Tuple2('Louisiana, Jefferson', 432493),
			_Utils_Tuple2('Louisiana, Jefferson Davis', 31368),
			_Utils_Tuple2('Louisiana, Lafayette', 244390),
			_Utils_Tuple2('Louisiana, Lafourche', 97614),
			_Utils_Tuple2('Louisiana, La Salle', 14892),
			_Utils_Tuple2('Louisiana, Lincoln', 46742),
			_Utils_Tuple2('Louisiana, Livingston', 140789),
			_Utils_Tuple2('Louisiana, Madison', 10951),
			_Utils_Tuple2('Louisiana, Morehouse', 24874),
			_Utils_Tuple2('Louisiana, Natchitoches', 38158),
			_Utils_Tuple2('Louisiana, Orleans', 390144),
			_Utils_Tuple2('Louisiana, Ouachita', 153279),
			_Utils_Tuple2('Louisiana, Plaquemines', 23197),
			_Utils_Tuple2('Louisiana, Pointe Coupee', 21730),
			_Utils_Tuple2('Louisiana, Rapides', 129648),
			_Utils_Tuple2('Louisiana, Red River', 8442),
			_Utils_Tuple2('Louisiana, Richland', 20122),
			_Utils_Tuple2('Louisiana, Sabine', 23884),
			_Utils_Tuple2('Louisiana, St. Bernard', 47244),
			_Utils_Tuple2('Louisiana, St. Charles', 53100),
			_Utils_Tuple2('Louisiana, St. Helena', 10132),
			_Utils_Tuple2('Louisiana, St. James', 21096),
			_Utils_Tuple2('Louisiana, St. John the Baptist', 42837),
			_Utils_Tuple2('Louisiana, St. Landry', 82124),
			_Utils_Tuple2('Louisiana, St. Martin', 53431),
			_Utils_Tuple2('Louisiana, St. Mary', 49348),
			_Utils_Tuple2('Louisiana, St. Tammany', 260419),
			_Utils_Tuple2('Louisiana, Tangipahoa', 134758),
			_Utils_Tuple2('Louisiana, Tensas', 4334),
			_Utils_Tuple2('Louisiana, Terrebonne', 110461),
			_Utils_Tuple2('Louisiana, Union', 22108),
			_Utils_Tuple2('Louisiana, Vermilion', 59511),
			_Utils_Tuple2('Louisiana, Vernon', 47429),
			_Utils_Tuple2('Louisiana, Washington', 46194),
			_Utils_Tuple2('Louisiana, Webster', 38340),
			_Utils_Tuple2('Louisiana, West Baton Rouge', 26465),
			_Utils_Tuple2('Louisiana, West Carroll', 10830),
			_Utils_Tuple2('Louisiana, West Feliciana', 15568),
			_Utils_Tuple2('Louisiana, Winn', 13904),
			_Utils_Tuple2('Maine, Maine', 1344212),
			_Utils_Tuple2('Maine, Androscoggin', 108277),
			_Utils_Tuple2('Maine, Aroostook', 67055),
			_Utils_Tuple2('Maine, Cumberland', 295003),
			_Utils_Tuple2('Maine, Franklin', 30199),
			_Utils_Tuple2('Maine, Hancock', 54987),
			_Utils_Tuple2('Maine, Kennebec', 122302),
			_Utils_Tuple2('Maine, Knox', 39772),
			_Utils_Tuple2('Maine, Lincoln', 34634),
			_Utils_Tuple2('Maine, Oxford', 57975),
			_Utils_Tuple2('Maine, Penobscot', 152148),
			_Utils_Tuple2('Maine, Piscataquis', 16785),
			_Utils_Tuple2('Maine, Sagadahoc', 35856),
			_Utils_Tuple2('Maine, Somerset', 50484),
			_Utils_Tuple2('Maine, Waldo', 39715),
			_Utils_Tuple2('Maine, Washington', 31379),
			_Utils_Tuple2('Maine, York', 207641),
			_Utils_Tuple2('Maryland, Maryland', 6045680),
			_Utils_Tuple2('Maryland, Allegany', 70416),
			_Utils_Tuple2('Maryland, Anne Arundel', 579234),
			_Utils_Tuple2('Maryland, Baltimore', 827370),
			_Utils_Tuple2('Maryland, Calvert', 92525),
			_Utils_Tuple2('Maryland, Caroline', 33406),
			_Utils_Tuple2('Maryland, Carroll', 168447),
			_Utils_Tuple2('Maryland, Cecil', 102855),
			_Utils_Tuple2('Maryland, Charles', 163257),
			_Utils_Tuple2('Maryland, Dorchester', 31929),
			_Utils_Tuple2('Maryland, Frederick', 259547),
			_Utils_Tuple2('Maryland, Garrett', 29014),
			_Utils_Tuple2('Maryland, Harford', 255441),
			_Utils_Tuple2('Maryland, Howard', 325690),
			_Utils_Tuple2('Maryland, Kent', 19422),
			_Utils_Tuple2('Maryland, Montgomery', 1050688),
			_Utils_Tuple2('Maryland, Prince George\'s', 909327),
			_Utils_Tuple2('Maryland, Queen Anne\'s', 50381),
			_Utils_Tuple2('Maryland, St. Mary\'s', 113510),
			_Utils_Tuple2('Maryland, Somerset', 25616),
			_Utils_Tuple2('Maryland, Talbot', 37181),
			_Utils_Tuple2('Maryland, Washington', 151049),
			_Utils_Tuple2('Maryland, Wicomico', 103609),
			_Utils_Tuple2('Maryland, Worcester', 52276),
			_Utils_Tuple2('Maryland, Baltimore', 593490),
			_Utils_Tuple2('Massachusetts, Massachusetts', 6892503),
			_Utils_Tuple2('Massachusetts, Barnstable', 212990),
			_Utils_Tuple2('Massachusetts, Berkshire', 124944),
			_Utils_Tuple2('Massachusetts, Bristol', 565217),
			_Utils_Tuple2('Massachusetts, Dukes', 17332),
			_Utils_Tuple2('Massachusetts, Essex', 789034),
			_Utils_Tuple2('Massachusetts, Franklin', 70180),
			_Utils_Tuple2('Massachusetts, Hampden', 466372),
			_Utils_Tuple2('Massachusetts, Hampshire', 160830),
			_Utils_Tuple2('Massachusetts, Middlesex', 1611699),
			_Utils_Tuple2('Massachusetts, Nantucket', 11399),
			_Utils_Tuple2('Massachusetts, Norfolk', 706775),
			_Utils_Tuple2('Massachusetts, Plymouth', 521202),
			_Utils_Tuple2('Massachusetts, Suffolk', 803907),
			_Utils_Tuple2('Massachusetts, Worcester', 830622),
			_Utils_Tuple2('Michigan, Michigan', 9986857),
			_Utils_Tuple2('Michigan, Alcona', 10405),
			_Utils_Tuple2('Michigan, Alger', 9108),
			_Utils_Tuple2('Michigan, Allegan', 118081),
			_Utils_Tuple2('Michigan, Alpena', 28405),
			_Utils_Tuple2('Michigan, Antrim', 23324),
			_Utils_Tuple2('Michigan, Arenac', 14883),
			_Utils_Tuple2('Michigan, Baraga', 8209),
			_Utils_Tuple2('Michigan, Barry', 61550),
			_Utils_Tuple2('Michigan, Bay', 103126),
			_Utils_Tuple2('Michigan, Benzie', 17766),
			_Utils_Tuple2('Michigan, Berrien', 153401),
			_Utils_Tuple2('Michigan, Branch', 43517),
			_Utils_Tuple2('Michigan, Calhoun', 134159),
			_Utils_Tuple2('Michigan, Cass', 51787),
			_Utils_Tuple2('Michigan, Charlevoix', 26143),
			_Utils_Tuple2('Michigan, Cheboygan', 25276),
			_Utils_Tuple2('Michigan, Chippewa', 37349),
			_Utils_Tuple2('Michigan, Clare', 30950),
			_Utils_Tuple2('Michigan, Clinton', 79595),
			_Utils_Tuple2('Michigan, Crawford', 14029),
			_Utils_Tuple2('Michigan, Delta', 35784),
			_Utils_Tuple2('Michigan, Dickinson', 25239),
			_Utils_Tuple2('Michigan, Eaton', 110268),
			_Utils_Tuple2('Michigan, Emmet', 33415),
			_Utils_Tuple2('Michigan, Genesee', 405813),
			_Utils_Tuple2('Michigan, Gladwin', 25449),
			_Utils_Tuple2('Michigan, Gogebic', 13975),
			_Utils_Tuple2('Michigan, Grand Traverse', 93088),
			_Utils_Tuple2('Michigan, Gratiot', 40711),
			_Utils_Tuple2('Michigan, Hillsdale', 45605),
			_Utils_Tuple2('Michigan, Houghton', 35684),
			_Utils_Tuple2('Michigan, Huron', 30981),
			_Utils_Tuple2('Michigan, Ingham', 292406),
			_Utils_Tuple2('Michigan, Ionia', 64697),
			_Utils_Tuple2('Michigan, Iosco', 25127),
			_Utils_Tuple2('Michigan, Iron', 11066),
			_Utils_Tuple2('Michigan, Isabella', 69872),
			_Utils_Tuple2('Michigan, Jackson', 158510),
			_Utils_Tuple2('Michigan, Kalamazoo', 265066),
			_Utils_Tuple2('Michigan, Kalkaska', 18038),
			_Utils_Tuple2('Michigan, Kent', 656955),
			_Utils_Tuple2('Michigan, Keweenaw', 2116),
			_Utils_Tuple2('Michigan, Lake', 11853),
			_Utils_Tuple2('Michigan, Lapeer', 87607),
			_Utils_Tuple2('Michigan, Leelanau', 21761),
			_Utils_Tuple2('Michigan, Lenawee', 98451),
			_Utils_Tuple2('Michigan, Livingston', 191995),
			_Utils_Tuple2('Michigan, Luce', 6229),
			_Utils_Tuple2('Michigan, Mackinac', 10799),
			_Utils_Tuple2('Michigan, Macomb', 873972),
			_Utils_Tuple2('Michigan, Manistee', 24558),
			_Utils_Tuple2('Michigan, Marquette', 66699),
			_Utils_Tuple2('Michigan, Mason', 29144),
			_Utils_Tuple2('Michigan, Mecosta', 43453),
			_Utils_Tuple2('Michigan, Menominee', 22780),
			_Utils_Tuple2('Michigan, Midland', 83156),
			_Utils_Tuple2('Michigan, Missaukee', 15118),
			_Utils_Tuple2('Michigan, Monroe', 150500),
			_Utils_Tuple2('Michigan, Montcalm', 63888),
			_Utils_Tuple2('Michigan, Montmorency', 9328),
			_Utils_Tuple2('Michigan, Muskegon', 173566),
			_Utils_Tuple2('Michigan, Newaygo', 48980),
			_Utils_Tuple2('Michigan, Oakland', 1257584),
			_Utils_Tuple2('Michigan, Oceana', 26467),
			_Utils_Tuple2('Michigan, Ogemaw', 20997),
			_Utils_Tuple2('Michigan, Ontonagon', 5720),
			_Utils_Tuple2('Michigan, Osceola', 23460),
			_Utils_Tuple2('Michigan, Oscoda', 8241),
			_Utils_Tuple2('Michigan, Otsego', 24668),
			_Utils_Tuple2('Michigan, Ottawa', 291830),
			_Utils_Tuple2('Michigan, Presque Isle', 12592),
			_Utils_Tuple2('Michigan, Roscommon', 24019),
			_Utils_Tuple2('Michigan, Saginaw', 190539),
			_Utils_Tuple2('Michigan, St. Clair', 159128),
			_Utils_Tuple2('Michigan, St. Joseph', 60964),
			_Utils_Tuple2('Michigan, Sanilac', 41170),
			_Utils_Tuple2('Michigan, Schoolcraft', 8094),
			_Utils_Tuple2('Michigan, Shiawassee', 68122),
			_Utils_Tuple2('Michigan, Tuscola', 52245),
			_Utils_Tuple2('Michigan, Van Buren', 75677),
			_Utils_Tuple2('Michigan, Washtenaw', 367601),
			_Utils_Tuple2('Michigan, Wayne', 1749343),
			_Utils_Tuple2('Michigan, Wexford', 33631),
			_Utils_Tuple2('Minnesota, Minnesota', 5639632),
			_Utils_Tuple2('Minnesota, Aitkin', 15886),
			_Utils_Tuple2('Minnesota, Anoka', 356921),
			_Utils_Tuple2('Minnesota, Becker', 34423),
			_Utils_Tuple2('Minnesota, Beltrami', 47188),
			_Utils_Tuple2('Minnesota, Benton', 40889),
			_Utils_Tuple2('Minnesota, Big Stone', 4991),
			_Utils_Tuple2('Minnesota, Blue Earth', 67653),
			_Utils_Tuple2('Minnesota, Brown', 25008),
			_Utils_Tuple2('Minnesota, Carlton', 35871),
			_Utils_Tuple2('Minnesota, Carver', 105089),
			_Utils_Tuple2('Minnesota, Cass', 29779),
			_Utils_Tuple2('Minnesota, Chippewa', 11800),
			_Utils_Tuple2('Minnesota, Chisago', 56579),
			_Utils_Tuple2('Minnesota, Clay', 64222),
			_Utils_Tuple2('Minnesota, Clearwater', 8818),
			_Utils_Tuple2('Minnesota, Cook', 5463),
			_Utils_Tuple2('Minnesota, Cottonwood', 11196),
			_Utils_Tuple2('Minnesota, Crow Wing', 65055),
			_Utils_Tuple2('Minnesota, Dakota', 429021),
			_Utils_Tuple2('Minnesota, Dodge', 20934),
			_Utils_Tuple2('Minnesota, Douglas', 38141),
			_Utils_Tuple2('Minnesota, Faribault', 13653),
			_Utils_Tuple2('Minnesota, Fillmore', 21067),
			_Utils_Tuple2('Minnesota, Freeborn', 30281),
			_Utils_Tuple2('Minnesota, Goodhue', 46340),
			_Utils_Tuple2('Minnesota, Grant', 5972),
			_Utils_Tuple2('Minnesota, Hennepin', 1265843),
			_Utils_Tuple2('Minnesota, Houston', 18600),
			_Utils_Tuple2('Minnesota, Hubbard', 21491),
			_Utils_Tuple2('Minnesota, Isanti', 40596),
			_Utils_Tuple2('Minnesota, Itasca', 45130),
			_Utils_Tuple2('Minnesota, Jackson', 9846),
			_Utils_Tuple2('Minnesota, Kanabec', 16337),
			_Utils_Tuple2('Minnesota, Kandiyohi', 43199),
			_Utils_Tuple2('Minnesota, Kittson', 4298),
			_Utils_Tuple2('Minnesota, Koochiching', 12229),
			_Utils_Tuple2('Minnesota, Lac qui Parle', 6623),
			_Utils_Tuple2('Minnesota, Lake', 10641),
			_Utils_Tuple2('Minnesota, Lake of the Woods', 3740),
			_Utils_Tuple2('Minnesota, Le Sueur', 28887),
			_Utils_Tuple2('Minnesota, Lincoln', 5639),
			_Utils_Tuple2('Minnesota, Lyon', 25474),
			_Utils_Tuple2('Minnesota, McLeod', 35893),
			_Utils_Tuple2('Minnesota, Mahnomen', 5527),
			_Utils_Tuple2('Minnesota, Marshall', 9336),
			_Utils_Tuple2('Minnesota, Martin', 19683),
			_Utils_Tuple2('Minnesota, Meeker', 23222),
			_Utils_Tuple2('Minnesota, Mille Lacs', 26277),
			_Utils_Tuple2('Minnesota, Morrison', 33386),
			_Utils_Tuple2('Minnesota, Mower', 40062),
			_Utils_Tuple2('Minnesota, Murray', 8194),
			_Utils_Tuple2('Minnesota, Nicollet', 34274),
			_Utils_Tuple2('Minnesota, Nobles', 21629),
			_Utils_Tuple2('Minnesota, Norman', 6375),
			_Utils_Tuple2('Minnesota, Olmsted', 158293),
			_Utils_Tuple2('Minnesota, Otter Tail', 58746),
			_Utils_Tuple2('Minnesota, Pennington', 14119),
			_Utils_Tuple2('Minnesota, Pine', 29579),
			_Utils_Tuple2('Minnesota, Pipestone', 9126),
			_Utils_Tuple2('Minnesota, Polk', 31364),
			_Utils_Tuple2('Minnesota, Pope', 11249),
			_Utils_Tuple2('Minnesota, Ramsey', 550321),
			_Utils_Tuple2('Minnesota, Red Lake', 4055),
			_Utils_Tuple2('Minnesota, Redwood', 15170),
			_Utils_Tuple2('Minnesota, Renville', 14548),
			_Utils_Tuple2('Minnesota, Rice', 66972),
			_Utils_Tuple2('Minnesota, Rock', 9315),
			_Utils_Tuple2('Minnesota, Roseau', 15165),
			_Utils_Tuple2('Minnesota, St. Louis', 199070),
			_Utils_Tuple2('Minnesota, Scott', 149013),
			_Utils_Tuple2('Minnesota, Sherburne', 97238),
			_Utils_Tuple2('Minnesota, Sibley', 14865),
			_Utils_Tuple2('Minnesota, Stearns', 161075),
			_Utils_Tuple2('Minnesota, Steele', 36649),
			_Utils_Tuple2('Minnesota, Stevens', 9805),
			_Utils_Tuple2('Minnesota, Swift', 9266),
			_Utils_Tuple2('Minnesota, Todd', 24664),
			_Utils_Tuple2('Minnesota, Traverse', 3259),
			_Utils_Tuple2('Minnesota, Wabasha', 21627),
			_Utils_Tuple2('Minnesota, Wadena', 13682),
			_Utils_Tuple2('Minnesota, Waseca', 18612),
			_Utils_Tuple2('Minnesota, Washington', 262440),
			_Utils_Tuple2('Minnesota, Watonwan', 10897),
			_Utils_Tuple2('Minnesota, Wilkin', 6207),
			_Utils_Tuple2('Minnesota, Winona', 50484),
			_Utils_Tuple2('Minnesota, Wright', 138377),
			_Utils_Tuple2('Minnesota, Yellow Medicine', 9709),
			_Utils_Tuple2('Mississippi, Mississippi', 2976149),
			_Utils_Tuple2('Mississippi, Adams', 30693),
			_Utils_Tuple2('Mississippi, Alcorn', 36953),
			_Utils_Tuple2('Mississippi, Amite', 12297),
			_Utils_Tuple2('Mississippi, Attala', 18174),
			_Utils_Tuple2('Mississippi, Benton', 8259),
			_Utils_Tuple2('Mississippi, Bolivar', 30628),
			_Utils_Tuple2('Mississippi, Calhoun', 14361),
			_Utils_Tuple2('Mississippi, Carroll', 9947),
			_Utils_Tuple2('Mississippi, Chickasaw', 17103),
			_Utils_Tuple2('Mississippi, Choctaw', 8210),
			_Utils_Tuple2('Mississippi, Claiborne', 8988),
			_Utils_Tuple2('Mississippi, Clarke', 15541),
			_Utils_Tuple2('Mississippi, Clay', 19316),
			_Utils_Tuple2('Mississippi, Coahoma', 22124),
			_Utils_Tuple2('Mississippi, Copiah', 28065),
			_Utils_Tuple2('Mississippi, Covington', 18636),
			_Utils_Tuple2('Mississippi, DeSoto', 184945),
			_Utils_Tuple2('Mississippi, Forrest', 74897),
			_Utils_Tuple2('Mississippi, Franklin', 7713),
			_Utils_Tuple2('Mississippi, George', 24500),
			_Utils_Tuple2('Mississippi, Greene', 13586),
			_Utils_Tuple2('Mississippi, Grenada', 20758),
			_Utils_Tuple2('Mississippi, Hancock', 47632),
			_Utils_Tuple2('Mississippi, Harrison', 208080),
			_Utils_Tuple2('Mississippi, Hinds', 231840),
			_Utils_Tuple2('Mississippi, Holmes', 17010),
			_Utils_Tuple2('Mississippi, Humphreys', 8064),
			_Utils_Tuple2('Mississippi, Issaquena', 1327),
			_Utils_Tuple2('Mississippi, Itawamba', 23390),
			_Utils_Tuple2('Mississippi, Jackson', 143617),
			_Utils_Tuple2('Mississippi, Jasper', 16383),
			_Utils_Tuple2('Mississippi, Jefferson', 6990),
			_Utils_Tuple2('Mississippi, Jefferson Davis', 11128),
			_Utils_Tuple2('Mississippi, Jones', 68098),
			_Utils_Tuple2('Mississippi, Kemper', 9742),
			_Utils_Tuple2('Mississippi, Lafayette', 54019),
			_Utils_Tuple2('Mississippi, Lamar', 63343),
			_Utils_Tuple2('Mississippi, Lauderdale', 74125),
			_Utils_Tuple2('Mississippi, Lawrence', 12586),
			_Utils_Tuple2('Mississippi, Leake', 22786),
			_Utils_Tuple2('Mississippi, Lee', 85436),
			_Utils_Tuple2('Mississippi, Leflore', 28183),
			_Utils_Tuple2('Mississippi, Lincoln', 34153),
			_Utils_Tuple2('Mississippi, Lowndes', 58595),
			_Utils_Tuple2('Mississippi, Madison', 106272),
			_Utils_Tuple2('Mississippi, Marion', 24573),
			_Utils_Tuple2('Mississippi, Marshall', 35294),
			_Utils_Tuple2('Mississippi, Monroe', 35252),
			_Utils_Tuple2('Mississippi, Montgomery', 9775),
			_Utils_Tuple2('Mississippi, Neshoba', 29118),
			_Utils_Tuple2('Mississippi, Newton', 21018),
			_Utils_Tuple2('Mississippi, Noxubee', 10417),
			_Utils_Tuple2('Mississippi, Oktibbeha', 49587),
			_Utils_Tuple2('Mississippi, Panola', 34192),
			_Utils_Tuple2('Mississippi, Pearl River', 55535),
			_Utils_Tuple2('Mississippi, Perry', 11973),
			_Utils_Tuple2('Mississippi, Pike', 39288),
			_Utils_Tuple2('Mississippi, Pontotoc', 32174),
			_Utils_Tuple2('Mississippi, Prentiss', 25126),
			_Utils_Tuple2('Mississippi, Quitman', 6792),
			_Utils_Tuple2('Mississippi, Rankin', 155271),
			_Utils_Tuple2('Mississippi, Scott', 28124),
			_Utils_Tuple2('Mississippi, Sharkey', 4321),
			_Utils_Tuple2('Mississippi, Simpson', 26658),
			_Utils_Tuple2('Mississippi, Smith', 15916),
			_Utils_Tuple2('Mississippi, Stone', 18336),
			_Utils_Tuple2('Mississippi, Sunflower', 25110),
			_Utils_Tuple2('Mississippi, Tallahatchie', 13809),
			_Utils_Tuple2('Mississippi, Tate', 28321),
			_Utils_Tuple2('Mississippi, Tippah', 22015),
			_Utils_Tuple2('Mississippi, Tishomingo', 19383),
			_Utils_Tuple2('Mississippi, Tunica', 9632),
			_Utils_Tuple2('Mississippi, Union', 28815),
			_Utils_Tuple2('Mississippi, Walthall', 14286),
			_Utils_Tuple2('Mississippi, Warren', 45381),
			_Utils_Tuple2('Mississippi, Washington', 43909),
			_Utils_Tuple2('Mississippi, Wayne', 20183),
			_Utils_Tuple2('Mississippi, Webster', 9689),
			_Utils_Tuple2('Mississippi, Wilkinson', 8630),
			_Utils_Tuple2('Mississippi, Winston', 17955),
			_Utils_Tuple2('Mississippi, Yalobusha', 12108),
			_Utils_Tuple2('Mississippi, Yazoo', 29690),
			_Utils_Tuple2('Missouri, Missouri', 6137428),
			_Utils_Tuple2('Missouri, Adair', 25343),
			_Utils_Tuple2('Missouri, Andrew', 17712),
			_Utils_Tuple2('Missouri, Atchison', 5143),
			_Utils_Tuple2('Missouri, Audrain', 25388),
			_Utils_Tuple2('Missouri, Barry', 35789),
			_Utils_Tuple2('Missouri, Barton', 11754),
			_Utils_Tuple2('Missouri, Bates', 16172),
			_Utils_Tuple2('Missouri, Benton', 19443),
			_Utils_Tuple2('Missouri, Bollinger', 12133),
			_Utils_Tuple2('Missouri, Boone', 180463),
			_Utils_Tuple2('Missouri, Buchanan', 87364),
			_Utils_Tuple2('Missouri, Butler', 42478),
			_Utils_Tuple2('Missouri, Caldwell', 9020),
			_Utils_Tuple2('Missouri, Callaway', 44743),
			_Utils_Tuple2('Missouri, Camden', 46305),
			_Utils_Tuple2('Missouri, Cape Girardeau', 78871),
			_Utils_Tuple2('Missouri, Carroll', 8679),
			_Utils_Tuple2('Missouri, Carter', 5982),
			_Utils_Tuple2('Missouri, Cass', 105780),
			_Utils_Tuple2('Missouri, Cedar', 14349),
			_Utils_Tuple2('Missouri, Chariton', 7426),
			_Utils_Tuple2('Missouri, Christian', 88595),
			_Utils_Tuple2('Missouri, Clark', 6797),
			_Utils_Tuple2('Missouri, Clay', 249948),
			_Utils_Tuple2('Missouri, Clinton', 20387),
			_Utils_Tuple2('Missouri, Cole', 76745),
			_Utils_Tuple2('Missouri, Cooper', 17709),
			_Utils_Tuple2('Missouri, Crawford', 23920),
			_Utils_Tuple2('Missouri, Dade', 7561),
			_Utils_Tuple2('Missouri, Dallas', 16878),
			_Utils_Tuple2('Missouri, Daviess', 8278),
			_Utils_Tuple2('Missouri, DeKalb', 12547),
			_Utils_Tuple2('Missouri, Dent', 15573),
			_Utils_Tuple2('Missouri, Douglas', 13185),
			_Utils_Tuple2('Missouri, Dunklin', 29131),
			_Utils_Tuple2('Missouri, Franklin', 103967),
			_Utils_Tuple2('Missouri, Gasconade', 14706),
			_Utils_Tuple2('Missouri, Gentry', 6571),
			_Utils_Tuple2('Missouri, Greene', 293086),
			_Utils_Tuple2('Missouri, Grundy', 9850),
			_Utils_Tuple2('Missouri, Harrison', 8352),
			_Utils_Tuple2('Missouri, Henry', 21824),
			_Utils_Tuple2('Missouri, Hickory', 9544),
			_Utils_Tuple2('Missouri, Holt', 4403),
			_Utils_Tuple2('Missouri, Howard', 10001),
			_Utils_Tuple2('Missouri, Howell', 40117),
			_Utils_Tuple2('Missouri, Iron', 10125),
			_Utils_Tuple2('Missouri, Jackson', 703011),
			_Utils_Tuple2('Missouri, Jasper', 121328),
			_Utils_Tuple2('Missouri, Jefferson', 225081),
			_Utils_Tuple2('Missouri, Johnson', 54062),
			_Utils_Tuple2('Missouri, Knox', 3959),
			_Utils_Tuple2('Missouri, Laclede', 35723),
			_Utils_Tuple2('Missouri, Lafayette', 32708),
			_Utils_Tuple2('Missouri, Lawrence', 38355),
			_Utils_Tuple2('Missouri, Lewis', 9776),
			_Utils_Tuple2('Missouri, Lincoln', 59013),
			_Utils_Tuple2('Missouri, Linn', 11920),
			_Utils_Tuple2('Missouri, Livingston', 15227),
			_Utils_Tuple2('Missouri, McDonald', 22837),
			_Utils_Tuple2('Missouri, Macon', 15117),
			_Utils_Tuple2('Missouri, Madison', 12088),
			_Utils_Tuple2('Missouri, Maries', 8697),
			_Utils_Tuple2('Missouri, Marion', 28530),
			_Utils_Tuple2('Missouri, Mercer', 3617),
			_Utils_Tuple2('Missouri, Miller', 25619),
			_Utils_Tuple2('Missouri, Mississippi', 13180),
			_Utils_Tuple2('Missouri, Moniteau', 16132),
			_Utils_Tuple2('Missouri, Monroe', 8644),
			_Utils_Tuple2('Missouri, Montgomery', 11551),
			_Utils_Tuple2('Missouri, Morgan', 20627),
			_Utils_Tuple2('Missouri, New Madrid', 17076),
			_Utils_Tuple2('Missouri, Newton', 58236),
			_Utils_Tuple2('Missouri, Nodaway', 22092),
			_Utils_Tuple2('Missouri, Oregon', 10529),
			_Utils_Tuple2('Missouri, Osage', 13615),
			_Utils_Tuple2('Missouri, Ozark', 9174),
			_Utils_Tuple2('Missouri, Pemiscot', 15805),
			_Utils_Tuple2('Missouri, Perry', 19136),
			_Utils_Tuple2('Missouri, Pettis', 42339),
			_Utils_Tuple2('Missouri, Phelps', 44573),
			_Utils_Tuple2('Missouri, Pike', 18302),
			_Utils_Tuple2('Missouri, Platte', 104418),
			_Utils_Tuple2('Missouri, Polk', 32149),
			_Utils_Tuple2('Missouri, Pulaski', 52607),
			_Utils_Tuple2('Missouri, Putnam', 4696),
			_Utils_Tuple2('Missouri, Ralls', 10309),
			_Utils_Tuple2('Missouri, Randolph', 24748),
			_Utils_Tuple2('Missouri, Ray', 23018),
			_Utils_Tuple2('Missouri, Reynolds', 6270),
			_Utils_Tuple2('Missouri, Ripley', 13288),
			_Utils_Tuple2('Missouri, St. Charles', 402022),
			_Utils_Tuple2('Missouri, St. Clair', 9397),
			_Utils_Tuple2('Missouri, Ste. Genevieve', 17894),
			_Utils_Tuple2('Missouri, St. Francois', 67215),
			_Utils_Tuple2('Missouri, St. Louis', 994205),
			_Utils_Tuple2('Missouri, Saline', 22761),
			_Utils_Tuple2('Missouri, Schuyler', 4660),
			_Utils_Tuple2('Missouri, Scotland', 4902),
			_Utils_Tuple2('Missouri, Scott', 38280),
			_Utils_Tuple2('Missouri, Shannon', 8166),
			_Utils_Tuple2('Missouri, Shelby', 5930),
			_Utils_Tuple2('Missouri, Stoddard', 29025),
			_Utils_Tuple2('Missouri, Stone', 31952),
			_Utils_Tuple2('Missouri, Sullivan', 6089),
			_Utils_Tuple2('Missouri, Taney', 55928),
			_Utils_Tuple2('Missouri, Texas', 25398),
			_Utils_Tuple2('Missouri, Vernon', 20563),
			_Utils_Tuple2('Missouri, Warren', 35649),
			_Utils_Tuple2('Missouri, Washington', 24730),
			_Utils_Tuple2('Missouri, Wayne', 12873),
			_Utils_Tuple2('Missouri, Webster', 39592),
			_Utils_Tuple2('Missouri, Worth', 2013),
			_Utils_Tuple2('Missouri, Wright', 18289),
			_Utils_Tuple2('Missouri, St. Louis', 300576),
			_Utils_Tuple2('Montana, Montana', 1068778),
			_Utils_Tuple2('Montana, Beaverhead', 9453),
			_Utils_Tuple2('Montana, Big Horn', 13319),
			_Utils_Tuple2('Montana, Blaine', 6681),
			_Utils_Tuple2('Montana, Broadwater', 6237),
			_Utils_Tuple2('Montana, Carbon', 10725),
			_Utils_Tuple2('Montana, Carter', 1252),
			_Utils_Tuple2('Montana, Cascade', 81366),
			_Utils_Tuple2('Montana, Chouteau', 5635),
			_Utils_Tuple2('Montana, Custer', 11402),
			_Utils_Tuple2('Montana, Daniels', 1690),
			_Utils_Tuple2('Montana, Dawson', 8613),
			_Utils_Tuple2('Montana, Deer Lodge', 9140),
			_Utils_Tuple2('Montana, Fallon', 2846),
			_Utils_Tuple2('Montana, Fergus', 11050),
			_Utils_Tuple2('Montana, Flathead', 103806),
			_Utils_Tuple2('Montana, Gallatin', 114434),
			_Utils_Tuple2('Montana, Garfield', 1258),
			_Utils_Tuple2('Montana, Glacier', 13753),
			_Utils_Tuple2('Montana, Golden Valley', 821),
			_Utils_Tuple2('Montana, Granite', 3379),
			_Utils_Tuple2('Montana, Hill', 16484),
			_Utils_Tuple2('Montana, Jefferson', 12221),
			_Utils_Tuple2('Montana, Judith Basin', 2007),
			_Utils_Tuple2('Montana, Lake', 30458),
			_Utils_Tuple2('Montana, Lewis and Clark', 69432),
			_Utils_Tuple2('Montana, Liberty', 2337),
			_Utils_Tuple2('Montana, Lincoln', 19980),
			_Utils_Tuple2('Montana, McCone', 1664),
			_Utils_Tuple2('Montana, Madison', 8600),
			_Utils_Tuple2('Montana, Meagher', 1862),
			_Utils_Tuple2('Montana, Mineral', 4397),
			_Utils_Tuple2('Montana, Missoula', 119600),
			_Utils_Tuple2('Montana, Musselshell', 4633),
			_Utils_Tuple2('Montana, Park', 16606),
			_Utils_Tuple2('Montana, Petroleum', 487),
			_Utils_Tuple2('Montana, Phillips', 3954),
			_Utils_Tuple2('Montana, Pondera', 5911),
			_Utils_Tuple2('Montana, Powder River', 1682),
			_Utils_Tuple2('Montana, Powell', 6890),
			_Utils_Tuple2('Montana, Prairie', 1077),
			_Utils_Tuple2('Montana, Ravalli', 43806),
			_Utils_Tuple2('Montana, Richland', 10803),
			_Utils_Tuple2('Montana, Roosevelt', 11004),
			_Utils_Tuple2('Montana, Rosebud', 8937),
			_Utils_Tuple2('Montana, Sanders', 12113),
			_Utils_Tuple2('Montana, Sheridan', 3309),
			_Utils_Tuple2('Montana, Silver Bow', 34915),
			_Utils_Tuple2('Montana, Stillwater', 9642),
			_Utils_Tuple2('Montana, Sweet Grass', 3737),
			_Utils_Tuple2('Montana, Teton', 6147),
			_Utils_Tuple2('Montana, Toole', 4736),
			_Utils_Tuple2('Montana, Treasure', 696),
			_Utils_Tuple2('Montana, Valley', 7396),
			_Utils_Tuple2('Montana, Wheatland', 2126),
			_Utils_Tuple2('Montana, Wibaux', 969),
			_Utils_Tuple2('Montana, Yellowstone', 161300),
			_Utils_Tuple2('Nebraska, Nebraska', 1934408),
			_Utils_Tuple2('Nebraska, Adams', 31363),
			_Utils_Tuple2('Nebraska, Antelope', 6298),
			_Utils_Tuple2('Nebraska, Arthur', 463),
			_Utils_Tuple2('Nebraska, Banner', 745),
			_Utils_Tuple2('Nebraska, Blaine', 465),
			_Utils_Tuple2('Nebraska, Boone', 5192),
			_Utils_Tuple2('Nebraska, Box Butte', 10783),
			_Utils_Tuple2('Nebraska, Boyd', 1919),
			_Utils_Tuple2('Nebraska, Brown', 2955),
			_Utils_Tuple2('Nebraska, Buffalo', 49659),
			_Utils_Tuple2('Nebraska, Burt', 6459),
			_Utils_Tuple2('Nebraska, Butler', 8016),
			_Utils_Tuple2('Nebraska, Cass', 26248),
			_Utils_Tuple2('Nebraska, Cedar', 8402),
			_Utils_Tuple2('Nebraska, Chase', 3924),
			_Utils_Tuple2('Nebraska, Cherry', 5689),
			_Utils_Tuple2('Nebraska, Cheyenne', 8910),
			_Utils_Tuple2('Nebraska, Clay', 6203),
			_Utils_Tuple2('Nebraska, Colfax', 10709),
			_Utils_Tuple2('Nebraska, Cuming', 8846),
			_Utils_Tuple2('Nebraska, Custer', 10777),
			_Utils_Tuple2('Nebraska, Dakota', 20026),
			_Utils_Tuple2('Nebraska, Dawes', 8589),
			_Utils_Tuple2('Nebraska, Dawson', 23595),
			_Utils_Tuple2('Nebraska, Deuel', 1794),
			_Utils_Tuple2('Nebraska, Dixon', 5636),
			_Utils_Tuple2('Nebraska, Dodge', 36565),
			_Utils_Tuple2('Nebraska, Douglas', 571327),
			_Utils_Tuple2('Nebraska, Dundy', 1693),
			_Utils_Tuple2('Nebraska, Fillmore', 5462),
			_Utils_Tuple2('Nebraska, Franklin', 2979),
			_Utils_Tuple2('Nebraska, Frontier', 2627),
			_Utils_Tuple2('Nebraska, Furnas', 4676),
			_Utils_Tuple2('Nebraska, Gage', 21513),
			_Utils_Tuple2('Nebraska, Garden', 1837),
			_Utils_Tuple2('Nebraska, Garfield', 1969),
			_Utils_Tuple2('Nebraska, Gosper', 1990),
			_Utils_Tuple2('Nebraska, Grant', 623),
			_Utils_Tuple2('Nebraska, Greeley', 2356),
			_Utils_Tuple2('Nebraska, Hall', 61353),
			_Utils_Tuple2('Nebraska, Hamilton', 9324),
			_Utils_Tuple2('Nebraska, Harlan', 3380),
			_Utils_Tuple2('Nebraska, Hayes', 922),
			_Utils_Tuple2('Nebraska, Hitchcock', 2762),
			_Utils_Tuple2('Nebraska, Holt', 10067),
			_Utils_Tuple2('Nebraska, Hooker', 682),
			_Utils_Tuple2('Nebraska, Howard', 6445),
			_Utils_Tuple2('Nebraska, Jefferson', 7046),
			_Utils_Tuple2('Nebraska, Johnson', 5071),
			_Utils_Tuple2('Nebraska, Kearney', 6495),
			_Utils_Tuple2('Nebraska, Keith', 8034),
			_Utils_Tuple2('Nebraska, Keya Paha', 806),
			_Utils_Tuple2('Nebraska, Kimball', 3632),
			_Utils_Tuple2('Nebraska, Knox', 8332),
			_Utils_Tuple2('Nebraska, Lancaster', 319090),
			_Utils_Tuple2('Nebraska, Lincoln', 34914),
			_Utils_Tuple2('Nebraska, Logan', 748),
			_Utils_Tuple2('Nebraska, Loup', 664),
			_Utils_Tuple2('Nebraska, McPherson', 494),
			_Utils_Tuple2('Nebraska, Madison', 35099),
			_Utils_Tuple2('Nebraska, Merrick', 7755),
			_Utils_Tuple2('Nebraska, Morrill', 4642),
			_Utils_Tuple2('Nebraska, Nance', 3519),
			_Utils_Tuple2('Nebraska, Nemaha', 6972),
			_Utils_Tuple2('Nebraska, Nuckolls', 4148),
			_Utils_Tuple2('Nebraska, Otoe', 16012),
			_Utils_Tuple2('Nebraska, Pawnee', 2613),
			_Utils_Tuple2('Nebraska, Perkins', 2891),
			_Utils_Tuple2('Nebraska, Phelps', 9034),
			_Utils_Tuple2('Nebraska, Pierce', 7148),
			_Utils_Tuple2('Nebraska, Platte', 33470),
			_Utils_Tuple2('Nebraska, Polk', 5213),
			_Utils_Tuple2('Nebraska, Red Willow', 10724),
			_Utils_Tuple2('Nebraska, Richardson', 7865),
			_Utils_Tuple2('Nebraska, Rock', 1357),
			_Utils_Tuple2('Nebraska, Saline', 14224),
			_Utils_Tuple2('Nebraska, Sarpy', 187196),
			_Utils_Tuple2('Nebraska, Saunders', 21578),
			_Utils_Tuple2('Nebraska, Scotts Bluff', 35618),
			_Utils_Tuple2('Nebraska, Seward', 17284),
			_Utils_Tuple2('Nebraska, Sheridan', 5246),
			_Utils_Tuple2('Nebraska, Sherman', 3001),
			_Utils_Tuple2('Nebraska, Sioux', 1166),
			_Utils_Tuple2('Nebraska, Stanton', 5920),
			_Utils_Tuple2('Nebraska, Thayer', 5003),
			_Utils_Tuple2('Nebraska, Thomas', 722),
			_Utils_Tuple2('Nebraska, Thurston', 7224),
			_Utils_Tuple2('Nebraska, Valley', 4158),
			_Utils_Tuple2('Nebraska, Washington', 20729),
			_Utils_Tuple2('Nebraska, Wayne', 9385),
			_Utils_Tuple2('Nebraska, Webster', 3487),
			_Utils_Tuple2('Nebraska, Wheeler', 783),
			_Utils_Tuple2('Nebraska, York', 13679),
			_Utils_Tuple2('Nevada, Nevada', 3080156),
			_Utils_Tuple2('Nevada, Churchill', 24909),
			_Utils_Tuple2('Nevada, Clark', 2266715),
			_Utils_Tuple2('Nevada, Douglas', 48905),
			_Utils_Tuple2('Nevada, Elko', 52778),
			_Utils_Tuple2('Nevada, Esmeralda', 873),
			_Utils_Tuple2('Nevada, Eureka', 2029),
			_Utils_Tuple2('Nevada, Humboldt', 16831),
			_Utils_Tuple2('Nevada, Lander', 5532),
			_Utils_Tuple2('Nevada, Lincoln', 5183),
			_Utils_Tuple2('Nevada, Lyon', 57510),
			_Utils_Tuple2('Nevada, Mineral', 4505),
			_Utils_Tuple2('Nevada, Nye', 46523),
			_Utils_Tuple2('Nevada, Pershing', 6725),
			_Utils_Tuple2('Nevada, Storey', 4123),
			_Utils_Tuple2('Nevada, Washoe', 471519),
			_Utils_Tuple2('Nevada, White Pine', 9580),
			_Utils_Tuple2('Nevada, Carson', 55916),
			_Utils_Tuple2('New Hampshire, New Hampshire', 1359711),
			_Utils_Tuple2('New Hampshire, Belknap', 61303),
			_Utils_Tuple2('New Hampshire, Carroll', 48910),
			_Utils_Tuple2('New Hampshire, Cheshire', 76085),
			_Utils_Tuple2('New Hampshire, Coos', 31563),
			_Utils_Tuple2('New Hampshire, Grafton', 89886),
			_Utils_Tuple2('New Hampshire, Hillsborough', 417025),
			_Utils_Tuple2('New Hampshire, Merrimack', 151391),
			_Utils_Tuple2('New Hampshire, Rockingham', 309769),
			_Utils_Tuple2('New Hampshire, Strafford', 130633),
			_Utils_Tuple2('New Hampshire, Sullivan', 43146),
			_Utils_Tuple2('New Jersey, New Jersey', 8882190),
			_Utils_Tuple2('New Jersey, Atlantic', 263670),
			_Utils_Tuple2('New Jersey, Bergen', 932202),
			_Utils_Tuple2('New Jersey, Burlington', 445349),
			_Utils_Tuple2('New Jersey, Camden', 506471),
			_Utils_Tuple2('New Jersey, Cape May', 92039),
			_Utils_Tuple2('New Jersey, Cumberland', 149527),
			_Utils_Tuple2('New Jersey, Essex', 798975),
			_Utils_Tuple2('New Jersey, Gloucester', 291636),
			_Utils_Tuple2('New Jersey, Hudson', 672391),
			_Utils_Tuple2('New Jersey, Hunterdon', 124371),
			_Utils_Tuple2('New Jersey, Mercer', 367430),
			_Utils_Tuple2('New Jersey, Middlesex', 825062),
			_Utils_Tuple2('New Jersey, Monmouth', 618795),
			_Utils_Tuple2('New Jersey, Morris', 491845),
			_Utils_Tuple2('New Jersey, Ocean', 607186),
			_Utils_Tuple2('New Jersey, Passaic', 501826),
			_Utils_Tuple2('New Jersey, Salem', 62385),
			_Utils_Tuple2('New Jersey, Somerset', 328934),
			_Utils_Tuple2('New Jersey, Sussex', 140488),
			_Utils_Tuple2('New Jersey, Union', 556341),
			_Utils_Tuple2('New Jersey, Warren', 105267),
			_Utils_Tuple2('New Mexico, New Mexico', 2096829),
			_Utils_Tuple2('New Mexico, Bernalillo', 679121),
			_Utils_Tuple2('New Mexico, Catron', 3527),
			_Utils_Tuple2('New Mexico, Chaves', 64615),
			_Utils_Tuple2('New Mexico, Cibola', 26675),
			_Utils_Tuple2('New Mexico, Colfax', 11941),
			_Utils_Tuple2('New Mexico, Curry', 48954),
			_Utils_Tuple2('New Mexico, De Baca', 1748),
			_Utils_Tuple2('New Mexico, Doña Ana', 218195),
			_Utils_Tuple2('New Mexico, Eddy', 58460),
			_Utils_Tuple2('New Mexico, Grant', 26998),
			_Utils_Tuple2('New Mexico, Guadalupe', 4300),
			_Utils_Tuple2('New Mexico, Harding', 625),
			_Utils_Tuple2('New Mexico, Hidalgo', 4198),
			_Utils_Tuple2('New Mexico, Lea', 71070),
			_Utils_Tuple2('New Mexico, Lincoln', 19572),
			_Utils_Tuple2('New Mexico, Los Alamos', 19369),
			_Utils_Tuple2('New Mexico, Luna', 23709),
			_Utils_Tuple2('New Mexico, McKinley', 71367),
			_Utils_Tuple2('New Mexico, Mora', 4521),
			_Utils_Tuple2('New Mexico, Otero', 67490),
			_Utils_Tuple2('New Mexico, Quay', 8253),
			_Utils_Tuple2('New Mexico, Rio Arriba', 38921),
			_Utils_Tuple2('New Mexico, Roosevelt', 18500),
			_Utils_Tuple2('New Mexico, Sandoval', 146748),
			_Utils_Tuple2('New Mexico, San Juan', 123958),
			_Utils_Tuple2('New Mexico, San Miguel', 27277),
			_Utils_Tuple2('New Mexico, Santa Fe', 150358),
			_Utils_Tuple2('New Mexico, Sierra', 10791),
			_Utils_Tuple2('New Mexico, Socorro', 16637),
			_Utils_Tuple2('New Mexico, Taos', 32723),
			_Utils_Tuple2('New Mexico, Torrance', 15461),
			_Utils_Tuple2('New Mexico, Union', 4059),
			_Utils_Tuple2('New Mexico, Valencia', 76688),
			_Utils_Tuple2('New York, New York', 19453561),
			_Utils_Tuple2('New York, Albany', 305506),
			_Utils_Tuple2('New York, Allegany', 46091),
			_Utils_Tuple2('New York, Bronx', 1418207),
			_Utils_Tuple2('New York, Broome', 190488),
			_Utils_Tuple2('New York, Cattaraugus', 76117),
			_Utils_Tuple2('New York, Cayuga', 76576),
			_Utils_Tuple2('New York, Chautauqua', 126903),
			_Utils_Tuple2('New York, Chemung', 83456),
			_Utils_Tuple2('New York, Chenango', 47207),
			_Utils_Tuple2('New York, Clinton', 80485),
			_Utils_Tuple2('New York, Columbia', 59461),
			_Utils_Tuple2('New York, Cortland', 47581),
			_Utils_Tuple2('New York, Delaware', 44135),
			_Utils_Tuple2('New York, Dutchess', 294218),
			_Utils_Tuple2('New York, Erie', 918702),
			_Utils_Tuple2('New York, Essex', 36885),
			_Utils_Tuple2('New York, Franklin', 50022),
			_Utils_Tuple2('New York, Fulton', 53383),
			_Utils_Tuple2('New York, Genesee', 57280),
			_Utils_Tuple2('New York, Greene', 47188),
			_Utils_Tuple2('New York, Hamilton', 4416),
			_Utils_Tuple2('New York, Herkimer', 61319),
			_Utils_Tuple2('New York, Jefferson', 109834),
			_Utils_Tuple2('New York, Kings', 2559903),
			_Utils_Tuple2('New York, Lewis', 26296),
			_Utils_Tuple2('New York, Livingston', 62914),
			_Utils_Tuple2('New York, Madison', 70941),
			_Utils_Tuple2('New York, Monroe', 741770),
			_Utils_Tuple2('New York, Montgomery', 49221),
			_Utils_Tuple2('New York, Nassau', 1356924),
			_Utils_Tuple2('New York, New York', 1628706),
			_Utils_Tuple2('New York, Niagara', 209281),
			_Utils_Tuple2('New York, Oneida', 228671),
			_Utils_Tuple2('New York, Onondaga', 460528),
			_Utils_Tuple2('New York, Ontario', 109777),
			_Utils_Tuple2('New York, Orange', 384940),
			_Utils_Tuple2('New York, Orleans', 40352),
			_Utils_Tuple2('New York, Oswego', 117124),
			_Utils_Tuple2('New York, Otsego', 59493),
			_Utils_Tuple2('New York, Putnam', 98320),
			_Utils_Tuple2('New York, Queens', 2253858),
			_Utils_Tuple2('New York, Rensselaer', 158714),
			_Utils_Tuple2('New York, Richmond', 476143),
			_Utils_Tuple2('New York, Rockland', 325789),
			_Utils_Tuple2('New York, St. Lawrence', 107740),
			_Utils_Tuple2('New York, Saratoga', 229863),
			_Utils_Tuple2('New York, Schenectady', 155299),
			_Utils_Tuple2('New York, Schoharie', 30999),
			_Utils_Tuple2('New York, Schuyler', 17807),
			_Utils_Tuple2('New York, Seneca', 34016),
			_Utils_Tuple2('New York, Steuben', 95379),
			_Utils_Tuple2('New York, Suffolk', 1476601),
			_Utils_Tuple2('New York, Sullivan', 75432),
			_Utils_Tuple2('New York, Tioga', 48203),
			_Utils_Tuple2('New York, Tompkins', 102180),
			_Utils_Tuple2('New York, Ulster', 177573),
			_Utils_Tuple2('New York, Warren', 63944),
			_Utils_Tuple2('New York, Washington', 61204),
			_Utils_Tuple2('New York, Wayne', 89918),
			_Utils_Tuple2('New York, Westchester', 967506),
			_Utils_Tuple2('New York, Wyoming', 39859),
			_Utils_Tuple2('New York, Yates', 24913),
			_Utils_Tuple2('North Carolina, North Carolina', 10488084),
			_Utils_Tuple2('North Carolina, Alamance', 169509),
			_Utils_Tuple2('North Carolina, Alexander', 37497),
			_Utils_Tuple2('North Carolina, Alleghany', 11137),
			_Utils_Tuple2('North Carolina, Anson', 24446),
			_Utils_Tuple2('North Carolina, Ashe', 27203),
			_Utils_Tuple2('North Carolina, Avery', 17557),
			_Utils_Tuple2('North Carolina, Beaufort', 46994),
			_Utils_Tuple2('North Carolina, Bertie', 18947),
			_Utils_Tuple2('North Carolina, Bladen', 32722),
			_Utils_Tuple2('North Carolina, Brunswick', 142820),
			_Utils_Tuple2('North Carolina, Buncombe', 261191),
			_Utils_Tuple2('North Carolina, Burke', 90485),
			_Utils_Tuple2('North Carolina, Cabarrus', 216453),
			_Utils_Tuple2('North Carolina, Caldwell', 82178),
			_Utils_Tuple2('North Carolina, Camden', 10867),
			_Utils_Tuple2('North Carolina, Carteret', 69473),
			_Utils_Tuple2('North Carolina, Caswell', 22604),
			_Utils_Tuple2('North Carolina, Catawba', 159551),
			_Utils_Tuple2('North Carolina, Chatham', 74470),
			_Utils_Tuple2('North Carolina, Cherokee', 28612),
			_Utils_Tuple2('North Carolina, Chowan', 13943),
			_Utils_Tuple2('North Carolina, Clay', 11231),
			_Utils_Tuple2('North Carolina, Cleveland', 97947),
			_Utils_Tuple2('North Carolina, Columbus', 55508),
			_Utils_Tuple2('North Carolina, Craven', 102139),
			_Utils_Tuple2('North Carolina, Cumberland', 335509),
			_Utils_Tuple2('North Carolina, Currituck', 27763),
			_Utils_Tuple2('North Carolina, Dare', 37009),
			_Utils_Tuple2('North Carolina, Davidson', 167609),
			_Utils_Tuple2('North Carolina, Davie', 42846),
			_Utils_Tuple2('North Carolina, Duplin', 58741),
			_Utils_Tuple2('North Carolina, Durham', 321488),
			_Utils_Tuple2('North Carolina, Edgecombe', 51472),
			_Utils_Tuple2('North Carolina, Forsyth', 382295),
			_Utils_Tuple2('North Carolina, Franklin', 69685),
			_Utils_Tuple2('North Carolina, Gaston', 224529),
			_Utils_Tuple2('North Carolina, Gates', 11562),
			_Utils_Tuple2('North Carolina, Graham', 8441),
			_Utils_Tuple2('North Carolina, Granville', 60443),
			_Utils_Tuple2('North Carolina, Greene', 21069),
			_Utils_Tuple2('North Carolina, Guilford', 537174),
			_Utils_Tuple2('North Carolina, Halifax', 50010),
			_Utils_Tuple2('North Carolina, Harnett', 135976),
			_Utils_Tuple2('North Carolina, Haywood', 62317),
			_Utils_Tuple2('North Carolina, Henderson', 117417),
			_Utils_Tuple2('North Carolina, Hertford', 23677),
			_Utils_Tuple2('North Carolina, Hoke', 55234),
			_Utils_Tuple2('North Carolina, Hyde', 4937),
			_Utils_Tuple2('North Carolina, Iredell', 181806),
			_Utils_Tuple2('North Carolina, Jackson', 43938),
			_Utils_Tuple2('North Carolina, Johnston', 209339),
			_Utils_Tuple2('North Carolina, Jones', 9419),
			_Utils_Tuple2('North Carolina, Lee', 61779),
			_Utils_Tuple2('North Carolina, Lenoir', 55949),
			_Utils_Tuple2('North Carolina, Lincoln', 86111),
			_Utils_Tuple2('North Carolina, McDowell', 45756),
			_Utils_Tuple2('North Carolina, Macon', 35858),
			_Utils_Tuple2('North Carolina, Madison', 21755),
			_Utils_Tuple2('North Carolina, Martin', 22440),
			_Utils_Tuple2('North Carolina, Mecklenburg', 1110356),
			_Utils_Tuple2('North Carolina, Mitchell', 14964),
			_Utils_Tuple2('North Carolina, Montgomery', 27173),
			_Utils_Tuple2('North Carolina, Moore', 100880),
			_Utils_Tuple2('North Carolina, Nash', 94298),
			_Utils_Tuple2('North Carolina, New Hanover', 234473),
			_Utils_Tuple2('North Carolina, Northampton', 19483),
			_Utils_Tuple2('North Carolina, Onslow', 197938),
			_Utils_Tuple2('North Carolina, Orange', 148476),
			_Utils_Tuple2('North Carolina, Pamlico', 12726),
			_Utils_Tuple2('North Carolina, Pasquotank', 39824),
			_Utils_Tuple2('North Carolina, Pender', 63060),
			_Utils_Tuple2('North Carolina, Perquimans', 13463),
			_Utils_Tuple2('North Carolina, Person', 39490),
			_Utils_Tuple2('North Carolina, Pitt', 180742),
			_Utils_Tuple2('North Carolina, Polk', 20724),
			_Utils_Tuple2('North Carolina, Randolph', 143667),
			_Utils_Tuple2('North Carolina, Richmond', 44829),
			_Utils_Tuple2('North Carolina, Robeson', 130625),
			_Utils_Tuple2('North Carolina, Rockingham', 91010),
			_Utils_Tuple2('North Carolina, Rowan', 142088),
			_Utils_Tuple2('North Carolina, Rutherford', 67029),
			_Utils_Tuple2('North Carolina, Sampson', 63531),
			_Utils_Tuple2('North Carolina, Scotland', 34823),
			_Utils_Tuple2('North Carolina, Stanly', 62806),
			_Utils_Tuple2('North Carolina, Stokes', 45591),
			_Utils_Tuple2('North Carolina, Surry', 71783),
			_Utils_Tuple2('North Carolina, Swain', 14271),
			_Utils_Tuple2('North Carolina, Transylvania', 34385),
			_Utils_Tuple2('North Carolina, Tyrrell', 4016),
			_Utils_Tuple2('North Carolina, Union', 239859),
			_Utils_Tuple2('North Carolina, Vance', 44535),
			_Utils_Tuple2('North Carolina, Wake', 1111761),
			_Utils_Tuple2('North Carolina, Warren', 19731),
			_Utils_Tuple2('North Carolina, Washington', 11580),
			_Utils_Tuple2('North Carolina, Watauga', 56177),
			_Utils_Tuple2('North Carolina, Wayne', 123131),
			_Utils_Tuple2('North Carolina, Wilkes', 68412),
			_Utils_Tuple2('North Carolina, Wilson', 81801),
			_Utils_Tuple2('North Carolina, Yadkin', 37667),
			_Utils_Tuple2('North Carolina, Yancey', 18069),
			_Utils_Tuple2('North Dakota, North Dakota', 762062),
			_Utils_Tuple2('North Dakota, Adams', 2216),
			_Utils_Tuple2('North Dakota, Barnes', 10415),
			_Utils_Tuple2('North Dakota, Benson', 6832),
			_Utils_Tuple2('North Dakota, Billings', 928),
			_Utils_Tuple2('North Dakota, Bottineau', 6282),
			_Utils_Tuple2('North Dakota, Bowman', 3024),
			_Utils_Tuple2('North Dakota, Burke', 2115),
			_Utils_Tuple2('North Dakota, Burleigh', 95626),
			_Utils_Tuple2('North Dakota, Cass', 181923),
			_Utils_Tuple2('North Dakota, Cavalier', 3762),
			_Utils_Tuple2('North Dakota, Dickey', 4872),
			_Utils_Tuple2('North Dakota, Divide', 2264),
			_Utils_Tuple2('North Dakota, Dunn', 4424),
			_Utils_Tuple2('North Dakota, Eddy', 2287),
			_Utils_Tuple2('North Dakota, Emmons', 3241),
			_Utils_Tuple2('North Dakota, Foster', 3210),
			_Utils_Tuple2('North Dakota, Golden Valley', 1761),
			_Utils_Tuple2('North Dakota, Grand Forks', 69451),
			_Utils_Tuple2('North Dakota, Grant', 2274),
			_Utils_Tuple2('North Dakota, Griggs', 2231),
			_Utils_Tuple2('North Dakota, Hettinger', 2499),
			_Utils_Tuple2('North Dakota, Kidder', 2480),
			_Utils_Tuple2('North Dakota, LaMoure', 4046),
			_Utils_Tuple2('North Dakota, Logan', 1850),
			_Utils_Tuple2('North Dakota, McHenry', 5745),
			_Utils_Tuple2('North Dakota, McIntosh', 2497),
			_Utils_Tuple2('North Dakota, McKenzie', 15024),
			_Utils_Tuple2('North Dakota, McLean', 9450),
			_Utils_Tuple2('North Dakota, Mercer', 8187),
			_Utils_Tuple2('North Dakota, Morton', 31364),
			_Utils_Tuple2('North Dakota, Mountrail', 10545),
			_Utils_Tuple2('North Dakota, Nelson', 2879),
			_Utils_Tuple2('North Dakota, Oliver', 1959),
			_Utils_Tuple2('North Dakota, Pembina', 6801),
			_Utils_Tuple2('North Dakota, Pierce', 3975),
			_Utils_Tuple2('North Dakota, Ramsey', 11519),
			_Utils_Tuple2('North Dakota, Ransom', 5218),
			_Utils_Tuple2('North Dakota, Renville', 2327),
			_Utils_Tuple2('North Dakota, Richland', 16177),
			_Utils_Tuple2('North Dakota, Rolette', 14176),
			_Utils_Tuple2('North Dakota, Sargent', 3898),
			_Utils_Tuple2('North Dakota, Sheridan', 1315),
			_Utils_Tuple2('North Dakota, Sioux', 4230),
			_Utils_Tuple2('North Dakota, Slope', 750),
			_Utils_Tuple2('North Dakota, Stark', 31489),
			_Utils_Tuple2('North Dakota, Steele', 1890),
			_Utils_Tuple2('North Dakota, Stutsman', 20704),
			_Utils_Tuple2('North Dakota, Towner', 2189),
			_Utils_Tuple2('North Dakota, Traill', 8036),
			_Utils_Tuple2('North Dakota, Walsh', 10641),
			_Utils_Tuple2('North Dakota, Ward', 67641),
			_Utils_Tuple2('North Dakota, Wells', 3834),
			_Utils_Tuple2('North Dakota, Williams', 37589),
			_Utils_Tuple2('Ohio, Ohio', 11689100),
			_Utils_Tuple2('Ohio, Adams', 27698),
			_Utils_Tuple2('Ohio, Allen', 102351),
			_Utils_Tuple2('Ohio, Ashland', 53484),
			_Utils_Tuple2('Ohio, Ashtabula', 97241),
			_Utils_Tuple2('Ohio, Athens', 65327),
			_Utils_Tuple2('Ohio, Auglaize', 45656),
			_Utils_Tuple2('Ohio, Belmont', 67006),
			_Utils_Tuple2('Ohio, Brown', 43432),
			_Utils_Tuple2('Ohio, Butler', 383134),
			_Utils_Tuple2('Ohio, Carroll', 26914),
			_Utils_Tuple2('Ohio, Champaign', 38885),
			_Utils_Tuple2('Ohio, Clark', 134083),
			_Utils_Tuple2('Ohio, Clermont', 206428),
			_Utils_Tuple2('Ohio, Clinton', 41968),
			_Utils_Tuple2('Ohio, Columbiana', 101883),
			_Utils_Tuple2('Ohio, Coshocton', 36600),
			_Utils_Tuple2('Ohio, Crawford', 41494),
			_Utils_Tuple2('Ohio, Cuyahoga', 1235072),
			_Utils_Tuple2('Ohio, Darke', 51113),
			_Utils_Tuple2('Ohio, Defiance', 38087),
			_Utils_Tuple2('Ohio, Delaware', 209177),
			_Utils_Tuple2('Ohio, Erie', 74266),
			_Utils_Tuple2('Ohio, Fairfield', 157574),
			_Utils_Tuple2('Ohio, Fayette', 28525),
			_Utils_Tuple2('Ohio, Franklin', 1316756),
			_Utils_Tuple2('Ohio, Fulton', 42126),
			_Utils_Tuple2('Ohio, Gallia', 29898),
			_Utils_Tuple2('Ohio, Geauga', 93649),
			_Utils_Tuple2('Ohio, Greene', 168937),
			_Utils_Tuple2('Ohio, Guernsey', 38875),
			_Utils_Tuple2('Ohio, Hamilton', 817473),
			_Utils_Tuple2('Ohio, Hancock', 75783),
			_Utils_Tuple2('Ohio, Hardin', 31365),
			_Utils_Tuple2('Ohio, Harrison', 15040),
			_Utils_Tuple2('Ohio, Henry', 27006),
			_Utils_Tuple2('Ohio, Highland', 43161),
			_Utils_Tuple2('Ohio, Hocking', 28264),
			_Utils_Tuple2('Ohio, Holmes', 43960),
			_Utils_Tuple2('Ohio, Huron', 58266),
			_Utils_Tuple2('Ohio, Jackson', 32413),
			_Utils_Tuple2('Ohio, Jefferson', 65325),
			_Utils_Tuple2('Ohio, Knox', 62322),
			_Utils_Tuple2('Ohio, Lake', 230149),
			_Utils_Tuple2('Ohio, Lawrence', 59463),
			_Utils_Tuple2('Ohio, Licking', 176862),
			_Utils_Tuple2('Ohio, Logan', 45672),
			_Utils_Tuple2('Ohio, Lorain', 309833),
			_Utils_Tuple2('Ohio, Lucas', 428348),
			_Utils_Tuple2('Ohio, Madison', 44731),
			_Utils_Tuple2('Ohio, Mahoning', 228683),
			_Utils_Tuple2('Ohio, Marion', 65093),
			_Utils_Tuple2('Ohio, Medina', 179746),
			_Utils_Tuple2('Ohio, Meigs', 22907),
			_Utils_Tuple2('Ohio, Mercer', 41172),
			_Utils_Tuple2('Ohio, Miami', 106987),
			_Utils_Tuple2('Ohio, Monroe', 13654),
			_Utils_Tuple2('Ohio, Montgomery', 531687),
			_Utils_Tuple2('Ohio, Morgan', 14508),
			_Utils_Tuple2('Ohio, Morrow', 35328),
			_Utils_Tuple2('Ohio, Muskingum', 86215),
			_Utils_Tuple2('Ohio, Noble', 14424),
			_Utils_Tuple2('Ohio, Ottawa', 40525),
			_Utils_Tuple2('Ohio, Paulding', 18672),
			_Utils_Tuple2('Ohio, Perry', 36134),
			_Utils_Tuple2('Ohio, Pickaway', 58457),
			_Utils_Tuple2('Ohio, Pike', 27772),
			_Utils_Tuple2('Ohio, Portage', 162466),
			_Utils_Tuple2('Ohio, Preble', 40882),
			_Utils_Tuple2('Ohio, Putnam', 33861),
			_Utils_Tuple2('Ohio, Richland', 121154),
			_Utils_Tuple2('Ohio, Ross', 76666),
			_Utils_Tuple2('Ohio, Sandusky', 58518),
			_Utils_Tuple2('Ohio, Scioto', 75314),
			_Utils_Tuple2('Ohio, Seneca', 55178),
			_Utils_Tuple2('Ohio, Shelby', 48590),
			_Utils_Tuple2('Ohio, Stark', 370606),
			_Utils_Tuple2('Ohio, Summit', 541013),
			_Utils_Tuple2('Ohio, Trumbull', 197974),
			_Utils_Tuple2('Ohio, Tuscarawas', 91987),
			_Utils_Tuple2('Ohio, Union', 58988),
			_Utils_Tuple2('Ohio, Van Wert', 28275),
			_Utils_Tuple2('Ohio, Vinton', 13085),
			_Utils_Tuple2('Ohio, Warren', 234602),
			_Utils_Tuple2('Ohio, Washington', 59911),
			_Utils_Tuple2('Ohio, Wayne', 115710),
			_Utils_Tuple2('Ohio, Williams', 36692),
			_Utils_Tuple2('Ohio, Wood', 130817),
			_Utils_Tuple2('Ohio, Wyandot', 21772),
			_Utils_Tuple2('Oklahoma, Oklahoma', 3956971),
			_Utils_Tuple2('Oklahoma, Adair', 22194),
			_Utils_Tuple2('Oklahoma, Alfalfa', 5702),
			_Utils_Tuple2('Oklahoma, Atoka', 13758),
			_Utils_Tuple2('Oklahoma, Beaver', 5311),
			_Utils_Tuple2('Oklahoma, Beckham', 21859),
			_Utils_Tuple2('Oklahoma, Blaine', 9429),
			_Utils_Tuple2('Oklahoma, Bryan', 47995),
			_Utils_Tuple2('Oklahoma, Caddo', 28762),
			_Utils_Tuple2('Oklahoma, Canadian', 148306),
			_Utils_Tuple2('Oklahoma, Carter', 48111),
			_Utils_Tuple2('Oklahoma, Cherokee', 48657),
			_Utils_Tuple2('Oklahoma, Choctaw', 14672),
			_Utils_Tuple2('Oklahoma, Cimarron', 2137),
			_Utils_Tuple2('Oklahoma, Cleveland', 284014),
			_Utils_Tuple2('Oklahoma, Coal', 5495),
			_Utils_Tuple2('Oklahoma, Comanche', 120749),
			_Utils_Tuple2('Oklahoma, Cotton', 5666),
			_Utils_Tuple2('Oklahoma, Craig', 14142),
			_Utils_Tuple2('Oklahoma, Creek', 71522),
			_Utils_Tuple2('Oklahoma, Custer', 29003),
			_Utils_Tuple2('Oklahoma, Delaware', 43009),
			_Utils_Tuple2('Oklahoma, Dewey', 4891),
			_Utils_Tuple2('Oklahoma, Ellis', 3859),
			_Utils_Tuple2('Oklahoma, Garfield', 61056),
			_Utils_Tuple2('Oklahoma, Garvin', 27711),
			_Utils_Tuple2('Oklahoma, Grady', 55834),
			_Utils_Tuple2('Oklahoma, Grant', 4333),
			_Utils_Tuple2('Oklahoma, Greer', 5712),
			_Utils_Tuple2('Oklahoma, Harmon', 2653),
			_Utils_Tuple2('Oklahoma, Harper', 3688),
			_Utils_Tuple2('Oklahoma, Haskell', 12627),
			_Utils_Tuple2('Oklahoma, Hughes', 13279),
			_Utils_Tuple2('Oklahoma, Jackson', 24530),
			_Utils_Tuple2('Oklahoma, Jefferson', 6002),
			_Utils_Tuple2('Oklahoma, Johnston', 11085),
			_Utils_Tuple2('Oklahoma, Kay', 43538),
			_Utils_Tuple2('Oklahoma, Kingfisher', 15765),
			_Utils_Tuple2('Oklahoma, Kiowa', 8708),
			_Utils_Tuple2('Oklahoma, Latimer', 10073),
			_Utils_Tuple2('Oklahoma, Le Flore', 49853),
			_Utils_Tuple2('Oklahoma, Lincoln', 34877),
			_Utils_Tuple2('Oklahoma, Logan', 48011),
			_Utils_Tuple2('Oklahoma, Love', 10253),
			_Utils_Tuple2('Oklahoma, McClain', 40474),
			_Utils_Tuple2('Oklahoma, McCurtain', 32832),
			_Utils_Tuple2('Oklahoma, McIntosh', 19596),
			_Utils_Tuple2('Oklahoma, Major', 7629),
			_Utils_Tuple2('Oklahoma, Marshall', 16931),
			_Utils_Tuple2('Oklahoma, Mayes', 41100),
			_Utils_Tuple2('Oklahoma, Murray', 14073),
			_Utils_Tuple2('Oklahoma, Muskogee', 67997),
			_Utils_Tuple2('Oklahoma, Noble', 11131),
			_Utils_Tuple2('Oklahoma, Nowata', 10076),
			_Utils_Tuple2('Oklahoma, Okfuskee', 11993),
			_Utils_Tuple2('Oklahoma, Oklahoma', 797434),
			_Utils_Tuple2('Oklahoma, Okmulgee', 38465),
			_Utils_Tuple2('Oklahoma, Osage', 46963),
			_Utils_Tuple2('Oklahoma, Ottawa', 31127),
			_Utils_Tuple2('Oklahoma, Pawnee', 16376),
			_Utils_Tuple2('Oklahoma, Payne', 81784),
			_Utils_Tuple2('Oklahoma, Pittsburg', 43654),
			_Utils_Tuple2('Oklahoma, Pontotoc', 38284),
			_Utils_Tuple2('Oklahoma, Pottawatomie', 72592),
			_Utils_Tuple2('Oklahoma, Pushmataha', 11096),
			_Utils_Tuple2('Oklahoma, Roger Mills', 3583),
			_Utils_Tuple2('Oklahoma, Rogers', 92459),
			_Utils_Tuple2('Oklahoma, Seminole', 24258),
			_Utils_Tuple2('Oklahoma, Sequoyah', 41569),
			_Utils_Tuple2('Oklahoma, Stephens', 43143),
			_Utils_Tuple2('Oklahoma, Texas', 19983),
			_Utils_Tuple2('Oklahoma, Tillman', 7250),
			_Utils_Tuple2('Oklahoma, Tulsa', 651552),
			_Utils_Tuple2('Oklahoma, Wagoner', 81289),
			_Utils_Tuple2('Oklahoma, Washington', 51527),
			_Utils_Tuple2('Oklahoma, Washita', 10916),
			_Utils_Tuple2('Oklahoma, Woods', 8793),
			_Utils_Tuple2('Oklahoma, Woodward', 20211),
			_Utils_Tuple2('Oregon, Oregon', 4217737),
			_Utils_Tuple2('Oregon, Baker', 16124),
			_Utils_Tuple2('Oregon, Benton', 93053),
			_Utils_Tuple2('Oregon, Clackamas', 418187),
			_Utils_Tuple2('Oregon, Clatsop', 40224),
			_Utils_Tuple2('Oregon, Columbia', 52354),
			_Utils_Tuple2('Oregon, Coos', 64487),
			_Utils_Tuple2('Oregon, Crook', 24404),
			_Utils_Tuple2('Oregon, Curry', 22925),
			_Utils_Tuple2('Oregon, Deschutes', 197692),
			_Utils_Tuple2('Oregon, Douglas', 110980),
			_Utils_Tuple2('Oregon, Gilliam', 1912),
			_Utils_Tuple2('Oregon, Grant', 7199),
			_Utils_Tuple2('Oregon, Harney', 7393),
			_Utils_Tuple2('Oregon, Hood River', 23382),
			_Utils_Tuple2('Oregon, Jackson', 220944),
			_Utils_Tuple2('Oregon, Jefferson', 24658),
			_Utils_Tuple2('Oregon, Josephine', 87487),
			_Utils_Tuple2('Oregon, Klamath', 68238),
			_Utils_Tuple2('Oregon, Lake', 7869),
			_Utils_Tuple2('Oregon, Lane', 382067),
			_Utils_Tuple2('Oregon, Lincoln', 49962),
			_Utils_Tuple2('Oregon, Linn', 129749),
			_Utils_Tuple2('Oregon, Malheur', 30571),
			_Utils_Tuple2('Oregon, Marion', 347818),
			_Utils_Tuple2('Oregon, Morrow', 11603),
			_Utils_Tuple2('Oregon, Multnomah', 812855),
			_Utils_Tuple2('Oregon, Polk', 86085),
			_Utils_Tuple2('Oregon, Sherman', 1780),
			_Utils_Tuple2('Oregon, Tillamook', 27036),
			_Utils_Tuple2('Oregon, Umatilla', 77950),
			_Utils_Tuple2('Oregon, Union', 26835),
			_Utils_Tuple2('Oregon, Wallowa', 7208),
			_Utils_Tuple2('Oregon, Wasco', 26682),
			_Utils_Tuple2('Oregon, Washington', 601592),
			_Utils_Tuple2('Oregon, Wheeler', 1332),
			_Utils_Tuple2('Oregon, Yamhill', 107100),
			_Utils_Tuple2('Pennsylvania, Pennsylvania', 12801989),
			_Utils_Tuple2('Pennsylvania, Adams', 103009),
			_Utils_Tuple2('Pennsylvania, Allegheny', 1216045),
			_Utils_Tuple2('Pennsylvania, Armstrong', 64735),
			_Utils_Tuple2('Pennsylvania, Beaver', 163929),
			_Utils_Tuple2('Pennsylvania, Bedford', 47888),
			_Utils_Tuple2('Pennsylvania, Berks', 421164),
			_Utils_Tuple2('Pennsylvania, Blair', 121829),
			_Utils_Tuple2('Pennsylvania, Bradford', 60323),
			_Utils_Tuple2('Pennsylvania, Bucks', 628270),
			_Utils_Tuple2('Pennsylvania, Butler', 187853),
			_Utils_Tuple2('Pennsylvania, Cambria', 130192),
			_Utils_Tuple2('Pennsylvania, Cameron', 4447),
			_Utils_Tuple2('Pennsylvania, Carbon', 64182),
			_Utils_Tuple2('Pennsylvania, Centre', 162385),
			_Utils_Tuple2('Pennsylvania, Chester', 524989),
			_Utils_Tuple2('Pennsylvania, Clarion', 38438),
			_Utils_Tuple2('Pennsylvania, Clearfield', 79255),
			_Utils_Tuple2('Pennsylvania, Clinton', 38632),
			_Utils_Tuple2('Pennsylvania, Columbia', 64964),
			_Utils_Tuple2('Pennsylvania, Crawford', 84629),
			_Utils_Tuple2('Pennsylvania, Cumberland', 253370),
			_Utils_Tuple2('Pennsylvania, Dauphin', 278299),
			_Utils_Tuple2('Pennsylvania, Delaware', 566747),
			_Utils_Tuple2('Pennsylvania, Elk', 29910),
			_Utils_Tuple2('Pennsylvania, Erie', 269728),
			_Utils_Tuple2('Pennsylvania, Fayette', 129274),
			_Utils_Tuple2('Pennsylvania, Forest', 7247),
			_Utils_Tuple2('Pennsylvania, Franklin', 155027),
			_Utils_Tuple2('Pennsylvania, Fulton', 14530),
			_Utils_Tuple2('Pennsylvania, Greene', 36233),
			_Utils_Tuple2('Pennsylvania, Huntingdon', 45144),
			_Utils_Tuple2('Pennsylvania, Indiana', 84073),
			_Utils_Tuple2('Pennsylvania, Jefferson', 43425),
			_Utils_Tuple2('Pennsylvania, Juniata', 24763),
			_Utils_Tuple2('Pennsylvania, Lackawanna', 209674),
			_Utils_Tuple2('Pennsylvania, Lancaster', 545724),
			_Utils_Tuple2('Pennsylvania, Lawrence', 85512),
			_Utils_Tuple2('Pennsylvania, Lebanon', 141793),
			_Utils_Tuple2('Pennsylvania, Lehigh', 369318),
			_Utils_Tuple2('Pennsylvania, Luzerne', 317417),
			_Utils_Tuple2('Pennsylvania, Lycoming', 113299),
			_Utils_Tuple2('Pennsylvania, McKean', 40625),
			_Utils_Tuple2('Pennsylvania, Mercer', 109424),
			_Utils_Tuple2('Pennsylvania, Mifflin', 46138),
			_Utils_Tuple2('Pennsylvania, Monroe', 170271),
			_Utils_Tuple2('Pennsylvania, Montgomery', 830915),
			_Utils_Tuple2('Pennsylvania, Montour', 18230),
			_Utils_Tuple2('Pennsylvania, Northampton', 305285),
			_Utils_Tuple2('Pennsylvania, Northumberland', 90843),
			_Utils_Tuple2('Pennsylvania, Perry', 46272),
			_Utils_Tuple2('Pennsylvania, Philadelphia', 1584064),
			_Utils_Tuple2('Pennsylvania, Pike', 55809),
			_Utils_Tuple2('Pennsylvania, Potter', 16526),
			_Utils_Tuple2('Pennsylvania, Schuylkill', 141359),
			_Utils_Tuple2('Pennsylvania, Snyder', 40372),
			_Utils_Tuple2('Pennsylvania, Somerset', 73447),
			_Utils_Tuple2('Pennsylvania, Sullivan', 6066),
			_Utils_Tuple2('Pennsylvania, Susquehanna', 40328),
			_Utils_Tuple2('Pennsylvania, Tioga', 40591),
			_Utils_Tuple2('Pennsylvania, Union', 44923),
			_Utils_Tuple2('Pennsylvania, Venango', 50668),
			_Utils_Tuple2('Pennsylvania, Warren', 39191),
			_Utils_Tuple2('Pennsylvania, Washington', 206865),
			_Utils_Tuple2('Pennsylvania, Wayne', 51361),
			_Utils_Tuple2('Pennsylvania, Westmoreland', 348899),
			_Utils_Tuple2('Pennsylvania, Wyoming', 26794),
			_Utils_Tuple2('Pennsylvania, York', 449058),
			_Utils_Tuple2('Rhode Island, Rhode Island', 1059361),
			_Utils_Tuple2('Rhode Island, Bristol', 48479),
			_Utils_Tuple2('Rhode Island, Kent', 164292),
			_Utils_Tuple2('Rhode Island, Newport', 82082),
			_Utils_Tuple2('Rhode Island, Providence', 638931),
			_Utils_Tuple2('Rhode Island, Washington', 125577),
			_Utils_Tuple2('South Carolina, South Carolina', 5148714),
			_Utils_Tuple2('South Carolina, Abbeville', 24527),
			_Utils_Tuple2('South Carolina, Aiken', 170872),
			_Utils_Tuple2('South Carolina, Allendale', 8688),
			_Utils_Tuple2('South Carolina, Anderson', 202558),
			_Utils_Tuple2('South Carolina, Bamberg', 14066),
			_Utils_Tuple2('South Carolina, Barnwell', 20866),
			_Utils_Tuple2('South Carolina, Beaufort', 192122),
			_Utils_Tuple2('South Carolina, Berkeley', 227907),
			_Utils_Tuple2('South Carolina, Calhoun', 14553),
			_Utils_Tuple2('South Carolina, Charleston', 411406),
			_Utils_Tuple2('South Carolina, Cherokee', 57300),
			_Utils_Tuple2('South Carolina, Chester', 32244),
			_Utils_Tuple2('South Carolina, Chesterfield', 45650),
			_Utils_Tuple2('South Carolina, Clarendon', 33745),
			_Utils_Tuple2('South Carolina, Colleton', 37677),
			_Utils_Tuple2('South Carolina, Darlington', 66618),
			_Utils_Tuple2('South Carolina, Dillon', 30479),
			_Utils_Tuple2('South Carolina, Dorchester', 162809),
			_Utils_Tuple2('South Carolina, Edgefield', 27260),
			_Utils_Tuple2('South Carolina, Fairfield', 22347),
			_Utils_Tuple2('South Carolina, Florence', 138293),
			_Utils_Tuple2('South Carolina, Georgetown', 62680),
			_Utils_Tuple2('South Carolina, Greenville', 523542),
			_Utils_Tuple2('South Carolina, Greenwood', 70811),
			_Utils_Tuple2('South Carolina, Hampton', 19222),
			_Utils_Tuple2('South Carolina, Horry', 354081),
			_Utils_Tuple2('South Carolina, Jasper', 30073),
			_Utils_Tuple2('South Carolina, Kershaw', 66551),
			_Utils_Tuple2('South Carolina, Lancaster', 98012),
			_Utils_Tuple2('South Carolina, Laurens', 67493),
			_Utils_Tuple2('South Carolina, Lee', 16828),
			_Utils_Tuple2('South Carolina, Lexington', 298750),
			_Utils_Tuple2('South Carolina, McCormick', 9463),
			_Utils_Tuple2('South Carolina, Marion', 30657),
			_Utils_Tuple2('South Carolina, Marlboro', 26118),
			_Utils_Tuple2('South Carolina, Newberry', 38440),
			_Utils_Tuple2('South Carolina, Oconee', 79546),
			_Utils_Tuple2('South Carolina, Orangeburg', 86175),
			_Utils_Tuple2('South Carolina, Pickens', 126884),
			_Utils_Tuple2('South Carolina, Richland', 415759),
			_Utils_Tuple2('South Carolina, Saluda', 20473),
			_Utils_Tuple2('South Carolina, Spartanburg', 319785),
			_Utils_Tuple2('South Carolina, Sumter', 106721),
			_Utils_Tuple2('South Carolina, Union', 27316),
			_Utils_Tuple2('South Carolina, Williamsburg', 30368),
			_Utils_Tuple2('South Carolina, York', 280979),
			_Utils_Tuple2('South Dakota, South Dakota', 884659),
			_Utils_Tuple2('South Dakota, Aurora', 2751),
			_Utils_Tuple2('South Dakota, Beadle', 18453),
			_Utils_Tuple2('South Dakota, Bennett', 3365),
			_Utils_Tuple2('South Dakota, Bon Homme', 6901),
			_Utils_Tuple2('South Dakota, Brookings', 35077),
			_Utils_Tuple2('South Dakota, Brown', 38839),
			_Utils_Tuple2('South Dakota, Brule', 5297),
			_Utils_Tuple2('South Dakota, Buffalo', 1962),
			_Utils_Tuple2('South Dakota, Butte', 10429),
			_Utils_Tuple2('South Dakota, Campbell', 1376),
			_Utils_Tuple2('South Dakota, Charles Mix', 9292),
			_Utils_Tuple2('South Dakota, Clark', 3736),
			_Utils_Tuple2('South Dakota, Clay', 14070),
			_Utils_Tuple2('South Dakota, Codington', 28009),
			_Utils_Tuple2('South Dakota, Corson', 4086),
			_Utils_Tuple2('South Dakota, Custer', 8972),
			_Utils_Tuple2('South Dakota, Davison', 19775),
			_Utils_Tuple2('South Dakota, Day', 5424),
			_Utils_Tuple2('South Dakota, Deuel', 4351),
			_Utils_Tuple2('South Dakota, Dewey', 5892),
			_Utils_Tuple2('South Dakota, Douglas', 2921),
			_Utils_Tuple2('South Dakota, Edmunds', 3829),
			_Utils_Tuple2('South Dakota, Fall River', 6713),
			_Utils_Tuple2('South Dakota, Faulk', 2299),
			_Utils_Tuple2('South Dakota, Grant', 7052),
			_Utils_Tuple2('South Dakota, Gregory', 4185),
			_Utils_Tuple2('South Dakota, Haakon', 1899),
			_Utils_Tuple2('South Dakota, Hamlin', 6164),
			_Utils_Tuple2('South Dakota, Hand', 3191),
			_Utils_Tuple2('South Dakota, Hanson', 3453),
			_Utils_Tuple2('South Dakota, Harding', 1298),
			_Utils_Tuple2('South Dakota, Hughes', 17526),
			_Utils_Tuple2('South Dakota, Hutchinson', 7291),
			_Utils_Tuple2('South Dakota, Hyde', 1301),
			_Utils_Tuple2('South Dakota, Jackson', 3344),
			_Utils_Tuple2('South Dakota, Jerauld', 2013),
			_Utils_Tuple2('South Dakota, Jones', 903),
			_Utils_Tuple2('South Dakota, Kingsbury', 4939),
			_Utils_Tuple2('South Dakota, Lake', 12797),
			_Utils_Tuple2('South Dakota, Lawrence', 25844),
			_Utils_Tuple2('South Dakota, Lincoln', 61128),
			_Utils_Tuple2('South Dakota, Lyman', 3781),
			_Utils_Tuple2('South Dakota, McCook', 5586),
			_Utils_Tuple2('South Dakota, McPherson', 2379),
			_Utils_Tuple2('South Dakota, Marshall', 4935),
			_Utils_Tuple2('South Dakota, Meade', 28332),
			_Utils_Tuple2('South Dakota, Mellette', 2061),
			_Utils_Tuple2('South Dakota, Miner', 2216),
			_Utils_Tuple2('South Dakota, Minnehaha', 193134),
			_Utils_Tuple2('South Dakota, Moody', 6576),
			_Utils_Tuple2('South Dakota, Oglala Lakota', 14177),
			_Utils_Tuple2('South Dakota, Pennington', 113775),
			_Utils_Tuple2('South Dakota, Perkins', 2865),
			_Utils_Tuple2('South Dakota, Potter', 2153),
			_Utils_Tuple2('South Dakota, Roberts', 10394),
			_Utils_Tuple2('South Dakota, Sanborn', 2344),
			_Utils_Tuple2('South Dakota, Spink', 6376),
			_Utils_Tuple2('South Dakota, Stanley', 3098),
			_Utils_Tuple2('South Dakota, Sully', 1391),
			_Utils_Tuple2('South Dakota, Todd', 10177),
			_Utils_Tuple2('South Dakota, Tripp', 5441),
			_Utils_Tuple2('South Dakota, Turner', 8384),
			_Utils_Tuple2('South Dakota, Union', 15932),
			_Utils_Tuple2('South Dakota, Walworth', 5435),
			_Utils_Tuple2('South Dakota, Yankton', 22814),
			_Utils_Tuple2('South Dakota, Ziebach', 2756),
			_Utils_Tuple2('Tennessee, Tennessee', 6829174),
			_Utils_Tuple2('Tennessee, Anderson', 76978),
			_Utils_Tuple2('Tennessee, Bedford', 49713),
			_Utils_Tuple2('Tennessee, Benton', 16160),
			_Utils_Tuple2('Tennessee, Bledsoe', 15064),
			_Utils_Tuple2('Tennessee, Blount', 133088),
			_Utils_Tuple2('Tennessee, Bradley', 108110),
			_Utils_Tuple2('Tennessee, Campbell', 39842),
			_Utils_Tuple2('Tennessee, Cannon', 14678),
			_Utils_Tuple2('Tennessee, Carroll', 27767),
			_Utils_Tuple2('Tennessee, Carter', 56391),
			_Utils_Tuple2('Tennessee, Cheatham', 40667),
			_Utils_Tuple2('Tennessee, Chester', 17297),
			_Utils_Tuple2('Tennessee, Claiborne', 31959),
			_Utils_Tuple2('Tennessee, Clay', 7615),
			_Utils_Tuple2('Tennessee, Cocke', 36004),
			_Utils_Tuple2('Tennessee, Coffee', 56520),
			_Utils_Tuple2('Tennessee, Crockett', 14230),
			_Utils_Tuple2('Tennessee, Cumberland', 60520),
			_Utils_Tuple2('Tennessee, Davidson', 694144),
			_Utils_Tuple2('Tennessee, Decatur', 11663),
			_Utils_Tuple2('Tennessee, DeKalb', 20490),
			_Utils_Tuple2('Tennessee, Dickson', 53948),
			_Utils_Tuple2('Tennessee, Dyer', 37159),
			_Utils_Tuple2('Tennessee, Fayette', 41133),
			_Utils_Tuple2('Tennessee, Fentress', 18523),
			_Utils_Tuple2('Tennessee, Franklin', 42208),
			_Utils_Tuple2('Tennessee, Gibson', 49133),
			_Utils_Tuple2('Tennessee, Giles', 29464),
			_Utils_Tuple2('Tennessee, Grainger', 23320),
			_Utils_Tuple2('Tennessee, Greene', 69069),
			_Utils_Tuple2('Tennessee, Grundy', 13427),
			_Utils_Tuple2('Tennessee, Hamblen', 64934),
			_Utils_Tuple2('Tennessee, Hamilton', 367804),
			_Utils_Tuple2('Tennessee, Hancock', 6620),
			_Utils_Tuple2('Tennessee, Hardeman', 25050),
			_Utils_Tuple2('Tennessee, Hardin', 25652),
			_Utils_Tuple2('Tennessee, Hawkins', 56786),
			_Utils_Tuple2('Tennessee, Haywood', 17304),
			_Utils_Tuple2('Tennessee, Henderson', 28117),
			_Utils_Tuple2('Tennessee, Henry', 32345),
			_Utils_Tuple2('Tennessee, Hickman', 25178),
			_Utils_Tuple2('Tennessee, Houston', 8201),
			_Utils_Tuple2('Tennessee, Humphreys', 18582),
			_Utils_Tuple2('Tennessee, Jackson', 11786),
			_Utils_Tuple2('Tennessee, Jefferson', 54495),
			_Utils_Tuple2('Tennessee, Johnson', 17788),
			_Utils_Tuple2('Tennessee, Knox', 470313),
			_Utils_Tuple2('Tennessee, Lake', 7016),
			_Utils_Tuple2('Tennessee, Lauderdale', 25633),
			_Utils_Tuple2('Tennessee, Lawrence', 44142),
			_Utils_Tuple2('Tennessee, Lewis', 12268),
			_Utils_Tuple2('Tennessee, Lincoln', 34366),
			_Utils_Tuple2('Tennessee, Loudon', 54068),
			_Utils_Tuple2('Tennessee, McMinn', 53794),
			_Utils_Tuple2('Tennessee, McNairy', 25694),
			_Utils_Tuple2('Tennessee, Macon', 24602),
			_Utils_Tuple2('Tennessee, Madison', 97984),
			_Utils_Tuple2('Tennessee, Marion', 28907),
			_Utils_Tuple2('Tennessee, Marshall', 34375),
			_Utils_Tuple2('Tennessee, Maury', 96387),
			_Utils_Tuple2('Tennessee, Meigs', 12422),
			_Utils_Tuple2('Tennessee, Monroe', 46545),
			_Utils_Tuple2('Tennessee, Montgomery', 208993),
			_Utils_Tuple2('Tennessee, Moore', 6488),
			_Utils_Tuple2('Tennessee, Morgan', 21403),
			_Utils_Tuple2('Tennessee, Obion', 30069),
			_Utils_Tuple2('Tennessee, Overton', 22241),
			_Utils_Tuple2('Tennessee, Perry', 8076),
			_Utils_Tuple2('Tennessee, Pickett', 5048),
			_Utils_Tuple2('Tennessee, Polk', 16832),
			_Utils_Tuple2('Tennessee, Putnam', 80245),
			_Utils_Tuple2('Tennessee, Rhea', 33167),
			_Utils_Tuple2('Tennessee, Roane', 53382),
			_Utils_Tuple2('Tennessee, Robertson', 71813),
			_Utils_Tuple2('Tennessee, Rutherford', 332285),
			_Utils_Tuple2('Tennessee, Scott', 22068),
			_Utils_Tuple2('Tennessee, Sequatchie', 15026),
			_Utils_Tuple2('Tennessee, Sevier', 98250),
			_Utils_Tuple2('Tennessee, Shelby', 937166),
			_Utils_Tuple2('Tennessee, Smith', 20157),
			_Utils_Tuple2('Tennessee, Stewart', 13715),
			_Utils_Tuple2('Tennessee, Sullivan', 158348),
			_Utils_Tuple2('Tennessee, Sumner', 191283),
			_Utils_Tuple2('Tennessee, Tipton', 61599),
			_Utils_Tuple2('Tennessee, Trousdale', 11284),
			_Utils_Tuple2('Tennessee, Unicoi', 17883),
			_Utils_Tuple2('Tennessee, Union', 19972),
			_Utils_Tuple2('Tennessee, Van Buren', 5872),
			_Utils_Tuple2('Tennessee, Warren', 41277),
			_Utils_Tuple2('Tennessee, Washington', 129375),
			_Utils_Tuple2('Tennessee, Wayne', 16673),
			_Utils_Tuple2('Tennessee, Weakley', 33328),
			_Utils_Tuple2('Tennessee, White', 27345),
			_Utils_Tuple2('Tennessee, Williamson', 238412),
			_Utils_Tuple2('Tennessee, Wilson', 144657),
			_Utils_Tuple2('Texas, Texas', 28995881),
			_Utils_Tuple2('Texas, Anderson', 57735),
			_Utils_Tuple2('Texas, Andrews', 18705),
			_Utils_Tuple2('Texas, Angelina', 86715),
			_Utils_Tuple2('Texas, Aransas', 23510),
			_Utils_Tuple2('Texas, Archer', 8553),
			_Utils_Tuple2('Texas, Armstrong', 1887),
			_Utils_Tuple2('Texas, Atascosa', 51153),
			_Utils_Tuple2('Texas, Austin', 30032),
			_Utils_Tuple2('Texas, Bailey', 7000),
			_Utils_Tuple2('Texas, Bandera', 23112),
			_Utils_Tuple2('Texas, Bastrop', 88723),
			_Utils_Tuple2('Texas, Baylor', 3509),
			_Utils_Tuple2('Texas, Bee', 32565),
			_Utils_Tuple2('Texas, Bell', 362924),
			_Utils_Tuple2('Texas, Bexar', 2003554),
			_Utils_Tuple2('Texas, Blanco', 11931),
			_Utils_Tuple2('Texas, Borden', 654),
			_Utils_Tuple2('Texas, Bosque', 18685),
			_Utils_Tuple2('Texas, Bowie', 93245),
			_Utils_Tuple2('Texas, Brazoria', 374264),
			_Utils_Tuple2('Texas, Brazos', 229211),
			_Utils_Tuple2('Texas, Brewster', 9203),
			_Utils_Tuple2('Texas, Briscoe', 1546),
			_Utils_Tuple2('Texas, Brooks', 7093),
			_Utils_Tuple2('Texas, Brown', 37864),
			_Utils_Tuple2('Texas, Burleson', 18443),
			_Utils_Tuple2('Texas, Burnet', 48155),
			_Utils_Tuple2('Texas, Caldwell', 43664),
			_Utils_Tuple2('Texas, Calhoun', 21290),
			_Utils_Tuple2('Texas, Callahan', 13943),
			_Utils_Tuple2('Texas, Cameron', 423163),
			_Utils_Tuple2('Texas, Camp', 13094),
			_Utils_Tuple2('Texas, Carson', 5926),
			_Utils_Tuple2('Texas, Cass', 30026),
			_Utils_Tuple2('Texas, Castro', 7530),
			_Utils_Tuple2('Texas, Chambers', 43837),
			_Utils_Tuple2('Texas, Cherokee', 52646),
			_Utils_Tuple2('Texas, Childress', 7306),
			_Utils_Tuple2('Texas, Clay', 10471),
			_Utils_Tuple2('Texas, Cochran', 2853),
			_Utils_Tuple2('Texas, Coke', 3387),
			_Utils_Tuple2('Texas, Coleman', 8175),
			_Utils_Tuple2('Texas, Collin', 1034730),
			_Utils_Tuple2('Texas, Collingsworth', 2920),
			_Utils_Tuple2('Texas, Colorado', 21493),
			_Utils_Tuple2('Texas, Comal', 156209),
			_Utils_Tuple2('Texas, Comanche', 13635),
			_Utils_Tuple2('Texas, Concho', 2726),
			_Utils_Tuple2('Texas, Cooke', 41257),
			_Utils_Tuple2('Texas, Coryell', 75951),
			_Utils_Tuple2('Texas, Cottle', 1398),
			_Utils_Tuple2('Texas, Crane', 4797),
			_Utils_Tuple2('Texas, Crockett', 3464),
			_Utils_Tuple2('Texas, Crosby', 5737),
			_Utils_Tuple2('Texas, Culberson', 2171),
			_Utils_Tuple2('Texas, Dallam', 7287),
			_Utils_Tuple2('Texas, Dallas', 2635516),
			_Utils_Tuple2('Texas, Dawson', 12728),
			_Utils_Tuple2('Texas, Deaf Smith', 18546),
			_Utils_Tuple2('Texas, Delta', 5331),
			_Utils_Tuple2('Texas, Denton', 887207),
			_Utils_Tuple2('Texas, DeWitt', 20160),
			_Utils_Tuple2('Texas, Dickens', 2211),
			_Utils_Tuple2('Texas, Dimmit', 10124),
			_Utils_Tuple2('Texas, Donley', 3278),
			_Utils_Tuple2('Texas, Duval', 11157),
			_Utils_Tuple2('Texas, Eastland', 18360),
			_Utils_Tuple2('Texas, Ector', 166223),
			_Utils_Tuple2('Texas, Edwards', 1932),
			_Utils_Tuple2('Texas, Ellis', 184826),
			_Utils_Tuple2('Texas, El Paso', 839238),
			_Utils_Tuple2('Texas, Erath', 42698),
			_Utils_Tuple2('Texas, Falls', 17297),
			_Utils_Tuple2('Texas, Fannin', 35514),
			_Utils_Tuple2('Texas, Fayette', 25346),
			_Utils_Tuple2('Texas, Fisher', 3830),
			_Utils_Tuple2('Texas, Floyd', 5712),
			_Utils_Tuple2('Texas, Foard', 1155),
			_Utils_Tuple2('Texas, Fort Bend', 811688),
			_Utils_Tuple2('Texas, Franklin', 10725),
			_Utils_Tuple2('Texas, Freestone', 19717),
			_Utils_Tuple2('Texas, Frio', 20306),
			_Utils_Tuple2('Texas, Gaines', 21492),
			_Utils_Tuple2('Texas, Galveston', 342139),
			_Utils_Tuple2('Texas, Garza', 6229),
			_Utils_Tuple2('Texas, Gillespie', 26988),
			_Utils_Tuple2('Texas, Glasscock', 1409),
			_Utils_Tuple2('Texas, Goliad', 7658),
			_Utils_Tuple2('Texas, Gonzales', 20837),
			_Utils_Tuple2('Texas, Gray', 21886),
			_Utils_Tuple2('Texas, Grayson', 136212),
			_Utils_Tuple2('Texas, Gregg', 123945),
			_Utils_Tuple2('Texas, Grimes', 28880),
			_Utils_Tuple2('Texas, Guadalupe', 166847),
			_Utils_Tuple2('Texas, Hale', 33406),
			_Utils_Tuple2('Texas, Hall', 2964),
			_Utils_Tuple2('Texas, Hamilton', 8461),
			_Utils_Tuple2('Texas, Hansford', 5399),
			_Utils_Tuple2('Texas, Hardeman', 3933),
			_Utils_Tuple2('Texas, Hardin', 57602),
			_Utils_Tuple2('Texas, Harris', 4713325),
			_Utils_Tuple2('Texas, Harrison', 66553),
			_Utils_Tuple2('Texas, Hartley', 5576),
			_Utils_Tuple2('Texas, Haskell', 5658),
			_Utils_Tuple2('Texas, Hays', 230191),
			_Utils_Tuple2('Texas, Hemphill', 3819),
			_Utils_Tuple2('Texas, Henderson', 82737),
			_Utils_Tuple2('Texas, Hidalgo', 868707),
			_Utils_Tuple2('Texas, Hill', 36649),
			_Utils_Tuple2('Texas, Hockley', 23021),
			_Utils_Tuple2('Texas, Hood', 61643),
			_Utils_Tuple2('Texas, Hopkins', 37084),
			_Utils_Tuple2('Texas, Houston', 22968),
			_Utils_Tuple2('Texas, Howard', 36664),
			_Utils_Tuple2('Texas, Hudspeth', 4886),
			_Utils_Tuple2('Texas, Hunt', 98594),
			_Utils_Tuple2('Texas, Hutchinson', 20938),
			_Utils_Tuple2('Texas, Irion', 1536),
			_Utils_Tuple2('Texas, Jack', 8935),
			_Utils_Tuple2('Texas, Jackson', 14760),
			_Utils_Tuple2('Texas, Jasper', 35529),
			_Utils_Tuple2('Texas, Jeff Davis', 2274),
			_Utils_Tuple2('Texas, Jefferson', 251565),
			_Utils_Tuple2('Texas, Jim Hogg', 5200),
			_Utils_Tuple2('Texas, Jim Wells', 40482),
			_Utils_Tuple2('Texas, Johnson', 175817),
			_Utils_Tuple2('Texas, Jones', 20083),
			_Utils_Tuple2('Texas, Karnes', 15601),
			_Utils_Tuple2('Texas, Kaufman', 136154),
			_Utils_Tuple2('Texas, Kendall', 47431),
			_Utils_Tuple2('Texas, Kenedy', 404),
			_Utils_Tuple2('Texas, Kent', 762),
			_Utils_Tuple2('Texas, Kerr', 52600),
			_Utils_Tuple2('Texas, Kimble', 4337),
			_Utils_Tuple2('Texas, King', 272),
			_Utils_Tuple2('Texas, Kinney', 3667),
			_Utils_Tuple2('Texas, Kleberg', 30680),
			_Utils_Tuple2('Texas, Knox', 3664),
			_Utils_Tuple2('Texas, Lamar', 49859),
			_Utils_Tuple2('Texas, Lamb', 12893),
			_Utils_Tuple2('Texas, Lampasas', 21428),
			_Utils_Tuple2('Texas, La Salle', 7520),
			_Utils_Tuple2('Texas, Lavaca', 20154),
			_Utils_Tuple2('Texas, Lee', 17239),
			_Utils_Tuple2('Texas, Leon', 17404),
			_Utils_Tuple2('Texas, Liberty', 88219),
			_Utils_Tuple2('Texas, Limestone', 23437),
			_Utils_Tuple2('Texas, Lipscomb', 3233),
			_Utils_Tuple2('Texas, Live Oak', 12207),
			_Utils_Tuple2('Texas, Llano', 21795),
			_Utils_Tuple2('Texas, Loving', 169),
			_Utils_Tuple2('Texas, Lubbock', 310569),
			_Utils_Tuple2('Texas, Lynn', 5951),
			_Utils_Tuple2('Texas, McCulloch', 7984),
			_Utils_Tuple2('Texas, McLennan', 256623),
			_Utils_Tuple2('Texas, McMullen', 743),
			_Utils_Tuple2('Texas, Madison', 14284),
			_Utils_Tuple2('Texas, Marion', 9854),
			_Utils_Tuple2('Texas, Martin', 5771),
			_Utils_Tuple2('Texas, Mason', 4274),
			_Utils_Tuple2('Texas, Matagorda', 36643),
			_Utils_Tuple2('Texas, Maverick', 58722),
			_Utils_Tuple2('Texas, Medina', 51584),
			_Utils_Tuple2('Texas, Menard', 2138),
			_Utils_Tuple2('Texas, Midland', 176832),
			_Utils_Tuple2('Texas, Milam', 24823),
			_Utils_Tuple2('Texas, Mills', 4873),
			_Utils_Tuple2('Texas, Mitchell', 8545),
			_Utils_Tuple2('Texas, Montague', 19818),
			_Utils_Tuple2('Texas, Montgomery', 607391),
			_Utils_Tuple2('Texas, Moore', 20940),
			_Utils_Tuple2('Texas, Morris', 12388),
			_Utils_Tuple2('Texas, Motley', 1200),
			_Utils_Tuple2('Texas, Nacogdoches', 65204),
			_Utils_Tuple2('Texas, Navarro', 50113),
			_Utils_Tuple2('Texas, Newton', 13595),
			_Utils_Tuple2('Texas, Nolan', 14714),
			_Utils_Tuple2('Texas, Nueces', 362294),
			_Utils_Tuple2('Texas, Ochiltree', 9836),
			_Utils_Tuple2('Texas, Oldham', 2112),
			_Utils_Tuple2('Texas, Orange', 83396),
			_Utils_Tuple2('Texas, Palo Pinto', 29189),
			_Utils_Tuple2('Texas, Panola', 23194),
			_Utils_Tuple2('Texas, Parker', 142878),
			_Utils_Tuple2('Texas, Parmer', 9605),
			_Utils_Tuple2('Texas, Pecos', 15823),
			_Utils_Tuple2('Texas, Polk', 51353),
			_Utils_Tuple2('Texas, Potter', 117415),
			_Utils_Tuple2('Texas, Presidio', 6704),
			_Utils_Tuple2('Texas, Rains', 12514),
			_Utils_Tuple2('Texas, Randall', 137713),
			_Utils_Tuple2('Texas, Reagan', 3849),
			_Utils_Tuple2('Texas, Real', 3452),
			_Utils_Tuple2('Texas, Red River', 12023),
			_Utils_Tuple2('Texas, Reeves', 15976),
			_Utils_Tuple2('Texas, Refugio', 6948),
			_Utils_Tuple2('Texas, Roberts', 854),
			_Utils_Tuple2('Texas, Robertson', 17074),
			_Utils_Tuple2('Texas, Rockwall', 104915),
			_Utils_Tuple2('Texas, Runnels', 10264),
			_Utils_Tuple2('Texas, Rusk', 54406),
			_Utils_Tuple2('Texas, Sabine', 10542),
			_Utils_Tuple2('Texas, San Augustine', 8237),
			_Utils_Tuple2('Texas, San Jacinto', 28859),
			_Utils_Tuple2('Texas, San Patricio', 66730),
			_Utils_Tuple2('Texas, San Saba', 6055),
			_Utils_Tuple2('Texas, Schleicher', 2793),
			_Utils_Tuple2('Texas, Scurry', 16703),
			_Utils_Tuple2('Texas, Shackelford', 3265),
			_Utils_Tuple2('Texas, Shelby', 25274),
			_Utils_Tuple2('Texas, Sherman', 3022),
			_Utils_Tuple2('Texas, Smith', 232751),
			_Utils_Tuple2('Texas, Somervell', 9128),
			_Utils_Tuple2('Texas, Starr', 64633),
			_Utils_Tuple2('Texas, Stephens', 9366),
			_Utils_Tuple2('Texas, Sterling', 1291),
			_Utils_Tuple2('Texas, Stonewall', 1350),
			_Utils_Tuple2('Texas, Sutton', 3776),
			_Utils_Tuple2('Texas, Swisher', 7397),
			_Utils_Tuple2('Texas, Tarrant', 2102515),
			_Utils_Tuple2('Texas, Taylor', 138034),
			_Utils_Tuple2('Texas, Terrell', 776),
			_Utils_Tuple2('Texas, Terry', 12337),
			_Utils_Tuple2('Texas, Throckmorton', 1501),
			_Utils_Tuple2('Texas, Titus', 32750),
			_Utils_Tuple2('Texas, Tom Green', 119200),
			_Utils_Tuple2('Texas, Travis', 1273954),
			_Utils_Tuple2('Texas, Trinity', 14651),
			_Utils_Tuple2('Texas, Tyler', 21672),
			_Utils_Tuple2('Texas, Upshur', 41753),
			_Utils_Tuple2('Texas, Upton', 3657),
			_Utils_Tuple2('Texas, Uvalde', 26741),
			_Utils_Tuple2('Texas, Val Verde', 49025),
			_Utils_Tuple2('Texas, Van Zandt', 56590),
			_Utils_Tuple2('Texas, Victoria', 92084),
			_Utils_Tuple2('Texas, Walker', 72971),
			_Utils_Tuple2('Texas, Waller', 55246),
			_Utils_Tuple2('Texas, Ward', 11998),
			_Utils_Tuple2('Texas, Washington', 35882),
			_Utils_Tuple2('Texas, Webb', 276652),
			_Utils_Tuple2('Texas, Wharton', 41556),
			_Utils_Tuple2('Texas, Wheeler', 5056),
			_Utils_Tuple2('Texas, Wichita', 132230),
			_Utils_Tuple2('Texas, Wilbarger', 12769),
			_Utils_Tuple2('Texas, Willacy', 21358),
			_Utils_Tuple2('Texas, Williamson', 590551),
			_Utils_Tuple2('Texas, Wilson', 51070),
			_Utils_Tuple2('Texas, Winkler', 8010),
			_Utils_Tuple2('Texas, Wise', 69984),
			_Utils_Tuple2('Texas, Wood', 45539),
			_Utils_Tuple2('Texas, Yoakum', 8713),
			_Utils_Tuple2('Texas, Young', 18010),
			_Utils_Tuple2('Texas, Zapata', 14179),
			_Utils_Tuple2('Texas, Zavala', 11840),
			_Utils_Tuple2('Utah, Utah', 3205958),
			_Utils_Tuple2('Utah, Beaver', 6710),
			_Utils_Tuple2('Utah, Box Elder', 56046),
			_Utils_Tuple2('Utah, Cache', 128289),
			_Utils_Tuple2('Utah, Carbon', 20463),
			_Utils_Tuple2('Utah, Daggett', 950),
			_Utils_Tuple2('Utah, Davis', 355481),
			_Utils_Tuple2('Utah, Duchesne', 19938),
			_Utils_Tuple2('Utah, Emery', 10012),
			_Utils_Tuple2('Utah, Garfield', 5051),
			_Utils_Tuple2('Utah, Grand', 9754),
			_Utils_Tuple2('Utah, Iron', 54839),
			_Utils_Tuple2('Utah, Juab', 12017),
			_Utils_Tuple2('Utah, Kane', 7886),
			_Utils_Tuple2('Utah, Millard', 13188),
			_Utils_Tuple2('Utah, Morgan', 12124),
			_Utils_Tuple2('Utah, Piute', 1479),
			_Utils_Tuple2('Utah, Rich', 2483),
			_Utils_Tuple2('Utah, Salt Lake', 1160437),
			_Utils_Tuple2('Utah, San Juan', 15308),
			_Utils_Tuple2('Utah, Sanpete', 30939),
			_Utils_Tuple2('Utah, Sevier', 21620),
			_Utils_Tuple2('Utah, Summit', 42145),
			_Utils_Tuple2('Utah, Tooele', 72259),
			_Utils_Tuple2('Utah, Uintah', 35734),
			_Utils_Tuple2('Utah, Utah', 636235),
			_Utils_Tuple2('Utah, Wasatch', 34091),
			_Utils_Tuple2('Utah, Washington', 177556),
			_Utils_Tuple2('Utah, Wayne', 2711),
			_Utils_Tuple2('Utah, Weber', 260213),
			_Utils_Tuple2('Vermont, Vermont', 623989),
			_Utils_Tuple2('Vermont, Addison', 36777),
			_Utils_Tuple2('Vermont, Bennington', 35470),
			_Utils_Tuple2('Vermont, Caledonia', 29993),
			_Utils_Tuple2('Vermont, Chittenden', 163774),
			_Utils_Tuple2('Vermont, Essex', 6163),
			_Utils_Tuple2('Vermont, Franklin', 49402),
			_Utils_Tuple2('Vermont, Grand Isle', 7235),
			_Utils_Tuple2('Vermont, Lamoille', 25362),
			_Utils_Tuple2('Vermont, Orange', 28892),
			_Utils_Tuple2('Vermont, Orleans', 27037),
			_Utils_Tuple2('Vermont, Rutland', 58191),
			_Utils_Tuple2('Vermont, Washington', 58409),
			_Utils_Tuple2('Vermont, Windham', 42222),
			_Utils_Tuple2('Vermont, Windsor', 55062),
			_Utils_Tuple2('Virginia, Virginia', 8535519),
			_Utils_Tuple2('Virginia, Accomack', 32316),
			_Utils_Tuple2('Virginia, Albemarle', 109330),
			_Utils_Tuple2('Virginia, Alleghany', 14860),
			_Utils_Tuple2('Virginia, Amelia', 13145),
			_Utils_Tuple2('Virginia, Amherst', 31605),
			_Utils_Tuple2('Virginia, Appomattox', 15911),
			_Utils_Tuple2('Virginia, Arlington', 236842),
			_Utils_Tuple2('Virginia, Augusta', 75558),
			_Utils_Tuple2('Virginia, Bath', 4147),
			_Utils_Tuple2('Virginia, Bedford', 78997),
			_Utils_Tuple2('Virginia, Bland', 6280),
			_Utils_Tuple2('Virginia, Botetourt', 33419),
			_Utils_Tuple2('Virginia, Brunswick', 16231),
			_Utils_Tuple2('Virginia, Buchanan', 21004),
			_Utils_Tuple2('Virginia, Buckingham', 17148),
			_Utils_Tuple2('Virginia, Campbell', 54885),
			_Utils_Tuple2('Virginia, Caroline', 30725),
			_Utils_Tuple2('Virginia, Carroll', 29791),
			_Utils_Tuple2('Virginia, Charles City', 6963),
			_Utils_Tuple2('Virginia, Charlotte', 11880),
			_Utils_Tuple2('Virginia, Chesterfield', 352802),
			_Utils_Tuple2('Virginia, Clarke', 14619),
			_Utils_Tuple2('Virginia, Craig', 5131),
			_Utils_Tuple2('Virginia, Culpeper', 52605),
			_Utils_Tuple2('Virginia, Cumberland', 9932),
			_Utils_Tuple2('Virginia, Dickenson', 14318),
			_Utils_Tuple2('Virginia, Dinwiddie', 28544),
			_Utils_Tuple2('Virginia, Essex', 10953),
			_Utils_Tuple2('Virginia, Fairfax', 1147532),
			_Utils_Tuple2('Virginia, Fauquier', 71222),
			_Utils_Tuple2('Virginia, Floyd', 15749),
			_Utils_Tuple2('Virginia, Fluvanna', 27270),
			_Utils_Tuple2('Virginia, Franklin', 56042),
			_Utils_Tuple2('Virginia, Frederick', 89313),
			_Utils_Tuple2('Virginia, Giles', 16720),
			_Utils_Tuple2('Virginia, Gloucester', 37348),
			_Utils_Tuple2('Virginia, Goochland', 23753),
			_Utils_Tuple2('Virginia, Grayson', 15550),
			_Utils_Tuple2('Virginia, Greene', 19819),
			_Utils_Tuple2('Virginia, Greensville', 11336),
			_Utils_Tuple2('Virginia, Halifax', 33911),
			_Utils_Tuple2('Virginia, Hanover', 107766),
			_Utils_Tuple2('Virginia, Henrico', 330818),
			_Utils_Tuple2('Virginia, Henry', 50557),
			_Utils_Tuple2('Virginia, Highland', 2190),
			_Utils_Tuple2('Virginia, Isle of Wight', 37109),
			_Utils_Tuple2('Virginia, James City', 76523),
			_Utils_Tuple2('Virginia, King and Queen', 7025),
			_Utils_Tuple2('Virginia, King George', 26836),
			_Utils_Tuple2('Virginia, King William', 17148),
			_Utils_Tuple2('Virginia, Lancaster', 10603),
			_Utils_Tuple2('Virginia, Lee', 23423),
			_Utils_Tuple2('Virginia, Loudoun', 413538),
			_Utils_Tuple2('Virginia, Louisa', 37591),
			_Utils_Tuple2('Virginia, Lunenburg', 12196),
			_Utils_Tuple2('Virginia, Madison', 13261),
			_Utils_Tuple2('Virginia, Mathews', 8834),
			_Utils_Tuple2('Virginia, Mecklenburg', 30587),
			_Utils_Tuple2('Virginia, Middlesex', 10582),
			_Utils_Tuple2('Virginia, Montgomery', 98535),
			_Utils_Tuple2('Virginia, Nelson', 14930),
			_Utils_Tuple2('Virginia, New Kent', 23091),
			_Utils_Tuple2('Virginia, Northampton', 11710),
			_Utils_Tuple2('Virginia, Northumberland', 12095),
			_Utils_Tuple2('Virginia, Nottoway', 15232),
			_Utils_Tuple2('Virginia, Orange', 37051),
			_Utils_Tuple2('Virginia, Page', 23902),
			_Utils_Tuple2('Virginia, Patrick', 17608),
			_Utils_Tuple2('Virginia, Pittsylvania', 60354),
			_Utils_Tuple2('Virginia, Powhatan', 29652),
			_Utils_Tuple2('Virginia, Prince Edward', 22802),
			_Utils_Tuple2('Virginia, Prince George', 38353),
			_Utils_Tuple2('Virginia, Prince William', 470335),
			_Utils_Tuple2('Virginia, Pulaski', 34027),
			_Utils_Tuple2('Virginia, Rappahannock', 7370),
			_Utils_Tuple2('Virginia, Richmond', 9023),
			_Utils_Tuple2('Virginia, Roanoke', 94186),
			_Utils_Tuple2('Virginia, Rockbridge', 22573),
			_Utils_Tuple2('Virginia, Rockingham', 81948),
			_Utils_Tuple2('Virginia, Russell', 26586),
			_Utils_Tuple2('Virginia, Scott', 21566),
			_Utils_Tuple2('Virginia, Shenandoah', 43616),
			_Utils_Tuple2('Virginia, Smyth', 30104),
			_Utils_Tuple2('Virginia, Southampton', 17631),
			_Utils_Tuple2('Virginia, Spotsylvania', 136215),
			_Utils_Tuple2('Virginia, Stafford', 152882),
			_Utils_Tuple2('Virginia, Surry', 6422),
			_Utils_Tuple2('Virginia, Sussex', 11159),
			_Utils_Tuple2('Virginia, Tazewell', 40595),
			_Utils_Tuple2('Virginia, Warren', 40164),
			_Utils_Tuple2('Virginia, Washington', 53740),
			_Utils_Tuple2('Virginia, Westmoreland', 18015),
			_Utils_Tuple2('Virginia, Wise', 37383),
			_Utils_Tuple2('Virginia, Wythe', 28684),
			_Utils_Tuple2('Virginia, York', 68280),
			_Utils_Tuple2('Virginia, Alexandria', 159428),
			_Utils_Tuple2('Virginia, Bristol', 16762),
			_Utils_Tuple2('Virginia, Buena Vista', 6478),
			_Utils_Tuple2('Virginia, Charlottesville', 47266),
			_Utils_Tuple2('Virginia, Chesapeake', 244835),
			_Utils_Tuple2('Virginia, Colonial Heights', 17370),
			_Utils_Tuple2('Virginia, Covington', 5538),
			_Utils_Tuple2('Virginia, Danville', 40044),
			_Utils_Tuple2('Virginia, Emporia', 5346),
			_Utils_Tuple2('Virginia, Fairfax', 24019),
			_Utils_Tuple2('Virginia, Falls Church', 14617),
			_Utils_Tuple2('Virginia, Franklin', 7967),
			_Utils_Tuple2('Virginia, Fredericksburg', 29036),
			_Utils_Tuple2('Virginia, Galax', 6347),
			_Utils_Tuple2('Virginia, Hampton', 134510),
			_Utils_Tuple2('Virginia, Harrisonburg', 53016),
			_Utils_Tuple2('Virginia, Hopewell', 22529),
			_Utils_Tuple2('Virginia, Lexington', 7446),
			_Utils_Tuple2('Virginia, Lynchburg', 82168),
			_Utils_Tuple2('Virginia, Manassas', 41085),
			_Utils_Tuple2('Virginia, Manassas Park', 17478),
			_Utils_Tuple2('Virginia, Martinsville', 12554),
			_Utils_Tuple2('Virginia, Newport News', 179225),
			_Utils_Tuple2('Virginia, Norfolk', 242742),
			_Utils_Tuple2('Virginia, Norton', 3981),
			_Utils_Tuple2('Virginia, Petersburg', 31346),
			_Utils_Tuple2('Virginia, Poquoson', 12271),
			_Utils_Tuple2('Virginia, Portsmouth', 94398),
			_Utils_Tuple2('Virginia, Radford', 18249),
			_Utils_Tuple2('Virginia, Richmond', 230436),
			_Utils_Tuple2('Virginia, Roanoke', 99143),
			_Utils_Tuple2('Virginia, Salem', 25301),
			_Utils_Tuple2('Virginia, Staunton', 24932),
			_Utils_Tuple2('Virginia, Suffolk', 92108),
			_Utils_Tuple2('Virginia, Virginia Beach', 449974),
			_Utils_Tuple2('Virginia, Waynesboro', 22630),
			_Utils_Tuple2('Virginia, Williamsburg', 14954),
			_Utils_Tuple2('Virginia, Winchester', 28078),
			_Utils_Tuple2('Washington, Washington', 7614893),
			_Utils_Tuple2('Washington, Adams', 19983),
			_Utils_Tuple2('Washington, Asotin', 22582),
			_Utils_Tuple2('Washington, Benton', 204390),
			_Utils_Tuple2('Washington, Chelan', 77200),
			_Utils_Tuple2('Washington, Clallam', 77331),
			_Utils_Tuple2('Washington, Clark', 488241),
			_Utils_Tuple2('Washington, Columbia', 3985),
			_Utils_Tuple2('Washington, Cowlitz', 110593),
			_Utils_Tuple2('Washington, Douglas', 43429),
			_Utils_Tuple2('Washington, Ferry', 7627),
			_Utils_Tuple2('Washington, Franklin', 95222),
			_Utils_Tuple2('Washington, Garfield', 2225),
			_Utils_Tuple2('Washington, Grant', 97733),
			_Utils_Tuple2('Washington, Grays Harbor', 75061),
			_Utils_Tuple2('Washington, Island', 85141),
			_Utils_Tuple2('Washington, Jefferson', 32221),
			_Utils_Tuple2('Washington, King', 2252782),
			_Utils_Tuple2('Washington, Kitsap', 271473),
			_Utils_Tuple2('Washington, Kittitas', 47935),
			_Utils_Tuple2('Washington, Klickitat', 22425),
			_Utils_Tuple2('Washington, Lewis', 80707),
			_Utils_Tuple2('Washington, Lincoln', 10939),
			_Utils_Tuple2('Washington, Mason', 66768),
			_Utils_Tuple2('Washington, Okanogan', 42243),
			_Utils_Tuple2('Washington, Pacific', 22471),
			_Utils_Tuple2('Washington, Pend Oreille', 13724),
			_Utils_Tuple2('Washington, Pierce', 904980),
			_Utils_Tuple2('Washington, San Juan', 17582),
			_Utils_Tuple2('Washington, Skagit', 129205),
			_Utils_Tuple2('Washington, Skamania', 12083),
			_Utils_Tuple2('Washington, Snohomish', 822083),
			_Utils_Tuple2('Washington, Spokane', 522798),
			_Utils_Tuple2('Washington, Stevens', 45723),
			_Utils_Tuple2('Washington, Thurston', 290536),
			_Utils_Tuple2('Washington, Wahkiakum', 4488),
			_Utils_Tuple2('Washington, Walla Walla', 60760),
			_Utils_Tuple2('Washington, Whatcom', 229247),
			_Utils_Tuple2('Washington, Whitman', 50104),
			_Utils_Tuple2('Washington, Yakima', 250873),
			_Utils_Tuple2('West Virginia, West Virginia', 1792147),
			_Utils_Tuple2('West Virginia, Barbour', 16441),
			_Utils_Tuple2('West Virginia, Berkeley', 119171),
			_Utils_Tuple2('West Virginia, Boone', 21457),
			_Utils_Tuple2('West Virginia, Braxton', 13957),
			_Utils_Tuple2('West Virginia, Brooke', 21939),
			_Utils_Tuple2('West Virginia, Cabell', 91945),
			_Utils_Tuple2('West Virginia, Calhoun', 7109),
			_Utils_Tuple2('West Virginia, Clay', 8508),
			_Utils_Tuple2('West Virginia, Doddridge', 8448),
			_Utils_Tuple2('West Virginia, Fayette', 42406),
			_Utils_Tuple2('West Virginia, Gilmer', 7823),
			_Utils_Tuple2('West Virginia, Grant', 11568),
			_Utils_Tuple2('West Virginia, Greenbrier', 34662),
			_Utils_Tuple2('West Virginia, Hampshire', 23175),
			_Utils_Tuple2('West Virginia, Hancock', 28810),
			_Utils_Tuple2('West Virginia, Hardy', 13776),
			_Utils_Tuple2('West Virginia, Harrison', 67256),
			_Utils_Tuple2('West Virginia, Jackson', 28576),
			_Utils_Tuple2('West Virginia, Jefferson', 57146),
			_Utils_Tuple2('West Virginia, Kanawha', 178124),
			_Utils_Tuple2('West Virginia, Lewis', 15907),
			_Utils_Tuple2('West Virginia, Lincoln', 20409),
			_Utils_Tuple2('West Virginia, Logan', 32019),
			_Utils_Tuple2('West Virginia, McDowell', 17624),
			_Utils_Tuple2('West Virginia, Marion', 56072),
			_Utils_Tuple2('West Virginia, Marshall', 30531),
			_Utils_Tuple2('West Virginia, Mason', 26516),
			_Utils_Tuple2('West Virginia, Mercer', 58758),
			_Utils_Tuple2('West Virginia, Mineral', 26868),
			_Utils_Tuple2('West Virginia, Mingo', 23424),
			_Utils_Tuple2('West Virginia, Monongalia', 105612),
			_Utils_Tuple2('West Virginia, Monroe', 13275),
			_Utils_Tuple2('West Virginia, Morgan', 17884),
			_Utils_Tuple2('West Virginia, Nicholas', 24496),
			_Utils_Tuple2('West Virginia, Ohio', 41411),
			_Utils_Tuple2('West Virginia, Pendleton', 6969),
			_Utils_Tuple2('West Virginia, Pleasants', 7460),
			_Utils_Tuple2('West Virginia, Pocahontas', 8247),
			_Utils_Tuple2('West Virginia, Preston', 33432),
			_Utils_Tuple2('West Virginia, Putnam', 56450),
			_Utils_Tuple2('West Virginia, Raleigh', 73361),
			_Utils_Tuple2('West Virginia, Randolph', 28695),
			_Utils_Tuple2('West Virginia, Ritchie', 9554),
			_Utils_Tuple2('West Virginia, Roane', 13688),
			_Utils_Tuple2('West Virginia, Summers', 12573),
			_Utils_Tuple2('West Virginia, Taylor', 16695),
			_Utils_Tuple2('West Virginia, Tucker', 6839),
			_Utils_Tuple2('West Virginia, Tyler', 8591),
			_Utils_Tuple2('West Virginia, Upshur', 24176),
			_Utils_Tuple2('West Virginia, Wayne', 39402),
			_Utils_Tuple2('West Virginia, Webster', 8114),
			_Utils_Tuple2('West Virginia, Wetzel', 15065),
			_Utils_Tuple2('West Virginia, Wirt', 5821),
			_Utils_Tuple2('West Virginia, Wood', 83518),
			_Utils_Tuple2('West Virginia, Wyoming', 20394),
			_Utils_Tuple2('Wisconsin, Wisconsin', 5822434),
			_Utils_Tuple2('Wisconsin, Adams', 20220),
			_Utils_Tuple2('Wisconsin, Ashland', 15562),
			_Utils_Tuple2('Wisconsin, Barron', 45244),
			_Utils_Tuple2('Wisconsin, Bayfield', 15036),
			_Utils_Tuple2('Wisconsin, Brown', 264542),
			_Utils_Tuple2('Wisconsin, Buffalo', 13031),
			_Utils_Tuple2('Wisconsin, Burnett', 15414),
			_Utils_Tuple2('Wisconsin, Calumet', 50089),
			_Utils_Tuple2('Wisconsin, Chippewa', 64658),
			_Utils_Tuple2('Wisconsin, Clark', 34774),
			_Utils_Tuple2('Wisconsin, Columbia', 57532),
			_Utils_Tuple2('Wisconsin, Crawford', 16131),
			_Utils_Tuple2('Wisconsin, Dane', 546695),
			_Utils_Tuple2('Wisconsin, Dodge', 87839),
			_Utils_Tuple2('Wisconsin, Door', 27668),
			_Utils_Tuple2('Wisconsin, Douglas', 43150),
			_Utils_Tuple2('Wisconsin, Dunn', 45368),
			_Utils_Tuple2('Wisconsin, Eau Claire', 104646),
			_Utils_Tuple2('Wisconsin, Florence', 4295),
			_Utils_Tuple2('Wisconsin, Fond du Lac', 103403),
			_Utils_Tuple2('Wisconsin, Forest', 9004),
			_Utils_Tuple2('Wisconsin, Grant', 51439),
			_Utils_Tuple2('Wisconsin, Green', 36960),
			_Utils_Tuple2('Wisconsin, Green Lake', 18913),
			_Utils_Tuple2('Wisconsin, Iowa', 23678),
			_Utils_Tuple2('Wisconsin, Iron', 5687),
			_Utils_Tuple2('Wisconsin, Jackson', 20643),
			_Utils_Tuple2('Wisconsin, Jefferson', 84769),
			_Utils_Tuple2('Wisconsin, Juneau', 26687),
			_Utils_Tuple2('Wisconsin, Kenosha', 169561),
			_Utils_Tuple2('Wisconsin, Kewaunee', 20434),
			_Utils_Tuple2('Wisconsin, La Crosse', 118016),
			_Utils_Tuple2('Wisconsin, Lafayette', 16665),
			_Utils_Tuple2('Wisconsin, Langlade', 19189),
			_Utils_Tuple2('Wisconsin, Lincoln', 27593),
			_Utils_Tuple2('Wisconsin, Manitowoc', 78981),
			_Utils_Tuple2('Wisconsin, Marathon', 135692),
			_Utils_Tuple2('Wisconsin, Marinette', 40350),
			_Utils_Tuple2('Wisconsin, Marquette', 15574),
			_Utils_Tuple2('Wisconsin, Menominee', 4556),
			_Utils_Tuple2('Wisconsin, Milwaukee', 945726),
			_Utils_Tuple2('Wisconsin, Monroe', 46253),
			_Utils_Tuple2('Wisconsin, Oconto', 37930),
			_Utils_Tuple2('Wisconsin, Oneida', 35595),
			_Utils_Tuple2('Wisconsin, Outagamie', 187885),
			_Utils_Tuple2('Wisconsin, Ozaukee', 89221),
			_Utils_Tuple2('Wisconsin, Pepin', 7287),
			_Utils_Tuple2('Wisconsin, Pierce', 42754),
			_Utils_Tuple2('Wisconsin, Polk', 43783),
			_Utils_Tuple2('Wisconsin, Portage', 70772),
			_Utils_Tuple2('Wisconsin, Price', 13351),
			_Utils_Tuple2('Wisconsin, Racine', 196311),
			_Utils_Tuple2('Wisconsin, Richland', 17252),
			_Utils_Tuple2('Wisconsin, Rock', 163354),
			_Utils_Tuple2('Wisconsin, Rusk', 14178),
			_Utils_Tuple2('Wisconsin, St. Croix', 90687),
			_Utils_Tuple2('Wisconsin, Sauk', 64442),
			_Utils_Tuple2('Wisconsin, Sawyer', 16558),
			_Utils_Tuple2('Wisconsin, Shawano', 40899),
			_Utils_Tuple2('Wisconsin, Sheboygan', 115340),
			_Utils_Tuple2('Wisconsin, Taylor', 20343),
			_Utils_Tuple2('Wisconsin, Trempealeau', 29649),
			_Utils_Tuple2('Wisconsin, Vernon', 30822),
			_Utils_Tuple2('Wisconsin, Vilas', 22195),
			_Utils_Tuple2('Wisconsin, Walworth', 103868),
			_Utils_Tuple2('Wisconsin, Washburn', 15720),
			_Utils_Tuple2('Wisconsin, Washington', 136034),
			_Utils_Tuple2('Wisconsin, Waukesha', 404198),
			_Utils_Tuple2('Wisconsin, Waupaca', 50990),
			_Utils_Tuple2('Wisconsin, Waushara', 24443),
			_Utils_Tuple2('Wisconsin, Winnebago', 171907),
			_Utils_Tuple2('Wisconsin, Wood', 72999),
			_Utils_Tuple2('Wyoming, Wyoming', 578759),
			_Utils_Tuple2('Wyoming, Albany', 38880),
			_Utils_Tuple2('Wyoming, Big Horn', 11790),
			_Utils_Tuple2('Wyoming, Campbell', 46341),
			_Utils_Tuple2('Wyoming, Carbon', 14800),
			_Utils_Tuple2('Wyoming, Converse', 13822),
			_Utils_Tuple2('Wyoming, Crook', 7584),
			_Utils_Tuple2('Wyoming, Fremont', 39261),
			_Utils_Tuple2('Wyoming, Goshen', 13211),
			_Utils_Tuple2('Wyoming, Hot Springs', 4413),
			_Utils_Tuple2('Wyoming, Johnson', 8445),
			_Utils_Tuple2('Wyoming, Laramie', 99500),
			_Utils_Tuple2('Wyoming, Lincoln', 19830),
			_Utils_Tuple2('Wyoming, Natrona', 79858),
			_Utils_Tuple2('Wyoming, Niobrara', 2356),
			_Utils_Tuple2('Wyoming, Park', 29194),
			_Utils_Tuple2('Wyoming, Platte', 8393),
			_Utils_Tuple2('Wyoming, Sheridan', 30485),
			_Utils_Tuple2('Wyoming, Sublette', 9831),
			_Utils_Tuple2('Wyoming, Sweetwater', 42343),
			_Utils_Tuple2('Wyoming, Teton', 23464),
			_Utils_Tuple2('Wyoming, Uinta', 20226),
			_Utils_Tuple2('Wyoming, Washakie', 7805),
			_Utils_Tuple2('Wyoming, Weston', 6927),
			_Utils_Tuple2('Puerto Rico, Adjuntas', 17363),
			_Utils_Tuple2('Puerto Rico, Aguada', 36694),
			_Utils_Tuple2('Puerto Rico, Aguadilla', 50265),
			_Utils_Tuple2('Puerto Rico, Aguas Buenas', 24814),
			_Utils_Tuple2('Puerto Rico, Aibonito', 22108),
			_Utils_Tuple2('Puerto Rico, Añasco', 26161),
			_Utils_Tuple2('Puerto Rico, Arecibo', 81966),
			_Utils_Tuple2('Puerto Rico, Arroyo', 17238),
			_Utils_Tuple2('Puerto Rico, Barceloneta', 23727),
			_Utils_Tuple2('Puerto Rico, Barranquitas', 27725),
			_Utils_Tuple2('Puerto Rico, Bayamón', 169269),
			_Utils_Tuple2('Puerto Rico, Cabo Rojo', 47515),
			_Utils_Tuple2('Puerto Rico, Caguas', 124606),
			_Utils_Tuple2('Puerto Rico, Camuy', 30504),
			_Utils_Tuple2('Puerto Rico, Canóvanas', 44674),
			_Utils_Tuple2('Puerto Rico, Carolina', 146984),
			_Utils_Tuple2('Puerto Rico, Cataño', 23121),
			_Utils_Tuple2('Puerto Rico, Cayey', 42409),
			_Utils_Tuple2('Puerto Rico, Ceiba', 10904),
			_Utils_Tuple2('Puerto Rico, Ciales', 15808),
			_Utils_Tuple2('Puerto Rico, Cidra', 38307),
			_Utils_Tuple2('Puerto Rico, Coamo', 38336),
			_Utils_Tuple2('Puerto Rico, Comerío', 18648),
			_Utils_Tuple2('Puerto Rico, Corozal', 32293),
			_Utils_Tuple2('Puerto Rico, Culebra', 1714),
			_Utils_Tuple2('Puerto Rico, Dorado', 36141),
			_Utils_Tuple2('Puerto Rico, Fajardo', 29454),
			_Utils_Tuple2('Puerto Rico, Florida', 11317),
			_Utils_Tuple2('Puerto Rico, Guánica', 15383),
			_Utils_Tuple2('Puerto Rico, Guayama', 39465),
			_Utils_Tuple2('Puerto Rico, Guayanilla', 17623),
			_Utils_Tuple2('Puerto Rico, Guaynabo', 83728),
			_Utils_Tuple2('Puerto Rico, Gurabo', 47093),
			_Utils_Tuple2('Puerto Rico, Hatillo', 39218),
			_Utils_Tuple2('Puerto Rico, Hormigueros', 15518),
			_Utils_Tuple2('Puerto Rico, Humacao', 50653),
			_Utils_Tuple2('Puerto Rico, Isabela', 40423),
			_Utils_Tuple2('Puerto Rico, Jayuya', 13891),
			_Utils_Tuple2('Puerto Rico, Juana Díaz', 44679),
			_Utils_Tuple2('Puerto Rico, Juncos', 38155),
			_Utils_Tuple2('Puerto Rico, Lajas', 22010),
			_Utils_Tuple2('Puerto Rico, Lares', 24276),
			_Utils_Tuple2('Puerto Rico, Las Marías', 7927),
			_Utils_Tuple2('Puerto Rico, Las Piedras', 37007),
			_Utils_Tuple2('Puerto Rico, Loíza', 24553),
			_Utils_Tuple2('Puerto Rico, Luquillo', 17665),
			_Utils_Tuple2('Puerto Rico, Manatí', 37287),
			_Utils_Tuple2('Puerto Rico, Maricao', 5430),
			_Utils_Tuple2('Puerto Rico, Maunabo', 10321),
			_Utils_Tuple2('Puerto Rico, Mayagüez', 71530),
			_Utils_Tuple2('Puerto Rico, Moca', 34891),
			_Utils_Tuple2('Puerto Rico, Morovis', 30335),
			_Utils_Tuple2('Puerto Rico, Naguabo', 25761),
			_Utils_Tuple2('Puerto Rico, Naranjito', 27349),
			_Utils_Tuple2('Puerto Rico, Orocovis', 20220),
			_Utils_Tuple2('Puerto Rico, Patillas', 16211),
			_Utils_Tuple2('Puerto Rico, Peñuelas', 19249),
			_Utils_Tuple2('Puerto Rico, Ponce', 131881),
			_Utils_Tuple2('Puerto Rico, Quebradillas', 22918),
			_Utils_Tuple2('Puerto Rico, Rincón', 13656),
			_Utils_Tuple2('Puerto Rico, Río Grande', 48025),
			_Utils_Tuple2('Puerto Rico, Sabana Grande', 21712),
			_Utils_Tuple2('Puerto Rico, Salinas', 27128),
			_Utils_Tuple2('Puerto Rico, San Germán', 30227),
			_Utils_Tuple2('Puerto Rico, San Juan', 318441),
			_Utils_Tuple2('Puerto Rico, San Lorenzo', 35989),
			_Utils_Tuple2('Puerto Rico, San Sebastián', 35528),
			_Utils_Tuple2('Puerto Rico, Santa Isabel', 21209),
			_Utils_Tuple2('Puerto Rico, Toa Alta', 72025),
			_Utils_Tuple2('Puerto Rico, Toa Baja', 74271),
			_Utils_Tuple2('Puerto Rico, Trujillo Alto', 63674),
			_Utils_Tuple2('Puerto Rico, Utuado', 27395),
			_Utils_Tuple2('Puerto Rico, Vega Alta', 36061),
			_Utils_Tuple2('Puerto Rico, Vega Baja', 50023),
			_Utils_Tuple2('Puerto Rico, Vieques', 8386),
			_Utils_Tuple2('Puerto Rico, Villalba', 21372),
			_Utils_Tuple2('Puerto Rico, Yabucoa', 32282),
			_Utils_Tuple2('Puerto Rico, Yauco', 33575),
			_Utils_Tuple2('Puerto Rico, Yauco', 33860)
		]));
var $author$project$TimeSeries$stateIndex = 6;
var $author$project$TimeSeries$parseRecord = F2(
	function (dates, data) {
		var state = A3($author$project$TimeSeries$getAtWithDefault, $author$project$TimeSeries$defaultState, $author$project$TimeSeries$stateIndex, data);
		var county = A3($author$project$TimeSeries$getAtWithDefault, $author$project$TimeSeries$defaultCounty, $author$project$TimeSeries$countyIndex, data);
		var key = A2($author$project$TimeSeries$mkKey, state, county);
		var population = function () {
			var _v0 = A2($elm$core$Dict$get, key, $author$project$PopulationData$populationData);
			if (!_v0.$) {
				var pop = _v0.a;
				return $elm$core$Maybe$Just(
					$author$project$Count$fromIntWithDefault(pop));
			} else {
				return $elm$core$Maybe$Nothing;
			}
		}();
		return _Utils_Tuple2(
			key,
			{
				aJ: $author$project$TimeSeries$parseConfirmedCounts(data),
				O: county,
				aK: dates,
				P: key,
				Q: population,
				R: state
			});
	});
var $author$project$TimeSeries$parseCsvData = function (csv) {
	var dates = A2($elm$core$List$drop, $author$project$TimeSeries$firstDateIndex, csv.aP);
	var dataRecords = A2(
		$elm$core$List$map,
		$author$project$TimeSeries$parseRecord(dates),
		csv.a_);
	return $elm$core$Dict$fromList(dataRecords);
};
var $elm$core$Set$insert = F2(
	function (key, _v0) {
		var dict = _v0;
		return A3($elm$core$Dict$insert, key, 0, dict);
	});
var $elm$core$Dict$singleton = F2(
	function (key, value) {
		return A5($elm$core$Dict$RBNode_elm_builtin, 1, key, value, $elm$core$Dict$RBEmpty_elm_builtin, $elm$core$Dict$RBEmpty_elm_builtin);
	});
var $elm$core$Set$singleton = function (key) {
	return A2($elm$core$Dict$singleton, key, 0);
};
var $author$project$TimeSeries$createOrInsert = F2(
	function (newItem, maybeItems) {
		if (!maybeItems.$) {
			var items = maybeItems.a;
			return $elm$core$Maybe$Just(
				A2($elm$core$Set$insert, newItem, items));
		} else {
			return $elm$core$Maybe$Just(
				$elm$core$Set$singleton(newItem));
		}
	});
var $elm$core$Dict$map = F2(
	function (func, dict) {
		if (dict.$ === -2) {
			return $elm$core$Dict$RBEmpty_elm_builtin;
		} else {
			var color = dict.a;
			var key = dict.b;
			var value = dict.c;
			var left = dict.d;
			var right = dict.e;
			return A5(
				$elm$core$Dict$RBNode_elm_builtin,
				color,
				key,
				A2(func, key, value),
				A2($elm$core$Dict$map, func, left),
				A2($elm$core$Dict$map, func, right));
		}
	});
var $elm$core$Dict$getMin = function (dict) {
	getMin:
	while (true) {
		if ((dict.$ === -1) && (dict.d.$ === -1)) {
			var left = dict.d;
			var $temp$dict = left;
			dict = $temp$dict;
			continue getMin;
		} else {
			return dict;
		}
	}
};
var $elm$core$Dict$moveRedLeft = function (dict) {
	if (((dict.$ === -1) && (dict.d.$ === -1)) && (dict.e.$ === -1)) {
		if ((dict.e.d.$ === -1) && (!dict.e.d.a)) {
			var clr = dict.a;
			var k = dict.b;
			var v = dict.c;
			var _v1 = dict.d;
			var lClr = _v1.a;
			var lK = _v1.b;
			var lV = _v1.c;
			var lLeft = _v1.d;
			var lRight = _v1.e;
			var _v2 = dict.e;
			var rClr = _v2.a;
			var rK = _v2.b;
			var rV = _v2.c;
			var rLeft = _v2.d;
			var _v3 = rLeft.a;
			var rlK = rLeft.b;
			var rlV = rLeft.c;
			var rlL = rLeft.d;
			var rlR = rLeft.e;
			var rRight = _v2.e;
			return A5(
				$elm$core$Dict$RBNode_elm_builtin,
				0,
				rlK,
				rlV,
				A5(
					$elm$core$Dict$RBNode_elm_builtin,
					1,
					k,
					v,
					A5($elm$core$Dict$RBNode_elm_builtin, 0, lK, lV, lLeft, lRight),
					rlL),
				A5($elm$core$Dict$RBNode_elm_builtin, 1, rK, rV, rlR, rRight));
		} else {
			var clr = dict.a;
			var k = dict.b;
			var v = dict.c;
			var _v4 = dict.d;
			var lClr = _v4.a;
			var lK = _v4.b;
			var lV = _v4.c;
			var lLeft = _v4.d;
			var lRight = _v4.e;
			var _v5 = dict.e;
			var rClr = _v5.a;
			var rK = _v5.b;
			var rV = _v5.c;
			var rLeft = _v5.d;
			var rRight = _v5.e;
			if (clr === 1) {
				return A5(
					$elm$core$Dict$RBNode_elm_builtin,
					1,
					k,
					v,
					A5($elm$core$Dict$RBNode_elm_builtin, 0, lK, lV, lLeft, lRight),
					A5($elm$core$Dict$RBNode_elm_builtin, 0, rK, rV, rLeft, rRight));
			} else {
				return A5(
					$elm$core$Dict$RBNode_elm_builtin,
					1,
					k,
					v,
					A5($elm$core$Dict$RBNode_elm_builtin, 0, lK, lV, lLeft, lRight),
					A5($elm$core$Dict$RBNode_elm_builtin, 0, rK, rV, rLeft, rRight));
			}
		}
	} else {
		return dict;
	}
};
var $elm$core$Dict$moveRedRight = function (dict) {
	if (((dict.$ === -1) && (dict.d.$ === -1)) && (dict.e.$ === -1)) {
		if ((dict.d.d.$ === -1) && (!dict.d.d.a)) {
			var clr = dict.a;
			var k = dict.b;
			var v = dict.c;
			var _v1 = dict.d;
			var lClr = _v1.a;
			var lK = _v1.b;
			var lV = _v1.c;
			var _v2 = _v1.d;
			var _v3 = _v2.a;
			var llK = _v2.b;
			var llV = _v2.c;
			var llLeft = _v2.d;
			var llRight = _v2.e;
			var lRight = _v1.e;
			var _v4 = dict.e;
			var rClr = _v4.a;
			var rK = _v4.b;
			var rV = _v4.c;
			var rLeft = _v4.d;
			var rRight = _v4.e;
			return A5(
				$elm$core$Dict$RBNode_elm_builtin,
				0,
				lK,
				lV,
				A5($elm$core$Dict$RBNode_elm_builtin, 1, llK, llV, llLeft, llRight),
				A5(
					$elm$core$Dict$RBNode_elm_builtin,
					1,
					k,
					v,
					lRight,
					A5($elm$core$Dict$RBNode_elm_builtin, 0, rK, rV, rLeft, rRight)));
		} else {
			var clr = dict.a;
			var k = dict.b;
			var v = dict.c;
			var _v5 = dict.d;
			var lClr = _v5.a;
			var lK = _v5.b;
			var lV = _v5.c;
			var lLeft = _v5.d;
			var lRight = _v5.e;
			var _v6 = dict.e;
			var rClr = _v6.a;
			var rK = _v6.b;
			var rV = _v6.c;
			var rLeft = _v6.d;
			var rRight = _v6.e;
			if (clr === 1) {
				return A5(
					$elm$core$Dict$RBNode_elm_builtin,
					1,
					k,
					v,
					A5($elm$core$Dict$RBNode_elm_builtin, 0, lK, lV, lLeft, lRight),
					A5($elm$core$Dict$RBNode_elm_builtin, 0, rK, rV, rLeft, rRight));
			} else {
				return A5(
					$elm$core$Dict$RBNode_elm_builtin,
					1,
					k,
					v,
					A5($elm$core$Dict$RBNode_elm_builtin, 0, lK, lV, lLeft, lRight),
					A5($elm$core$Dict$RBNode_elm_builtin, 0, rK, rV, rLeft, rRight));
			}
		}
	} else {
		return dict;
	}
};
var $elm$core$Dict$removeHelpPrepEQGT = F7(
	function (targetKey, dict, color, key, value, left, right) {
		if ((left.$ === -1) && (!left.a)) {
			var _v1 = left.a;
			var lK = left.b;
			var lV = left.c;
			var lLeft = left.d;
			var lRight = left.e;
			return A5(
				$elm$core$Dict$RBNode_elm_builtin,
				color,
				lK,
				lV,
				lLeft,
				A5($elm$core$Dict$RBNode_elm_builtin, 0, key, value, lRight, right));
		} else {
			_v2$2:
			while (true) {
				if ((right.$ === -1) && (right.a === 1)) {
					if (right.d.$ === -1) {
						if (right.d.a === 1) {
							var _v3 = right.a;
							var _v4 = right.d;
							var _v5 = _v4.a;
							return $elm$core$Dict$moveRedRight(dict);
						} else {
							break _v2$2;
						}
					} else {
						var _v6 = right.a;
						var _v7 = right.d;
						return $elm$core$Dict$moveRedRight(dict);
					}
				} else {
					break _v2$2;
				}
			}
			return dict;
		}
	});
var $elm$core$Dict$removeMin = function (dict) {
	if ((dict.$ === -1) && (dict.d.$ === -1)) {
		var color = dict.a;
		var key = dict.b;
		var value = dict.c;
		var left = dict.d;
		var lColor = left.a;
		var lLeft = left.d;
		var right = dict.e;
		if (lColor === 1) {
			if ((lLeft.$ === -1) && (!lLeft.a)) {
				var _v3 = lLeft.a;
				return A5(
					$elm$core$Dict$RBNode_elm_builtin,
					color,
					key,
					value,
					$elm$core$Dict$removeMin(left),
					right);
			} else {
				var _v4 = $elm$core$Dict$moveRedLeft(dict);
				if (_v4.$ === -1) {
					var nColor = _v4.a;
					var nKey = _v4.b;
					var nValue = _v4.c;
					var nLeft = _v4.d;
					var nRight = _v4.e;
					return A5(
						$elm$core$Dict$balance,
						nColor,
						nKey,
						nValue,
						$elm$core$Dict$removeMin(nLeft),
						nRight);
				} else {
					return $elm$core$Dict$RBEmpty_elm_builtin;
				}
			}
		} else {
			return A5(
				$elm$core$Dict$RBNode_elm_builtin,
				color,
				key,
				value,
				$elm$core$Dict$removeMin(left),
				right);
		}
	} else {
		return $elm$core$Dict$RBEmpty_elm_builtin;
	}
};
var $elm$core$Dict$removeHelp = F2(
	function (targetKey, dict) {
		if (dict.$ === -2) {
			return $elm$core$Dict$RBEmpty_elm_builtin;
		} else {
			var color = dict.a;
			var key = dict.b;
			var value = dict.c;
			var left = dict.d;
			var right = dict.e;
			if (_Utils_cmp(targetKey, key) < 0) {
				if ((left.$ === -1) && (left.a === 1)) {
					var _v4 = left.a;
					var lLeft = left.d;
					if ((lLeft.$ === -1) && (!lLeft.a)) {
						var _v6 = lLeft.a;
						return A5(
							$elm$core$Dict$RBNode_elm_builtin,
							color,
							key,
							value,
							A2($elm$core$Dict$removeHelp, targetKey, left),
							right);
					} else {
						var _v7 = $elm$core$Dict$moveRedLeft(dict);
						if (_v7.$ === -1) {
							var nColor = _v7.a;
							var nKey = _v7.b;
							var nValue = _v7.c;
							var nLeft = _v7.d;
							var nRight = _v7.e;
							return A5(
								$elm$core$Dict$balance,
								nColor,
								nKey,
								nValue,
								A2($elm$core$Dict$removeHelp, targetKey, nLeft),
								nRight);
						} else {
							return $elm$core$Dict$RBEmpty_elm_builtin;
						}
					}
				} else {
					return A5(
						$elm$core$Dict$RBNode_elm_builtin,
						color,
						key,
						value,
						A2($elm$core$Dict$removeHelp, targetKey, left),
						right);
				}
			} else {
				return A2(
					$elm$core$Dict$removeHelpEQGT,
					targetKey,
					A7($elm$core$Dict$removeHelpPrepEQGT, targetKey, dict, color, key, value, left, right));
			}
		}
	});
var $elm$core$Dict$removeHelpEQGT = F2(
	function (targetKey, dict) {
		if (dict.$ === -1) {
			var color = dict.a;
			var key = dict.b;
			var value = dict.c;
			var left = dict.d;
			var right = dict.e;
			if (_Utils_eq(targetKey, key)) {
				var _v1 = $elm$core$Dict$getMin(right);
				if (_v1.$ === -1) {
					var minKey = _v1.b;
					var minValue = _v1.c;
					return A5(
						$elm$core$Dict$balance,
						color,
						minKey,
						minValue,
						left,
						$elm$core$Dict$removeMin(right));
				} else {
					return $elm$core$Dict$RBEmpty_elm_builtin;
				}
			} else {
				return A5(
					$elm$core$Dict$balance,
					color,
					key,
					value,
					left,
					A2($elm$core$Dict$removeHelp, targetKey, right));
			}
		} else {
			return $elm$core$Dict$RBEmpty_elm_builtin;
		}
	});
var $elm$core$Dict$remove = F2(
	function (key, dict) {
		var _v0 = A2($elm$core$Dict$removeHelp, key, dict);
		if ((_v0.$ === -1) && (!_v0.a)) {
			var _v1 = _v0.a;
			var k = _v0.b;
			var v = _v0.c;
			var l = _v0.d;
			var r = _v0.e;
			return A5($elm$core$Dict$RBNode_elm_builtin, 1, k, v, l, r);
		} else {
			var x = _v0;
			return x;
		}
	});
var $elm$core$Dict$update = F3(
	function (targetKey, alter, dictionary) {
		var _v0 = alter(
			A2($elm$core$Dict$get, targetKey, dictionary));
		if (!_v0.$) {
			var value = _v0.a;
			return A3($elm$core$Dict$insert, targetKey, value, dictionary);
		} else {
			return A2($elm$core$Dict$remove, targetKey, dictionary);
		}
	});
var $author$project$TimeSeries$buildStateCountiesDict = function (stateCountyPairs) {
	var buildDict = F2(
		function (_v1, stateToCounties) {
			var state = _v1.a;
			var county = _v1.b;
			return A3(
				$elm$core$Dict$update,
				state,
				$author$project$TimeSeries$createOrInsert(county),
				stateToCounties);
		});
	return A2(
		$elm$core$Dict$map,
		F2(
			function (_v0, counties) {
				return $elm$core$Set$toList(counties);
			}),
		A3($elm$core$List$foldl, buildDict, $elm$core$Dict$empty, stateCountyPairs));
};
var $elm$core$Dict$values = function (dict) {
	return A3(
		$elm$core$Dict$foldr,
		F3(
			function (key, value, valueList) {
				return A2($elm$core$List$cons, value, valueList);
			}),
		_List_Nil,
		dict);
};
var $elm$core$Tuple$pair = F2(
	function (a, b) {
		return _Utils_Tuple2(a, b);
	});
var $elm_community$list_extra$List$Extra$zip = $elm$core$List$map2($elm$core$Tuple$pair);
var $author$project$TimeSeries$parseDataRecordList = function (dataRecords) {
	var records = $elm$core$Dict$values(dataRecords);
	var stateCounties = A2(
		$elm_community$list_extra$List$Extra$zip,
		A2(
			$elm$core$List$map,
			function ($) {
				return $.R;
			},
			records),
		A2(
			$elm$core$List$map,
			function ($) {
				return $.O;
			},
			records));
	return {
		ac: dataRecords,
		ax: $author$project$TimeSeries$buildStateCountiesDict(stateCounties)
	};
};
var $author$project$TimeSeries$parse = function (timeSeriesData) {
	return $author$project$TimeSeries$parseDataRecordList(
		$author$project$TimeSeries$parseCsvData(
			$lovasoa$elm_csv$Csv$parse(timeSeriesData)));
};
var $elm$time$Time$utc = A2($elm$time$Time$Zone, 0, _List_Nil);
var $author$project$Main$init = function (flags) {
	var startingData = function () {
		var _v0 = flags.Y;
		if (!_v0.$) {
			var startData = _v0.a;
			return $author$project$Main$decodeStartingData(startData);
		} else {
			return A2(
				$author$project$Main$StartingData,
				'',
				$elm$time$Time$millisToPosix(0));
		}
	}();
	return _Utils_Tuple2(
		{
			t: $elm$core$Maybe$Nothing,
			B: $elm$core$Maybe$Nothing,
			u: startingData.u,
			D: flags.D,
			j: startingData.j,
			x: $author$project$TimeSeries$parse(startingData.u),
			e: $elm$core$Set$empty,
			o: false,
			G: flags.G,
			A: flags.A,
			N: $elm$time$Time$utc
		},
		A2($elm$core$Task$perform, $author$project$Main$CheckFetchData, $elm$time$Time$now));
};
var $elm$json$Json$Decode$null = _Json_decodeNull;
var $elm$json$Json$Decode$oneOf = _Json_oneOf;
var $author$project$Main$GotWindowResize = F2(
	function (a, b) {
		return {$: 0, a: a, b: b};
	});
var $elm$browser$Browser$Events$Window = 1;
var $elm$browser$Browser$Events$MySub = F3(
	function (a, b, c) {
		return {$: 0, a: a, b: b, c: c};
	});
var $elm$browser$Browser$Events$State = F2(
	function (subs, pids) {
		return {al: pids, ay: subs};
	});
var $elm$browser$Browser$Events$init = $elm$core$Task$succeed(
	A2($elm$browser$Browser$Events$State, _List_Nil, $elm$core$Dict$empty));
var $elm$browser$Browser$Events$nodeToKey = function (node) {
	if (!node) {
		return 'd_';
	} else {
		return 'w_';
	}
};
var $elm$browser$Browser$Events$addKey = function (sub) {
	var node = sub.a;
	var name = sub.b;
	return _Utils_Tuple2(
		_Utils_ap(
			$elm$browser$Browser$Events$nodeToKey(node),
			name),
		sub);
};
var $elm$core$Process$kill = _Scheduler_kill;
var $elm$core$Dict$foldl = F3(
	function (func, acc, dict) {
		foldl:
		while (true) {
			if (dict.$ === -2) {
				return acc;
			} else {
				var key = dict.b;
				var value = dict.c;
				var left = dict.d;
				var right = dict.e;
				var $temp$func = func,
					$temp$acc = A3(
					func,
					key,
					value,
					A3($elm$core$Dict$foldl, func, acc, left)),
					$temp$dict = right;
				func = $temp$func;
				acc = $temp$acc;
				dict = $temp$dict;
				continue foldl;
			}
		}
	});
var $elm$core$Dict$merge = F6(
	function (leftStep, bothStep, rightStep, leftDict, rightDict, initialResult) {
		var stepState = F3(
			function (rKey, rValue, _v0) {
				stepState:
				while (true) {
					var list = _v0.a;
					var result = _v0.b;
					if (!list.b) {
						return _Utils_Tuple2(
							list,
							A3(rightStep, rKey, rValue, result));
					} else {
						var _v2 = list.a;
						var lKey = _v2.a;
						var lValue = _v2.b;
						var rest = list.b;
						if (_Utils_cmp(lKey, rKey) < 0) {
							var $temp$rKey = rKey,
								$temp$rValue = rValue,
								$temp$_v0 = _Utils_Tuple2(
								rest,
								A3(leftStep, lKey, lValue, result));
							rKey = $temp$rKey;
							rValue = $temp$rValue;
							_v0 = $temp$_v0;
							continue stepState;
						} else {
							if (_Utils_cmp(lKey, rKey) > 0) {
								return _Utils_Tuple2(
									list,
									A3(rightStep, rKey, rValue, result));
							} else {
								return _Utils_Tuple2(
									rest,
									A4(bothStep, lKey, lValue, rValue, result));
							}
						}
					}
				}
			});
		var _v3 = A3(
			$elm$core$Dict$foldl,
			stepState,
			_Utils_Tuple2(
				$elm$core$Dict$toList(leftDict),
				initialResult),
			rightDict);
		var leftovers = _v3.a;
		var intermediateResult = _v3.b;
		return A3(
			$elm$core$List$foldl,
			F2(
				function (_v4, result) {
					var k = _v4.a;
					var v = _v4.b;
					return A3(leftStep, k, v, result);
				}),
			intermediateResult,
			leftovers);
	});
var $elm$browser$Browser$Events$Event = F2(
	function (key, event) {
		return {af: event, P: key};
	});
var $elm$core$Platform$sendToSelf = _Platform_sendToSelf;
var $elm$browser$Browser$Events$spawn = F3(
	function (router, key, _v0) {
		var node = _v0.a;
		var name = _v0.b;
		var actualNode = function () {
			if (!node) {
				return _Browser_doc;
			} else {
				return _Browser_window;
			}
		}();
		return A2(
			$elm$core$Task$map,
			function (value) {
				return _Utils_Tuple2(key, value);
			},
			A3(
				_Browser_on,
				actualNode,
				name,
				function (event) {
					return A2(
						$elm$core$Platform$sendToSelf,
						router,
						A2($elm$browser$Browser$Events$Event, key, event));
				}));
	});
var $elm$core$Dict$union = F2(
	function (t1, t2) {
		return A3($elm$core$Dict$foldl, $elm$core$Dict$insert, t2, t1);
	});
var $elm$browser$Browser$Events$onEffects = F3(
	function (router, subs, state) {
		var stepRight = F3(
			function (key, sub, _v6) {
				var deads = _v6.a;
				var lives = _v6.b;
				var news = _v6.c;
				return _Utils_Tuple3(
					deads,
					lives,
					A2(
						$elm$core$List$cons,
						A3($elm$browser$Browser$Events$spawn, router, key, sub),
						news));
			});
		var stepLeft = F3(
			function (_v4, pid, _v5) {
				var deads = _v5.a;
				var lives = _v5.b;
				var news = _v5.c;
				return _Utils_Tuple3(
					A2($elm$core$List$cons, pid, deads),
					lives,
					news);
			});
		var stepBoth = F4(
			function (key, pid, _v2, _v3) {
				var deads = _v3.a;
				var lives = _v3.b;
				var news = _v3.c;
				return _Utils_Tuple3(
					deads,
					A3($elm$core$Dict$insert, key, pid, lives),
					news);
			});
		var newSubs = A2($elm$core$List$map, $elm$browser$Browser$Events$addKey, subs);
		var _v0 = A6(
			$elm$core$Dict$merge,
			stepLeft,
			stepBoth,
			stepRight,
			state.al,
			$elm$core$Dict$fromList(newSubs),
			_Utils_Tuple3(_List_Nil, $elm$core$Dict$empty, _List_Nil));
		var deadPids = _v0.a;
		var livePids = _v0.b;
		var makeNewPids = _v0.c;
		return A2(
			$elm$core$Task$andThen,
			function (pids) {
				return $elm$core$Task$succeed(
					A2(
						$elm$browser$Browser$Events$State,
						newSubs,
						A2(
							$elm$core$Dict$union,
							livePids,
							$elm$core$Dict$fromList(pids))));
			},
			A2(
				$elm$core$Task$andThen,
				function (_v1) {
					return $elm$core$Task$sequence(makeNewPids);
				},
				$elm$core$Task$sequence(
					A2($elm$core$List$map, $elm$core$Process$kill, deadPids))));
	});
var $elm$core$List$maybeCons = F3(
	function (f, mx, xs) {
		var _v0 = f(mx);
		if (!_v0.$) {
			var x = _v0.a;
			return A2($elm$core$List$cons, x, xs);
		} else {
			return xs;
		}
	});
var $elm$core$List$filterMap = F2(
	function (f, xs) {
		return A3(
			$elm$core$List$foldr,
			$elm$core$List$maybeCons(f),
			_List_Nil,
			xs);
	});
var $elm$browser$Browser$Events$onSelfMsg = F3(
	function (router, _v0, state) {
		var key = _v0.P;
		var event = _v0.af;
		var toMessage = function (_v2) {
			var subKey = _v2.a;
			var _v3 = _v2.b;
			var node = _v3.a;
			var name = _v3.b;
			var decoder = _v3.c;
			return _Utils_eq(subKey, key) ? A2(_Browser_decodeEvent, decoder, event) : $elm$core$Maybe$Nothing;
		};
		var messages = A2($elm$core$List$filterMap, toMessage, state.ay);
		return A2(
			$elm$core$Task$andThen,
			function (_v1) {
				return $elm$core$Task$succeed(state);
			},
			$elm$core$Task$sequence(
				A2(
					$elm$core$List$map,
					$elm$core$Platform$sendToApp(router),
					messages)));
	});
var $elm$browser$Browser$Events$subMap = F2(
	function (func, _v0) {
		var node = _v0.a;
		var name = _v0.b;
		var decoder = _v0.c;
		return A3(
			$elm$browser$Browser$Events$MySub,
			node,
			name,
			A2($elm$json$Json$Decode$map, func, decoder));
	});
_Platform_effectManagers['Browser.Events'] = _Platform_createManager($elm$browser$Browser$Events$init, $elm$browser$Browser$Events$onEffects, $elm$browser$Browser$Events$onSelfMsg, 0, $elm$browser$Browser$Events$subMap);
var $elm$browser$Browser$Events$subscription = _Platform_leaf('Browser.Events');
var $elm$browser$Browser$Events$on = F3(
	function (node, name, decoder) {
		return $elm$browser$Browser$Events$subscription(
			A3($elm$browser$Browser$Events$MySub, node, name, decoder));
	});
var $elm$browser$Browser$Events$onResize = function (func) {
	return A3(
		$elm$browser$Browser$Events$on,
		1,
		'resize',
		A2(
			$elm$json$Json$Decode$field,
			'target',
			A3(
				$elm$json$Json$Decode$map2,
				func,
				A2($elm$json$Json$Decode$field, 'innerWidth', $elm$json$Json$Decode$int),
				A2($elm$json$Json$Decode$field, 'innerHeight', $elm$json$Json$Decode$int))));
};
var $author$project$Main$subscriptions = function (model) {
	return $elm$browser$Browser$Events$onResize(
		F2(
			function (width, height) {
				return A2($author$project$Main$GotWindowResize, width, height);
			}));
};
var $author$project$Main$FetchData = {$: 3};
var $author$project$Main$GotData = function (a) {
	return {$: 4, a: a};
};
var $author$project$Main$SaveData = {$: 5};
var $elm$core$List$any = F2(
	function (isOkay, list) {
		any:
		while (true) {
			if (!list.b) {
				return false;
			} else {
				var x = list.a;
				var xs = list.b;
				if (isOkay(x)) {
					return true;
				} else {
					var $temp$isOkay = isOkay,
						$temp$list = xs;
					isOkay = $temp$isOkay;
					list = $temp$list;
					continue any;
				}
			}
		}
	});
var $elm$core$List$all = F2(
	function (isOkay, list) {
		return !A2(
			$elm$core$List$any,
			A2($elm$core$Basics$composeL, $elm$core$Basics$not, isOkay),
			list);
	});
var $elm$core$Dict$member = F2(
	function (key, dict) {
		var _v0 = A2($elm$core$Dict$get, key, dict);
		if (!_v0.$) {
			return true;
		} else {
			return false;
		}
	});
var $author$project$Main$allCountiesHavePopData = function (keys) {
	return A2(
		$elm$core$List$all,
		$elm$core$Basics$eq(true),
		A2(
			$elm$core$List$map,
			function (k) {
				return A2($elm$core$Dict$member, k, $author$project$PopulationData$populationData);
			},
			$elm$core$Set$toList(keys)));
};
var $elm$core$Platform$Cmd$batch = _Platform_batch;
var $author$project$Utils$dataFetchRateLimit = (60 * 60) * 1000;
var $author$project$Utils$defaultOptionText = '-';
var $elm$http$Http$BadStatus_ = F2(
	function (a, b) {
		return {$: 3, a: a, b: b};
	});
var $elm$http$Http$BadUrl_ = function (a) {
	return {$: 0, a: a};
};
var $elm$http$Http$GoodStatus_ = F2(
	function (a, b) {
		return {$: 4, a: a, b: b};
	});
var $elm$http$Http$NetworkError_ = {$: 2};
var $elm$http$Http$Receiving = function (a) {
	return {$: 1, a: a};
};
var $elm$http$Http$Sending = function (a) {
	return {$: 0, a: a};
};
var $elm$http$Http$Timeout_ = {$: 1};
var $elm$core$Maybe$isJust = function (maybe) {
	if (!maybe.$) {
		return true;
	} else {
		return false;
	}
};
var $elm$core$Basics$composeR = F3(
	function (f, g, x) {
		return g(
			f(x));
	});
var $elm$http$Http$expectStringResponse = F2(
	function (toMsg, toResult) {
		return A3(
			_Http_expect,
			'',
			$elm$core$Basics$identity,
			A2($elm$core$Basics$composeR, toResult, toMsg));
	});
var $elm$http$Http$BadBody = function (a) {
	return {$: 4, a: a};
};
var $elm$http$Http$BadStatus = function (a) {
	return {$: 3, a: a};
};
var $elm$http$Http$BadUrl = function (a) {
	return {$: 0, a: a};
};
var $elm$http$Http$NetworkError = {$: 2};
var $elm$http$Http$Timeout = {$: 1};
var $elm$core$Result$mapError = F2(
	function (f, result) {
		if (!result.$) {
			var v = result.a;
			return $elm$core$Result$Ok(v);
		} else {
			var e = result.a;
			return $elm$core$Result$Err(
				f(e));
		}
	});
var $elm$http$Http$resolve = F2(
	function (toResult, response) {
		switch (response.$) {
			case 0:
				var url = response.a;
				return $elm$core$Result$Err(
					$elm$http$Http$BadUrl(url));
			case 1:
				return $elm$core$Result$Err($elm$http$Http$Timeout);
			case 2:
				return $elm$core$Result$Err($elm$http$Http$NetworkError);
			case 3:
				var metadata = response.a;
				return $elm$core$Result$Err(
					$elm$http$Http$BadStatus(metadata.a1));
			default:
				var body = response.b;
				return A2(
					$elm$core$Result$mapError,
					$elm$http$Http$BadBody,
					toResult(body));
		}
	});
var $elm$http$Http$expectString = function (toMsg) {
	return A2(
		$elm$http$Http$expectStringResponse,
		toMsg,
		$elm$http$Http$resolve($elm$core$Result$Ok));
};
var $elm$http$Http$emptyBody = _Http_emptyBody;
var $elm$http$Http$Request = function (a) {
	return {$: 1, a: a};
};
var $elm$http$Http$State = F2(
	function (reqs, subs) {
		return {as: reqs, ay: subs};
	});
var $elm$http$Http$init = $elm$core$Task$succeed(
	A2($elm$http$Http$State, $elm$core$Dict$empty, _List_Nil));
var $elm$core$Process$spawn = _Scheduler_spawn;
var $elm$http$Http$updateReqs = F3(
	function (router, cmds, reqs) {
		updateReqs:
		while (true) {
			if (!cmds.b) {
				return $elm$core$Task$succeed(reqs);
			} else {
				var cmd = cmds.a;
				var otherCmds = cmds.b;
				if (!cmd.$) {
					var tracker = cmd.a;
					var _v2 = A2($elm$core$Dict$get, tracker, reqs);
					if (_v2.$ === 1) {
						var $temp$router = router,
							$temp$cmds = otherCmds,
							$temp$reqs = reqs;
						router = $temp$router;
						cmds = $temp$cmds;
						reqs = $temp$reqs;
						continue updateReqs;
					} else {
						var pid = _v2.a;
						return A2(
							$elm$core$Task$andThen,
							function (_v3) {
								return A3(
									$elm$http$Http$updateReqs,
									router,
									otherCmds,
									A2($elm$core$Dict$remove, tracker, reqs));
							},
							$elm$core$Process$kill(pid));
					}
				} else {
					var req = cmd.a;
					return A2(
						$elm$core$Task$andThen,
						function (pid) {
							var _v4 = req.aA;
							if (_v4.$ === 1) {
								return A3($elm$http$Http$updateReqs, router, otherCmds, reqs);
							} else {
								var tracker = _v4.a;
								return A3(
									$elm$http$Http$updateReqs,
									router,
									otherCmds,
									A3($elm$core$Dict$insert, tracker, pid, reqs));
							}
						},
						$elm$core$Process$spawn(
							A3(
								_Http_toTask,
								router,
								$elm$core$Platform$sendToApp(router),
								req)));
				}
			}
		}
	});
var $elm$http$Http$onEffects = F4(
	function (router, cmds, subs, state) {
		return A2(
			$elm$core$Task$andThen,
			function (reqs) {
				return $elm$core$Task$succeed(
					A2($elm$http$Http$State, reqs, subs));
			},
			A3($elm$http$Http$updateReqs, router, cmds, state.as));
	});
var $elm$http$Http$maybeSend = F4(
	function (router, desiredTracker, progress, _v0) {
		var actualTracker = _v0.a;
		var toMsg = _v0.b;
		return _Utils_eq(desiredTracker, actualTracker) ? $elm$core$Maybe$Just(
			A2(
				$elm$core$Platform$sendToApp,
				router,
				toMsg(progress))) : $elm$core$Maybe$Nothing;
	});
var $elm$http$Http$onSelfMsg = F3(
	function (router, _v0, state) {
		var tracker = _v0.a;
		var progress = _v0.b;
		return A2(
			$elm$core$Task$andThen,
			function (_v1) {
				return $elm$core$Task$succeed(state);
			},
			$elm$core$Task$sequence(
				A2(
					$elm$core$List$filterMap,
					A3($elm$http$Http$maybeSend, router, tracker, progress),
					state.ay)));
	});
var $elm$http$Http$Cancel = function (a) {
	return {$: 0, a: a};
};
var $elm$http$Http$cmdMap = F2(
	function (func, cmd) {
		if (!cmd.$) {
			var tracker = cmd.a;
			return $elm$http$Http$Cancel(tracker);
		} else {
			var r = cmd.a;
			return $elm$http$Http$Request(
				{
					aF: r.aF,
					aH: r.aH,
					aN: A2(_Http_mapExpect, func, r.aN),
					aP: r.aP,
					aU: r.aU,
					a4: r.a4,
					aA: r.aA,
					a7: r.a7
				});
		}
	});
var $elm$http$Http$MySub = F2(
	function (a, b) {
		return {$: 0, a: a, b: b};
	});
var $elm$http$Http$subMap = F2(
	function (func, _v0) {
		var tracker = _v0.a;
		var toMsg = _v0.b;
		return A2(
			$elm$http$Http$MySub,
			tracker,
			A2($elm$core$Basics$composeR, toMsg, func));
	});
_Platform_effectManagers['Http'] = _Platform_createManager($elm$http$Http$init, $elm$http$Http$onEffects, $elm$http$Http$onSelfMsg, $elm$http$Http$cmdMap, $elm$http$Http$subMap);
var $elm$http$Http$command = _Platform_leaf('Http');
var $elm$http$Http$subscription = _Platform_leaf('Http');
var $elm$http$Http$request = function (r) {
	return $elm$http$Http$command(
		$elm$http$Http$Request(
			{aF: false, aH: r.aH, aN: r.aN, aP: r.aP, aU: r.aU, a4: r.a4, aA: r.aA, a7: r.a7}));
};
var $elm$http$Http$get = function (r) {
	return $elm$http$Http$request(
		{aH: $elm$http$Http$emptyBody, aN: r.aN, aP: _List_Nil, aU: 'GET', a4: $elm$core$Maybe$Nothing, aA: $elm$core$Maybe$Nothing, a7: r.a7});
};
var $elm$time$Time$posixToMillis = function (_v0) {
	var millis = _v0;
	return millis;
};
var $author$project$Utils$getElapsedTime = F2(
	function (oldTime, newTime) {
		return $elm$time$Time$millisToPosix(
			$elm$time$Time$posixToMillis(newTime) - $elm$time$Time$posixToMillis(oldTime));
	});
var $elm$core$Platform$Cmd$none = $elm$core$Platform$Cmd$batch(_List_Nil);
var $elm$core$Set$remove = F2(
	function (key, _v0) {
		var dict = _v0;
		return A2($elm$core$Dict$remove, key, dict);
	});
var $elm$json$Json$Encode$int = _Json_wrap;
var $author$project$Main$encodeTimePosix = function (time) {
	return $elm$json$Json$Encode$int(
		$elm$time$Time$posixToMillis(time));
};
var $elm$json$Json$Encode$object = function (pairs) {
	return _Json_wrap(
		A3(
			$elm$core$List$foldl,
			F2(
				function (_v0, obj) {
					var k = _v0.a;
					var v = _v0.b;
					return A3(_Json_addField, k, v, obj);
				}),
			_Json_emptyObject(0),
			pairs));
};
var $elm$json$Json$Encode$string = _Json_wrap;
var $author$project$Main$encodeModel = function (model) {
	return $elm$json$Json$Encode$object(
		_List_fromArray(
			[
				_Utils_Tuple2(
				'data',
				$elm$json$Json$Encode$string(model.u)),
				_Utils_Tuple2(
				'lastDataFetchTime',
				$author$project$Main$encodeTimePosix(model.j))
			]));
};
var $author$project$Ports$storeData = _Platform_outgoingPort('storeData', $elm$json$Json$Encode$string);
var $author$project$Main$saveData = function (model) {
	var indentation = 0;
	return model.D ? $author$project$Ports$storeData(
		A2(
			$elm$json$Json$Encode$encode,
			indentation,
			$author$project$Main$encodeModel(model))) : $elm$core$Platform$Cmd$none;
};
var $author$project$Ports$sendToVegaLite = _Platform_outgoingPort('sendToVegaLite', $elm$core$Basics$identity);
var $author$project$Utils$timeSeriesDataUrl = 'https://raw.githubusercontent.com/CSSEGISandData/COVID-19/master/csse_covid_19_data/csse_covid_19_time_series/time_series_covid19_confirmed_US.csv';
var $gicentre$elm_vegalite$VegaLite$Quantitative = 2;
var $gicentre$elm_vegalite$VegaLite$Temporal = 3;
var $gicentre$elm_vegalite$VegaLite$X = 0;
var $gicentre$elm_vegalite$VegaLite$Y = 1;
var $gicentre$elm_vegalite$VegaLite$AContent = 0;
var $gicentre$elm_vegalite$VegaLite$asContent = 0;
var $gicentre$elm_vegalite$VegaLite$VLAutosize = 7;
var $elm$json$Json$Encode$bool = _Json_wrap;
var $gicentre$elm_vegalite$VegaLite$autosizeProperty = function (asCfg) {
	switch (asCfg) {
		case 5:
			return _Utils_Tuple2(
				'type',
				$elm$json$Json$Encode$string('pad'));
		case 1:
			return _Utils_Tuple2(
				'type',
				$elm$json$Json$Encode$string('fit'));
		case 2:
			return _Utils_Tuple2(
				'type',
				$elm$json$Json$Encode$string('fit-x'));
		case 3:
			return _Utils_Tuple2(
				'type',
				$elm$json$Json$Encode$string('fit-y'));
		case 4:
			return _Utils_Tuple2(
				'type',
				$elm$json$Json$Encode$string('none'));
		case 7:
			return _Utils_Tuple2(
				'resize',
				$elm$json$Json$Encode$bool(true));
		case 0:
			return _Utils_Tuple2(
				'contains',
				$elm$json$Json$Encode$string('content'));
		default:
			return _Utils_Tuple2(
				'contains',
				$elm$json$Json$Encode$string('padding'));
	}
};
var $gicentre$elm_vegalite$VegaLite$autosize = function (aus) {
	return _Utils_Tuple2(
		7,
		$elm$json$Json$Encode$object(
			A2($elm$core$List$map, $gicentre$elm_vegalite$VegaLite$autosizeProperty, aus)));
};
var $gicentre$elm_vegalite$VegaLite$AxLabelAngle = function (a) {
	return {$: 21, a: a};
};
var $gicentre$elm_vegalite$VegaLite$positiveAngle = function (a) {
	return (a < 0) ? (a + 360) : a;
};
var $gicentre$elm_vegalite$VegaLite$axLabelAngle = A2($elm$core$Basics$composeL, $gicentre$elm_vegalite$VegaLite$AxLabelAngle, $gicentre$elm_vegalite$VegaLite$positiveAngle);
var $gicentre$elm_vegalite$VegaLite$AxLabelExpr = function (a) {
	return {$: 25, a: a};
};
var $gicentre$elm_vegalite$VegaLite$axLabelExpr = $gicentre$elm_vegalite$VegaLite$AxLabelExpr;
var $gicentre$elm_vegalite$VegaLite$LabelFontSize = function (a) {
	return {$: 27, a: a};
};
var $gicentre$elm_vegalite$VegaLite$axcoLabelFontSize = $gicentre$elm_vegalite$VegaLite$LabelFontSize;
var $gicentre$elm_vegalite$VegaLite$TitleFontSize = function (a) {
	return {$: 56, a: a};
};
var $gicentre$elm_vegalite$VegaLite$axcoTitleFontSize = $gicentre$elm_vegalite$VegaLite$TitleFontSize;
var $gicentre$elm_vegalite$VegaLite$AxBoth = 0;
var $gicentre$elm_vegalite$VegaLite$Axis = F2(
	function (a, b) {
		return {$: 3, a: a, b: b};
	});
var $gicentre$elm_vegalite$VegaLite$coAxis = $gicentre$elm_vegalite$VegaLite$Axis(0);
var $gicentre$elm_vegalite$VegaLite$Legend = function (a) {
	return {$: 23, a: a};
};
var $gicentre$elm_vegalite$VegaLite$coLegend = $gicentre$elm_vegalite$VegaLite$Legend;
var $elm$core$List$append = F2(
	function (xs, ys) {
		if (!ys.b) {
			return xs;
		} else {
			return A3($elm$core$List$foldr, $elm$core$List$cons, ys, xs);
		}
	});
var $elm$core$List$concat = function (lists) {
	return A3($elm$core$List$foldr, $elm$core$List$append, _List_Nil, lists);
};
var $elm$core$List$concatMap = F2(
	function (f, list) {
		return $elm$core$List$concat(
			A2($elm$core$List$map, f, list));
	});
var $gicentre$elm_vegalite$VegaLite$arrangementLabel = function (arrng) {
	switch (arrng) {
		case 1:
			return 'row';
		case 0:
			return 'column';
		case 2:
			return 'repeat';
		default:
			return 'layer';
	}
};
var $elm$json$Json$Encode$float = _Json_wrap;
var $elm$json$Json$Encode$list = F2(
	function (func, entries) {
		return _Json_wrap(
			A3(
				$elm$core$List$foldl,
				_Json_addEntry(func),
				_Json_emptyArray(0),
				entries));
	});
var $gicentre$elm_vegalite$VegaLite$binProperty = function (binProp) {
	switch (binProp.$) {
		case 5:
			var n = binProp.a;
			return _Utils_Tuple2(
				'maxbins',
				$elm$json$Json$Encode$int(n));
		case 0:
			var x = binProp.a;
			return _Utils_Tuple2(
				'anchor',
				$elm$json$Json$Encode$float(x));
		case 1:
			var x = binProp.a;
			return _Utils_Tuple2(
				'base',
				$elm$json$Json$Encode$float(x));
		case 8:
			var x = binProp.a;
			return _Utils_Tuple2(
				'step',
				$elm$json$Json$Encode$float(x));
		case 9:
			var xs = binProp.a;
			return _Utils_Tuple2(
				'steps',
				A2($elm$json$Json$Encode$list, $elm$json$Json$Encode$float, xs));
		case 6:
			var x = binProp.a;
			return _Utils_Tuple2(
				'minstep',
				$elm$json$Json$Encode$float(x));
		case 2:
			var xs = binProp.a;
			return _Utils_Tuple2(
				'divide',
				A2($elm$json$Json$Encode$list, $elm$json$Json$Encode$float, xs));
		case 3:
			var mn = binProp.a;
			var mx = binProp.b;
			return _Utils_Tuple2(
				'extent',
				A2(
					$elm$json$Json$Encode$list,
					$elm$json$Json$Encode$float,
					_List_fromArray(
						[mn, mx])));
		case 4:
			var s = binProp.a;
			return _Utils_Tuple2(
				'extent',
				$elm$json$Json$Encode$object(
					_List_fromArray(
						[
							_Utils_Tuple2(
							'selection',
							$elm$json$Json$Encode$string(s))
						])));
		default:
			var b = binProp.a;
			return _Utils_Tuple2(
				'nice',
				$elm$json$Json$Encode$bool(b));
	}
};
var $gicentre$elm_vegalite$VegaLite$bin = function (bProps) {
	return _Utils_eq(bProps, _List_Nil) ? _Utils_Tuple2(
		'bin',
		$elm$json$Json$Encode$bool(true)) : _Utils_Tuple2(
		'bin',
		$elm$json$Json$Encode$object(
			A2($elm$core$List$map, $gicentre$elm_vegalite$VegaLite$binProperty, bProps)));
};
var $gicentre$elm_vegalite$VegaLite$dayLabel = function (dayName) {
	switch (dayName) {
		case 0:
			return 'Mon';
		case 1:
			return 'Tue';
		case 2:
			return 'Wed';
		case 3:
			return 'Thu';
		case 4:
			return 'Fri';
		case 5:
			return 'Sat';
		default:
			return 'Sun';
	}
};
var $gicentre$elm_vegalite$VegaLite$monthNameLabel = function (mon) {
	switch (mon) {
		case 0:
			return 'Jan';
		case 1:
			return 'Feb';
		case 2:
			return 'Mar';
		case 3:
			return 'Apr';
		case 4:
			return 'May';
		case 5:
			return 'Jun';
		case 6:
			return 'Jul';
		case 7:
			return 'Aug';
		case 8:
			return 'Sep';
		case 9:
			return 'Oct';
		case 10:
			return 'Nov';
		default:
			return 'Dec';
	}
};
var $gicentre$elm_vegalite$VegaLite$dateTimeProperty = function (dtp) {
	switch (dtp.$) {
		case 0:
			var y = dtp.a;
			return _Utils_Tuple2(
				'year',
				$elm$json$Json$Encode$int(y));
		case 1:
			var q = dtp.a;
			return _Utils_Tuple2(
				'quarter',
				$elm$json$Json$Encode$int(q));
		case 2:
			var mon = dtp.a;
			return _Utils_Tuple2(
				'month',
				$elm$json$Json$Encode$string(
					$gicentre$elm_vegalite$VegaLite$monthNameLabel(mon)));
		case 3:
			var n = dtp.a;
			return _Utils_Tuple2(
				'month',
				$elm$json$Json$Encode$int(n));
		case 4:
			var d = dtp.a;
			return _Utils_Tuple2(
				'date',
				$elm$json$Json$Encode$int(d));
		case 5:
			var d = dtp.a;
			return _Utils_Tuple2(
				'day',
				$elm$json$Json$Encode$string(
					$gicentre$elm_vegalite$VegaLite$dayLabel(d)));
		case 6:
			var h = dtp.a;
			return _Utils_Tuple2(
				'hours',
				$elm$json$Json$Encode$int(h));
		case 7:
			var m = dtp.a;
			return _Utils_Tuple2(
				'minutes',
				$elm$json$Json$Encode$int(m));
		case 8:
			var s = dtp.a;
			return _Utils_Tuple2(
				'seconds',
				$elm$json$Json$Encode$int(s));
		default:
			var ms = dtp.a;
			return _Utils_Tuple2(
				'milliseconds',
				$elm$json$Json$Encode$int(ms));
	}
};
var $elm$json$Json$Encode$null = _Json_encodeNull;
var $gicentre$elm_vegalite$VegaLite$dataValueSpec = function (val) {
	switch (val.$) {
		case 2:
			var x = val.a;
			return $elm$json$Json$Encode$float(x);
		case 3:
			var s = val.a;
			return $elm$json$Json$Encode$string(s);
		case 0:
			var b = val.a;
			return $elm$json$Json$Encode$bool(b);
		case 1:
			var d = val.a;
			return $elm$json$Json$Encode$object(
				A2($elm$core$List$map, $gicentre$elm_vegalite$VegaLite$dateTimeProperty, d));
		default:
			return $elm$json$Json$Encode$null;
	}
};
var $gicentre$elm_vegalite$VegaLite$dataValuesSpecs = function (dvs) {
	switch (dvs.$) {
		case 2:
			var xs = dvs.a;
			return A2($elm$core$List$map, $elm$json$Json$Encode$float, xs);
		case 3:
			var ss = dvs.a;
			return A2($elm$core$List$map, $elm$json$Json$Encode$string, ss);
		case 1:
			var dtss = dvs.a;
			return A2(
				$elm$core$List$map,
				function (ds) {
					return $elm$json$Json$Encode$object(
						A2($elm$core$List$map, $gicentre$elm_vegalite$VegaLite$dateTimeProperty, ds));
				},
				dtss);
		default:
			var bs = dvs.a;
			return A2($elm$core$List$map, $elm$json$Json$Encode$bool, bs);
	}
};
var $gicentre$elm_vegalite$VegaLite$toList = $elm$json$Json$Encode$list($elm$core$Basics$identity);
var $gicentre$elm_vegalite$VegaLite$filterProperties = function (f) {
	switch (f.$) {
		case 0:
			var field = f.a;
			var val = f.b;
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'field',
					$elm$json$Json$Encode$string(field)),
					_Utils_Tuple2(
					'equal',
					$gicentre$elm_vegalite$VegaLite$dataValueSpec(val))
				]);
		case 1:
			var field = f.a;
			var val = f.b;
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'field',
					$elm$json$Json$Encode$string(field)),
					_Utils_Tuple2(
					'lt',
					$gicentre$elm_vegalite$VegaLite$dataValueSpec(val))
				]);
		case 2:
			var field = f.a;
			var val = f.b;
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'field',
					$elm$json$Json$Encode$string(field)),
					_Utils_Tuple2(
					'lte',
					$gicentre$elm_vegalite$VegaLite$dataValueSpec(val))
				]);
		case 3:
			var field = f.a;
			var val = f.b;
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'field',
					$elm$json$Json$Encode$string(field)),
					_Utils_Tuple2(
					'gt',
					$gicentre$elm_vegalite$VegaLite$dataValueSpec(val))
				]);
		case 4:
			var field = f.a;
			var val = f.b;
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'field',
					$elm$json$Json$Encode$string(field)),
					_Utils_Tuple2(
					'gte',
					$gicentre$elm_vegalite$VegaLite$dataValueSpec(val))
				]);
		case 7:
			var selName = f.a;
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'selection',
					$elm$json$Json$Encode$string(selName))
				]);
		case 9:
			var field = f.a;
			var vals = f.b;
			var values = function () {
				if (!vals.$) {
					var mn = vals.a;
					var mx = vals.b;
					return A2(
						$elm$json$Json$Encode$list,
						$elm$json$Json$Encode$float,
						_List_fromArray(
							[mn, mx]));
				} else {
					if (!vals.a.b) {
						if (!vals.b.b) {
							return $gicentre$elm_vegalite$VegaLite$toList(
								_List_fromArray(
									[$elm$json$Json$Encode$null, $elm$json$Json$Encode$null]));
						} else {
							var dMax = vals.b;
							return $gicentre$elm_vegalite$VegaLite$toList(
								_List_fromArray(
									[
										$elm$json$Json$Encode$null,
										$elm$json$Json$Encode$object(
										A2($elm$core$List$map, $gicentre$elm_vegalite$VegaLite$dateTimeProperty, dMax))
									]));
						}
					} else {
						if (!vals.b.b) {
							var dMin = vals.a;
							return $gicentre$elm_vegalite$VegaLite$toList(
								_List_fromArray(
									[
										$elm$json$Json$Encode$object(
										A2($elm$core$List$map, $gicentre$elm_vegalite$VegaLite$dateTimeProperty, dMin)),
										$elm$json$Json$Encode$null
									]));
						} else {
							var dMin = vals.a;
							var dMax = vals.b;
							return A2(
								$elm$json$Json$Encode$list,
								$elm$json$Json$Encode$object,
								_List_fromArray(
									[
										A2($elm$core$List$map, $gicentre$elm_vegalite$VegaLite$dateTimeProperty, dMin),
										A2($elm$core$List$map, $gicentre$elm_vegalite$VegaLite$dateTimeProperty, dMax)
									]));
						}
					}
				}
			}();
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'field',
					$elm$json$Json$Encode$string(field)),
					_Utils_Tuple2('range', values)
				]);
		case 8:
			var field = f.a;
			var vals = f.b;
			var values = function () {
				switch (vals.$) {
					case 2:
						var xs = vals.a;
						return A2($elm$json$Json$Encode$list, $elm$json$Json$Encode$float, xs);
					case 1:
						var ds = vals.a;
						return A2(
							$elm$json$Json$Encode$list,
							function (d) {
								return $elm$json$Json$Encode$object(
									A2($elm$core$List$map, $gicentre$elm_vegalite$VegaLite$dateTimeProperty, d));
							},
							ds);
					case 3:
						var ss = vals.a;
						return A2($elm$json$Json$Encode$list, $elm$json$Json$Encode$string, ss);
					default:
						var bs = vals.a;
						return A2($elm$json$Json$Encode$list, $elm$json$Json$Encode$bool, bs);
				}
			}();
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'field',
					$elm$json$Json$Encode$string(field)),
					_Utils_Tuple2('oneOf', values)
				]);
		case 10:
			var field = f.a;
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'field',
					$elm$json$Json$Encode$string(field)),
					_Utils_Tuple2(
					'valid',
					$elm$json$Json$Encode$bool(true))
				]);
		default:
			return _List_Nil;
	}
};
var $gicentre$elm_vegalite$VegaLite$ArAria = function (a) {
	return {$: 0, a: a};
};
var $gicentre$elm_vegalite$VegaLite$ariaProperty = function (arProp) {
	if (!arProp.$) {
		var b = arProp.a;
		return _Utils_Tuple2(
			'aria',
			$elm$json$Json$Encode$bool(b));
	} else {
		var d = arProp.a;
		return _Utils_Tuple2(
			'description',
			$elm$json$Json$Encode$string(d));
	}
};
var $gicentre$elm_vegalite$VegaLite$compositionAlignmentLabel = function (ca) {
	switch (ca) {
		case 0:
			return 'none';
		case 1:
			return 'each';
		default:
			return 'all';
	}
};
var $gicentre$elm_vegalite$VegaLite$fontWeightSpec = function (w) {
	switch (w) {
		case 3:
			return $elm$json$Json$Encode$string('normal');
		case 0:
			return $elm$json$Json$Encode$string('bold');
		case 1:
			return $elm$json$Json$Encode$string('bolder');
		case 2:
			return $elm$json$Json$Encode$string('lighter');
		case 4:
			return $elm$json$Json$Encode$float(100);
		case 5:
			return $elm$json$Json$Encode$float(200);
		case 6:
			return $elm$json$Json$Encode$float(300);
		case 7:
			return $elm$json$Json$Encode$float(400);
		case 8:
			return $elm$json$Json$Encode$float(500);
		case 9:
			return $elm$json$Json$Encode$float(600);
		case 10:
			return $elm$json$Json$Encode$float(700);
		case 11:
			return $elm$json$Json$Encode$float(800);
		default:
			return $elm$json$Json$Encode$float(900);
	}
};
var $gicentre$elm_vegalite$VegaLite$hAlignLabel = function (al) {
	switch (al) {
		case 1:
			return 'left';
		case 0:
			return 'center';
		default:
			return 'right';
	}
};
var $gicentre$elm_vegalite$VegaLite$legendOrientLabel = function (orient) {
	switch (orient) {
		case 3:
			return 'left';
		case 7:
			return 'top-left';
		case 6:
			return 'top';
		case 8:
			return 'top-right';
		case 5:
			return 'right';
		case 2:
			return 'bottom-right';
		case 0:
			return 'bottom';
		case 1:
			return 'bottom-left';
		default:
			return 'none';
	}
};
var $gicentre$elm_vegalite$VegaLite$markOrientationLabel = function (orient) {
	if (!orient) {
		return 'horizontal';
	} else {
		return 'vertical';
	}
};
var $gicentre$elm_vegalite$VegaLite$multilineTextSpec = function (tText) {
	var _v0 = A2($elm$core$String$split, '\n', tText);
	if (!_v0.b) {
		return $elm$json$Json$Encode$string('');
	} else {
		if (!_v0.b.b) {
			var s = _v0.a;
			return $elm$json$Json$Encode$string(s);
		} else {
			var ss = _v0;
			return A2($elm$json$Json$Encode$list, $elm$json$Json$Encode$string, ss);
		}
	}
};
var $gicentre$elm_vegalite$VegaLite$overlapStrategySpec = function (strat) {
	switch (strat) {
		case 0:
			return $elm$json$Json$Encode$bool(false);
		case 1:
			return $elm$json$Json$Encode$string('parity');
		default:
			return $elm$json$Json$Encode$string('greedy');
	}
};
var $gicentre$elm_vegalite$VegaLite$symbolLabel = function (sym) {
	switch (sym.$) {
		case 0:
			return 'circle';
		case 1:
			return 'square';
		case 2:
			return 'cross';
		case 3:
			return 'diamond';
		case 4:
			return 'triangle-up';
		case 5:
			return 'triangle-down';
		case 6:
			return 'triangle-left';
		case 7:
			return 'triangle-right';
		case 12:
			return 'triangle';
		case 9:
			return 'stroke';
		case 10:
			return 'arrow';
		case 11:
			return 'wedge';
		default:
			var svgPath = sym.a;
			return svgPath;
	}
};
var $gicentre$elm_vegalite$VegaLite$vAlignLabel = function (al) {
	switch (al) {
		case 0:
			return 'top';
		case 1:
			return 'line-top';
		case 2:
			return 'middle';
		case 3:
			return 'bottom';
		case 4:
			return 'line-bottom';
		default:
			return 'alphabetic';
	}
};
var $gicentre$elm_vegalite$VegaLite$legendProperty = function (legendProp) {
	switch (legendProp.$) {
		case 0:
			var aps = legendProp.a;
			if (!aps.b) {
				return _List_fromArray(
					[
						$gicentre$elm_vegalite$VegaLite$ariaProperty(
						$gicentre$elm_vegalite$VegaLite$ArAria(false))
					]);
			} else {
				return A2($elm$core$List$map, $gicentre$elm_vegalite$VegaLite$ariaProperty, aps);
			}
		case 1:
			var h = legendProp.a;
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'clipHeight',
					$elm$json$Json$Encode$float(h))
				]);
		case 2:
			var n = legendProp.a;
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'columnPadding',
					$elm$json$Json$Encode$float(n))
				]);
		case 28:
			var n = legendProp.a;
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'rowPadding',
					$elm$json$Json$Encode$float(n))
				]);
		case 3:
			var n = legendProp.a;
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'columns',
					$elm$json$Json$Encode$float(n))
				]);
		case 4:
			var r = legendProp.a;
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'cornerRadius',
					$elm$json$Json$Encode$float(r))
				]);
		case 6:
			var s = legendProp.a;
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'fillColor',
					$elm$json$Json$Encode$string(s))
				]);
		case 5:
			var d = legendProp.a;
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'direction',
					$elm$json$Json$Encode$string(
						$gicentre$elm_vegalite$VegaLite$markOrientationLabel(d)))
				]);
		case 47:
			var lType = legendProp.a;
			if (!lType) {
				return _List_fromArray(
					[
						_Utils_Tuple2(
						'type',
						$elm$json$Json$Encode$string('gradient'))
					]);
			} else {
				return _List_fromArray(
					[
						_Utils_Tuple2(
						'type',
						$elm$json$Json$Encode$string('symbol'))
					]);
			}
		case 7:
			var s = legendProp.a;
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'format',
					$elm$json$Json$Encode$string(s))
				]);
		case 8:
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'formatType',
					$elm$json$Json$Encode$string('number'))
				]);
		case 9:
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'formatType',
					$elm$json$Json$Encode$string('time'))
				]);
		case 10:
			var formatter = legendProp.a;
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'formatType',
					$elm$json$Json$Encode$string(formatter))
				]);
		case 11:
			var n = legendProp.a;
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'gradientLength',
					$elm$json$Json$Encode$float(n))
				]);
		case 12:
			var n = legendProp.a;
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'gradientThickness',
					$elm$json$Json$Encode$float(n))
				]);
		case 13:
			var s = legendProp.a;
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'gradientStrokeColor',
					$elm$json$Json$Encode$string(s))
				]);
		case 14:
			var n = legendProp.a;
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'gradientStrokeWidth',
					$elm$json$Json$Encode$float(n))
				]);
		case 15:
			var ga = legendProp.a;
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'gridAlign',
					$elm$json$Json$Encode$string(
						$gicentre$elm_vegalite$VegaLite$compositionAlignmentLabel(ga)))
				]);
		case 16:
			var ha = legendProp.a;
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'labelAlign',
					$elm$json$Json$Encode$string(
						$gicentre$elm_vegalite$VegaLite$hAlignLabel(ha)))
				]);
		case 17:
			var va = legendProp.a;
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'labelBaseline',
					$elm$json$Json$Encode$string(
						$gicentre$elm_vegalite$VegaLite$vAlignLabel(va)))
				]);
		case 18:
			var s = legendProp.a;
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'labelColor',
					$elm$json$Json$Encode$string(s))
				]);
		case 19:
			var s = legendProp.a;
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'labelFont',
					$elm$json$Json$Encode$string(s))
				]);
		case 20:
			var x = legendProp.a;
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'labelFontSize',
					$elm$json$Json$Encode$float(x))
				]);
		case 21:
			var x = legendProp.a;
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'labelLimit',
					$elm$json$Json$Encode$float(x))
				]);
		case 22:
			var x = legendProp.a;
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'labelOffset',
					$elm$json$Json$Encode$float(x))
				]);
		case 23:
			var lo = legendProp.a;
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'labelOverlap',
					$gicentre$elm_vegalite$VegaLite$overlapStrategySpec(lo))
				]);
		case 24:
			var x = legendProp.a;
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'offset',
					$elm$json$Json$Encode$float(x))
				]);
		case 25:
			var orient = legendProp.a;
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'orient',
					$elm$json$Json$Encode$string(
						$gicentre$elm_vegalite$VegaLite$legendOrientLabel(orient)))
				]);
		case 27:
			var x = legendProp.a;
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'padding',
					$elm$json$Json$Encode$float(x))
				]);
		case 29:
			var s = legendProp.a;
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'strokeColor',
					$elm$json$Json$Encode$string(s))
				]);
		case 30:
			var x = legendProp.a;
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'strokeWidth',
					$elm$json$Json$Encode$float(x))
				]);
		case 31:
			var s = legendProp.a;
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'symbolFillColor',
					$elm$json$Json$Encode$string(s))
				]);
		case 32:
			var n = legendProp.a;
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'symbolLimit',
					$elm$json$Json$Encode$int(n))
				]);
		case 35:
			var s = legendProp.a;
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'symbolStrokeColor',
					$elm$json$Json$Encode$string(s))
				]);
		case 36:
			var s = legendProp.a;
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'symbolType',
					$elm$json$Json$Encode$string(
						$gicentre$elm_vegalite$VegaLite$symbolLabel(s)))
				]);
		case 33:
			var x = legendProp.a;
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'symbolSize',
					$elm$json$Json$Encode$float(x))
				]);
		case 34:
			var x = legendProp.a;
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'symbolStrokeWidth',
					$elm$json$Json$Encode$float(x))
				]);
		case 37:
			var x = legendProp.a;
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'tickCount',
					$elm$json$Json$Encode$float(x))
				]);
		case 38:
			var s = legendProp.a;
			return (s === '') ? _List_fromArray(
				[
					_Utils_Tuple2('title', $elm$json$Json$Encode$null)
				]) : _List_fromArray(
				[
					_Utils_Tuple2(
					'title',
					$gicentre$elm_vegalite$VegaLite$multilineTextSpec(s))
				]);
		case 39:
			var ha = legendProp.a;
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'titleAlign',
					$elm$json$Json$Encode$string(
						$gicentre$elm_vegalite$VegaLite$hAlignLabel(ha)))
				]);
		case 40:
			var va = legendProp.a;
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'titleBaseline',
					$elm$json$Json$Encode$string(
						$gicentre$elm_vegalite$VegaLite$vAlignLabel(va)))
				]);
		case 41:
			var s = legendProp.a;
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'titleColor',
					$elm$json$Json$Encode$string(s))
				]);
		case 42:
			var s = legendProp.a;
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'titleFont',
					$elm$json$Json$Encode$string(s))
				]);
		case 43:
			var x = legendProp.a;
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'titleFontSize',
					$elm$json$Json$Encode$float(x))
				]);
		case 44:
			var fw = legendProp.a;
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'titleFontWeight',
					$gicentre$elm_vegalite$VegaLite$fontWeightSpec(fw))
				]);
		case 45:
			var x = legendProp.a;
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'titleLimit',
					$elm$json$Json$Encode$float(x))
				]);
		case 26:
			var orient = legendProp.a;
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'titleOrient',
					$elm$json$Json$Encode$string(
						$gicentre$elm_vegalite$VegaLite$legendOrientLabel(orient)))
				]);
		case 46:
			var x = legendProp.a;
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'titlePadding',
					$elm$json$Json$Encode$float(x))
				]);
		case 48:
			var vals = legendProp.a;
			var list = function () {
				switch (vals.$) {
					case 1:
						var xs = vals.a;
						return A2($elm$json$Json$Encode$list, $elm$json$Json$Encode$float, xs);
					case 0:
						var ds = vals.a;
						return A2(
							$elm$json$Json$Encode$list,
							function (d) {
								return $elm$json$Json$Encode$object(
									A2($elm$core$List$map, $gicentre$elm_vegalite$VegaLite$dateTimeProperty, d));
							},
							ds);
					default:
						var ss = vals.a;
						return A2($elm$json$Json$Encode$list, $elm$json$Json$Encode$string, ss);
				}
			}();
			return _List_fromArray(
				[
					_Utils_Tuple2('values', list)
				]);
		case 49:
			var n = legendProp.a;
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'legendX',
					$elm$json$Json$Encode$float(n))
				]);
		case 50:
			var n = legendProp.a;
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'legendY',
					$elm$json$Json$Encode$float(n))
				]);
		default:
			var n = legendProp.a;
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'zindex',
					$elm$json$Json$Encode$int(n))
				]);
	}
};
var $gicentre$elm_vegalite$VegaLite$measurementLabel = function (mType) {
	switch (mType) {
		case 0:
			return 'nominal';
		case 1:
			return 'ordinal';
		case 2:
			return 'quantitative';
		case 3:
			return 'temporal';
		default:
			return 'geojson';
	}
};
var $elm$core$String$trim = _String_trim;
var $gicentre$elm_vegalite$VegaLite$operationSpec = function (op) {
	switch (op.$) {
		case 0:
			var maybeField = op.a;
			if (maybeField.$ === 1) {
				return $elm$json$Json$Encode$string('argmax');
			} else {
				var f = maybeField.a;
				return (!$elm$core$String$length(
					$elm$core$String$trim(f))) ? $elm$json$Json$Encode$string('argmax') : $elm$json$Json$Encode$object(
					_List_fromArray(
						[
							_Utils_Tuple2(
							'argmax',
							$elm$json$Json$Encode$string(f))
						]));
			}
		case 1:
			var maybeField = op.a;
			if (maybeField.$ === 1) {
				return $elm$json$Json$Encode$string('argmin');
			} else {
				var f = maybeField.a;
				return (!$elm$core$String$length(
					$elm$core$String$trim(f))) ? $elm$json$Json$Encode$string('argmin') : $elm$json$Json$Encode$object(
					_List_fromArray(
						[
							_Utils_Tuple2(
							'argmin',
							$elm$json$Json$Encode$string(f))
						]));
			}
		case 4:
			return $elm$json$Json$Encode$string('count');
		case 2:
			return $elm$json$Json$Encode$string('ci0');
		case 3:
			return $elm$json$Json$Encode$string('ci1');
		case 5:
			return $elm$json$Json$Encode$string('distinct');
		case 6:
			return $elm$json$Json$Encode$string('max');
		case 7:
			return $elm$json$Json$Encode$string('mean');
		case 8:
			return $elm$json$Json$Encode$string('median');
		case 9:
			return $elm$json$Json$Encode$string('min');
		case 10:
			return $elm$json$Json$Encode$string('missing');
		case 11:
			return $elm$json$Json$Encode$string('product');
		case 12:
			return $elm$json$Json$Encode$string('q1');
		case 13:
			return $elm$json$Json$Encode$string('q3');
		case 15:
			return $elm$json$Json$Encode$string('stdev');
		case 16:
			return $elm$json$Json$Encode$string('stdevp');
		case 17:
			return $elm$json$Json$Encode$string('sum');
		case 14:
			return $elm$json$Json$Encode$string('stderr');
		case 18:
			return $elm$json$Json$Encode$string('valid');
		case 19:
			return $elm$json$Json$Encode$string('variance');
		default:
			return $elm$json$Json$Encode$string('variancep');
	}
};
var $gicentre$elm_vegalite$VegaLite$cInterpolateSpec = function (iType) {
	switch (iType.$) {
		case 7:
			var gamma = iType.a;
			return $elm$json$Json$Encode$object(
				_List_fromArray(
					[
						_Utils_Tuple2(
						'type',
						$elm$json$Json$Encode$string('rgb')),
						_Utils_Tuple2(
						'gamma',
						$elm$json$Json$Encode$float(gamma))
					]));
		case 4:
			return $elm$json$Json$Encode$object(
				_List_fromArray(
					[
						_Utils_Tuple2(
						'type',
						$elm$json$Json$Encode$string('hsl'))
					]));
		case 5:
			return $elm$json$Json$Encode$object(
				_List_fromArray(
					[
						_Utils_Tuple2(
						'type',
						$elm$json$Json$Encode$string('hsl-long'))
					]));
		case 6:
			return $elm$json$Json$Encode$object(
				_List_fromArray(
					[
						_Utils_Tuple2(
						'type',
						$elm$json$Json$Encode$string('lab'))
					]));
		case 2:
			return $elm$json$Json$Encode$object(
				_List_fromArray(
					[
						_Utils_Tuple2(
						'type',
						$elm$json$Json$Encode$string('hcl'))
					]));
		case 3:
			return $elm$json$Json$Encode$object(
				_List_fromArray(
					[
						_Utils_Tuple2(
						'type',
						$elm$json$Json$Encode$string('hcl-long'))
					]));
		case 0:
			var gamma = iType.a;
			return $elm$json$Json$Encode$object(
				_List_fromArray(
					[
						_Utils_Tuple2(
						'type',
						$elm$json$Json$Encode$string('cubehelix')),
						_Utils_Tuple2(
						'gamma',
						$elm$json$Json$Encode$float(gamma))
					]));
		default:
			var gamma = iType.a;
			return $elm$json$Json$Encode$object(
				_List_fromArray(
					[
						_Utils_Tuple2(
						'type',
						$elm$json$Json$Encode$string('cubehelix-long')),
						_Utils_Tuple2(
						'gamma',
						$elm$json$Json$Encode$float(gamma))
					]));
	}
};
var $gicentre$elm_vegalite$VegaLite$channelLabel = function (ch) {
	switch (ch) {
		case 0:
			return 'x';
		case 1:
			return 'y';
		case 2:
			return 'x2';
		case 3:
			return 'y2';
		case 4:
			return 'color';
		case 5:
			return 'opacity';
		case 6:
			return 'shape';
		case 7:
			return 'size';
		default:
			return 'strokeDash';
	}
};
var $gicentre$elm_vegalite$VegaLite$scaleDomainSpec = function (sdType) {
	switch (sdType.$) {
		case 0:
			var ns = sdType.a;
			return A2($elm$json$Json$Encode$list, $elm$json$Json$Encode$float, ns);
		case 1:
			var x = sdType.a;
			return $elm$json$Json$Encode$float(x);
		case 2:
			var x = sdType.a;
			return $elm$json$Json$Encode$float(x);
		case 3:
			var x = sdType.a;
			return $elm$json$Json$Encode$float(x);
		case 7:
			var ds = sdType.a;
			return A2(
				$elm$json$Json$Encode$list,
				function (d) {
					return $elm$json$Json$Encode$object(
						A2($elm$core$List$map, $gicentre$elm_vegalite$VegaLite$dateTimeProperty, d));
				},
				ds);
		case 4:
			var d = sdType.a;
			return $elm$json$Json$Encode$object(
				A2($elm$core$List$map, $gicentre$elm_vegalite$VegaLite$dateTimeProperty, d));
		case 5:
			var d = sdType.a;
			return $elm$json$Json$Encode$object(
				A2($elm$core$List$map, $gicentre$elm_vegalite$VegaLite$dateTimeProperty, d));
		case 6:
			var cats = sdType.a;
			return A2($elm$json$Json$Encode$list, $elm$json$Json$Encode$string, cats);
		case 8:
			var selName = sdType.a;
			return $elm$json$Json$Encode$object(
				_List_fromArray(
					[
						_Utils_Tuple2(
						'selection',
						$elm$json$Json$Encode$string(selName))
					]));
		case 10:
			var selName = sdType.a;
			var ch = sdType.b;
			return $elm$json$Json$Encode$object(
				_List_fromArray(
					[
						_Utils_Tuple2(
						'selection',
						$elm$json$Json$Encode$string(selName)),
						_Utils_Tuple2(
						'encoding',
						$elm$json$Json$Encode$string(
							$gicentre$elm_vegalite$VegaLite$channelLabel(ch)))
					]));
		case 9:
			var selName = sdType.a;
			var f = sdType.b;
			return $elm$json$Json$Encode$object(
				_List_fromArray(
					[
						_Utils_Tuple2(
						'selection',
						$elm$json$Json$Encode$string(selName)),
						_Utils_Tuple2(
						'field',
						$elm$json$Json$Encode$string(f))
					]));
		case 12:
			return $elm$json$Json$Encode$string('unaggregated');
		default:
			var scDo = sdType.a;
			return $elm$json$Json$Encode$object(
				_List_fromArray(
					[
						_Utils_Tuple2(
						'unionWith',
						$gicentre$elm_vegalite$VegaLite$scaleDomainSpec(scDo))
					]));
	}
};
var $gicentre$elm_vegalite$VegaLite$scaleLabel = function (sc) {
	switch (sc) {
		case 0:
			return 'linear';
		case 1:
			return 'pow';
		case 4:
			return 'symlog';
		case 2:
			return 'sqrt';
		case 3:
			return 'log';
		case 5:
			return 'time';
		case 6:
			return 'utc';
		case 7:
			return 'ordinal';
		case 8:
			return 'band';
		case 9:
			return 'point';
		case 10:
			return 'bin-ordinal';
		case 11:
			return 'quantile';
		case 12:
			return 'quantize';
		default:
			return 'threshold';
	}
};
var $gicentre$elm_vegalite$VegaLite$timeUnitLabel = function (tu) {
	switch (tu.$) {
		case 0:
			return 'year';
		case 13:
			return 'yeardayofyear';
		case 1:
			return 'yearquarter';
		case 2:
			return 'yearquartermonth';
		case 3:
			return 'yearmonth';
		case 4:
			return 'yearmonthdate';
		case 5:
			return 'yearmonthdatehours';
		case 6:
			return 'yearmonthdatehoursminutes';
		case 7:
			return 'yearmonthdatehoursminutesseconds';
		case 8:
			return 'yearweek';
		case 9:
			return 'yearweekday';
		case 10:
			return 'yearweekdayhours';
		case 11:
			return 'yearweekdayhoursminutes';
		case 12:
			return 'yearweekdayhoursminutesseconds';
		case 14:
			return 'quarter';
		case 15:
			return 'quartermonth';
		case 16:
			return 'month';
		case 17:
			return 'monthdate';
		case 18:
			return 'monthdatehours';
		case 19:
			return 'monthdatehoursminutes';
		case 20:
			return 'monthdatehoursminutesseconds';
		case 21:
			return 'week';
		case 22:
			return 'weekday';
		case 23:
			return 'weekdayhours';
		case 24:
			return 'weekdayhoursminutes';
		case 25:
			return 'weekdayhoursminutesseconds';
		case 26:
			return 'date';
		case 27:
			return 'day';
		case 28:
			return 'dayofyear';
		case 29:
			return 'dayhours';
		case 30:
			return 'dayhoursminutes';
		case 31:
			return 'dayhoursminutesseconds';
		case 32:
			return 'hours';
		case 33:
			return 'hoursminutes';
		case 34:
			return 'hoursminutesseconds';
		case 35:
			return 'minutes';
		case 36:
			return 'minutesseconds';
		case 37:
			return 'seconds';
		case 38:
			return 'secondsmilliseconds';
		case 39:
			return 'milliseconds';
		case 40:
			return '';
		case 41:
			return '';
		default:
			return '';
	}
};
var $gicentre$elm_vegalite$VegaLite$scaleNiceSpec = function (ni) {
	switch (ni.$) {
		case 0:
			return $elm$json$Json$Encode$string('millisecond');
		case 1:
			return $elm$json$Json$Encode$string('second');
		case 2:
			return $elm$json$Json$Encode$string('minute');
		case 3:
			return $elm$json$Json$Encode$string('hour');
		case 4:
			return $elm$json$Json$Encode$string('day');
		case 5:
			return $elm$json$Json$Encode$string('week');
		case 6:
			return $elm$json$Json$Encode$string('month');
		case 7:
			return $elm$json$Json$Encode$string('year');
		case 10:
			var tu = ni.a;
			var step = ni.b;
			return $elm$json$Json$Encode$object(
				_List_fromArray(
					[
						_Utils_Tuple2(
						'interval',
						$elm$json$Json$Encode$string(
							$gicentre$elm_vegalite$VegaLite$timeUnitLabel(tu))),
						_Utils_Tuple2(
						'step',
						$elm$json$Json$Encode$int(step))
					]));
		case 8:
			return $elm$json$Json$Encode$bool(true);
		case 9:
			return $elm$json$Json$Encode$bool(false);
		default:
			var n = ni.a;
			return $elm$json$Json$Encode$int(n);
	}
};
var $gicentre$elm_vegalite$VegaLite$schemeProperty = F2(
	function (schName, extent) {
		if (!extent.b) {
			return _Utils_Tuple2(
				'scheme',
				$elm$json$Json$Encode$string(schName));
		} else {
			if (!extent.b.b) {
				var n = extent.a;
				return _Utils_Tuple2(
					'scheme',
					$elm$json$Json$Encode$object(
						_List_fromArray(
							[
								_Utils_Tuple2(
								'name',
								$elm$json$Json$Encode$string(schName)),
								_Utils_Tuple2(
								'count',
								$elm$json$Json$Encode$float(n))
							])));
			} else {
				if (!extent.b.b.b) {
					var mn = extent.a;
					var _v1 = extent.b;
					var mx = _v1.a;
					return _Utils_Tuple2(
						'scheme',
						$elm$json$Json$Encode$object(
							_List_fromArray(
								[
									_Utils_Tuple2(
									'name',
									$elm$json$Json$Encode$string(schName)),
									_Utils_Tuple2(
									'extent',
									A2(
										$elm$json$Json$Encode$list,
										$elm$json$Json$Encode$float,
										_List_fromArray(
											[mn, mx])))
								])));
				} else {
					return _Utils_Tuple2(
						'scheme',
						$elm$json$Json$Encode$string(schName));
				}
			}
		}
	});
var $gicentre$elm_vegalite$VegaLite$scaleProperty = function (scaleProp) {
	switch (scaleProp.$) {
		case 0:
			var sType = scaleProp.a;
			return _Utils_Tuple2(
				'type',
				$elm$json$Json$Encode$string(
					$gicentre$elm_vegalite$VegaLite$scaleLabel(sType)));
		case 1:
			var sdType = scaleProp.a;
			switch (sdType.$) {
				case 1:
					var x = sdType.a;
					return _Utils_Tuple2(
						'domainMin',
						$elm$json$Json$Encode$float(x));
				case 2:
					var x = sdType.a;
					return _Utils_Tuple2(
						'domainMid',
						$elm$json$Json$Encode$float(x));
				case 3:
					var x = sdType.a;
					return _Utils_Tuple2(
						'domainMax',
						$elm$json$Json$Encode$float(x));
				case 4:
					var d = sdType.a;
					return _Utils_Tuple2(
						'domainMin',
						$elm$json$Json$Encode$object(
							A2($elm$core$List$map, $gicentre$elm_vegalite$VegaLite$dateTimeProperty, d)));
				case 5:
					var d = sdType.a;
					return _Utils_Tuple2(
						'domainMax',
						$elm$json$Json$Encode$object(
							A2($elm$core$List$map, $gicentre$elm_vegalite$VegaLite$dateTimeProperty, d)));
				default:
					return _Utils_Tuple2(
						'domain',
						$gicentre$elm_vegalite$VegaLite$scaleDomainSpec(sdType));
			}
		case 2:
			var range = scaleProp.a;
			switch (range.$) {
				case 4:
					var x = range.a;
					return _Utils_Tuple2(
						'rangeMin',
						$elm$json$Json$Encode$float(x));
				case 5:
					var x = range.a;
					return _Utils_Tuple2(
						'rangeMax',
						$elm$json$Json$Encode$float(x));
				case 0:
					var xs = range.a;
					return _Utils_Tuple2(
						'range',
						A2($elm$json$Json$Encode$list, $elm$json$Json$Encode$float, xs));
				case 2:
					var xss = range.a;
					return _Utils_Tuple2(
						'range',
						A2(
							$elm$json$Json$Encode$list,
							$elm$json$Json$Encode$list($elm$json$Json$Encode$float),
							xss));
				case 1:
					var ss = range.a;
					return _Utils_Tuple2(
						'range',
						A2($elm$json$Json$Encode$list, $elm$json$Json$Encode$string, ss));
				case 3:
					var s = range.a;
					return _Utils_Tuple2(
						'range',
						$elm$json$Json$Encode$string(s));
				default:
					var s = range.a;
					return _Utils_Tuple2(
						'range',
						$elm$json$Json$Encode$object(
							_List_fromArray(
								[
									_Utils_Tuple2(
									'field',
									$elm$json$Json$Encode$string(s))
								])));
			}
		case 3:
			var schName = scaleProp.a;
			var extent = scaleProp.b;
			return A2($gicentre$elm_vegalite$VegaLite$schemeProperty, schName, extent);
		case 4:
			var x = scaleProp.a;
			return _Utils_Tuple2(
				'align',
				$elm$json$Json$Encode$float(x));
		case 5:
			var x = scaleProp.a;
			return _Utils_Tuple2(
				'padding',
				$elm$json$Json$Encode$float(x));
		case 16:
			var x = scaleProp.a;
			return _Utils_Tuple2(
				'base',
				$elm$json$Json$Encode$float(x));
		case 13:
			var x = scaleProp.a;
			return _Utils_Tuple2(
				'exponent',
				$elm$json$Json$Encode$float(x));
		case 14:
			var x = scaleProp.a;
			return _Utils_Tuple2(
				'domainMid',
				$elm$json$Json$Encode$float(x));
		case 15:
			var x = scaleProp.a;
			return _Utils_Tuple2(
				'constant',
				$elm$json$Json$Encode$float(x));
		case 6:
			var x = scaleProp.a;
			return _Utils_Tuple2(
				'paddingInner',
				$elm$json$Json$Encode$float(x));
		case 7:
			var x = scaleProp.a;
			return _Utils_Tuple2(
				'paddingOuter',
				$elm$json$Json$Encode$float(x));
		case 8:
			var b = scaleProp.a;
			return _Utils_Tuple2(
				'round',
				$elm$json$Json$Encode$bool(b));
		case 9:
			var b = scaleProp.a;
			return _Utils_Tuple2(
				'clamp',
				$elm$json$Json$Encode$bool(b));
		case 10:
			var interp = scaleProp.a;
			return _Utils_Tuple2(
				'interpolate',
				$gicentre$elm_vegalite$VegaLite$cInterpolateSpec(interp));
		case 11:
			var ni = scaleProp.a;
			return _Utils_Tuple2(
				'nice',
				$gicentre$elm_vegalite$VegaLite$scaleNiceSpec(ni));
		case 12:
			var b = scaleProp.a;
			return _Utils_Tuple2(
				'zero',
				$elm$json$Json$Encode$bool(b));
		default:
			var b = scaleProp.a;
			return _Utils_Tuple2(
				'reverse',
				$elm$json$Json$Encode$bool(b));
	}
};
var $gicentre$elm_vegalite$VegaLite$sortProperties = function (sp) {
	switch (sp.$) {
		case 0:
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'order',
					$elm$json$Json$Encode$string('ascending'))
				]);
		case 1:
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'order',
					$elm$json$Json$Encode$string('descending'))
				]);
		case 5:
			var ch = sp.a;
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'encoding',
					$elm$json$Json$Encode$string(
						$gicentre$elm_vegalite$VegaLite$channelLabel(ch)))
				]);
		case 4:
			var field = sp.a;
			var op = sp.b;
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'field',
					$elm$json$Json$Encode$string(field)),
					_Utils_Tuple2(
					'op',
					$gicentre$elm_vegalite$VegaLite$operationSpec(op))
				]);
		case 3:
			var arr = sp.a;
			var op = sp.b;
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'field',
					$elm$json$Json$Encode$object(
						_List_fromArray(
							[
								_Utils_Tuple2(
								'repeat',
								$elm$json$Json$Encode$string(
									$gicentre$elm_vegalite$VegaLite$arrangementLabel(arr)))
							]))),
					_Utils_Tuple2(
					'op',
					$gicentre$elm_vegalite$VegaLite$operationSpec(op))
				]);
		default:
			return _List_Nil;
	}
};
var $gicentre$elm_vegalite$VegaLite$timeUnitProperties = function (tUnit) {
	switch (tUnit.$) {
		case 40:
			var tu = tUnit.a;
			return A2(
				$elm$core$List$cons,
				_Utils_Tuple2(
					'utc',
					$elm$json$Json$Encode$bool(true)),
				$gicentre$elm_vegalite$VegaLite$timeUnitProperties(tu));
		case 41:
			var n = tUnit.a;
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'maxbins',
					$elm$json$Json$Encode$int(n))
				]);
		case 42:
			var x = tUnit.a;
			var tu = tUnit.b;
			return A2(
				$elm$core$List$cons,
				_Utils_Tuple2(
					'step',
					$elm$json$Json$Encode$float(x)),
				$gicentre$elm_vegalite$VegaLite$timeUnitProperties(tu));
		default:
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'unit',
					$elm$json$Json$Encode$string(
						$gicentre$elm_vegalite$VegaLite$timeUnitLabel(tUnit)))
				]);
	}
};
var $gicentre$elm_vegalite$VegaLite$timeUnitSpec = function (tUnit) {
	return $elm$json$Json$Encode$object(
		$gicentre$elm_vegalite$VegaLite$timeUnitProperties(tUnit));
};
var $gicentre$elm_vegalite$VegaLite$booleanOpSpec = function (bo) {
	switch (bo.$) {
		case 0:
			var ex = bo.a;
			return $elm$json$Json$Encode$string(ex);
		case 1:
			var f = bo.a;
			return $gicentre$elm_vegalite$VegaLite$filterSpec(f);
		case 2:
			var tr = bo.a;
			var f = bo.b;
			return A2($gicentre$elm_vegalite$VegaLite$trFilterSpec, tr, f);
		case 4:
			var selName = bo.a;
			return $elm$json$Json$Encode$string(selName);
		case 3:
			var sel = bo.a;
			return $elm$json$Json$Encode$object(
				_List_fromArray(
					[
						_Utils_Tuple2(
						'selection',
						$elm$json$Json$Encode$string(sel))
					]));
		case 5:
			var operand1 = bo.a;
			var operand2 = bo.b;
			return $elm$json$Json$Encode$object(
				_List_fromArray(
					[
						_Utils_Tuple2(
						'and',
						A2(
							$elm$json$Json$Encode$list,
							$gicentre$elm_vegalite$VegaLite$booleanOpSpec,
							_List_fromArray(
								[operand1, operand2])))
					]));
		case 6:
			var operand1 = bo.a;
			var operand2 = bo.b;
			return $elm$json$Json$Encode$object(
				_List_fromArray(
					[
						_Utils_Tuple2(
						'or',
						A2(
							$elm$json$Json$Encode$list,
							$gicentre$elm_vegalite$VegaLite$booleanOpSpec,
							_List_fromArray(
								[operand1, operand2])))
					]));
		default:
			var operand = bo.a;
			return $elm$json$Json$Encode$object(
				_List_fromArray(
					[
						_Utils_Tuple2(
						'not',
						$gicentre$elm_vegalite$VegaLite$booleanOpSpec(operand))
					]));
	}
};
var $gicentre$elm_vegalite$VegaLite$filterSpec = function (f) {
	switch (f.$) {
		case 5:
			var ex = f.a;
			return $elm$json$Json$Encode$string(ex);
		case 6:
			var boolExpr = f.a;
			return $gicentre$elm_vegalite$VegaLite$booleanOpSpec(boolExpr);
		default:
			return $elm$json$Json$Encode$object(
				$gicentre$elm_vegalite$VegaLite$filterProperties(f));
	}
};
var $gicentre$elm_vegalite$VegaLite$markChannelProperties = function (field) {
	switch (field.$) {
		case 0:
			var s = field.a;
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'field',
					$elm$json$Json$Encode$string(s))
				]);
		case 1:
			var d = field.a;
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'datum',
					$gicentre$elm_vegalite$VegaLite$dataValueSpec(d))
				]);
		case 2:
			var arr = field.a;
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'field',
					$elm$json$Json$Encode$object(
						_List_fromArray(
							[
								_Utils_Tuple2(
								'repeat',
								$elm$json$Json$Encode$string(
									$gicentre$elm_vegalite$VegaLite$arrangementLabel(arr)))
							])))
				]);
		case 3:
			var arr = field.a;
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'datum',
					$elm$json$Json$Encode$object(
						_List_fromArray(
							[
								_Utils_Tuple2(
								'repeat',
								$elm$json$Json$Encode$string(
									$gicentre$elm_vegalite$VegaLite$arrangementLabel(arr)))
							])))
				]);
		case 4:
			var t = field.a;
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'type',
					$elm$json$Json$Encode$string(
						$gicentre$elm_vegalite$VegaLite$measurementLabel(t)))
				]);
		case 5:
			var sps = field.a;
			return _Utils_eq(sps, _List_Nil) ? _List_fromArray(
				[
					_Utils_Tuple2('scale', $elm$json$Json$Encode$null)
				]) : _List_fromArray(
				[
					_Utils_Tuple2(
					'scale',
					$elm$json$Json$Encode$object(
						A2($elm$core$List$map, $gicentre$elm_vegalite$VegaLite$scaleProperty, sps)))
				]);
		case 13:
			var lps = field.a;
			return _Utils_eq(lps, _List_Nil) ? _List_fromArray(
				[
					_Utils_Tuple2('legend', $elm$json$Json$Encode$null)
				]) : _List_fromArray(
				[
					_Utils_Tuple2(
					'legend',
					$elm$json$Json$Encode$object(
						A2($elm$core$List$concatMap, $gicentre$elm_vegalite$VegaLite$legendProperty, lps)))
				]);
		case 7:
			var bps = field.a;
			return _List_fromArray(
				[
					$gicentre$elm_vegalite$VegaLite$bin(bps)
				]);
		case 6:
			var x = field.a;
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'band',
					$elm$json$Json$Encode$float(x))
				]);
		case 9:
			var sps = field.a;
			_v2$4:
			while (true) {
				if (!sps.b) {
					return _List_fromArray(
						[
							_Utils_Tuple2('sort', $elm$json$Json$Encode$null)
						]);
				} else {
					if (!sps.b.b) {
						switch (sps.a.$) {
							case 0:
								var _v3 = sps.a;
								return _List_fromArray(
									[
										_Utils_Tuple2(
										'sort',
										$elm$json$Json$Encode$string('ascending'))
									]);
							case 1:
								var _v4 = sps.a;
								return _List_fromArray(
									[
										_Utils_Tuple2(
										'sort',
										$elm$json$Json$Encode$string('descending'))
									]);
							case 2:
								var dvs = sps.a.a;
								return _List_fromArray(
									[
										_Utils_Tuple2(
										'sort',
										$gicentre$elm_vegalite$VegaLite$toList(
											$gicentre$elm_vegalite$VegaLite$dataValuesSpecs(dvs)))
									]);
							default:
								break _v2$4;
						}
					} else {
						break _v2$4;
					}
				}
			}
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'sort',
					$elm$json$Json$Encode$object(
						A2($elm$core$List$concatMap, $gicentre$elm_vegalite$VegaLite$sortProperties, sps)))
				]);
		case 8:
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'bin',
					$elm$json$Json$Encode$string('binned'))
				]);
		case 14:
			var selName = field.a;
			var ifClause = field.b;
			var elseClause = field.c;
			return A2(
				$elm$core$List$cons,
				_Utils_Tuple2(
					'condition',
					$elm$json$Json$Encode$object(
						A2(
							$elm$core$List$cons,
							_Utils_Tuple2(
								'selection',
								$gicentre$elm_vegalite$VegaLite$booleanOpSpec(selName)),
							A2($elm$core$List$concatMap, $gicentre$elm_vegalite$VegaLite$markChannelProperties, ifClause)))),
				A2($elm$core$List$concatMap, $gicentre$elm_vegalite$VegaLite$markChannelProperties, elseClause));
		case 15:
			var tests = field.a;
			var elseClause = field.b;
			var testClause = function (_v6) {
				var predicate = _v6.a;
				var ifClause = _v6.b;
				return $elm$json$Json$Encode$object(
					A2(
						$elm$core$List$cons,
						_Utils_Tuple2(
							'test',
							$gicentre$elm_vegalite$VegaLite$booleanOpSpec(predicate)),
						A2($elm$core$List$concatMap, $gicentre$elm_vegalite$VegaLite$markChannelProperties, ifClause)));
			};
			return A2(
				$elm$core$List$cons,
				_Utils_Tuple2(
					'condition',
					function () {
						if (tests.b && (!tests.b.b)) {
							var test = tests.a;
							return testClause(test);
						} else {
							return A2($elm$json$Json$Encode$list, testClause, tests);
						}
					}()),
				A2($elm$core$List$concatMap, $gicentre$elm_vegalite$VegaLite$markChannelProperties, elseClause));
		case 10:
			var tu = field.a;
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'timeUnit',
					$gicentre$elm_vegalite$VegaLite$timeUnitSpec(tu))
				]);
		case 11:
			var t = field.a;
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'title',
					$gicentre$elm_vegalite$VegaLite$multilineTextSpec(t))
				]);
		case 12:
			var op = field.a;
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'aggregate',
					$gicentre$elm_vegalite$VegaLite$operationSpec(op))
				]);
		case 16:
			var s = field.a;
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'value',
					$elm$json$Json$Encode$string(s))
				]);
		case 17:
			var x = field.a;
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'value',
					$elm$json$Json$Encode$float(x))
				]);
		case 18:
			var s = field.a;
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'value',
					$elm$json$Json$Encode$string(s))
				]);
		default:
			var b = field.a;
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'value',
					$elm$json$Json$Encode$bool(b))
				]);
	}
};
var $gicentre$elm_vegalite$VegaLite$trFilterSpec = F2(
	function (mc, f) {
		switch (f.$) {
			case 5:
				var ex = f.a;
				return $elm$json$Json$Encode$string(ex);
			case 6:
				var boolExpr = f.a;
				return $gicentre$elm_vegalite$VegaLite$booleanOpSpec(boolExpr);
			default:
				return $elm$json$Json$Encode$object(
					_Utils_ap(
						$gicentre$elm_vegalite$VegaLite$markChannelProperties(mc),
						$gicentre$elm_vegalite$VegaLite$filterProperties(f)));
		}
	});
var $gicentre$elm_vegalite$VegaLite$color = function (markProps) {
	return $elm$core$List$cons(
		_Utils_Tuple2(
			'color',
			$elm$json$Json$Encode$object(
				A2($elm$core$List$concatMap, $gicentre$elm_vegalite$VegaLite$markChannelProperties, markProps))));
};
var $gicentre$elm_vegalite$VegaLite$anchorLabel = function (an) {
	switch (an) {
		case 0:
			return 'start';
		case 1:
			return 'middle';
		default:
			return 'end';
	}
};
var $gicentre$elm_vegalite$VegaLite$strokeCapLabel = function (cap) {
	switch (cap) {
		case 0:
			return 'butt';
		case 1:
			return 'round';
		default:
			return 'square';
	}
};
var $gicentre$elm_vegalite$VegaLite$axisConfigProperty = function (axisCfg) {
	switch (axisCfg.$) {
		case 0:
			var aps = axisCfg.a;
			if (!aps.b) {
				return _List_fromArray(
					[
						$gicentre$elm_vegalite$VegaLite$ariaProperty(
						$gicentre$elm_vegalite$VegaLite$ArAria(false))
					]);
			} else {
				return A2($elm$core$List$map, $gicentre$elm_vegalite$VegaLite$ariaProperty, aps);
			}
		case 2:
			var b = axisCfg.a;
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'disable',
					$elm$json$Json$Encode$bool(b))
				]);
		case 1:
			var x = axisCfg.a;
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'bandPosition',
					$elm$json$Json$Encode$float(x))
				]);
		case 3:
			var b = axisCfg.a;
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'domain',
					$elm$json$Json$Encode$bool(b))
				]);
		case 4:
			var c = axisCfg.a;
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'domainCap',
					$elm$json$Json$Encode$string(
						$gicentre$elm_vegalite$VegaLite$strokeCapLabel(c)))
				]);
		case 5:
			var c = axisCfg.a;
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'domainColor',
					$elm$json$Json$Encode$string(c))
				]);
		case 6:
			var ds = axisCfg.a;
			return _Utils_eq(ds, _List_Nil) ? _List_fromArray(
				[
					_Utils_Tuple2('domainDash', $elm$json$Json$Encode$null)
				]) : _List_fromArray(
				[
					_Utils_Tuple2(
					'domainDash',
					A2($elm$json$Json$Encode$list, $elm$json$Json$Encode$float, ds))
				]);
		case 7:
			var x = axisCfg.a;
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'domainDashOffset',
					$elm$json$Json$Encode$float(x))
				]);
		case 8:
			var n = axisCfg.a;
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'domainOpacity',
					$elm$json$Json$Encode$float(n))
				]);
		case 9:
			var w = axisCfg.a;
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'domainWidth',
					$elm$json$Json$Encode$float(w))
				]);
		case 36:
			var n = axisCfg.a;
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'maxExtent',
					$elm$json$Json$Encode$float(n))
				]);
		case 37:
			var n = axisCfg.a;
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'minExtent',
					$elm$json$Json$Encode$float(n))
				]);
		case 10:
			var b = axisCfg.a;
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'grid',
					$elm$json$Json$Encode$bool(b))
				]);
		case 11:
			var c = axisCfg.a;
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'gridCap',
					$elm$json$Json$Encode$string(
						$gicentre$elm_vegalite$VegaLite$strokeCapLabel(c)))
				]);
		case 12:
			var c = axisCfg.a;
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'gridColor',
					$elm$json$Json$Encode$string(c))
				]);
		case 13:
			var ds = axisCfg.a;
			return _Utils_eq(ds, _List_Nil) ? _List_fromArray(
				[
					_Utils_Tuple2('gridDash', $elm$json$Json$Encode$null)
				]) : _List_fromArray(
				[
					_Utils_Tuple2(
					'gridDash',
					A2($elm$json$Json$Encode$list, $elm$json$Json$Encode$float, ds))
				]);
		case 14:
			var x = axisCfg.a;
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'gridDashOffset',
					$elm$json$Json$Encode$float(x))
				]);
		case 15:
			var o = axisCfg.a;
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'gridOpacity',
					$elm$json$Json$Encode$float(o))
				]);
		case 16:
			var x = axisCfg.a;
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'gridWidth',
					$elm$json$Json$Encode$float(x))
				]);
		case 17:
			var b = axisCfg.a;
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'labels',
					$elm$json$Json$Encode$bool(b))
				]);
		case 18:
			var ha = axisCfg.a;
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'labelAlign',
					$elm$json$Json$Encode$string(
						$gicentre$elm_vegalite$VegaLite$hAlignLabel(ha)))
				]);
		case 19:
			var a = axisCfg.a;
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'labelAngle',
					$elm$json$Json$Encode$float(a))
				]);
		case 20:
			var va = axisCfg.a;
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'labelBaseline',
					$elm$json$Json$Encode$string(
						$gicentre$elm_vegalite$VegaLite$vAlignLabel(va)))
				]);
		case 21:
			var mn = axisCfg.a;
			if (!mn.$) {
				var n = mn.a;
				return (n === 1) ? _List_fromArray(
					[
						_Utils_Tuple2(
						'labelBound',
						$elm$json$Json$Encode$bool(true))
					]) : _List_fromArray(
					[
						_Utils_Tuple2(
						'labelBound',
						$elm$json$Json$Encode$float(n))
					]);
			} else {
				return _List_fromArray(
					[
						_Utils_Tuple2(
						'labelBound',
						$elm$json$Json$Encode$bool(false))
					]);
			}
		case 24:
			var c = axisCfg.a;
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'labelColor',
					$elm$json$Json$Encode$string(c))
				]);
		case 25:
			var ex = axisCfg.a;
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'labelExpr',
					$elm$json$Json$Encode$string(ex))
				]);
		case 22:
			var mn = axisCfg.a;
			if (!mn.$) {
				var n = mn.a;
				return (!n) ? _List_fromArray(
					[
						_Utils_Tuple2(
						'labelFlush',
						$elm$json$Json$Encode$bool(true))
					]) : _List_fromArray(
					[
						_Utils_Tuple2(
						'labelFlush',
						$elm$json$Json$Encode$float(n))
					]);
			} else {
				return _List_fromArray(
					[
						_Utils_Tuple2(
						'labelFlush',
						$elm$json$Json$Encode$bool(false))
					]);
			}
		case 23:
			var n = axisCfg.a;
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'labelFlushOffset',
					$elm$json$Json$Encode$float(n))
				]);
		case 26:
			var f = axisCfg.a;
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'labelFont',
					$elm$json$Json$Encode$string(f))
				]);
		case 28:
			var s = axisCfg.a;
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'labelFontStyle',
					$elm$json$Json$Encode$string(s))
				]);
		case 27:
			var x = axisCfg.a;
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'labelFontSize',
					$elm$json$Json$Encode$float(x))
				]);
		case 29:
			var fw = axisCfg.a;
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'labelFontWeight',
					$gicentre$elm_vegalite$VegaLite$fontWeightSpec(fw))
				]);
		case 30:
			var x = axisCfg.a;
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'labelLimit',
					$elm$json$Json$Encode$float(x))
				]);
		case 31:
			var x = axisCfg.a;
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'labelLineHeight',
					$elm$json$Json$Encode$float(x))
				]);
		case 32:
			var n = axisCfg.a;
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'labelOpacity',
					$elm$json$Json$Encode$float(n))
				]);
		case 33:
			var strat = axisCfg.a;
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'labelOverlap',
					$gicentre$elm_vegalite$VegaLite$overlapStrategySpec(strat))
				]);
		case 34:
			var pad = axisCfg.a;
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'labelPadding',
					$elm$json$Json$Encode$float(pad))
				]);
		case 35:
			var x = axisCfg.a;
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'labelSeparation',
					$elm$json$Json$Encode$float(x))
				]);
		case 38:
			var b = axisCfg.a;
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'ticks',
					$elm$json$Json$Encode$bool(b))
				]);
		case 39:
			var c = axisCfg.a;
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'tickColor',
					$elm$json$Json$Encode$string(c))
				]);
		case 40:
			var tc = axisCfg.a;
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'tickCount',
					$gicentre$elm_vegalite$VegaLite$scaleNiceSpec(tc))
				]);
		case 41:
			var ds = axisCfg.a;
			return _Utils_eq(ds, _List_Nil) ? _List_fromArray(
				[
					_Utils_Tuple2('tickDash', $elm$json$Json$Encode$null)
				]) : _List_fromArray(
				[
					_Utils_Tuple2(
					'tickDash',
					A2($elm$json$Json$Encode$list, $elm$json$Json$Encode$float, ds))
				]);
		case 42:
			var x = axisCfg.a;
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'tickDashOffset',
					$elm$json$Json$Encode$float(x))
				]);
		case 43:
			var b = axisCfg.a;
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'tickExtra',
					$elm$json$Json$Encode$bool(b))
				]);
		case 44:
			var n = axisCfg.a;
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'tickOffset',
					$elm$json$Json$Encode$float(n))
				]);
		case 45:
			var n = axisCfg.a;
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'tickOpacity',
					$elm$json$Json$Encode$float(n))
				]);
		case 48:
			var n = axisCfg.a;
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'tickMinStep',
					$elm$json$Json$Encode$float(n))
				]);
		case 46:
			var b = axisCfg.a;
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'tickRound',
					$elm$json$Json$Encode$bool(b))
				]);
		case 47:
			var x = axisCfg.a;
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'tickSize',
					$elm$json$Json$Encode$float(x))
				]);
		case 49:
			var x = axisCfg.a;
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'tickWidth',
					$elm$json$Json$Encode$float(x))
				]);
		case 50:
			var al = axisCfg.a;
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'titleAlign',
					$elm$json$Json$Encode$string(
						$gicentre$elm_vegalite$VegaLite$hAlignLabel(al)))
				]);
		case 52:
			var a = axisCfg.a;
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'titleAngle',
					$elm$json$Json$Encode$float(a))
				]);
		case 51:
			var an = axisCfg.a;
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'titleAnchor',
					$elm$json$Json$Encode$string(
						$gicentre$elm_vegalite$VegaLite$anchorLabel(an)))
				]);
		case 53:
			var va = axisCfg.a;
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'titleBaseline',
					$elm$json$Json$Encode$string(
						$gicentre$elm_vegalite$VegaLite$vAlignLabel(va)))
				]);
		case 54:
			var c = axisCfg.a;
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'titleColor',
					$elm$json$Json$Encode$string(c))
				]);
		case 55:
			var f = axisCfg.a;
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'titleFont',
					$elm$json$Json$Encode$string(f))
				]);
		case 57:
			var s = axisCfg.a;
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'titleFontStyle',
					$elm$json$Json$Encode$string(s))
				]);
		case 58:
			var w = axisCfg.a;
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'titleFontWeight',
					$gicentre$elm_vegalite$VegaLite$fontWeightSpec(w))
				]);
		case 56:
			var x = axisCfg.a;
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'titleFontSize',
					$elm$json$Json$Encode$float(x))
				]);
		case 59:
			var x = axisCfg.a;
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'titleLimit',
					$elm$json$Json$Encode$float(x))
				]);
		case 60:
			var x = axisCfg.a;
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'titleLineHeight',
					$elm$json$Json$Encode$float(x))
				]);
		case 61:
			var n = axisCfg.a;
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'titleOpacity',
					$elm$json$Json$Encode$float(n))
				]);
		case 62:
			var x = axisCfg.a;
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'titlePadding',
					$elm$json$Json$Encode$float(x))
				]);
		case 63:
			var x = axisCfg.a;
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'titleX',
					$elm$json$Json$Encode$float(x))
				]);
		default:
			var y = axisCfg.a;
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'titleY',
					$elm$json$Json$Encode$float(y))
				]);
	}
};
var $gicentre$elm_vegalite$VegaLite$axisLabel = function (axChoice) {
	switch (axChoice) {
		case 1:
			return 'axisX';
		case 2:
			return 'axisY';
		default:
			return 'axis';
	}
};
var $gicentre$elm_vegalite$VegaLite$AxGridColor = function (a) {
	return {$: 69, a: a};
};
var $gicentre$elm_vegalite$VegaLite$AxGridDash = function (a) {
	return {$: 70, a: a};
};
var $gicentre$elm_vegalite$VegaLite$AxGridDashOffset = function (a) {
	return {$: 71, a: a};
};
var $gicentre$elm_vegalite$VegaLite$AxGridOpacity = function (a) {
	return {$: 72, a: a};
};
var $gicentre$elm_vegalite$VegaLite$AxGridWidth = function (a) {
	return {$: 73, a: a};
};
var $gicentre$elm_vegalite$VegaLite$AxLabelAlign = function (a) {
	return {$: 20, a: a};
};
var $gicentre$elm_vegalite$VegaLite$AxLabelBaseline = function (a) {
	return {$: 22, a: a};
};
var $gicentre$elm_vegalite$VegaLite$AxLabelColor = function (a) {
	return {$: 24, a: a};
};
var $gicentre$elm_vegalite$VegaLite$AxLabelFont = function (a) {
	return {$: 28, a: a};
};
var $gicentre$elm_vegalite$VegaLite$AxLabelFontSize = function (a) {
	return {$: 29, a: a};
};
var $gicentre$elm_vegalite$VegaLite$AxLabelFontStyle = function (a) {
	return {$: 30, a: a};
};
var $gicentre$elm_vegalite$VegaLite$AxLabelFontWeight = function (a) {
	return {$: 31, a: a};
};
var $gicentre$elm_vegalite$VegaLite$AxLabelOffset = function (a) {
	return {$: 34, a: a};
};
var $gicentre$elm_vegalite$VegaLite$AxLabelOpacity = function (a) {
	return {$: 35, a: a};
};
var $gicentre$elm_vegalite$VegaLite$AxLabelPadding = function (a) {
	return {$: 37, a: a};
};
var $gicentre$elm_vegalite$VegaLite$AxTickColor = function (a) {
	return {$: 40, a: a};
};
var $gicentre$elm_vegalite$VegaLite$AxTickDash = function (a) {
	return {$: 42, a: a};
};
var $gicentre$elm_vegalite$VegaLite$AxTickDashOffset = function (a) {
	return {$: 43, a: a};
};
var $gicentre$elm_vegalite$VegaLite$AxTickOpacity = function (a) {
	return {$: 46, a: a};
};
var $gicentre$elm_vegalite$VegaLite$AxTickSize = function (a) {
	return {$: 49, a: a};
};
var $gicentre$elm_vegalite$VegaLite$AxTickWidth = function (a) {
	return {$: 50, a: a};
};
var $elm$core$Tuple$second = function (_v0) {
	var y = _v0.b;
	return y;
};
var $gicentre$elm_vegalite$VegaLite$sideLabel = function (side) {
	switch (side) {
		case 0:
			return 'top';
		case 1:
			return 'bottom';
		case 2:
			return 'left';
		default:
			return 'right';
	}
};
var $gicentre$elm_vegalite$VegaLite$axisProperty = function (axisProp) {
	switch (axisProp.$) {
		case 0:
			var aps = axisProp.a;
			if (!aps.b) {
				return _List_fromArray(
					[
						$gicentre$elm_vegalite$VegaLite$ariaProperty(
						$gicentre$elm_vegalite$VegaLite$ArAria(false))
					]);
			} else {
				return A2($elm$core$List$map, $gicentre$elm_vegalite$VegaLite$ariaProperty, aps);
			}
		case 1:
			var n = axisProp.a;
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'bandPosition',
					$elm$json$Json$Encode$float(n))
				]);
		case 75:
			var predicate = axisProp.a;
			var cap = axisProp.b;
			var firstProp = A2(
				$elm$core$Basics$composeR,
				$elm$core$List$head,
				$elm$core$Maybe$withDefault(
					_Utils_Tuple2('', $elm$json$Json$Encode$null)));
			var _v2 = function () {
				switch (cap.$) {
					case 0:
						var ha1 = cap.a;
						var ha2 = cap.b;
						return _Utils_Tuple2(
							firstProp(
								$gicentre$elm_vegalite$VegaLite$axisProperty(
									$gicentre$elm_vegalite$VegaLite$AxLabelAlign(ha1))),
							firstProp(
								$gicentre$elm_vegalite$VegaLite$axisProperty(
									$gicentre$elm_vegalite$VegaLite$AxLabelAlign(ha2))));
					case 1:
						var va1 = cap.a;
						var va2 = cap.b;
						return _Utils_Tuple2(
							firstProp(
								$gicentre$elm_vegalite$VegaLite$axisProperty(
									$gicentre$elm_vegalite$VegaLite$AxLabelBaseline(va1))),
							firstProp(
								$gicentre$elm_vegalite$VegaLite$axisProperty(
									$gicentre$elm_vegalite$VegaLite$AxLabelBaseline(va2))));
					case 2:
						var c1 = cap.a;
						var c2 = cap.b;
						return _Utils_Tuple2(
							firstProp(
								$gicentre$elm_vegalite$VegaLite$axisProperty(
									$gicentre$elm_vegalite$VegaLite$AxLabelColor(c1))),
							firstProp(
								$gicentre$elm_vegalite$VegaLite$axisProperty(
									$gicentre$elm_vegalite$VegaLite$AxLabelColor(c2))));
					case 3:
						var f1 = cap.a;
						var f2 = cap.b;
						return _Utils_Tuple2(
							firstProp(
								$gicentre$elm_vegalite$VegaLite$axisProperty(
									$gicentre$elm_vegalite$VegaLite$AxLabelFont(f1))),
							firstProp(
								$gicentre$elm_vegalite$VegaLite$axisProperty(
									$gicentre$elm_vegalite$VegaLite$AxLabelFont(f2))));
					case 4:
						var s1 = cap.a;
						var s2 = cap.b;
						return _Utils_Tuple2(
							firstProp(
								$gicentre$elm_vegalite$VegaLite$axisProperty(
									$gicentre$elm_vegalite$VegaLite$AxLabelFontSize(s1))),
							firstProp(
								$gicentre$elm_vegalite$VegaLite$axisProperty(
									$gicentre$elm_vegalite$VegaLite$AxLabelFontSize(s2))));
					case 5:
						var s1 = cap.a;
						var s2 = cap.b;
						return _Utils_Tuple2(
							firstProp(
								$gicentre$elm_vegalite$VegaLite$axisProperty(
									$gicentre$elm_vegalite$VegaLite$AxLabelFontStyle(s1))),
							firstProp(
								$gicentre$elm_vegalite$VegaLite$axisProperty(
									$gicentre$elm_vegalite$VegaLite$AxLabelFontStyle(s2))));
					case 6:
						var w1 = cap.a;
						var w2 = cap.b;
						return _Utils_Tuple2(
							firstProp(
								$gicentre$elm_vegalite$VegaLite$axisProperty(
									$gicentre$elm_vegalite$VegaLite$AxLabelFontWeight(w1))),
							firstProp(
								$gicentre$elm_vegalite$VegaLite$axisProperty(
									$gicentre$elm_vegalite$VegaLite$AxLabelFontWeight(w2))));
					case 7:
						var o1 = cap.a;
						var o2 = cap.b;
						return _Utils_Tuple2(
							firstProp(
								$gicentre$elm_vegalite$VegaLite$axisProperty(
									$gicentre$elm_vegalite$VegaLite$AxLabelOffset(o1))),
							firstProp(
								$gicentre$elm_vegalite$VegaLite$axisProperty(
									$gicentre$elm_vegalite$VegaLite$AxLabelOffset(o2))));
					case 8:
						var o1 = cap.a;
						var o2 = cap.b;
						return _Utils_Tuple2(
							firstProp(
								$gicentre$elm_vegalite$VegaLite$axisProperty(
									$gicentre$elm_vegalite$VegaLite$AxLabelOpacity(o1))),
							firstProp(
								$gicentre$elm_vegalite$VegaLite$axisProperty(
									$gicentre$elm_vegalite$VegaLite$AxLabelOpacity(o2))));
					case 9:
						var p1 = cap.a;
						var p2 = cap.b;
						return _Utils_Tuple2(
							firstProp(
								$gicentre$elm_vegalite$VegaLite$axisProperty(
									$gicentre$elm_vegalite$VegaLite$AxLabelPadding(p1))),
							firstProp(
								$gicentre$elm_vegalite$VegaLite$axisProperty(
									$gicentre$elm_vegalite$VegaLite$AxLabelPadding(p2))));
					case 10:
						var c1 = cap.a;
						var c2 = cap.b;
						return _Utils_Tuple2(
							firstProp(
								$gicentre$elm_vegalite$VegaLite$axisProperty(
									$gicentre$elm_vegalite$VegaLite$AxTickColor(c1))),
							firstProp(
								$gicentre$elm_vegalite$VegaLite$axisProperty(
									$gicentre$elm_vegalite$VegaLite$AxTickColor(c2))));
					case 11:
						var d1 = cap.a;
						var d2 = cap.b;
						return _Utils_Tuple2(
							firstProp(
								$gicentre$elm_vegalite$VegaLite$axisProperty(
									$gicentre$elm_vegalite$VegaLite$AxTickDash(d1))),
							firstProp(
								$gicentre$elm_vegalite$VegaLite$axisProperty(
									$gicentre$elm_vegalite$VegaLite$AxTickDash(d2))));
					case 12:
						var o1 = cap.a;
						var o2 = cap.b;
						return _Utils_Tuple2(
							firstProp(
								$gicentre$elm_vegalite$VegaLite$axisProperty(
									$gicentre$elm_vegalite$VegaLite$AxTickDashOffset(o1))),
							firstProp(
								$gicentre$elm_vegalite$VegaLite$axisProperty(
									$gicentre$elm_vegalite$VegaLite$AxTickDashOffset(o2))));
					case 13:
						var o1 = cap.a;
						var o2 = cap.b;
						return _Utils_Tuple2(
							firstProp(
								$gicentre$elm_vegalite$VegaLite$axisProperty(
									$gicentre$elm_vegalite$VegaLite$AxTickOpacity(o1))),
							firstProp(
								$gicentre$elm_vegalite$VegaLite$axisProperty(
									$gicentre$elm_vegalite$VegaLite$AxTickOpacity(o2))));
					case 19:
						var s1 = cap.a;
						var s2 = cap.b;
						return _Utils_Tuple2(
							firstProp(
								$gicentre$elm_vegalite$VegaLite$axisProperty(
									$gicentre$elm_vegalite$VegaLite$AxTickSize(s1))),
							firstProp(
								$gicentre$elm_vegalite$VegaLite$axisProperty(
									$gicentre$elm_vegalite$VegaLite$AxTickSize(s2))));
					case 14:
						var w1 = cap.a;
						var w2 = cap.b;
						return _Utils_Tuple2(
							firstProp(
								$gicentre$elm_vegalite$VegaLite$axisProperty(
									$gicentre$elm_vegalite$VegaLite$AxTickWidth(w1))),
							firstProp(
								$gicentre$elm_vegalite$VegaLite$axisProperty(
									$gicentre$elm_vegalite$VegaLite$AxTickWidth(w2))));
					case 15:
						var c1 = cap.a;
						var c2 = cap.b;
						return _Utils_Tuple2(
							firstProp(
								$gicentre$elm_vegalite$VegaLite$axisProperty(
									$gicentre$elm_vegalite$VegaLite$AxGridColor(c1))),
							firstProp(
								$gicentre$elm_vegalite$VegaLite$axisProperty(
									$gicentre$elm_vegalite$VegaLite$AxGridColor(c2))));
					case 16:
						var d1 = cap.a;
						var d2 = cap.b;
						return _Utils_Tuple2(
							firstProp(
								$gicentre$elm_vegalite$VegaLite$axisProperty(
									$gicentre$elm_vegalite$VegaLite$AxGridDash(d1))),
							firstProp(
								$gicentre$elm_vegalite$VegaLite$axisProperty(
									$gicentre$elm_vegalite$VegaLite$AxGridDash(d2))));
					case 17:
						var o1 = cap.a;
						var o2 = cap.b;
						return _Utils_Tuple2(
							firstProp(
								$gicentre$elm_vegalite$VegaLite$axisProperty(
									$gicentre$elm_vegalite$VegaLite$AxGridDashOffset(o1))),
							firstProp(
								$gicentre$elm_vegalite$VegaLite$axisProperty(
									$gicentre$elm_vegalite$VegaLite$AxGridDashOffset(o2))));
					case 18:
						var o1 = cap.a;
						var o2 = cap.b;
						return _Utils_Tuple2(
							firstProp(
								$gicentre$elm_vegalite$VegaLite$axisProperty(
									$gicentre$elm_vegalite$VegaLite$AxGridOpacity(o1))),
							firstProp(
								$gicentre$elm_vegalite$VegaLite$axisProperty(
									$gicentre$elm_vegalite$VegaLite$AxGridOpacity(o2))));
					default:
						var w1 = cap.a;
						var w2 = cap.b;
						return _Utils_Tuple2(
							firstProp(
								$gicentre$elm_vegalite$VegaLite$axisProperty(
									$gicentre$elm_vegalite$VegaLite$AxGridWidth(w1))),
							firstProp(
								$gicentre$elm_vegalite$VegaLite$axisProperty(
									$gicentre$elm_vegalite$VegaLite$AxGridWidth(w2))));
				}
			}();
			var ifProp = _v2.a;
			var elseProp = _v2.b;
			return _List_fromArray(
				[
					_Utils_Tuple2(
					ifProp.a,
					$elm$json$Json$Encode$object(
						_List_fromArray(
							[
								_Utils_Tuple2(
								'condition',
								$elm$json$Json$Encode$object(
									_List_fromArray(
										[
											_Utils_Tuple2(
											'test',
											$gicentre$elm_vegalite$VegaLite$booleanOpSpec(predicate)),
											_Utils_Tuple2('value', ifProp.b)
										]))),
								_Utils_Tuple2('value', elseProp.b)
							])))
				]);
		case 15:
			var fmt = axisProp.a;
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'format',
					$elm$json$Json$Encode$string(fmt))
				]);
		case 16:
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'formatType',
					$elm$json$Json$Encode$string('number'))
				]);
		case 17:
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'formatType',
					$elm$json$Json$Encode$string('time'))
				]);
		case 18:
			var formatter = axisProp.a;
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'formatType',
					$elm$json$Json$Encode$string(formatter))
				]);
		case 68:
			var c = axisProp.a;
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'gridCap',
					$elm$json$Json$Encode$string(
						$gicentre$elm_vegalite$VegaLite$strokeCapLabel(c)))
				]);
		case 69:
			var c = axisProp.a;
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'gridColor',
					$elm$json$Json$Encode$string(c))
				]);
		case 70:
			var ds = axisProp.a;
			return _Utils_eq(ds, _List_Nil) ? _List_fromArray(
				[
					_Utils_Tuple2('gridDash', $elm$json$Json$Encode$null)
				]) : _List_fromArray(
				[
					_Utils_Tuple2(
					'gridDash',
					A2($elm$json$Json$Encode$list, $elm$json$Json$Encode$float, ds))
				]);
		case 71:
			var x = axisProp.a;
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'gridDashOffset',
					$elm$json$Json$Encode$float(x))
				]);
		case 72:
			var o = axisProp.a;
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'gridOpacity',
					$elm$json$Json$Encode$float(o))
				]);
		case 73:
			var w = axisProp.a;
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'gridWidth',
					$elm$json$Json$Encode$float(w))
				]);
		case 19:
			var b = axisProp.a;
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'labels',
					$elm$json$Json$Encode$bool(b))
				]);
		case 20:
			var ha = axisProp.a;
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'labelAlign',
					$elm$json$Json$Encode$string(
						$gicentre$elm_vegalite$VegaLite$hAlignLabel(ha)))
				]);
		case 22:
			var va = axisProp.a;
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'labelBaseline',
					$elm$json$Json$Encode$string(
						$gicentre$elm_vegalite$VegaLite$vAlignLabel(va)))
				]);
		case 23:
			var mn = axisProp.a;
			if (!mn.$) {
				var n = mn.a;
				return (n === 1) ? _List_fromArray(
					[
						_Utils_Tuple2(
						'labelBound',
						$elm$json$Json$Encode$bool(true))
					]) : _List_fromArray(
					[
						_Utils_Tuple2(
						'labelBound',
						$elm$json$Json$Encode$float(n))
					]);
			} else {
				return _List_fromArray(
					[
						_Utils_Tuple2(
						'labelBound',
						$elm$json$Json$Encode$bool(false))
					]);
			}
		case 21:
			var a = axisProp.a;
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'labelAngle',
					$elm$json$Json$Encode$float(a))
				]);
		case 24:
			var s = axisProp.a;
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'labelColor',
					$elm$json$Json$Encode$string(s))
				]);
		case 25:
			var ex = axisProp.a;
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'labelExpr',
					$elm$json$Json$Encode$string(ex))
				]);
		case 26:
			var mn = axisProp.a;
			if (!mn.$) {
				var n = mn.a;
				return (n === 1) ? _List_fromArray(
					[
						_Utils_Tuple2(
						'labelFlush',
						$elm$json$Json$Encode$bool(true))
					]) : _List_fromArray(
					[
						_Utils_Tuple2(
						'labelFlush',
						$elm$json$Json$Encode$float(n))
					]);
			} else {
				return _List_fromArray(
					[
						_Utils_Tuple2(
						'labelFlush',
						$elm$json$Json$Encode$bool(false))
					]);
			}
		case 27:
			var n = axisProp.a;
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'labelFlushOffset',
					$elm$json$Json$Encode$float(n))
				]);
		case 28:
			var s = axisProp.a;
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'labelFont',
					$elm$json$Json$Encode$string(s))
				]);
		case 29:
			var n = axisProp.a;
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'labelFontSize',
					$elm$json$Json$Encode$float(n))
				]);
		case 30:
			var s = axisProp.a;
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'labelFontStyle',
					$elm$json$Json$Encode$string(s))
				]);
		case 31:
			var fw = axisProp.a;
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'labelFontWeight',
					$gicentre$elm_vegalite$VegaLite$fontWeightSpec(fw))
				]);
		case 33:
			var x = axisProp.a;
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'labelLimit',
					$elm$json$Json$Encode$float(x))
				]);
		case 32:
			var x = axisProp.a;
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'labelLineHeight',
					$elm$json$Json$Encode$float(x))
				]);
		case 34:
			var x = axisProp.a;
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'labelOffset',
					$elm$json$Json$Encode$float(x))
				]);
		case 35:
			var x = axisProp.a;
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'labelOpacity',
					$elm$json$Json$Encode$float(x))
				]);
		case 36:
			var strat = axisProp.a;
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'labelOverlap',
					$gicentre$elm_vegalite$VegaLite$overlapStrategySpec(strat))
				]);
		case 37:
			var pad = axisProp.a;
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'labelPadding',
					$elm$json$Json$Encode$float(pad))
				]);
		case 38:
			var x = axisProp.a;
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'labelSeparation',
					$elm$json$Json$Encode$float(x))
				]);
		case 8:
			var b = axisProp.a;
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'domain',
					$elm$json$Json$Encode$bool(b))
				]);
		case 9:
			var c = axisProp.a;
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'domainCap',
					$elm$json$Json$Encode$string(
						$gicentre$elm_vegalite$VegaLite$strokeCapLabel(c)))
				]);
		case 10:
			var c = axisProp.a;
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'domainColor',
					$elm$json$Json$Encode$string(c))
				]);
		case 11:
			var ds = axisProp.a;
			return _Utils_eq(ds, _List_Nil) ? _List_fromArray(
				[
					_Utils_Tuple2('domainDash', $elm$json$Json$Encode$null)
				]) : _List_fromArray(
				[
					_Utils_Tuple2(
					'domainDash',
					A2($elm$json$Json$Encode$list, $elm$json$Json$Encode$float, ds))
				]);
		case 12:
			var x = axisProp.a;
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'domainDashOffset',
					$elm$json$Json$Encode$float(x))
				]);
		case 13:
			var x = axisProp.a;
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'domainOpacity',
					$elm$json$Json$Encode$float(x))
				]);
		case 14:
			var x = axisProp.a;
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'domainWidth',
					$elm$json$Json$Encode$float(x))
				]);
		case 67:
			var b = axisProp.a;
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'grid',
					$elm$json$Json$Encode$bool(b))
				]);
		case 2:
			var x = axisProp.a;
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'maxExtent',
					$elm$json$Json$Encode$float(x))
				]);
		case 3:
			var x = axisProp.a;
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'minExtent',
					$elm$json$Json$Encode$float(x))
				]);
		case 4:
			var side = axisProp.a;
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'orient',
					$elm$json$Json$Encode$string(
						$gicentre$elm_vegalite$VegaLite$sideLabel(side)))
				]);
		case 5:
			var x = axisProp.a;
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'offset',
					$elm$json$Json$Encode$float(x))
				]);
		case 6:
			var x = axisProp.a;
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'position',
					$elm$json$Json$Encode$float(x))
				]);
		case 39:
			var ss = axisProp.a;
			if (ss.b && (!ss.b.b)) {
				var s = ss.a;
				return _List_fromArray(
					[
						_Utils_Tuple2(
						'style',
						$elm$json$Json$Encode$string(s))
					]);
			} else {
				return _List_fromArray(
					[
						_Utils_Tuple2(
						'style',
						A2($elm$json$Json$Encode$list, $elm$json$Json$Encode$string, ss))
					]);
			}
		case 7:
			var n = axisProp.a;
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'zindex',
					$elm$json$Json$Encode$int(n))
				]);
		case 48:
			var b = axisProp.a;
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'ticks',
					$elm$json$Json$Encode$bool(b))
				]);
		case 40:
			var s = axisProp.a;
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'tickColor',
					$elm$json$Json$Encode$string(s))
				]);
		case 41:
			var tc = axisProp.a;
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'tickCount',
					$gicentre$elm_vegalite$VegaLite$scaleNiceSpec(tc))
				]);
		case 42:
			var ds = axisProp.a;
			return _Utils_eq(ds, _List_Nil) ? _List_fromArray(
				[
					_Utils_Tuple2('tickDash', $elm$json$Json$Encode$null)
				]) : _List_fromArray(
				[
					_Utils_Tuple2(
					'tickDash',
					A2($elm$json$Json$Encode$list, $elm$json$Json$Encode$float, ds))
				]);
		case 43:
			var x = axisProp.a;
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'tickDashOffset',
					$elm$json$Json$Encode$float(x))
				]);
		case 44:
			var b = axisProp.a;
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'tickExtra',
					$elm$json$Json$Encode$bool(b))
				]);
		case 45:
			var x = axisProp.a;
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'tickOffset',
					$elm$json$Json$Encode$float(x))
				]);
		case 46:
			var x = axisProp.a;
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'tickOpacity',
					$elm$json$Json$Encode$float(x))
				]);
		case 47:
			var b = axisProp.a;
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'tickRound',
					$elm$json$Json$Encode$bool(b))
				]);
		case 74:
			var x = axisProp.a;
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'tickMinStep',
					$elm$json$Json$Encode$float(x))
				]);
		case 49:
			var sz = axisProp.a;
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'tickSize',
					$elm$json$Json$Encode$float(sz))
				]);
		case 50:
			var x = axisProp.a;
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'tickWidth',
					$elm$json$Json$Encode$float(x))
				]);
		case 51:
			var vals = axisProp.a;
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'values',
					$gicentre$elm_vegalite$VegaLite$toList(
						$gicentre$elm_vegalite$VegaLite$dataValuesSpecs(vals)))
				]);
		case 52:
			var s = axisProp.a;
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'title',
					$gicentre$elm_vegalite$VegaLite$multilineTextSpec(s))
				]);
		case 53:
			var al = axisProp.a;
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'titleAlign',
					$elm$json$Json$Encode$string(
						$gicentre$elm_vegalite$VegaLite$hAlignLabel(al)))
				]);
		case 55:
			var a = axisProp.a;
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'titleAngle',
					$elm$json$Json$Encode$float(a))
				]);
		case 54:
			var an = axisProp.a;
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'titleAnchor',
					$elm$json$Json$Encode$string(
						$gicentre$elm_vegalite$VegaLite$anchorLabel(an)))
				]);
		case 56:
			var va = axisProp.a;
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'titleBaseline',
					$elm$json$Json$Encode$string(
						$gicentre$elm_vegalite$VegaLite$vAlignLabel(va)))
				]);
		case 57:
			var s = axisProp.a;
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'titleColor',
					$elm$json$Json$Encode$string(s))
				]);
		case 58:
			var s = axisProp.a;
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'titleFont',
					$elm$json$Json$Encode$string(s))
				]);
		case 59:
			var x = axisProp.a;
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'titleFontSize',
					$elm$json$Json$Encode$float(x))
				]);
		case 60:
			var s = axisProp.a;
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'titleFontStyle',
					$elm$json$Json$Encode$string(s))
				]);
		case 61:
			var fw = axisProp.a;
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'titleFontWeight',
					$gicentre$elm_vegalite$VegaLite$fontWeightSpec(fw))
				]);
		case 62:
			var x = axisProp.a;
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'titleLimit',
					$elm$json$Json$Encode$float(x))
				]);
		case 63:
			var x = axisProp.a;
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'titleOpacity',
					$elm$json$Json$Encode$float(x))
				]);
		case 64:
			var pad = axisProp.a;
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'titlePadding',
					$elm$json$Json$Encode$float(pad))
				]);
		case 65:
			var x = axisProp.a;
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'titleX',
					$elm$json$Json$Encode$float(x))
				]);
		default:
			var x = axisProp.a;
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'titleY',
					$elm$json$Json$Encode$float(x))
				]);
	}
};
var $gicentre$elm_vegalite$VegaLite$concatConfigProperty = function (ccp) {
	if (!ccp.$) {
		var n = ccp.a;
		return _Utils_Tuple2(
			'columns',
			$elm$json$Json$Encode$int(n));
	} else {
		var x = ccp.a;
		return _Utils_Tuple2(
			'spacing',
			$elm$json$Json$Encode$float(x));
	}
};
var $gicentre$elm_vegalite$VegaLite$facetConfigProperty = function (fcp) {
	if (!fcp.$) {
		var n = fcp.a;
		return _Utils_Tuple2(
			'columns',
			$elm$json$Json$Encode$int(n));
	} else {
		var x = fcp.a;
		return _Utils_Tuple2(
			'spacing',
			$elm$json$Json$Encode$float(x));
	}
};
var $gicentre$elm_vegalite$VegaLite$fieldTitleLabel = function (ftp) {
	switch (ftp) {
		case 0:
			return 'verbal';
		case 1:
			return 'functional';
		default:
			return 'plain';
	}
};
var $gicentre$elm_vegalite$VegaLite$headerProperty = function (hProp) {
	switch (hProp.$) {
		case 0:
			var fmt = hProp.a;
			return _Utils_Tuple2(
				'format',
				$elm$json$Json$Encode$string(fmt));
		case 1:
			return _Utils_Tuple2(
				'formatType',
				$elm$json$Json$Encode$string('number'));
		case 2:
			return _Utils_Tuple2(
				'formatType',
				$elm$json$Json$Encode$string('time'));
		case 3:
			var formatter = hProp.a;
			return _Utils_Tuple2(
				'formatType',
				$elm$json$Json$Encode$string(formatter));
		case 5:
			var ha = hProp.a;
			return _Utils_Tuple2(
				'labelAlign',
				$elm$json$Json$Encode$string(
					$gicentre$elm_vegalite$VegaLite$hAlignLabel(ha)));
		case 6:
			var a = hProp.a;
			return _Utils_Tuple2(
				'labelAnchor',
				$elm$json$Json$Encode$string(
					$gicentre$elm_vegalite$VegaLite$anchorLabel(a)));
		case 7:
			var x = hProp.a;
			return _Utils_Tuple2(
				'labelAngle',
				$elm$json$Json$Encode$float(x));
		case 8:
			var va = hProp.a;
			return _Utils_Tuple2(
				'labelBaseline',
				$elm$json$Json$Encode$string(
					$gicentre$elm_vegalite$VegaLite$vAlignLabel(va)));
		case 9:
			var s = hProp.a;
			return _Utils_Tuple2(
				'labelColor',
				$elm$json$Json$Encode$string(s));
		case 10:
			var s = hProp.a;
			return _Utils_Tuple2(
				'labelExpr',
				$elm$json$Json$Encode$string(s));
		case 11:
			var s = hProp.a;
			return _Utils_Tuple2(
				'labelFont',
				$elm$json$Json$Encode$string(s));
		case 12:
			var x = hProp.a;
			return _Utils_Tuple2(
				'labelFontSize',
				$elm$json$Json$Encode$float(x));
		case 13:
			var s = hProp.a;
			return _Utils_Tuple2(
				'labelFontStyle',
				$elm$json$Json$Encode$string(s));
		case 14:
			var fw = hProp.a;
			return _Utils_Tuple2(
				'labelFontWeight',
				$gicentre$elm_vegalite$VegaLite$fontWeightSpec(fw));
		case 15:
			var x = hProp.a;
			return _Utils_Tuple2(
				'labelLimit',
				$elm$json$Json$Encode$float(x));
		case 16:
			var x = hProp.a;
			return _Utils_Tuple2(
				'labelLineHeight',
				$elm$json$Json$Encode$float(x));
		case 17:
			var orient = hProp.a;
			return _Utils_Tuple2(
				'labelOrient',
				$elm$json$Json$Encode$string(
					$gicentre$elm_vegalite$VegaLite$sideLabel(orient)));
		case 18:
			var x = hProp.a;
			return _Utils_Tuple2(
				'labelPadding',
				$elm$json$Json$Encode$float(x));
		case 19:
			var b = hProp.a;
			return _Utils_Tuple2(
				'labels',
				$elm$json$Json$Encode$bool(b));
		case 20:
			var orient = hProp.a;
			return _Utils_Tuple2(
				'orient',
				$elm$json$Json$Encode$string(
					$gicentre$elm_vegalite$VegaLite$sideLabel(orient)));
		case 4:
			var s = hProp.a;
			if (s === '') {
				return _Utils_Tuple2('title', $elm$json$Json$Encode$null);
			} else {
				return _Utils_Tuple2(
					'title',
					$gicentre$elm_vegalite$VegaLite$multilineTextSpec(s));
			}
		case 22:
			var a = hProp.a;
			return _Utils_Tuple2(
				'titleAnchor',
				$elm$json$Json$Encode$string(
					$gicentre$elm_vegalite$VegaLite$anchorLabel(a)));
		case 21:
			var ha = hProp.a;
			return _Utils_Tuple2(
				'titleAlign',
				$elm$json$Json$Encode$string(
					$gicentre$elm_vegalite$VegaLite$hAlignLabel(ha)));
		case 23:
			var x = hProp.a;
			return _Utils_Tuple2(
				'titleAngle',
				$elm$json$Json$Encode$float(x));
		case 24:
			var va = hProp.a;
			return _Utils_Tuple2(
				'titleBaseline',
				$elm$json$Json$Encode$string(
					$gicentre$elm_vegalite$VegaLite$vAlignLabel(va)));
		case 25:
			var s = hProp.a;
			return _Utils_Tuple2(
				'titleColor',
				$elm$json$Json$Encode$string(s));
		case 26:
			var s = hProp.a;
			return _Utils_Tuple2(
				'titleFont',
				$elm$json$Json$Encode$string(s));
		case 29:
			var fw = hProp.a;
			return _Utils_Tuple2(
				'titleFontWeight',
				$gicentre$elm_vegalite$VegaLite$fontWeightSpec(fw));
		case 27:
			var x = hProp.a;
			return _Utils_Tuple2(
				'titleFontSize',
				$elm$json$Json$Encode$float(x));
		case 28:
			var s = hProp.a;
			return _Utils_Tuple2(
				'titleFontStyle',
				$elm$json$Json$Encode$string(s));
		case 30:
			var x = hProp.a;
			return _Utils_Tuple2(
				'titleLimit',
				$elm$json$Json$Encode$float(x));
		case 31:
			var x = hProp.a;
			return _Utils_Tuple2(
				'titleLineHeight',
				$elm$json$Json$Encode$float(x));
		case 32:
			var orient = hProp.a;
			return _Utils_Tuple2(
				'titleOrient',
				$elm$json$Json$Encode$string(
					$gicentre$elm_vegalite$VegaLite$sideLabel(orient)));
		default:
			var x = hProp.a;
			return _Utils_Tuple2(
				'titlePadding',
				$elm$json$Json$Encode$float(x));
	}
};
var $gicentre$elm_vegalite$VegaLite$legendConfigProperty = function (legendConfig) {
	switch (legendConfig.$) {
		case 0:
			var aps = legendConfig.a;
			if (!aps.b) {
				return _List_fromArray(
					[
						$gicentre$elm_vegalite$VegaLite$ariaProperty(
						$gicentre$elm_vegalite$VegaLite$ArAria(false))
					]);
			} else {
				return A2($elm$core$List$map, $gicentre$elm_vegalite$VegaLite$ariaProperty, aps);
			}
		case 1:
			var b = legendConfig.a;
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'disable',
					$elm$json$Json$Encode$bool(b))
				]);
		case 2:
			var h = legendConfig.a;
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'clipHeight',
					$elm$json$Json$Encode$float(h))
				]);
		case 3:
			var n = legendConfig.a;
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'columnPadding',
					$elm$json$Json$Encode$float(n))
				]);
		case 28:
			var n = legendConfig.a;
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'rowPadding',
					$elm$json$Json$Encode$float(n))
				]);
		case 4:
			var n = legendConfig.a;
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'columns',
					$elm$json$Json$Encode$float(n))
				]);
		case 5:
			var r = legendConfig.a;
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'cornerRadius',
					$elm$json$Json$Encode$float(r))
				]);
		case 7:
			var s = legendConfig.a;
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'fillColor',
					$elm$json$Json$Encode$string(s))
				]);
		case 26:
			var orient = legendConfig.a;
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'orient',
					$elm$json$Json$Encode$string(
						$gicentre$elm_vegalite$VegaLite$legendOrientLabel(orient)))
				]);
		case 25:
			var x = legendConfig.a;
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'offset',
					$elm$json$Json$Encode$float(x))
				]);
		case 30:
			var s = legendConfig.a;
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'strokeColor',
					$elm$json$Json$Encode$string(s))
				]);
		case 31:
			var xs = legendConfig.a;
			return _Utils_eq(xs, _List_Nil) ? _List_fromArray(
				[
					_Utils_Tuple2('strokeDash', $elm$json$Json$Encode$null)
				]) : _List_fromArray(
				[
					_Utils_Tuple2(
					'strokeDash',
					A2($elm$json$Json$Encode$list, $elm$json$Json$Encode$float, xs))
				]);
		case 32:
			var x = legendConfig.a;
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'strokeWidth',
					$elm$json$Json$Encode$float(x))
				]);
		case 27:
			var x = legendConfig.a;
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'padding',
					$elm$json$Json$Encode$float(x))
				]);
		case 8:
			var d = legendConfig.a;
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'gradientDirection',
					$elm$json$Json$Encode$string(
						$gicentre$elm_vegalite$VegaLite$markOrientationLabel(d)))
				]);
		case 10:
			var va = legendConfig.a;
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'gradientLabelBaseline',
					$elm$json$Json$Encode$string(
						$gicentre$elm_vegalite$VegaLite$vAlignLabel(va)))
				]);
		case 11:
			var x = legendConfig.a;
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'gradientLabelLimit',
					$elm$json$Json$Encode$float(x))
				]);
		case 12:
			var x = legendConfig.a;
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'gradientLabelOffset',
					$elm$json$Json$Encode$float(x))
				]);
		case 13:
			var s = legendConfig.a;
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'gradientStrokeColor',
					$elm$json$Json$Encode$string(s))
				]);
		case 14:
			var x = legendConfig.a;
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'gradientStrokeWidth',
					$elm$json$Json$Encode$float(x))
				]);
		case 9:
			var x = legendConfig.a;
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'gradientHeight',
					$elm$json$Json$Encode$float(x))
				]);
		case 15:
			var x = legendConfig.a;
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'gradientWidth',
					$elm$json$Json$Encode$float(x))
				]);
		case 16:
			var ga = legendConfig.a;
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'gridAlign',
					$elm$json$Json$Encode$string(
						$gicentre$elm_vegalite$VegaLite$compositionAlignmentLabel(ga)))
				]);
		case 17:
			var ha = legendConfig.a;
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'labelAlign',
					$elm$json$Json$Encode$string(
						$gicentre$elm_vegalite$VegaLite$hAlignLabel(ha)))
				]);
		case 18:
			var va = legendConfig.a;
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'labelBaseline',
					$elm$json$Json$Encode$string(
						$gicentre$elm_vegalite$VegaLite$vAlignLabel(va)))
				]);
		case 19:
			var s = legendConfig.a;
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'labelColor',
					$elm$json$Json$Encode$string(s))
				]);
		case 20:
			var s = legendConfig.a;
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'labelFont',
					$elm$json$Json$Encode$string(s))
				]);
		case 21:
			var x = legendConfig.a;
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'labelFontSize',
					$elm$json$Json$Encode$float(x))
				]);
		case 22:
			var x = legendConfig.a;
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'labelLimit',
					$elm$json$Json$Encode$float(x))
				]);
		case 23:
			var x = legendConfig.a;
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'labelOffset',
					$elm$json$Json$Encode$float(x))
				]);
		case 24:
			var lo = legendConfig.a;
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'labelOverlap',
					$gicentre$elm_vegalite$VegaLite$overlapStrategySpec(lo))
				]);
		case 29:
			var b = legendConfig.a;
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'shortTimeLabels',
					$elm$json$Json$Encode$bool(b))
				]);
		case 6:
			var x = legendConfig.a;
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'entryPadding',
					$elm$json$Json$Encode$float(x))
				]);
		case 35:
			var d = legendConfig.a;
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'symbolDirection',
					$elm$json$Json$Encode$string(
						$gicentre$elm_vegalite$VegaLite$markOrientationLabel(d)))
				]);
		case 37:
			var n = legendConfig.a;
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'symbolLimit',
					$elm$json$Json$Encode$int(n))
				]);
		case 36:
			var s = legendConfig.a;
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'symbolFillColor',
					$elm$json$Json$Encode$string(s))
				]);
		case 33:
			var s = legendConfig.a;
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'symbolBaseFillColor',
					$elm$json$Json$Encode$string(s))
				]);
		case 42:
			var s = legendConfig.a;
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'symbolStrokeColor',
					$elm$json$Json$Encode$string(s))
				]);
		case 34:
			var s = legendConfig.a;
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'symbolBaseStrokeColor',
					$elm$json$Json$Encode$string(s))
				]);
		case 38:
			var o = legendConfig.a;
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'symbolOffset',
					$elm$json$Json$Encode$float(o))
				]);
		case 39:
			var s = legendConfig.a;
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'symbolType',
					$elm$json$Json$Encode$string(
						$gicentre$elm_vegalite$VegaLite$symbolLabel(s)))
				]);
		case 40:
			var x = legendConfig.a;
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'symbolSize',
					$elm$json$Json$Encode$float(x))
				]);
		case 41:
			var x = legendConfig.a;
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'symbolStrokeWidth',
					$elm$json$Json$Encode$float(x))
				]);
		case 43:
			var ha = legendConfig.a;
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'titleAlign',
					$elm$json$Json$Encode$string(
						$gicentre$elm_vegalite$VegaLite$hAlignLabel(ha)))
				]);
		case 44:
			var va = legendConfig.a;
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'titleBaseline',
					$elm$json$Json$Encode$string(
						$gicentre$elm_vegalite$VegaLite$vAlignLabel(va)))
				]);
		case 45:
			var s = legendConfig.a;
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'titleColor',
					$elm$json$Json$Encode$string(s))
				]);
		case 46:
			var s = legendConfig.a;
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'titleFont',
					$elm$json$Json$Encode$string(s))
				]);
		case 47:
			var x = legendConfig.a;
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'titleFontSize',
					$elm$json$Json$Encode$float(x))
				]);
		case 48:
			var fw = legendConfig.a;
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'titleFontWeight',
					$gicentre$elm_vegalite$VegaLite$fontWeightSpec(fw))
				]);
		case 49:
			var x = legendConfig.a;
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'titleLimit',
					$elm$json$Json$Encode$float(x))
				]);
		case 50:
			var x = legendConfig.a;
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'titleLineHeight',
					$elm$json$Json$Encode$float(x))
				]);
		case 51:
			var x = legendConfig.a;
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'titlePadding',
					$elm$json$Json$Encode$float(x))
				]);
		default:
			var o = legendConfig.a;
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'unselectedOpacity',
					$elm$json$Json$Encode$float(o))
				]);
	}
};
var $gicentre$elm_vegalite$VegaLite$TTNone = 2;
var $gicentre$elm_vegalite$VegaLite$blendModeSpec = function (bm) {
	switch (bm) {
		case 0:
			return $elm$json$Json$Encode$null;
		case 1:
			return $elm$json$Json$Encode$string('multiply');
		case 2:
			return $elm$json$Json$Encode$string('screen');
		case 3:
			return $elm$json$Json$Encode$string('overlay');
		case 4:
			return $elm$json$Json$Encode$string('darken');
		case 5:
			return $elm$json$Json$Encode$string('lighten');
		case 6:
			return $elm$json$Json$Encode$string('color-dodge');
		case 7:
			return $elm$json$Json$Encode$string('color-burn');
		case 8:
			return $elm$json$Json$Encode$string('hard-light');
		case 9:
			return $elm$json$Json$Encode$string('soft-light');
		case 10:
			return $elm$json$Json$Encode$string('difference');
		case 11:
			return $elm$json$Json$Encode$string('exclusion');
		case 12:
			return $elm$json$Json$Encode$string('hue');
		case 13:
			return $elm$json$Json$Encode$string('saturation');
		case 14:
			return $elm$json$Json$Encode$string('color');
		default:
			return $elm$json$Json$Encode$string('luminosity');
	}
};
var $gicentre$elm_vegalite$VegaLite$colorGradientLabel = function (gr) {
	if (!gr) {
		return 'linear';
	} else {
		return 'radial';
	}
};
var $gicentre$elm_vegalite$VegaLite$cursorLabel = function (cur) {
	switch (cur) {
		case 0:
			return 'auto';
		case 1:
			return 'default';
		case 2:
			return 'none';
		case 3:
			return 'context-menu';
		case 4:
			return 'help';
		case 5:
			return 'pointer';
		case 6:
			return 'progress';
		case 7:
			return 'wait';
		case 8:
			return 'cell';
		case 9:
			return 'crosshair';
		case 10:
			return 'text';
		case 11:
			return 'vertical-text';
		case 12:
			return 'alias';
		case 13:
			return 'copy';
		case 14:
			return 'move';
		case 15:
			return 'no-drop';
		case 16:
			return 'not-allowed';
		case 17:
			return 'all-scroll';
		case 18:
			return 'col-resize';
		case 19:
			return 'row-resize';
		case 20:
			return 'n-resize';
		case 21:
			return 'e-resize';
		case 22:
			return 's-resize';
		case 23:
			return 'w-resize';
		case 24:
			return 'ne-resize';
		case 25:
			return 'nw-resize';
		case 26:
			return 'se-resize';
		case 27:
			return 'sw-resize';
		case 28:
			return 'ew-resize';
		case 29:
			return 'ns-resize';
		case 30:
			return 'nesw-resize';
		case 31:
			return 'nwse-resize';
		case 32:
			return 'zoom-in';
		case 33:
			return 'zoom-out';
		case 34:
			return 'grab';
		default:
			return 'grabbing';
	}
};
var $gicentre$elm_vegalite$VegaLite$extentSpec = function (ext) {
	switch (ext.$) {
		case 0:
			return $elm$json$Json$Encode$string('ci');
		case 1:
			return $elm$json$Json$Encode$string('stderr');
		case 2:
			return $elm$json$Json$Encode$string('stdev');
		case 3:
			return $elm$json$Json$Encode$string('iqr');
		case 4:
			return $elm$json$Json$Encode$string('min-max');
		default:
			var sc = ext.a;
			return $elm$json$Json$Encode$float(sc);
	}
};
var $gicentre$elm_vegalite$VegaLite$stopSpec = function (_v0) {
	var x = _v0.a;
	var c = _v0.b;
	return $elm$json$Json$Encode$object(
		_List_fromArray(
			[
				_Utils_Tuple2(
				'offset',
				$elm$json$Json$Encode$float(x)),
				_Utils_Tuple2(
				'color',
				$elm$json$Json$Encode$string(c))
			]));
};
var $gicentre$elm_vegalite$VegaLite$gradientProperty = function (gp) {
	switch (gp.$) {
		case 0:
			var x = gp.a;
			return _Utils_Tuple2(
				'x1',
				$elm$json$Json$Encode$float(x));
		case 1:
			var x = gp.a;
			return _Utils_Tuple2(
				'y1',
				$elm$json$Json$Encode$float(x));
		case 2:
			var x = gp.a;
			return _Utils_Tuple2(
				'x2',
				$elm$json$Json$Encode$float(x));
		case 3:
			var x = gp.a;
			return _Utils_Tuple2(
				'y2',
				$elm$json$Json$Encode$float(x));
		case 4:
			var x = gp.a;
			return _Utils_Tuple2(
				'r1',
				$elm$json$Json$Encode$float(x));
		case 5:
			var x = gp.a;
			return _Utils_Tuple2(
				'r2',
				$elm$json$Json$Encode$float(x));
		default:
			var grs = gp.a;
			return _Utils_Tuple2(
				'stops',
				A2($elm$json$Json$Encode$list, $gicentre$elm_vegalite$VegaLite$stopSpec, grs));
	}
};
var $gicentre$elm_vegalite$VegaLite$markInterpolationLabel = function (interp) {
	switch (interp) {
		case 7:
			return 'linear';
		case 8:
			return 'linear-closed';
		case 12:
			return 'step';
		case 11:
			return 'step-before';
		case 10:
			return 'step-after';
		case 0:
			return 'basis';
		case 2:
			return 'basis-open';
		case 1:
			return 'basis-closed';
		case 4:
			return 'cardinal';
		case 6:
			return 'cardinal-open';
		case 5:
			return 'cardinal-closed';
		case 3:
			return 'bundle';
		default:
			return 'monotone';
	}
};
var $gicentre$elm_vegalite$VegaLite$strokeJoinLabel = function (jn) {
	switch (jn) {
		case 0:
			return 'miter';
		case 1:
			return 'round';
		default:
			return 'bevel';
	}
};
var $gicentre$elm_vegalite$VegaLite$textDirectionLabel = function (td) {
	if (!td) {
		return 'ltr';
	} else {
		return 'rtl';
	}
};
var $gicentre$elm_vegalite$VegaLite$ttContentLabel = function (ttContent) {
	switch (ttContent) {
		case 0:
			return 'encoding';
		case 1:
			return 'data';
		default:
			return 'null';
	}
};
var $gicentre$elm_vegalite$VegaLite$lineMarkerSpec = function (pm) {
	if (!pm.$) {
		return $elm$json$Json$Encode$bool(false);
	} else {
		var mps = pm.a;
		return $elm$json$Json$Encode$object(
			A2($elm$core$List$concatMap, $gicentre$elm_vegalite$VegaLite$markProperty, mps));
	}
};
var $gicentre$elm_vegalite$VegaLite$markProperty = function (mProp) {
	switch (mProp.$) {
		case 2:
			var aps = mProp.a;
			if (!aps.b) {
				return _List_fromArray(
					[
						$gicentre$elm_vegalite$VegaLite$ariaProperty(
						$gicentre$elm_vegalite$VegaLite$ArAria(false))
					]);
			} else {
				return A2($elm$core$List$map, $gicentre$elm_vegalite$VegaLite$ariaProperty, aps);
			}
		case 30:
			var b = mProp.a;
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'filled',
					$elm$json$Json$Encode$bool(b))
				]);
		case 6:
			var bm = mProp.a;
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'blend',
					$gicentre$elm_vegalite$VegaLite$blendModeSpec(bm))
				]);
		case 9:
			var b = mProp.a;
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'clip',
					$elm$json$Json$Encode$bool(b))
				]);
		case 10:
			var col = mProp.a;
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'color',
					$elm$json$Json$Encode$string(col))
				]);
		case 12:
			var r = mProp.a;
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'cornerRadius',
					$elm$json$Json$Encode$float(r))
				]);
		case 13:
			var r = mProp.a;
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'cornerRadiusEnd',
					$elm$json$Json$Encode$float(r))
				]);
		case 16:
			var r = mProp.a;
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'cornerRadiusBottomLeft',
					$elm$json$Json$Encode$float(r))
				]);
		case 17:
			var r = mProp.a;
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'cornerRadiusBottomRight',
					$elm$json$Json$Encode$float(r))
				]);
		case 14:
			var r = mProp.a;
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'cornerRadiusTopLeft',
					$elm$json$Json$Encode$float(r))
				]);
		case 15:
			var r = mProp.a;
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'cornerRadiusTopRight',
					$elm$json$Json$Encode$float(r))
				]);
		case 18:
			var cur = mProp.a;
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'cursor',
					$elm$json$Json$Encode$string(
						$gicentre$elm_vegalite$VegaLite$cursorLabel(cur)))
				]);
		case 27:
			var ext = mProp.a;
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'extent',
					$gicentre$elm_vegalite$VegaLite$extentSpec(ext))
				]);
		case 19:
			var s = mProp.a;
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'href',
					$elm$json$Json$Encode$string(s))
				]);
		case 48:
			var b = mProp.a;
			return b ? _List_fromArray(
				[
					_Utils_Tuple2(
					'invalid',
					$elm$json$Json$Encode$string('filter'))
				]) : _List_fromArray(
				[
					_Utils_Tuple2('invalid', $elm$json$Json$Encode$null)
				]);
		case 28:
			var col = mProp.a;
			return ($elm$core$String$trim(col) === '') ? _List_fromArray(
				[
					_Utils_Tuple2('fill', $elm$json$Json$Encode$null)
				]) : _List_fromArray(
				[
					_Utils_Tuple2(
					'fill',
					$elm$json$Json$Encode$string(col))
				]);
		case 29:
			var cGrad = mProp.a;
			var props = mProp.b;
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'fill',
					$elm$json$Json$Encode$object(
						A2(
							$elm$core$List$cons,
							_Utils_Tuple2(
								'gradient',
								$elm$json$Json$Encode$string(
									$gicentre$elm_vegalite$VegaLite$colorGradientLabel(cGrad))),
							A2($elm$core$List$map, $gicentre$elm_vegalite$VegaLite$gradientProperty, props))))
				]);
		case 11:
			var cGrad = mProp.a;
			var props = mProp.b;
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'color',
					$elm$json$Json$Encode$object(
						A2(
							$elm$core$List$cons,
							_Utils_Tuple2(
								'gradient',
								$elm$json$Json$Encode$string(
									$gicentre$elm_vegalite$VegaLite$colorGradientLabel(cGrad))),
							A2($elm$core$List$map, $gicentre$elm_vegalite$VegaLite$gradientProperty, props))))
				]);
		case 54:
			var cGrad = mProp.a;
			var props = mProp.b;
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'stroke',
					$elm$json$Json$Encode$object(
						A2(
							$elm$core$List$cons,
							_Utils_Tuple2(
								'gradient',
								$elm$json$Json$Encode$string(
									$gicentre$elm_vegalite$VegaLite$colorGradientLabel(cGrad))),
							A2($elm$core$List$map, $gicentre$elm_vegalite$VegaLite$gradientProperty, props))))
				]);
		case 53:
			var col = mProp.a;
			return ($elm$core$String$trim(col) === '') ? _List_fromArray(
				[
					_Utils_Tuple2('stroke', $elm$json$Json$Encode$null)
				]) : _List_fromArray(
				[
					_Utils_Tuple2(
					'stroke',
					$elm$json$Json$Encode$string(col))
				]);
		case 55:
			var sc = mProp.a;
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'strokeCap',
					$elm$json$Json$Encode$string(
						$gicentre$elm_vegalite$VegaLite$strokeCapLabel(sc)))
				]);
		case 58:
			var sj = mProp.a;
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'strokeJoin',
					$elm$json$Json$Encode$string(
						$gicentre$elm_vegalite$VegaLite$strokeJoinLabel(sj)))
				]);
		case 59:
			var ml = mProp.a;
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'strokeMiterLimit',
					$elm$json$Json$Encode$float(ml))
				]);
		case 41:
			var x = mProp.a;
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'opacity',
					$elm$json$Json$Encode$float(x))
				]);
		case 31:
			var x = mProp.a;
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'fillOpacity',
					$elm$json$Json$Encode$float(x))
				]);
		case 60:
			var x = mProp.a;
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'strokeOpacity',
					$elm$json$Json$Encode$float(x))
				]);
		case 61:
			var x = mProp.a;
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'strokeWidth',
					$elm$json$Json$Encode$float(x))
				]);
		case 56:
			var xs = mProp.a;
			return _Utils_eq(xs, _List_Nil) ? _List_fromArray(
				[
					_Utils_Tuple2('strokeDash', $elm$json$Json$Encode$null)
				]) : _List_fromArray(
				[
					_Utils_Tuple2(
					'strokeDash',
					A2($elm$json$Json$Encode$list, $elm$json$Json$Encode$float, xs))
				]);
		case 57:
			var x = mProp.a;
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'strokeDashOffset',
					$elm$json$Json$Encode$float(x))
				]);
		case 62:
			var styles = mProp.a;
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'style',
					A2($elm$json$Json$Encode$list, $elm$json$Json$Encode$string, styles))
				]);
		case 37:
			var interp = mProp.a;
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'interpolate',
					$elm$json$Json$Encode$string(
						$gicentre$elm_vegalite$VegaLite$markInterpolationLabel(interp)))
				]);
		case 63:
			var x = mProp.a;
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'tension',
					$elm$json$Json$Encode$float(x))
				]);
		case 45:
			var orient = mProp.a;
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'orient',
					$elm$json$Json$Encode$string(
						$gicentre$elm_vegalite$VegaLite$markOrientationLabel(orient)))
				]);
		case 50:
			var sym = mProp.a;
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'shape',
					$elm$json$Json$Encode$string(
						$gicentre$elm_vegalite$VegaLite$symbolLabel(sym)))
				]);
		case 52:
			var x = mProp.a;
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'size',
					$elm$json$Json$Encode$float(x))
				]);
		case 1:
			var x = mProp.a;
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'angle',
					$elm$json$Json$Encode$float(x))
				]);
		case 0:
			var al = mProp.a;
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'align',
					$elm$json$Json$Encode$string(
						$gicentre$elm_vegalite$VegaLite$hAlignLabel(al)))
				]);
		case 4:
			var va = mProp.a;
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'baseline',
					$elm$json$Json$Encode$string(
						$gicentre$elm_vegalite$VegaLite$vAlignLabel(va)))
				]);
		case 25:
			var dx = mProp.a;
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'dx',
					$elm$json$Json$Encode$float(dx))
				]);
		case 26:
			var dy = mProp.a;
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'dy',
					$elm$json$Json$Encode$float(dy))
				]);
		case 32:
			var fnt = mProp.a;
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'font',
					$elm$json$Json$Encode$string(fnt))
				]);
		case 33:
			var x = mProp.a;
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'fontSize',
					$elm$json$Json$Encode$float(x))
				]);
		case 34:
			var fSty = mProp.a;
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'fontStyle',
					$elm$json$Json$Encode$string(fSty))
				]);
		case 35:
			var w = mProp.a;
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'fontWeight',
					$gicentre$elm_vegalite$VegaLite$fontWeightSpec(w))
				]);
		case 47:
			var x = mProp.a;
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'radius',
					$elm$json$Json$Encode$float(x))
				]);
		case 36:
			var x = mProp.a;
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'innerRadius',
					$elm$json$Json$Encode$float(x))
				]);
		case 42:
			var x = mProp.a;
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'outerRadius',
					$elm$json$Json$Encode$float(x))
				]);
		case 64:
			var txt = mProp.a;
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'text',
					$gicentre$elm_vegalite$VegaLite$multilineTextSpec(txt))
				]);
		case 39:
			var x = mProp.a;
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'lineHeight',
					$elm$json$Json$Encode$float(x))
				]);
		case 21:
			var x = mProp.a;
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'limit',
					$elm$json$Json$Encode$float(x))
				]);
		case 22:
			var s = mProp.a;
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'ellipsis',
					$elm$json$Json$Encode$string(s))
				]);
		case 23:
			var td = mProp.a;
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'dir',
					$elm$json$Json$Encode$string(
						$gicentre$elm_vegalite$VegaLite$textDirectionLabel(td)))
				]);
		case 65:
			var x = mProp.a;
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'theta',
					$elm$json$Json$Encode$float(x))
				]);
		case 66:
			var x = mProp.a;
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'theta2',
					$elm$json$Json$Encode$float(x))
				]);
		case 80:
			var x = mProp.a;
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'thetaOffset',
					$elm$json$Json$Encode$float(x))
				]);
		case 81:
			var x = mProp.a;
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'theta2Offset',
					$elm$json$Json$Encode$float(x))
				]);
		case 5:
			var x = mProp.a;
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'binSpacing',
					$elm$json$Json$Encode$float(x))
				]);
		case 20:
			var x = mProp.a;
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'continuousBandSize',
					$elm$json$Json$Encode$float(x))
				]);
		case 24:
			var x = mProp.a;
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'discreteBandSize',
					$elm$json$Json$Encode$float(x))
				]);
		case 51:
			var b = mProp.a;
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'shortTimeLabels',
					$elm$json$Json$Encode$bool(b))
				]);
		case 3:
			var x = mProp.a;
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'bandSize',
					$elm$json$Json$Encode$float(x))
				]);
		case 67:
			var x = mProp.a;
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'thickness',
					$elm$json$Json$Encode$float(x))
				]);
		case 49:
			var props = mProp.a;
			if (!props.b) {
				return _List_fromArray(
					[
						_Utils_Tuple2(
						'rule',
						$elm$json$Json$Encode$bool(false))
					]);
			} else {
				return _List_fromArray(
					[
						_Utils_Tuple2(
						'rule',
						$elm$json$Json$Encode$object(
							A2($elm$core$List$concatMap, $gicentre$elm_vegalite$VegaLite$markProperty, props)))
					]);
			}
		case 7:
			var props = mProp.a;
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'borders',
					$elm$json$Json$Encode$object(
						A2($elm$core$List$concatMap, $gicentre$elm_vegalite$VegaLite$markProperty, props)))
				]);
		case 40:
			var props = mProp.a;
			if (!props.b) {
				return _List_fromArray(
					[
						_Utils_Tuple2(
						'median',
						$elm$json$Json$Encode$bool(false))
					]);
			} else {
				return _List_fromArray(
					[
						_Utils_Tuple2(
						'median',
						$elm$json$Json$Encode$object(
							A2($elm$core$List$concatMap, $gicentre$elm_vegalite$VegaLite$markProperty, props)))
					]);
			}
		case 8:
			var props = mProp.a;
			if (!props.b) {
				return _List_fromArray(
					[
						_Utils_Tuple2(
						'box',
						$elm$json$Json$Encode$bool(false))
					]);
			} else {
				return _List_fromArray(
					[
						_Utils_Tuple2(
						'box',
						$elm$json$Json$Encode$object(
							A2($elm$core$List$concatMap, $gicentre$elm_vegalite$VegaLite$markProperty, props)))
					]);
			}
		case 43:
			var props = mProp.a;
			if (!props.b) {
				return _List_fromArray(
					[
						_Utils_Tuple2(
						'outliers',
						$elm$json$Json$Encode$bool(false))
					]);
			} else {
				return _List_fromArray(
					[
						_Utils_Tuple2(
						'outliers',
						$elm$json$Json$Encode$object(
							A2($elm$core$List$concatMap, $gicentre$elm_vegalite$VegaLite$markProperty, props)))
					]);
			}
		case 68:
			var props = mProp.a;
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'ticks',
					$elm$json$Json$Encode$object(
						A2($elm$core$List$concatMap, $gicentre$elm_vegalite$VegaLite$markProperty, props)))
				]);
		case 69:
			var ttContent = mProp.a;
			return (ttContent === 2) ? _List_fromArray(
				[
					_Utils_Tuple2('tooltip', $elm$json$Json$Encode$null)
				]) : _List_fromArray(
				[
					_Utils_Tuple2(
					'tooltip',
					$elm$json$Json$Encode$object(
						_List_fromArray(
							[
								_Utils_Tuple2(
								'content',
								$elm$json$Json$Encode$string(
									$gicentre$elm_vegalite$VegaLite$ttContentLabel(ttContent)))
							])))
				]);
		case 46:
			var pm = mProp.a;
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'point',
					$gicentre$elm_vegalite$VegaLite$pointMarkerSpec(pm))
				]);
		case 38:
			var lm = mProp.a;
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'line',
					$gicentre$elm_vegalite$VegaLite$lineMarkerSpec(lm))
				]);
		case 70:
			var w = mProp.a;
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'width',
					$elm$json$Json$Encode$float(w))
				]);
		case 71:
			var h = mProp.a;
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'height',
					$elm$json$Json$Encode$float(h))
				]);
		case 72:
			var x = mProp.a;
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'x',
					$elm$json$Json$Encode$float(x))
				]);
		case 73:
			var y = mProp.a;
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'y',
					$elm$json$Json$Encode$float(y))
				]);
		case 74:
			var x = mProp.a;
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'x2',
					$elm$json$Json$Encode$float(x))
				]);
		case 75:
			var y = mProp.a;
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'y2',
					$elm$json$Json$Encode$float(y))
				]);
		case 44:
			var b = mProp.a;
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'order',
					$elm$json$Json$Encode$bool(b))
				]);
		case 76:
			var o = mProp.a;
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'xOffset',
					$elm$json$Json$Encode$float(o))
				]);
		case 78:
			var o = mProp.a;
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'x2Offset',
					$elm$json$Json$Encode$float(o))
				]);
		case 77:
			var o = mProp.a;
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'yOffset',
					$elm$json$Json$Encode$float(o))
				]);
		case 79:
			var o = mProp.a;
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'y2Offset',
					$elm$json$Json$Encode$float(o))
				]);
		case 82:
			var o = mProp.a;
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'radiusOffset',
					$elm$json$Json$Encode$float(o))
				]);
		case 83:
			var o = mProp.a;
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'radius2Offset',
					$elm$json$Json$Encode$float(o))
				]);
		default:
			var b = mProp.a;
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'aspect',
					$elm$json$Json$Encode$bool(b))
				]);
	}
};
var $gicentre$elm_vegalite$VegaLite$pointMarkerSpec = function (pm) {
	switch (pm.$) {
		case 0:
			return $elm$json$Json$Encode$string('transparent');
		case 1:
			return $elm$json$Json$Encode$bool(false);
		default:
			var mps = pm.a;
			return _Utils_eq(mps, _List_Nil) ? $elm$json$Json$Encode$bool(true) : $elm$json$Json$Encode$object(
				A2($elm$core$List$concatMap, $gicentre$elm_vegalite$VegaLite$markProperty, mps));
	}
};
var $gicentre$elm_vegalite$VegaLite$paddingSpec = function (pad) {
	if (!pad.$) {
		var p = pad.a;
		return $elm$json$Json$Encode$float(p);
	} else {
		var l = pad.a;
		var t = pad.b;
		var r = pad.c;
		var b = pad.d;
		return $elm$json$Json$Encode$object(
			_List_fromArray(
				[
					_Utils_Tuple2(
					'left',
					$elm$json$Json$Encode$float(l)),
					_Utils_Tuple2(
					'top',
					$elm$json$Json$Encode$float(t)),
					_Utils_Tuple2(
					'right',
					$elm$json$Json$Encode$float(r)),
					_Utils_Tuple2(
					'bottom',
					$elm$json$Json$Encode$float(b))
				]));
	}
};
var $gicentre$elm_vegalite$VegaLite$projectionLabel = function (proj) {
	switch (proj.$) {
		case 0:
			return 'albers';
		case 1:
			return 'albersUsa';
		case 2:
			return 'azimuthalEqualArea';
		case 3:
			return 'azimuthalEquidistant';
		case 4:
			return 'conicConformal';
		case 5:
			return 'conicEqualarea';
		case 6:
			return 'conicEquidistant';
		case 7:
			var projName = proj.a;
			return projName;
		case 9:
			return 'equalEarth';
		case 8:
			return 'equirectangular';
		case 10:
			return 'gnomonic';
		case 11:
			return 'identity';
		case 12:
			return 'mercator';
		case 13:
			return 'naturalEarth1';
		case 14:
			return 'orthographic';
		case 15:
			return 'stereographic';
		default:
			return 'transverseMercator';
	}
};
var $gicentre$elm_vegalite$VegaLite$projectionProperty = function (pp) {
	switch (pp.$) {
		case 0:
			var proj = pp.a;
			return _Utils_Tuple2(
				'type',
				$elm$json$Json$Encode$string(
					$gicentre$elm_vegalite$VegaLite$projectionLabel(proj)));
		case 1:
			var numOrNull = pp.a;
			if (!numOrNull.$) {
				var x = numOrNull.a;
				return _Utils_Tuple2(
					'clipAngle',
					$elm$json$Json$Encode$float(x));
			} else {
				return _Utils_Tuple2('clipAngle', $elm$json$Json$Encode$null);
			}
		case 2:
			var rClip = pp.a;
			if (!rClip.$) {
				return _Utils_Tuple2('clipExtent', $elm$json$Json$Encode$null);
			} else {
				var l = rClip.a;
				var t = rClip.b;
				var r = rClip.c;
				var b = rClip.d;
				return _Utils_Tuple2(
					'clipExtent',
					A2(
						$elm$json$Json$Encode$list,
						$elm$json$Json$Encode$float,
						_List_fromArray(
							[l, t, r, b])));
			}
		case 8:
			var b = pp.a;
			return _Utils_Tuple2(
				'reflectX',
				$elm$json$Json$Encode$bool(b));
		case 9:
			var b = pp.a;
			return _Utils_Tuple2(
				'reflectY',
				$elm$json$Json$Encode$bool(b));
		case 3:
			var lon = pp.a;
			var lat = pp.b;
			return _Utils_Tuple2(
				'center',
				A2(
					$elm$json$Json$Encode$list,
					$elm$json$Json$Encode$float,
					_List_fromArray(
						[lon, lat])));
		case 4:
			var sc = pp.a;
			return _Utils_Tuple2(
				'scale',
				$elm$json$Json$Encode$float(sc));
		case 5:
			var tx = pp.a;
			var ty = pp.b;
			return _Utils_Tuple2(
				'translate',
				A2(
					$elm$json$Json$Encode$list,
					$elm$json$Json$Encode$float,
					_List_fromArray(
						[tx, ty])));
		case 6:
			var lambda = pp.a;
			var phi = pp.b;
			var gamma = pp.c;
			return _Utils_Tuple2(
				'rotate',
				A2(
					$elm$json$Json$Encode$list,
					$elm$json$Json$Encode$float,
					_List_fromArray(
						[lambda, phi, gamma])));
		case 7:
			var pr = pp.a;
			return _Utils_Tuple2(
				'precision',
				$elm$json$Json$Encode$float(pr));
		case 10:
			var x = pp.a;
			return _Utils_Tuple2(
				'coefficient',
				$elm$json$Json$Encode$float(x));
		case 11:
			var x = pp.a;
			return _Utils_Tuple2(
				'distance',
				$elm$json$Json$Encode$float(x));
		case 12:
			var x = pp.a;
			return _Utils_Tuple2(
				'fraction',
				$elm$json$Json$Encode$float(x));
		case 13:
			var n = pp.a;
			return _Utils_Tuple2(
				'lobes',
				$elm$json$Json$Encode$int(n));
		case 14:
			var x = pp.a;
			return _Utils_Tuple2(
				'parallel',
				$elm$json$Json$Encode$float(x));
		case 15:
			var x = pp.a;
			return _Utils_Tuple2(
				'radius',
				$elm$json$Json$Encode$float(x));
		case 16:
			var x = pp.a;
			return _Utils_Tuple2(
				'ratio',
				$elm$json$Json$Encode$float(x));
		case 17:
			var x = pp.a;
			return _Utils_Tuple2(
				'spacing',
				$elm$json$Json$Encode$float(x));
		default:
			var x = pp.a;
			return _Utils_Tuple2(
				'tilt',
				$elm$json$Json$Encode$float(x));
	}
};
var $gicentre$elm_vegalite$VegaLite$rangeConfigProperty = function (rangeCfg) {
	switch (rangeCfg.$) {
		case 0:
			var schemeName = rangeCfg.a;
			return _Utils_Tuple2(
				'category',
				$elm$json$Json$Encode$object(
					_List_fromArray(
						[
							A2($gicentre$elm_vegalite$VegaLite$schemeProperty, schemeName, _List_Nil)
						])));
		case 1:
			var schemeName = rangeCfg.a;
			return _Utils_Tuple2(
				'diverging',
				$elm$json$Json$Encode$object(
					_List_fromArray(
						[
							A2($gicentre$elm_vegalite$VegaLite$schemeProperty, schemeName, _List_Nil)
						])));
		case 2:
			var schemeName = rangeCfg.a;
			return _Utils_Tuple2(
				'heatmap',
				$elm$json$Json$Encode$object(
					_List_fromArray(
						[
							A2($gicentre$elm_vegalite$VegaLite$schemeProperty, schemeName, _List_Nil)
						])));
		case 3:
			var schemeName = rangeCfg.a;
			return _Utils_Tuple2(
				'ordinal',
				$elm$json$Json$Encode$object(
					_List_fromArray(
						[
							A2($gicentre$elm_vegalite$VegaLite$schemeProperty, schemeName, _List_Nil)
						])));
		case 4:
			var schemeName = rangeCfg.a;
			return _Utils_Tuple2(
				'ramp',
				$elm$json$Json$Encode$object(
					_List_fromArray(
						[
							A2($gicentre$elm_vegalite$VegaLite$schemeProperty, schemeName, _List_Nil)
						])));
		default:
			var schemeName = rangeCfg.a;
			return _Utils_Tuple2(
				'symbol',
				$elm$json$Json$Encode$object(
					_List_fromArray(
						[
							A2($gicentre$elm_vegalite$VegaLite$schemeProperty, schemeName, _List_Nil)
						])));
	}
};
var $gicentre$elm_vegalite$VegaLite$scaleConfigProperty = function (scaleCfg) {
	switch (scaleCfg.$) {
		case 0:
			var x = scaleCfg.a;
			return _Utils_Tuple2(
				'bandPaddingInner',
				$elm$json$Json$Encode$float(x));
		case 1:
			var x = scaleCfg.a;
			return _Utils_Tuple2(
				'bandPaddingOuter',
				$elm$json$Json$Encode$float(x));
		case 2:
			var x = scaleCfg.a;
			return _Utils_Tuple2(
				'barBandPaddingInner',
				$elm$json$Json$Encode$float(x));
		case 3:
			var x = scaleCfg.a;
			return _Utils_Tuple2(
				'barBandPaddingOuter',
				$elm$json$Json$Encode$float(x));
		case 4:
			var x = scaleCfg.a;
			return _Utils_Tuple2(
				'rectBandPaddingInner',
				$elm$json$Json$Encode$float(x));
		case 5:
			var x = scaleCfg.a;
			return _Utils_Tuple2(
				'rectBandPaddingOuter',
				$elm$json$Json$Encode$float(x));
		case 6:
			var b = scaleCfg.a;
			return _Utils_Tuple2(
				'clamp',
				$elm$json$Json$Encode$bool(b));
		case 7:
			var x = scaleCfg.a;
			return _Utils_Tuple2(
				'maxBandSize',
				$elm$json$Json$Encode$float(x));
		case 8:
			var x = scaleCfg.a;
			return _Utils_Tuple2(
				'minBandSize',
				$elm$json$Json$Encode$float(x));
		case 9:
			var x = scaleCfg.a;
			return _Utils_Tuple2(
				'maxFontSize',
				$elm$json$Json$Encode$float(x));
		case 10:
			var x = scaleCfg.a;
			return _Utils_Tuple2(
				'minFontSize',
				$elm$json$Json$Encode$float(x));
		case 11:
			var x = scaleCfg.a;
			return _Utils_Tuple2(
				'maxOpacity',
				$elm$json$Json$Encode$float(x));
		case 12:
			var x = scaleCfg.a;
			return _Utils_Tuple2(
				'minOpacity',
				$elm$json$Json$Encode$float(x));
		case 13:
			var x = scaleCfg.a;
			return _Utils_Tuple2(
				'maxSize',
				$elm$json$Json$Encode$float(x));
		case 14:
			var x = scaleCfg.a;
			return _Utils_Tuple2(
				'minSize',
				$elm$json$Json$Encode$float(x));
		case 15:
			var x = scaleCfg.a;
			return _Utils_Tuple2(
				'maxStrokeWidth',
				$elm$json$Json$Encode$float(x));
		case 16:
			var x = scaleCfg.a;
			return _Utils_Tuple2(
				'minStrokeWidth',
				$elm$json$Json$Encode$float(x));
		case 17:
			var x = scaleCfg.a;
			return _Utils_Tuple2(
				'pointPadding',
				$elm$json$Json$Encode$float(x));
		case 18:
			var b = scaleCfg.a;
			return _Utils_Tuple2(
				'round',
				$elm$json$Json$Encode$bool(b));
		case 19:
			var b = scaleCfg.a;
			return _Utils_Tuple2(
				'useUnaggregatedDomain',
				$elm$json$Json$Encode$bool(b));
		default:
			var b = scaleCfg.a;
			return _Utils_Tuple2(
				'xReverse',
				$elm$json$Json$Encode$bool(b));
	}
};
var $gicentre$elm_vegalite$VegaLite$selectionLabel = function (seType) {
	switch (seType) {
		case 0:
			return 'single';
		case 1:
			return 'multi';
		default:
			return 'interval';
	}
};
var $gicentre$elm_vegalite$VegaLite$NullValue = {$: 4};
var $gicentre$elm_vegalite$VegaLite$bindLegendProperty = function (blProp) {
	switch (blProp.$) {
		case 1:
			var ch = blProp.a;
			return _Utils_Tuple2(
				'encodings',
				A2(
					$elm$json$Json$Encode$list,
					$elm$json$Json$Encode$string,
					_List_fromArray(
						[
							$gicentre$elm_vegalite$VegaLite$channelLabel(ch)
						])));
		case 0:
			var f = blProp.a;
			return _Utils_Tuple2(
				'fields',
				A2(
					$elm$json$Json$Encode$list,
					$elm$json$Json$Encode$string,
					_List_fromArray(
						[f])));
		default:
			var es = blProp.a;
			return _Utils_Tuple2(
				'bind',
				$elm$json$Json$Encode$object(
					_List_fromArray(
						[
							_Utils_Tuple2(
							'legend',
							$elm$json$Json$Encode$string(es))
						])));
	}
};
var $gicentre$elm_vegalite$VegaLite$inputProperty = function (prop) {
	switch (prop.$) {
		case 3:
			var x = prop.a;
			return _Utils_Tuple2(
				'min',
				$elm$json$Json$Encode$float(x));
		case 4:
			var x = prop.a;
			return _Utils_Tuple2(
				'max',
				$elm$json$Json$Encode$float(x));
		case 6:
			var x = prop.a;
			return _Utils_Tuple2(
				'step',
				$elm$json$Json$Encode$float(x));
		case 0:
			var x = prop.a;
			return _Utils_Tuple2(
				'debounce',
				$elm$json$Json$Encode$float(x));
		case 5:
			var s = prop.a;
			return _Utils_Tuple2(
				'name',
				$elm$json$Json$Encode$string(s));
		case 2:
			var opts = prop.a;
			return _Utils_Tuple2(
				'options',
				A2($elm$json$Json$Encode$list, $elm$json$Json$Encode$string, opts));
		case 7:
			var el = prop.a;
			return _Utils_Tuple2(
				'placeholder',
				$elm$json$Json$Encode$string(el));
		default:
			var el = prop.a;
			return _Utils_Tuple2(
				'element',
				$elm$json$Json$Encode$string(el));
	}
};
var $gicentre$elm_vegalite$VegaLite$bindingSpec = function (bnd) {
	switch (bnd.$) {
		case 0:
			var label = bnd.a;
			var props = bnd.b;
			return _Utils_Tuple2(
				label,
				$elm$json$Json$Encode$object(
					A2(
						$elm$core$List$cons,
						_Utils_Tuple2(
							'input',
							$elm$json$Json$Encode$string('range')),
						A2($elm$core$List$map, $gicentre$elm_vegalite$VegaLite$inputProperty, props))));
		case 1:
			var label = bnd.a;
			var props = bnd.b;
			return _Utils_Tuple2(
				label,
				$elm$json$Json$Encode$object(
					A2(
						$elm$core$List$cons,
						_Utils_Tuple2(
							'input',
							$elm$json$Json$Encode$string('checkbox')),
						A2($elm$core$List$map, $gicentre$elm_vegalite$VegaLite$inputProperty, props))));
		case 2:
			var label = bnd.a;
			var props = bnd.b;
			return _Utils_Tuple2(
				label,
				$elm$json$Json$Encode$object(
					A2(
						$elm$core$List$cons,
						_Utils_Tuple2(
							'input',
							$elm$json$Json$Encode$string('radio')),
						A2($elm$core$List$map, $gicentre$elm_vegalite$VegaLite$inputProperty, props))));
		case 3:
			var label = bnd.a;
			var props = bnd.b;
			return _Utils_Tuple2(
				label,
				$elm$json$Json$Encode$object(
					A2(
						$elm$core$List$cons,
						_Utils_Tuple2(
							'input',
							$elm$json$Json$Encode$string('select')),
						A2($elm$core$List$map, $gicentre$elm_vegalite$VegaLite$inputProperty, props))));
		case 4:
			var label = bnd.a;
			var props = bnd.b;
			return _Utils_Tuple2(
				label,
				$elm$json$Json$Encode$object(
					A2(
						$elm$core$List$cons,
						_Utils_Tuple2(
							'input',
							$elm$json$Json$Encode$string('text')),
						A2($elm$core$List$map, $gicentre$elm_vegalite$VegaLite$inputProperty, props))));
		case 5:
			var label = bnd.a;
			var props = bnd.b;
			return _Utils_Tuple2(
				label,
				$elm$json$Json$Encode$object(
					A2(
						$elm$core$List$cons,
						_Utils_Tuple2(
							'input',
							$elm$json$Json$Encode$string('number')),
						A2($elm$core$List$map, $gicentre$elm_vegalite$VegaLite$inputProperty, props))));
		case 6:
			var label = bnd.a;
			var props = bnd.b;
			return _Utils_Tuple2(
				label,
				$elm$json$Json$Encode$object(
					A2(
						$elm$core$List$cons,
						_Utils_Tuple2(
							'input',
							$elm$json$Json$Encode$string('date')),
						A2($elm$core$List$map, $gicentre$elm_vegalite$VegaLite$inputProperty, props))));
		case 7:
			var label = bnd.a;
			var props = bnd.b;
			return _Utils_Tuple2(
				label,
				$elm$json$Json$Encode$object(
					A2(
						$elm$core$List$cons,
						_Utils_Tuple2(
							'input',
							$elm$json$Json$Encode$string('time')),
						A2($elm$core$List$map, $gicentre$elm_vegalite$VegaLite$inputProperty, props))));
		case 8:
			var label = bnd.a;
			var props = bnd.b;
			return _Utils_Tuple2(
				label,
				$elm$json$Json$Encode$object(
					A2(
						$elm$core$List$cons,
						_Utils_Tuple2(
							'input',
							$elm$json$Json$Encode$string('month')),
						A2($elm$core$List$map, $gicentre$elm_vegalite$VegaLite$inputProperty, props))));
		case 9:
			var label = bnd.a;
			var props = bnd.b;
			return _Utils_Tuple2(
				label,
				$elm$json$Json$Encode$object(
					A2(
						$elm$core$List$cons,
						_Utils_Tuple2(
							'input',
							$elm$json$Json$Encode$string('week')),
						A2($elm$core$List$map, $gicentre$elm_vegalite$VegaLite$inputProperty, props))));
		case 10:
			var label = bnd.a;
			var props = bnd.b;
			return _Utils_Tuple2(
				label,
				$elm$json$Json$Encode$object(
					A2(
						$elm$core$List$cons,
						_Utils_Tuple2(
							'input',
							$elm$json$Json$Encode$string('datetimelocal')),
						A2($elm$core$List$map, $gicentre$elm_vegalite$VegaLite$inputProperty, props))));
		case 11:
			var label = bnd.a;
			var props = bnd.b;
			return _Utils_Tuple2(
				label,
				$elm$json$Json$Encode$object(
					A2(
						$elm$core$List$cons,
						_Utils_Tuple2(
							'input',
							$elm$json$Json$Encode$string('tel')),
						A2($elm$core$List$map, $gicentre$elm_vegalite$VegaLite$inputProperty, props))));
		default:
			var label = bnd.a;
			var props = bnd.b;
			return _Utils_Tuple2(
				label,
				$elm$json$Json$Encode$object(
					A2(
						$elm$core$List$cons,
						_Utils_Tuple2(
							'input',
							$elm$json$Json$Encode$string('color')),
						A2($elm$core$List$map, $gicentre$elm_vegalite$VegaLite$inputProperty, props))));
	}
};
var $elm$core$Tuple$mapSecond = F2(
	function (func, _v0) {
		var x = _v0.a;
		var y = _v0.b;
		return _Utils_Tuple2(
			x,
			func(y));
	});
var $elm$core$List$member = F2(
	function (x, xs) {
		return A2(
			$elm$core$List$any,
			function (a) {
				return _Utils_eq(a, x);
			},
			xs);
	});
var $gicentre$elm_vegalite$VegaLite$selectionMarkProperty = function (markProp) {
	switch (markProp.$) {
		case 0:
			var colour = markProp.a;
			return _Utils_Tuple2(
				'fill',
				$elm$json$Json$Encode$string(colour));
		case 1:
			var x = markProp.a;
			return _Utils_Tuple2(
				'fillOpacity',
				$elm$json$Json$Encode$float(x));
		case 2:
			var colour = markProp.a;
			return _Utils_Tuple2(
				'stroke',
				$elm$json$Json$Encode$string(colour));
		case 3:
			var x = markProp.a;
			return _Utils_Tuple2(
				'strokeOpacity',
				$elm$json$Json$Encode$float(x));
		case 4:
			var x = markProp.a;
			return _Utils_Tuple2(
				'strokeWidth',
				$elm$json$Json$Encode$float(x));
		case 5:
			var xs = markProp.a;
			return _Utils_eq(xs, _List_Nil) ? _Utils_Tuple2('strokeDash', $elm$json$Json$Encode$null) : _Utils_Tuple2(
				'strokeDash',
				A2($elm$json$Json$Encode$list, $elm$json$Json$Encode$float, xs));
		case 6:
			var x = markProp.a;
			return _Utils_Tuple2(
				'strokeDashOffset',
				$elm$json$Json$Encode$float(x));
		default:
			var cur = markProp.a;
			return _Utils_Tuple2(
				'cursor',
				$elm$json$Json$Encode$string(
					$gicentre$elm_vegalite$VegaLite$cursorLabel(cur)));
	}
};
var $gicentre$elm_vegalite$VegaLite$selectionResolutionLabel = function (res) {
	switch (res) {
		case 0:
			return 'global';
		case 1:
			return 'union';
		default:
			return 'intersect';
	}
};
var $gicentre$elm_vegalite$VegaLite$selectionProperties = function (selProp) {
	switch (selProp.$) {
		case 7:
			var fNames = selProp.a;
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'fields',
					A2($elm$json$Json$Encode$list, $elm$json$Json$Encode$string, fNames))
				]);
		case 9:
			var iVals = selProp.a;
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'init',
					$elm$json$Json$Encode$object(
						A2(
							$elm$core$List$map,
							$elm$core$Tuple$mapSecond($gicentre$elm_vegalite$VegaLite$dataValueSpec),
							iVals)))
				]);
		case 10:
			var maybeX = selProp.a;
			var maybeY = selProp.b;
			var yExtent = _Utils_eq(
				maybeY,
				$elm$core$Maybe$Just(
					_Utils_Tuple2($gicentre$elm_vegalite$VegaLite$NullValue, $gicentre$elm_vegalite$VegaLite$NullValue))) ? $elm$core$Maybe$Nothing : maybeY;
			var xExtent = _Utils_eq(
				maybeX,
				$elm$core$Maybe$Just(
					_Utils_Tuple2($gicentre$elm_vegalite$VegaLite$NullValue, $gicentre$elm_vegalite$VegaLite$NullValue))) ? $elm$core$Maybe$Nothing : maybeX;
			var _v1 = _Utils_Tuple2(xExtent, yExtent);
			if (!_v1.a.$) {
				if (!_v1.b.$) {
					var _v2 = _v1.a.a;
					var xMin = _v2.a;
					var xMax = _v2.b;
					var _v3 = _v1.b.a;
					var yMin = _v3.a;
					var yMax = _v3.b;
					return _List_fromArray(
						[
							_Utils_Tuple2(
							'init',
							$elm$json$Json$Encode$object(
								_List_fromArray(
									[
										_Utils_Tuple2(
										'x',
										$gicentre$elm_vegalite$VegaLite$toList(
											_List_fromArray(
												[
													$gicentre$elm_vegalite$VegaLite$dataValueSpec(xMin),
													$gicentre$elm_vegalite$VegaLite$dataValueSpec(xMax)
												]))),
										_Utils_Tuple2(
										'y',
										$gicentre$elm_vegalite$VegaLite$toList(
											_List_fromArray(
												[
													$gicentre$elm_vegalite$VegaLite$dataValueSpec(yMin),
													$gicentre$elm_vegalite$VegaLite$dataValueSpec(yMax)
												])))
									])))
						]);
				} else {
					var _v4 = _v1.a.a;
					var xMin = _v4.a;
					var xMax = _v4.b;
					var _v5 = _v1.b;
					return _List_fromArray(
						[
							_Utils_Tuple2(
							'init',
							$elm$json$Json$Encode$object(
								_List_fromArray(
									[
										_Utils_Tuple2(
										'x',
										$gicentre$elm_vegalite$VegaLite$toList(
											_List_fromArray(
												[
													$gicentre$elm_vegalite$VegaLite$dataValueSpec(xMin),
													$gicentre$elm_vegalite$VegaLite$dataValueSpec(xMax)
												])))
									])))
						]);
				}
			} else {
				if (!_v1.b.$) {
					var _v6 = _v1.a;
					var _v7 = _v1.b.a;
					var yMin = _v7.a;
					var yMax = _v7.b;
					return _List_fromArray(
						[
							_Utils_Tuple2(
							'init',
							$elm$json$Json$Encode$object(
								_List_fromArray(
									[
										_Utils_Tuple2(
										'y',
										$gicentre$elm_vegalite$VegaLite$toList(
											_List_fromArray(
												[
													$gicentre$elm_vegalite$VegaLite$dataValueSpec(yMin),
													$gicentre$elm_vegalite$VegaLite$dataValueSpec(yMax)
												])))
									])))
						]);
				} else {
					var _v8 = _v1.a;
					var _v9 = _v1.b;
					return _List_fromArray(
						[
							_Utils_Tuple2('init', $elm$json$Json$Encode$null)
						]);
				}
			}
		case 8:
			var channels = selProp.a;
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'encodings',
					A2(
						$elm$json$Json$Encode$list,
						A2($elm$core$Basics$composeL, $elm$json$Json$Encode$string, $gicentre$elm_vegalite$VegaLite$channelLabel),
						channels))
				]);
		case 3:
			var evStr = selProp.a;
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'on',
					$elm$json$Json$Encode$string(evStr))
				]);
		case 4:
			var evStr = selProp.a;
			var _v10 = $elm$core$String$trim(evStr);
			if (_v10 === '') {
				return _List_fromArray(
					[
						_Utils_Tuple2(
						'clear',
						$elm$json$Json$Encode$bool(false))
					]);
			} else {
				var evStrTrimmed = _v10;
				return _List_fromArray(
					[
						_Utils_Tuple2(
						'clear',
						$elm$json$Json$Encode$string(evStrTrimmed))
					]);
			}
		case 0:
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'empty',
					$elm$json$Json$Encode$string('none'))
				]);
		case 11:
			var res = selProp.a;
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'resolve',
					$elm$json$Json$Encode$string(
						$gicentre$elm_vegalite$VegaLite$selectionResolutionLabel(res)))
				]);
		case 12:
			var markProps = selProp.a;
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'mark',
					$elm$json$Json$Encode$object(
						A2($elm$core$List$map, $gicentre$elm_vegalite$VegaLite$selectionMarkProperty, markProps)))
				]);
		case 1:
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'bind',
					$elm$json$Json$Encode$string('scales'))
				]);
		case 2:
			var blProps = selProp.a;
			var labelledSpecs = A2($elm$core$List$map, $gicentre$elm_vegalite$VegaLite$bindLegendProperty, blProps);
			return A2(
				$elm$core$List$member,
				'bind',
				A2($elm$core$List$map, $elm$core$Tuple$first, labelledSpecs)) ? labelledSpecs : A2(
				$elm$core$List$cons,
				_Utils_Tuple2(
					'bind',
					$elm$json$Json$Encode$string('legend')),
				labelledSpecs);
		case 13:
			var binds = selProp.a;
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'bind',
					$elm$json$Json$Encode$object(
						A2($elm$core$List$map, $gicentre$elm_vegalite$VegaLite$bindingSpec, binds)))
				]);
		case 14:
			var b = selProp.a;
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'nearest',
					$elm$json$Json$Encode$bool(b))
				]);
		case 15:
			var ex = selProp.a;
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'toggle',
					$elm$json$Json$Encode$string(ex))
				]);
		case 5:
			var e = selProp.a;
			return (e === '') ? _List_fromArray(
				[
					_Utils_Tuple2(
					'translate',
					$elm$json$Json$Encode$bool(false))
				]) : _List_fromArray(
				[
					_Utils_Tuple2(
					'translate',
					$elm$json$Json$Encode$string(e))
				]);
		default:
			var e = selProp.a;
			return (e === '') ? _List_fromArray(
				[
					_Utils_Tuple2(
					'zoom',
					$elm$json$Json$Encode$bool(false))
				]) : _List_fromArray(
				[
					_Utils_Tuple2(
					'zoom',
					$elm$json$Json$Encode$string(e))
				]);
	}
};
var $gicentre$elm_vegalite$VegaLite$tfLabel = function (tf) {
	if (tf === 1) {
		return 'group';
	} else {
		return 'bounds';
	}
};
var $gicentre$elm_vegalite$VegaLite$titleConfigProperty = function (titleCfg) {
	switch (titleCfg.$) {
		case 0:
			var an = titleCfg.a;
			return _Utils_Tuple2(
				'anchor',
				$elm$json$Json$Encode$string(
					$gicentre$elm_vegalite$VegaLite$anchorLabel(an)));
		case 1:
			var x = titleCfg.a;
			return _Utils_Tuple2(
				'angle',
				$elm$json$Json$Encode$float(x));
		case 2:
			var va = titleCfg.a;
			return _Utils_Tuple2(
				'baseline',
				$elm$json$Json$Encode$string(
					$gicentre$elm_vegalite$VegaLite$vAlignLabel(va)));
		case 3:
			var clr = titleCfg.a;
			return _Utils_Tuple2(
				'color',
				$elm$json$Json$Encode$string(clr));
		case 4:
			var fnt = titleCfg.a;
			return _Utils_Tuple2(
				'font',
				$elm$json$Json$Encode$string(fnt));
		case 5:
			var x = titleCfg.a;
			return _Utils_Tuple2(
				'fontSize',
				$elm$json$Json$Encode$float(x));
		case 6:
			var s = titleCfg.a;
			return _Utils_Tuple2(
				'fontStyle',
				$elm$json$Json$Encode$string(s));
		case 8:
			var tf = titleCfg.a;
			return _Utils_Tuple2(
				'frame',
				$elm$json$Json$Encode$string(
					$gicentre$elm_vegalite$VegaLite$tfLabel(tf)));
		case 7:
			var w = titleCfg.a;
			return _Utils_Tuple2(
				'fontWeight',
				$gicentre$elm_vegalite$VegaLite$fontWeightSpec(w));
		case 10:
			var x = titleCfg.a;
			return _Utils_Tuple2(
				'limit',
				$elm$json$Json$Encode$float(x));
		case 9:
			var x = titleCfg.a;
			return _Utils_Tuple2(
				'lineHeight',
				$elm$json$Json$Encode$float(x));
		case 11:
			var x = titleCfg.a;
			return _Utils_Tuple2(
				'offset',
				$elm$json$Json$Encode$float(x));
		case 12:
			var sd = titleCfg.a;
			return _Utils_Tuple2(
				'orient',
				$elm$json$Json$Encode$string(
					$gicentre$elm_vegalite$VegaLite$sideLabel(sd)));
		case 13:
			var ss = titleCfg.a;
			if (ss.b && (!ss.b.b)) {
				var s = ss.a;
				return _Utils_Tuple2(
					'style',
					$elm$json$Json$Encode$string(s));
			} else {
				return _Utils_Tuple2(
					'style',
					A2($elm$json$Json$Encode$list, $elm$json$Json$Encode$string, ss));
			}
		case 14:
			var s = titleCfg.a;
			return _Utils_Tuple2(
				'subtitle',
				$gicentre$elm_vegalite$VegaLite$multilineTextSpec(s));
		case 15:
			var s = titleCfg.a;
			return _Utils_Tuple2(
				'subtitleColor',
				$elm$json$Json$Encode$string(s));
		case 16:
			var s = titleCfg.a;
			return _Utils_Tuple2(
				'subtitleFont',
				$elm$json$Json$Encode$string(s));
		case 17:
			var x = titleCfg.a;
			return _Utils_Tuple2(
				'subtitleFontSize',
				$elm$json$Json$Encode$float(x));
		case 18:
			var s = titleCfg.a;
			return _Utils_Tuple2(
				'subtitleFontStyle',
				$elm$json$Json$Encode$string(s));
		case 19:
			var w = titleCfg.a;
			return _Utils_Tuple2(
				'subtitleFontWeight',
				$gicentre$elm_vegalite$VegaLite$fontWeightSpec(w));
		case 20:
			var x = titleCfg.a;
			return _Utils_Tuple2(
				'subtitleLineHeight',
				$elm$json$Json$Encode$float(x));
		case 21:
			var x = titleCfg.a;
			return _Utils_Tuple2(
				'subtitlePadding',
				$elm$json$Json$Encode$float(x));
		default:
			var n = titleCfg.a;
			return _Utils_Tuple2(
				'zindex',
				$elm$json$Json$Encode$int(n));
	}
};
var $gicentre$elm_vegalite$VegaLite$viewBackgroundProperty = function (vb) {
	switch (vb.$) {
		case 0:
			var styles = vb.a;
			return _Utils_Tuple2(
				'style',
				A2($elm$json$Json$Encode$list, $elm$json$Json$Encode$string, styles));
		case 1:
			var r = vb.a;
			return _Utils_Tuple2(
				'cornerRadius',
				$elm$json$Json$Encode$float(r));
		case 2:
			var ms = vb.a;
			if (!ms.$) {
				var s = ms.a;
				return _Utils_Tuple2(
					'fill',
					$elm$json$Json$Encode$string(s));
			} else {
				return _Utils_Tuple2(
					'fill',
					$elm$json$Json$Encode$string(''));
			}
		case 3:
			var x = vb.a;
			return _Utils_Tuple2(
				'fillOpacity',
				$elm$json$Json$Encode$float(x));
		case 4:
			var x = vb.a;
			return _Utils_Tuple2(
				'opacity',
				$elm$json$Json$Encode$float(x));
		case 5:
			var ms = vb.a;
			if (!ms.$) {
				var s = ms.a;
				return _Utils_Tuple2(
					'stroke',
					$elm$json$Json$Encode$string(s));
			} else {
				return _Utils_Tuple2(
					'stroke',
					$elm$json$Json$Encode$string(''));
			}
		case 6:
			var x = vb.a;
			return _Utils_Tuple2(
				'strokeOpacity',
				$elm$json$Json$Encode$float(x));
		case 8:
			var cap = vb.a;
			return _Utils_Tuple2(
				'strokeCap',
				$elm$json$Json$Encode$string(
					$gicentre$elm_vegalite$VegaLite$strokeCapLabel(cap)));
		case 11:
			var jn = vb.a;
			return _Utils_Tuple2(
				'strokeJoin',
				$elm$json$Json$Encode$string(
					$gicentre$elm_vegalite$VegaLite$strokeJoinLabel(jn)));
		case 7:
			var x = vb.a;
			return _Utils_Tuple2(
				'strokeWidth',
				$elm$json$Json$Encode$float(x));
		case 9:
			var xs = vb.a;
			return _Utils_eq(xs, _List_Nil) ? _Utils_Tuple2('strokeDash', $elm$json$Json$Encode$null) : _Utils_Tuple2(
				'strokeDash',
				A2($elm$json$Json$Encode$list, $elm$json$Json$Encode$float, xs));
		case 10:
			var x = vb.a;
			return _Utils_Tuple2(
				'strokeDashOffset',
				$elm$json$Json$Encode$float(x));
		default:
			var x = vb.a;
			return _Utils_Tuple2(
				'strokeMiterLimit',
				$elm$json$Json$Encode$float(x));
	}
};
var $gicentre$elm_vegalite$VegaLite$viewConfigProperties = function (viewCfg) {
	switch (viewCfg.$) {
		case 2:
			var x = viewCfg.a;
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'continuousWidth',
					$elm$json$Json$Encode$float(x))
				]);
		case 3:
			var x = viewCfg.a;
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'continuousHeight',
					$elm$json$Json$Encode$float(x))
				]);
		case 6:
			var x = viewCfg.a;
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'discreteWidth',
					$elm$json$Json$Encode$float(x))
				]);
		case 7:
			var x = viewCfg.a;
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'discreteHeight',
					$elm$json$Json$Encode$float(x))
				]);
		case 1:
			var b = viewCfg.a;
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'clip',
					$elm$json$Json$Encode$bool(b))
				]);
		case 4:
			var r = viewCfg.a;
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'cornerRadius',
					$elm$json$Json$Encode$float(r))
				]);
		case 5:
			var cur = viewCfg.a;
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'cursor',
					$elm$json$Json$Encode$string(
						$gicentre$elm_vegalite$VegaLite$cursorLabel(cur)))
				]);
		case 8:
			var ms = viewCfg.a;
			if (!ms.$) {
				var s = ms.a;
				return _List_fromArray(
					[
						_Utils_Tuple2(
						'fill',
						$elm$json$Json$Encode$string(s))
					]);
			} else {
				return _List_fromArray(
					[
						_Utils_Tuple2(
						'fill',
						$elm$json$Json$Encode$string(''))
					]);
			}
		case 9:
			var x = viewCfg.a;
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'fillOpacity',
					$elm$json$Json$Encode$float(x))
				]);
		case 10:
			var x = viewCfg.a;
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'opacity',
					$elm$json$Json$Encode$float(x))
				]);
		case 11:
			var x = viewCfg.a;
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'step',
					$elm$json$Json$Encode$float(x))
				]);
		case 12:
			var ms = viewCfg.a;
			if (!ms.$) {
				var s = ms.a;
				return _List_fromArray(
					[
						_Utils_Tuple2(
						'stroke',
						$elm$json$Json$Encode$string(s))
					]);
			} else {
				return _List_fromArray(
					[
						_Utils_Tuple2(
						'stroke',
						$elm$json$Json$Encode$string(''))
					]);
			}
		case 13:
			var x = viewCfg.a;
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'strokeOpacity',
					$elm$json$Json$Encode$float(x))
				]);
		case 15:
			var cap = viewCfg.a;
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'strokeCap',
					$elm$json$Json$Encode$string(
						$gicentre$elm_vegalite$VegaLite$strokeCapLabel(cap)))
				]);
		case 18:
			var jn = viewCfg.a;
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'strokeJoin',
					$elm$json$Json$Encode$string(
						$gicentre$elm_vegalite$VegaLite$strokeJoinLabel(jn)))
				]);
		case 14:
			var x = viewCfg.a;
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'strokeWidth',
					$elm$json$Json$Encode$float(x))
				]);
		case 16:
			var xs = viewCfg.a;
			return _Utils_eq(xs, _List_Nil) ? _List_fromArray(
				[
					_Utils_Tuple2('strokeDash', $elm$json$Json$Encode$null)
				]) : _List_fromArray(
				[
					_Utils_Tuple2(
					'strokeDash',
					A2($elm$json$Json$Encode$list, $elm$json$Json$Encode$float, xs))
				]);
		case 17:
			var x = viewCfg.a;
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'strokeDashOffset',
					$elm$json$Json$Encode$float(x))
				]);
		case 19:
			var x = viewCfg.a;
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'strokeMiterLimit',
					$elm$json$Json$Encode$float(x))
				]);
		default:
			var vbs = viewCfg.a;
			return A2($elm$core$List$map, $gicentre$elm_vegalite$VegaLite$viewBackgroundProperty, vbs);
	}
};
var $gicentre$elm_vegalite$VegaLite$configProperty = function (configProp) {
	switch (configProp.$) {
		case 1:
			var b = configProp.a;
			return _Utils_Tuple2(
				'aria',
				$elm$json$Json$Encode$bool(b));
		case 2:
			var aus = configProp.a;
			return _Utils_Tuple2(
				'autosize',
				$elm$json$Json$Encode$object(
					A2($elm$core$List$map, $gicentre$elm_vegalite$VegaLite$autosizeProperty, aus)));
		case 14:
			var bg = configProp.a;
			return _Utils_Tuple2(
				'background',
				$elm$json$Json$Encode$string(bg));
		case 18:
			var s = configProp.a;
			return _Utils_Tuple2(
				'countTitle',
				$elm$json$Json$Encode$string(s));
		case 20:
			var ftp = configProp.a;
			return _Utils_Tuple2(
				'fieldTitle',
				$elm$json$Json$Encode$string(
					$gicentre$elm_vegalite$VegaLite$fieldTitleLabel(ftp)));
		case 29:
			var fmt = configProp.a;
			return _Utils_Tuple2(
				'numberFormat',
				$elm$json$Json$Encode$string(fmt));
		case 30:
			var pad = configProp.a;
			return _Utils_Tuple2(
				'padding',
				$gicentre$elm_vegalite$VegaLite$paddingSpec(pad));
		case 42:
			var fmt = configProp.a;
			return _Utils_Tuple2(
				'timeFormat',
				$elm$json$Json$Encode$string(fmt));
		case 3:
			var axType = configProp.a;
			var acs = configProp.b;
			return _Utils_Tuple2(
				$gicentre$elm_vegalite$VegaLite$axisLabel(axType),
				$elm$json$Json$Encode$object(
					A2($elm$core$List$concatMap, $gicentre$elm_vegalite$VegaLite$axisConfigProperty, acs)));
		case 5:
			var acs = configProp.a;
			return _Utils_Tuple2(
				'axisLeft',
				$elm$json$Json$Encode$object(
					A2($elm$core$List$concatMap, $gicentre$elm_vegalite$VegaLite$axisConfigProperty, acs)));
		case 6:
			var acs = configProp.a;
			return _Utils_Tuple2(
				'axisRight',
				$elm$json$Json$Encode$object(
					A2($elm$core$List$concatMap, $gicentre$elm_vegalite$VegaLite$axisConfigProperty, acs)));
		case 7:
			var acs = configProp.a;
			return _Utils_Tuple2(
				'axisTop',
				$elm$json$Json$Encode$object(
					A2($elm$core$List$concatMap, $gicentre$elm_vegalite$VegaLite$axisConfigProperty, acs)));
		case 8:
			var acs = configProp.a;
			return _Utils_Tuple2(
				'axisBottom',
				$elm$json$Json$Encode$object(
					A2($elm$core$List$concatMap, $gicentre$elm_vegalite$VegaLite$axisConfigProperty, acs)));
		case 9:
			var axType = configProp.a;
			var acs = configProp.b;
			return _Utils_Tuple2(
				$gicentre$elm_vegalite$VegaLite$axisLabel(axType) + 'Band',
				$elm$json$Json$Encode$object(
					A2($elm$core$List$concatMap, $gicentre$elm_vegalite$VegaLite$axisConfigProperty, acs)));
		case 10:
			var axType = configProp.a;
			var acs = configProp.b;
			return _Utils_Tuple2(
				$gicentre$elm_vegalite$VegaLite$axisLabel(axType) + 'Discrete',
				$elm$json$Json$Encode$object(
					A2($elm$core$List$concatMap, $gicentre$elm_vegalite$VegaLite$axisConfigProperty, acs)));
		case 11:
			var axType = configProp.a;
			var acs = configProp.b;
			return _Utils_Tuple2(
				$gicentre$elm_vegalite$VegaLite$axisLabel(axType) + 'Point',
				$elm$json$Json$Encode$object(
					A2($elm$core$List$concatMap, $gicentre$elm_vegalite$VegaLite$axisConfigProperty, acs)));
		case 12:
			var axType = configProp.a;
			var acs = configProp.b;
			return _Utils_Tuple2(
				$gicentre$elm_vegalite$VegaLite$axisLabel(axType) + 'Quantitative',
				$elm$json$Json$Encode$object(
					A2($elm$core$List$concatMap, $gicentre$elm_vegalite$VegaLite$axisConfigProperty, acs)));
		case 13:
			var axType = configProp.a;
			var acs = configProp.b;
			return _Utils_Tuple2(
				$gicentre$elm_vegalite$VegaLite$axisLabel(axType) + 'Temporal',
				$elm$json$Json$Encode$object(
					A2($elm$core$List$concatMap, $gicentre$elm_vegalite$VegaLite$axisConfigProperty, acs)));
		case 23:
			var lcs = configProp.a;
			return _Utils_Tuple2(
				'legend',
				$elm$json$Json$Encode$object(
					A2($elm$core$List$concatMap, $gicentre$elm_vegalite$VegaLite$legendConfigProperty, lcs)));
		case 21:
			var fnt = configProp.a;
			return _Utils_Tuple2(
				'font',
				$elm$json$Json$Encode$string(fnt));
		case 27:
			var mps = configProp.a;
			return _Utils_Tuple2(
				'mark',
				$elm$json$Json$Encode$object(
					A2($elm$core$List$concatMap, $gicentre$elm_vegalite$VegaLite$markProperty, mps)));
		case 32:
			var pps = configProp.a;
			return _Utils_Tuple2(
				'projection',
				$elm$json$Json$Encode$object(
					A2($elm$core$List$map, $gicentre$elm_vegalite$VegaLite$projectionProperty, pps)));
		case 0:
			var mps = configProp.a;
			return _Utils_Tuple2(
				'area',
				$elm$json$Json$Encode$object(
					A2($elm$core$List$concatMap, $gicentre$elm_vegalite$VegaLite$markProperty, mps)));
		case 15:
			var mps = configProp.a;
			return _Utils_Tuple2(
				'bar',
				$elm$json$Json$Encode$object(
					A2($elm$core$List$concatMap, $gicentre$elm_vegalite$VegaLite$markProperty, mps)));
		case 16:
			var mps = configProp.a;
			return _Utils_Tuple2(
				'circle',
				$elm$json$Json$Encode$object(
					A2($elm$core$List$concatMap, $gicentre$elm_vegalite$VegaLite$markProperty, mps)));
		case 25:
			var fps = configProp.a;
			return _Utils_Tuple2(
				'facet',
				$elm$json$Json$Encode$object(
					A2($elm$core$List$map, $gicentre$elm_vegalite$VegaLite$facetConfigProperty, fps)));
		case 17:
			var cps = configProp.a;
			return _Utils_Tuple2(
				'concat',
				$elm$json$Json$Encode$object(
					A2($elm$core$List$map, $gicentre$elm_vegalite$VegaLite$concatConfigProperty, cps)));
		case 19:
			var b = configProp.a;
			return _Utils_Tuple2(
				'customFormatTypes',
				$elm$json$Json$Encode$bool(b));
		case 22:
			var mps = configProp.a;
			return _Utils_Tuple2(
				'geoshape',
				$elm$json$Json$Encode$object(
					A2($elm$core$List$concatMap, $gicentre$elm_vegalite$VegaLite$markProperty, mps)));
		case 26:
			var hps = configProp.a;
			return _Utils_Tuple2(
				'header',
				$elm$json$Json$Encode$object(
					A2($elm$core$List$map, $gicentre$elm_vegalite$VegaLite$headerProperty, hps)));
		case 24:
			var mps = configProp.a;
			return _Utils_Tuple2(
				'line',
				$elm$json$Json$Encode$object(
					A2($elm$core$List$concatMap, $gicentre$elm_vegalite$VegaLite$markProperty, mps)));
		case 31:
			var mps = configProp.a;
			return _Utils_Tuple2(
				'point',
				$elm$json$Json$Encode$object(
					A2($elm$core$List$concatMap, $gicentre$elm_vegalite$VegaLite$markProperty, mps)));
		case 34:
			var mps = configProp.a;
			return _Utils_Tuple2(
				'rect',
				$elm$json$Json$Encode$object(
					A2($elm$core$List$concatMap, $gicentre$elm_vegalite$VegaLite$markProperty, mps)));
		case 35:
			var mps = configProp.a;
			return _Utils_Tuple2(
				'rule',
				$elm$json$Json$Encode$object(
					A2($elm$core$List$concatMap, $gicentre$elm_vegalite$VegaLite$markProperty, mps)));
		case 38:
			var mps = configProp.a;
			return _Utils_Tuple2(
				'square',
				$elm$json$Json$Encode$object(
					A2($elm$core$List$concatMap, $gicentre$elm_vegalite$VegaLite$markProperty, mps)));
		case 39:
			var mps = configProp.a;
			return _Utils_Tuple2(
				'text',
				$elm$json$Json$Encode$object(
					A2($elm$core$List$concatMap, $gicentre$elm_vegalite$VegaLite$markProperty, mps)));
		case 40:
			var mps = configProp.a;
			return _Utils_Tuple2(
				'tick',
				$elm$json$Json$Encode$object(
					A2($elm$core$List$concatMap, $gicentre$elm_vegalite$VegaLite$markProperty, mps)));
		case 41:
			var tcs = configProp.a;
			return _Utils_Tuple2(
				'title',
				$elm$json$Json$Encode$object(
					A2($elm$core$List$map, $gicentre$elm_vegalite$VegaLite$titleConfigProperty, tcs)));
		case 28:
			var styles = configProp.a;
			return _Utils_Tuple2(
				'style',
				$elm$json$Json$Encode$object(
					A2(
						$elm$core$List$map,
						function (_v1) {
							var sName = _v1.a;
							var mps = _v1.b;
							return _Utils_Tuple2(
								sName,
								$elm$json$Json$Encode$object(
									A2($elm$core$List$concatMap, $gicentre$elm_vegalite$VegaLite$markProperty, mps)));
						},
						styles)));
		case 4:
			var styles = configProp.a;
			return _Utils_Tuple2(
				'style',
				$elm$json$Json$Encode$object(
					A2(
						$elm$core$List$map,
						function (_v2) {
							var sName = _v2.a;
							var mps = _v2.b;
							return _Utils_Tuple2(
								sName,
								$elm$json$Json$Encode$object(
									A2($elm$core$List$concatMap, $gicentre$elm_vegalite$VegaLite$axisProperty, mps)));
						},
						styles)));
		case 36:
			var scs = configProp.a;
			return _Utils_Tuple2(
				'scale',
				$elm$json$Json$Encode$object(
					A2($elm$core$List$map, $gicentre$elm_vegalite$VegaLite$scaleConfigProperty, scs)));
		case 33:
			var rcs = configProp.a;
			return _Utils_Tuple2(
				'range',
				$elm$json$Json$Encode$object(
					A2($elm$core$List$map, $gicentre$elm_vegalite$VegaLite$rangeConfigProperty, rcs)));
		case 37:
			var selConfig = configProp.a;
			var selProp = function (_v3) {
				var sel = _v3.a;
				var sps = _v3.b;
				return _Utils_Tuple2(
					$gicentre$elm_vegalite$VegaLite$selectionLabel(sel),
					$elm$json$Json$Encode$object(
						A2($elm$core$List$concatMap, $gicentre$elm_vegalite$VegaLite$selectionProperties, sps)));
			};
			return _Utils_Tuple2(
				'selection',
				$elm$json$Json$Encode$object(
					A2($elm$core$List$map, selProp, selConfig)));
		case 44:
			var vcs = configProp.a;
			return _Utils_Tuple2(
				'view',
				$elm$json$Json$Encode$object(
					A2($elm$core$List$concatMap, $gicentre$elm_vegalite$VegaLite$viewConfigProperties, vcs)));
		default:
			var mps = configProp.a;
			return _Utils_Tuple2(
				'trail',
				$elm$json$Json$Encode$object(
					A2($elm$core$List$concatMap, $gicentre$elm_vegalite$VegaLite$markProperty, mps)));
	}
};
var $gicentre$elm_vegalite$VegaLite$configuration = function (cfg) {
	return $elm$core$List$cons(
		$gicentre$elm_vegalite$VegaLite$configProperty(cfg));
};
var $gicentre$elm_vegalite$VegaLite$VLConfig = 29;
var $gicentre$elm_vegalite$VegaLite$configure = function (configs) {
	return _Utils_Tuple2(
		29,
		$elm$json$Json$Encode$object(configs));
};
var $gicentre$elm_vegalite$VegaLite$dataColumn = F2(
	function (colName, data) {
		switch (data.$) {
			case 2:
				var col = data.a;
				return $elm$core$List$cons(
					A2(
						$elm$core$List$map,
						function (x) {
							return _Utils_Tuple2(
								colName,
								$elm$json$Json$Encode$float(x));
						},
						col));
			case 3:
				var col = data.a;
				return $elm$core$List$cons(
					A2(
						$elm$core$List$map,
						function (s) {
							return _Utils_Tuple2(
								colName,
								$elm$json$Json$Encode$string(s));
						},
						col));
			case 1:
				var col = data.a;
				return $elm$core$List$cons(
					A2(
						$elm$core$List$map,
						function (ds) {
							return _Utils_Tuple2(
								colName,
								$elm$json$Json$Encode$object(
									A2($elm$core$List$map, $gicentre$elm_vegalite$VegaLite$dateTimeProperty, ds)));
						},
						col));
			default:
				var col = data.a;
				return $elm$core$List$cons(
					A2(
						$elm$core$List$map,
						function (b) {
							return _Utils_Tuple2(
								colName,
								$elm$json$Json$Encode$bool(b));
						},
						col));
		}
	});
var $gicentre$elm_vegalite$VegaLite$VLData = 10;
var $gicentre$elm_vegalite$VegaLite$dataTypeLabel = function (dType) {
	switch (dType.$) {
		case 0:
			return 'number';
		case 1:
			return 'boolean';
		case 2:
			var dateFmt = dType.a;
			return (dateFmt === '') ? 'date' : ('date:\'' + (dateFmt + '\''));
		default:
			var dateFmt = dType.a;
			return (dateFmt === '') ? 'utc' : ('utc:\'' + (dateFmt + '\''));
	}
};
var $elm$core$String$cons = _String_cons;
var $elm$core$String$fromChar = function (_char) {
	return A2($elm$core$String$cons, _char, '');
};
var $gicentre$elm_vegalite$VegaLite$formatProperties = function (fmt) {
	switch (fmt.$) {
		case 0:
			var propertyName = fmt.a;
			return ($elm$core$String$trim(propertyName) === '') ? _List_fromArray(
				[
					_Utils_Tuple2(
					'type',
					$elm$json$Json$Encode$string('json'))
				]) : _List_fromArray(
				[
					_Utils_Tuple2(
					'type',
					$elm$json$Json$Encode$string('json')),
					_Utils_Tuple2(
					'property',
					$elm$json$Json$Encode$string(propertyName))
				]);
		case 1:
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'type',
					$elm$json$Json$Encode$string('csv'))
				]);
		case 2:
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'type',
					$elm$json$Json$Encode$string('tsv'))
				]);
		case 3:
			var delim = fmt.a;
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'type',
					$elm$json$Json$Encode$string('dsv')),
					_Utils_Tuple2(
					'delimiter',
					$elm$json$Json$Encode$string(
						$elm$core$String$fromChar(delim)))
				]);
		case 4:
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'type',
					$elm$json$Json$Encode$string('arrow'))
				]);
		case 5:
			var objectSet = fmt.a;
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'type',
					$elm$json$Json$Encode$string('topojson')),
					_Utils_Tuple2(
					'feature',
					$elm$json$Json$Encode$string(objectSet))
				]);
		case 6:
			var objectSet = fmt.a;
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'type',
					$elm$json$Json$Encode$string('topojson')),
					_Utils_Tuple2(
					'mesh',
					$elm$json$Json$Encode$string(objectSet))
				]);
		default:
			var fmts = fmt.a;
			return _Utils_eq(fmts, _List_Nil) ? _List_fromArray(
				[
					_Utils_Tuple2('parse', $elm$json$Json$Encode$null)
				]) : _List_fromArray(
				[
					_Utils_Tuple2(
					'parse',
					$elm$json$Json$Encode$object(
						A2(
							$elm$core$List$map,
							function (_v1) {
								var field = _v1.a;
								var fFormat = _v1.b;
								return _Utils_Tuple2(
									field,
									$elm$json$Json$Encode$string(
										$gicentre$elm_vegalite$VegaLite$dataTypeLabel(fFormat)));
							},
							fmts)))
				]);
	}
};
var $elm$core$List$repeatHelp = F3(
	function (result, n, value) {
		repeatHelp:
		while (true) {
			if (n <= 0) {
				return result;
			} else {
				var $temp$result = A2($elm$core$List$cons, value, result),
					$temp$n = n - 1,
					$temp$value = value;
				result = $temp$result;
				n = $temp$n;
				value = $temp$value;
				continue repeatHelp;
			}
		}
	});
var $elm$core$List$repeat = F2(
	function (n, value) {
		return A3($elm$core$List$repeatHelp, _List_Nil, n, value);
	});
var $gicentre$elm_vegalite$VegaLite$transpose = function (xss) {
	var numCols = A2(
		$elm$core$Basics$composeR,
		$elm$core$List$head,
		A2(
			$elm$core$Basics$composeR,
			$elm$core$Maybe$withDefault(_List_Nil),
			$elm$core$List$length));
	return A3(
		$elm$core$List$foldr,
		$elm$core$List$map2($elm$core$List$cons),
		A2(
			$elm$core$List$repeat,
			numCols(xss),
			_List_Nil),
		xss);
};
var $gicentre$elm_vegalite$VegaLite$dataFromColumns = F2(
	function (fmts, cols) {
		if (_Utils_eq(cols, _List_Nil)) {
			return _Utils_Tuple2(
				10,
				$elm$json$Json$Encode$object(
					_List_fromArray(
						[
							_Utils_Tuple2(
							'values',
							$gicentre$elm_vegalite$VegaLite$toList(
								_List_fromArray(
									[
										$elm$json$Json$Encode$object(_List_Nil)
									])))
						])));
		} else {
			var dataArray = A2(
				$elm$json$Json$Encode$list,
				$elm$json$Json$Encode$object,
				$gicentre$elm_vegalite$VegaLite$transpose(cols));
			return _Utils_eq(fmts, _List_Nil) ? _Utils_Tuple2(
				10,
				$elm$json$Json$Encode$object(
					_List_fromArray(
						[
							_Utils_Tuple2('values', dataArray)
						]))) : _Utils_Tuple2(
				10,
				$elm$json$Json$Encode$object(
					_List_fromArray(
						[
							_Utils_Tuple2('values', dataArray),
							_Utils_Tuple2(
							'format',
							$elm$json$Json$Encode$object(
								A2($elm$core$List$concatMap, $gicentre$elm_vegalite$VegaLite$formatProperties, fmts)))
						])));
		}
	});
var $author$project$TimeSeries$defaultDate = '';
var $author$project$TimeSeries$defaultKey = '';
var $author$project$TimeSeries$defaultDataRecord = {
	aJ: _List_fromArray(
		[$author$project$Count$default]),
	O: $author$project$TimeSeries$defaultCounty,
	aK: _List_fromArray(
		[$author$project$TimeSeries$defaultDate]),
	P: $author$project$TimeSeries$defaultKey,
	Q: $elm$core$Maybe$Nothing,
	R: $author$project$TimeSeries$defaultState
};
var $gicentre$elm_vegalite$VegaLite$VLEncoding = 15;
var $gicentre$elm_vegalite$VegaLite$encoding = function (channels) {
	return _Utils_Tuple2(
		15,
		$elm$json$Json$Encode$object(channels));
};
var $elm$core$Basics$min = F2(
	function (x, y) {
		return (_Utils_cmp(x, y) < 0) ? x : y;
	});
var $author$project$Main$getChartSize = function (width) {
	var maxChartSize = 600.0;
	var w = A2($elm$core$Basics$min, maxChartSize, width * 0.5);
	return {S: w / 1.618, _: w};
};
var $gicentre$elm_vegalite$VegaLite$VLHeight = 4;
var $gicentre$elm_vegalite$VegaLite$height = function (h) {
	return _Utils_Tuple2(
		4,
		$elm$json$Json$Encode$float(h));
};
var $gicentre$elm_vegalite$VegaLite$LDirection = function (a) {
	return {$: 5, a: a};
};
var $gicentre$elm_vegalite$VegaLite$leDirection = $gicentre$elm_vegalite$VegaLite$LDirection;
var $gicentre$elm_vegalite$VegaLite$LeLabelFontSize = function (a) {
	return {$: 21, a: a};
};
var $gicentre$elm_vegalite$VegaLite$lecoLabelFontSize = $gicentre$elm_vegalite$VegaLite$LeLabelFontSize;
var $gicentre$elm_vegalite$VegaLite$Orient = function (a) {
	return {$: 26, a: a};
};
var $gicentre$elm_vegalite$VegaLite$lecoOrient = $gicentre$elm_vegalite$VegaLite$Orient;
var $gicentre$elm_vegalite$VegaLite$SymbolStrokeWidth = function (a) {
	return {$: 41, a: a};
};
var $gicentre$elm_vegalite$VegaLite$lecoSymbolStrokeWidth = $gicentre$elm_vegalite$VegaLite$SymbolStrokeWidth;
var $gicentre$elm_vegalite$VegaLite$LeTitleFontSize = function (a) {
	return {$: 47, a: a};
};
var $gicentre$elm_vegalite$VegaLite$lecoTitleFontSize = $gicentre$elm_vegalite$VegaLite$LeTitleFontSize;
var $gicentre$elm_vegalite$VegaLite$Line = 9;
var $gicentre$elm_vegalite$VegaLite$VLMark = 12;
var $gicentre$elm_vegalite$VegaLite$markLabel = function (m) {
	switch (m) {
		case 0:
			return 'arc';
		case 1:
			return 'area';
		case 2:
			return 'bar';
		case 3:
			return 'boxplot';
		case 6:
			return 'circle';
		case 4:
			return 'errorband';
		case 5:
			return 'errorbar';
		case 8:
			return 'image';
		case 9:
			return 'line';
		case 7:
			return 'geoshape';
		case 10:
			return 'point';
		case 11:
			return 'rect';
		case 12:
			return 'rule';
		case 13:
			return 'square';
		case 14:
			return 'text';
		case 15:
			return 'tick';
		default:
			return 'trail';
	}
};
var $gicentre$elm_vegalite$VegaLite$mark = F2(
	function (m, mProps) {
		if (!mProps.b) {
			return _Utils_Tuple2(
				12,
				$elm$json$Json$Encode$string(
					$gicentre$elm_vegalite$VegaLite$markLabel(m)));
		} else {
			return _Utils_Tuple2(
				12,
				$elm$json$Json$Encode$object(
					A2(
						$elm$core$List$cons,
						_Utils_Tuple2(
							'type',
							$elm$json$Json$Encode$string(
								$gicentre$elm_vegalite$VegaLite$markLabel(m))),
						A2($elm$core$List$concatMap, $gicentre$elm_vegalite$VegaLite$markProperty, mProps))));
		}
	});
var $gicentre$elm_vegalite$VegaLite$line = $gicentre$elm_vegalite$VegaLite$mark(9);
var $gicentre$elm_vegalite$VegaLite$Bottom = 0;
var $gicentre$elm_vegalite$VegaLite$loBottom = 0;
var $gicentre$elm_vegalite$VegaLite$MLegend = function (a) {
	return {$: 13, a: a};
};
var $gicentre$elm_vegalite$VegaLite$mLegend = $gicentre$elm_vegalite$VegaLite$MLegend;
var $gicentre$elm_vegalite$VegaLite$MName = function (a) {
	return {$: 0, a: a};
};
var $gicentre$elm_vegalite$VegaLite$mName = $gicentre$elm_vegalite$VegaLite$MName;
var $gicentre$elm_vegalite$VegaLite$MStrokeWidth = function (a) {
	return {$: 61, a: a};
};
var $gicentre$elm_vegalite$VegaLite$maStrokeWidth = $gicentre$elm_vegalite$VegaLite$MStrokeWidth;
var $author$project$Count$toFloat = function (_v0) {
	var c = _v0;
	return c;
};
var $author$project$TimeSeries$weightCount = F2(
	function (population, count) {
		return ($author$project$Count$toFloat(count) / $author$project$Count$toFloat(population)) * 100000;
	});
var $author$project$TimeSeries$accumulateDataRecord = F3(
	function (weightCounts, dataRecord, vegaLiteData) {
		var newDates = _Utils_ap(vegaLiteData.aK, dataRecord.aK);
		var ks = A2(
			$elm$core$List$repeat,
			$elm$core$List$length(dataRecord.aK),
			dataRecord.P);
		var newKeys = _Utils_ap(vegaLiteData.aT, ks);
		var confirmedCases = function () {
			if (weightCounts) {
				var _v0 = dataRecord.Q;
				if (!_v0.$) {
					var population = _v0.a;
					return A2(
						$elm$core$List$map,
						$author$project$TimeSeries$weightCount(population),
						dataRecord.aJ);
				} else {
					return A2($elm$core$List$map, $author$project$Count$toFloat, dataRecord.aJ);
				}
			} else {
				return A2($elm$core$List$map, $author$project$Count$toFloat, dataRecord.aJ);
			}
		}();
		var newConfirmedCases = _Utils_ap(vegaLiteData.aJ, confirmedCases);
		return _Utils_update(
			vegaLiteData,
			{aJ: newConfirmedCases, aK: newDates, aT: newKeys});
	});
var $author$project$TimeSeries$VegaLiteData = F3(
	function (dates, confirmedCases, keys) {
		return {aJ: confirmedCases, aK: dates, aT: keys};
	});
var $author$project$TimeSeries$emptyVegaLiteData = A3($author$project$TimeSeries$VegaLiteData, _List_Nil, _List_Nil, _List_Nil);
var $author$project$TimeSeries$mkVegaLiteData = F2(
	function (weightCounts, dataRecords) {
		return A3(
			$elm$core$List$foldl,
			$author$project$TimeSeries$accumulateDataRecord(weightCounts),
			$author$project$TimeSeries$emptyVegaLiteData,
			dataRecords);
	});
var $gicentre$elm_vegalite$VegaLite$MOVertical = 1;
var $gicentre$elm_vegalite$VegaLite$moVertical = 1;
var $gicentre$elm_vegalite$VegaLite$Numbers = function (a) {
	return {$: 2, a: a};
};
var $gicentre$elm_vegalite$VegaLite$nums = $gicentre$elm_vegalite$VegaLite$Numbers;
var $gicentre$elm_vegalite$VegaLite$PAxis = function (a) {
	return {$: 13, a: a};
};
var $gicentre$elm_vegalite$VegaLite$pAxis = $gicentre$elm_vegalite$VegaLite$PAxis;
var $gicentre$elm_vegalite$VegaLite$PmType = function (a) {
	return {$: 6, a: a};
};
var $gicentre$elm_vegalite$VegaLite$pMType = $gicentre$elm_vegalite$VegaLite$PmType;
var $gicentre$elm_vegalite$VegaLite$PName = function (a) {
	return {$: 0, a: a};
};
var $gicentre$elm_vegalite$VegaLite$pName = $gicentre$elm_vegalite$VegaLite$PName;
var $gicentre$elm_vegalite$VegaLite$PTitle = function (a) {
	return {$: 10, a: a};
};
var $gicentre$elm_vegalite$VegaLite$pTitle = $gicentre$elm_vegalite$VegaLite$PTitle;
var $gicentre$elm_vegalite$VegaLite$imMethodLabel = function (method) {
	switch (method) {
		case 0:
			return 'value';
		case 1:
			return 'mean';
		case 2:
			return 'median';
		case 3:
			return 'max';
		default:
			return 'min';
	}
};
var $gicentre$elm_vegalite$VegaLite$imputeProperty = function (ip) {
	switch (ip.$) {
		case 0:
			if (!ip.a.$) {
				if (!ip.b.$) {
					var n1 = ip.a.a;
					var n2 = ip.b.a;
					return _Utils_Tuple2(
						'frame',
						A2(
							$elm$json$Json$Encode$list,
							$elm$json$Json$Encode$int,
							_List_fromArray(
								[n1, n2])));
				} else {
					var n1 = ip.a.a;
					var _v2 = ip.b;
					return _Utils_Tuple2(
						'frame',
						$gicentre$elm_vegalite$VegaLite$toList(
							_List_fromArray(
								[
									$elm$json$Json$Encode$int(n1),
									$elm$json$Json$Encode$null
								])));
				}
			} else {
				if (!ip.b.$) {
					var _v1 = ip.a;
					var n2 = ip.b.a;
					return _Utils_Tuple2(
						'frame',
						$gicentre$elm_vegalite$VegaLite$toList(
							_List_fromArray(
								[
									$elm$json$Json$Encode$null,
									$elm$json$Json$Encode$int(n2)
								])));
				} else {
					var _v3 = ip.a;
					var _v4 = ip.b;
					return _Utils_Tuple2(
						'frame',
						$gicentre$elm_vegalite$VegaLite$toList(
							_List_fromArray(
								[$elm$json$Json$Encode$null, $elm$json$Json$Encode$null])));
				}
			}
		case 1:
			var dVals = ip.a;
			return _Utils_Tuple2(
				'keyvals',
				$gicentre$elm_vegalite$VegaLite$toList(
					$gicentre$elm_vegalite$VegaLite$dataValuesSpecs(dVals)));
		case 2:
			var start = ip.a;
			var stop = ip.b;
			var step = ip.c;
			return _Utils_Tuple2(
				'keyvals',
				$elm$json$Json$Encode$object(
					_List_fromArray(
						[
							_Utils_Tuple2(
							'start',
							$elm$json$Json$Encode$float(start)),
							_Utils_Tuple2(
							'stop',
							$elm$json$Json$Encode$float(stop)),
							_Utils_Tuple2(
							'step',
							$elm$json$Json$Encode$float(step))
						])));
		case 3:
			var method = ip.a;
			return _Utils_Tuple2(
				'method',
				$elm$json$Json$Encode$string(
					$gicentre$elm_vegalite$VegaLite$imMethodLabel(method)));
		case 5:
			var dVal = ip.a;
			return _Utils_Tuple2(
				'value',
				$gicentre$elm_vegalite$VegaLite$dataValueSpec(dVal));
		default:
			var fields = ip.a;
			return _Utils_Tuple2(
				'groupby',
				A2($elm$json$Json$Encode$list, $elm$json$Json$Encode$string, fields));
	}
};
var $gicentre$elm_vegalite$VegaLite$stackOffsetSpec = function (sp) {
	switch (sp) {
		case 0:
			return $elm$json$Json$Encode$string('zero');
		case 1:
			return $elm$json$Json$Encode$string('normalize');
		case 2:
			return $elm$json$Json$Encode$string('center');
		default:
			return $elm$json$Json$Encode$null;
	}
};
var $gicentre$elm_vegalite$VegaLite$stackOffsetProperty = function (offset) {
	return _Utils_Tuple2(
		'stack',
		$gicentre$elm_vegalite$VegaLite$stackOffsetSpec(offset));
};
var $gicentre$elm_vegalite$VegaLite$positionChannelProperty = function (pDef) {
	switch (pDef.$) {
		case 0:
			var s = pDef.a;
			return _Utils_Tuple2(
				'field',
				$elm$json$Json$Encode$string(s));
		case 1:
			var d = pDef.a;
			return _Utils_Tuple2(
				'datum',
				$gicentre$elm_vegalite$VegaLite$dataValueSpec(d));
		case 6:
			var measure = pDef.a;
			return _Utils_Tuple2(
				'type',
				$elm$json$Json$Encode$string(
					$gicentre$elm_vegalite$VegaLite$measurementLabel(measure)));
		case 7:
			var bps = pDef.a;
			return $gicentre$elm_vegalite$VegaLite$bin(bps);
		case 8:
			return _Utils_Tuple2(
				'bin',
				$elm$json$Json$Encode$string('binned'));
		case 11:
			var op = pDef.a;
			return _Utils_Tuple2(
				'aggregate',
				$gicentre$elm_vegalite$VegaLite$operationSpec(op));
		case 9:
			var tu = pDef.a;
			return _Utils_Tuple2(
				'timeUnit',
				$gicentre$elm_vegalite$VegaLite$timeUnitSpec(tu));
		case 10:
			var t = pDef.a;
			return _Utils_Tuple2(
				'title',
				$gicentre$elm_vegalite$VegaLite$multilineTextSpec(t));
		case 14:
			var sps = pDef.a;
			_v1$4:
			while (true) {
				if (!sps.b) {
					return _Utils_Tuple2('sort', $elm$json$Json$Encode$null);
				} else {
					if (!sps.b.b) {
						switch (sps.a.$) {
							case 0:
								var _v2 = sps.a;
								return _Utils_Tuple2(
									'sort',
									$elm$json$Json$Encode$string('ascending'));
							case 1:
								var _v3 = sps.a;
								return _Utils_Tuple2(
									'sort',
									$elm$json$Json$Encode$string('descending'));
							case 2:
								var dvs = sps.a.a;
								return _Utils_Tuple2(
									'sort',
									$gicentre$elm_vegalite$VegaLite$toList(
										$gicentre$elm_vegalite$VegaLite$dataValuesSpecs(dvs)));
							default:
								break _v1$4;
						}
					} else {
						break _v1$4;
					}
				}
			}
			return _Utils_Tuple2(
				'sort',
				$elm$json$Json$Encode$object(
					A2($elm$core$List$concatMap, $gicentre$elm_vegalite$VegaLite$sortProperties, sps)));
		case 15:
			var x = pDef.a;
			return _Utils_Tuple2(
				'band',
				$elm$json$Json$Encode$float(x));
		case 12:
			var sps = pDef.a;
			return _Utils_eq(sps, _List_Nil) ? _Utils_Tuple2('scale', $elm$json$Json$Encode$null) : _Utils_Tuple2(
				'scale',
				$elm$json$Json$Encode$object(
					A2($elm$core$List$map, $gicentre$elm_vegalite$VegaLite$scaleProperty, sps)));
		case 13:
			var aps = pDef.a;
			return _Utils_eq(aps, _List_Nil) ? _Utils_Tuple2('axis', $elm$json$Json$Encode$null) : _Utils_Tuple2(
				'axis',
				$elm$json$Json$Encode$object(
					A2($elm$core$List$concatMap, $gicentre$elm_vegalite$VegaLite$axisProperty, aps)));
		case 16:
			var so = pDef.a;
			return $gicentre$elm_vegalite$VegaLite$stackOffsetProperty(so);
		case 5:
			var arr = pDef.a;
			return _Utils_Tuple2(
				'field',
				$elm$json$Json$Encode$object(
					_List_fromArray(
						[
							_Utils_Tuple2(
							'repeat',
							$elm$json$Json$Encode$string(
								$gicentre$elm_vegalite$VegaLite$arrangementLabel(arr)))
						])));
		case 2:
			return _Utils_Tuple2(
				'value',
				$elm$json$Json$Encode$string('width'));
		case 3:
			return _Utils_Tuple2(
				'value',
				$elm$json$Json$Encode$string('height'));
		case 4:
			var x = pDef.a;
			return _Utils_Tuple2(
				'value',
				$elm$json$Json$Encode$float(x));
		default:
			var ips = pDef.a;
			return _Utils_Tuple2(
				'impute',
				$elm$json$Json$Encode$object(
					A2($elm$core$List$map, $gicentre$elm_vegalite$VegaLite$imputeProperty, ips)));
	}
};
var $gicentre$elm_vegalite$VegaLite$positionLabel = function (pChannel) {
	switch (pChannel) {
		case 0:
			return 'x';
		case 1:
			return 'y';
		case 2:
			return 'x2';
		case 3:
			return 'y2';
		case 4:
			return 'theta';
		case 5:
			return 'theta2';
		case 6:
			return 'radius';
		case 7:
			return 'radius2';
		case 12:
			return 'xError';
		case 13:
			return 'yError';
		case 14:
			return 'xError2';
		case 15:
			return 'yError2';
		case 8:
			return 'longitude';
		case 9:
			return 'latitude';
		case 10:
			return 'longitude2';
		default:
			return 'latitude2';
	}
};
var $gicentre$elm_vegalite$VegaLite$position = F2(
	function (pos, pDefs) {
		return $elm$core$List$cons(
			_Utils_Tuple2(
				$gicentre$elm_vegalite$VegaLite$positionLabel(pos),
				$elm$json$Json$Encode$object(
					A2($elm$core$List$map, $gicentre$elm_vegalite$VegaLite$positionChannelProperty, pDefs))));
	});
var $gicentre$elm_vegalite$VegaLite$Strings = function (a) {
	return {$: 3, a: a};
};
var $gicentre$elm_vegalite$VegaLite$strs = $gicentre$elm_vegalite$VegaLite$Strings;
var $gicentre$elm_vegalite$VegaLite$vlPropertyLabel = function (spec) {
	switch (spec) {
		case 0:
			return 'name';
		case 1:
			return 'description';
		case 2:
			return 'title';
		case 3:
			return 'width';
		case 5:
			return 'width';
		case 4:
			return 'height';
		case 6:
			return 'height';
		case 8:
			return 'padding';
		case 7:
			return 'autosize';
		case 9:
			return 'background';
		case 10:
			return 'data';
		case 11:
			return 'datasets';
		case 14:
			return 'projection';
		case 12:
			return 'mark';
		case 13:
			return 'transform';
		case 15:
			return 'encoding';
		case 29:
			return 'config';
		case 30:
			return 'selection';
		case 17:
			return 'concat';
		case 20:
			return 'columns';
		case 18:
			return 'hconcat';
		case 19:
			return 'vconcat';
		case 16:
			return 'layer';
		case 21:
			return 'repeat';
		case 22:
			return 'facet';
		case 25:
			return 'spacing';
		case 26:
			return 'align';
		case 27:
			return 'bounds';
		case 28:
			return 'center';
		case 23:
			return 'spec';
		case 24:
			return 'resolve';
		default:
			return 'view';
	}
};
var $gicentre$elm_vegalite$VegaLite$toVegaLite = function (spec) {
	return $elm$json$Json$Encode$object(
		A2(
			$elm$core$List$cons,
			_Utils_Tuple2(
				'$schema',
				$elm$json$Json$Encode$string('https://vega.github.io/schema/vega-lite/v4.json')),
			A2(
				$elm$core$List$map,
				function (_v0) {
					var s = _v0.a;
					var v = _v0.b;
					return _Utils_Tuple2(
						$gicentre$elm_vegalite$VegaLite$vlPropertyLabel(s),
						v);
				},
				spec)));
};
var $gicentre$elm_vegalite$VegaLite$VLWidth = 3;
var $gicentre$elm_vegalite$VegaLite$width = function (w) {
	return _Utils_Tuple2(
		3,
		$elm$json$Json$Encode$float(w));
};
var $author$project$Main$vegaLiteSpec = function (model) {
	var yAxisTitle = model.o ? 'Confirmed Cases\n(per 100k People)' : 'Confirmed Cases';
	var size = $author$project$Main$getChartSize(model.A);
	var enc = A2(
		$elm$core$Basics$composeL,
		A2(
			$elm$core$Basics$composeL,
			A2(
				$elm$core$Basics$composeL,
				$gicentre$elm_vegalite$VegaLite$encoding,
				A2(
					$gicentre$elm_vegalite$VegaLite$position,
					0,
					_List_fromArray(
						[
							$gicentre$elm_vegalite$VegaLite$pName('Date'),
							$gicentre$elm_vegalite$VegaLite$pMType(3),
							$gicentre$elm_vegalite$VegaLite$pAxis(
							_List_fromArray(
								[
									$gicentre$elm_vegalite$VegaLite$axLabelAngle(0),
									$gicentre$elm_vegalite$VegaLite$axLabelExpr('substring(datum.label, 0, 3)')
								]))
						]))),
			A2(
				$gicentre$elm_vegalite$VegaLite$position,
				1,
				_List_fromArray(
					[
						$gicentre$elm_vegalite$VegaLite$pName('Confirmed Cases'),
						$gicentre$elm_vegalite$VegaLite$pMType(2),
						$gicentre$elm_vegalite$VegaLite$pTitle(yAxisTitle)
					]))),
		$gicentre$elm_vegalite$VegaLite$color(
			_List_fromArray(
				[
					$gicentre$elm_vegalite$VegaLite$mName('State, County'),
					$gicentre$elm_vegalite$VegaLite$mLegend(
					_List_fromArray(
						[
							$gicentre$elm_vegalite$VegaLite$leDirection($gicentre$elm_vegalite$VegaLite$moVertical)
						]))
				])));
	var dataRecords = A2(
		$elm$core$List$map,
		function (key) {
			var _v2 = A2($elm$core$Dict$get, key, model.x.ac);
			if (!_v2.$) {
				var rec = _v2.a;
				return rec;
			} else {
				return $author$project$TimeSeries$defaultDataRecord;
			}
		},
		$elm$core$Set$toList(model.e));
	var vegaLiteData = A2($author$project$TimeSeries$mkVegaLiteData, model.o, dataRecords);
	var d = A2(
		$elm$core$Basics$composeL,
		A2(
			$elm$core$Basics$composeL,
			A2(
				$elm$core$Basics$composeL,
				$gicentre$elm_vegalite$VegaLite$dataFromColumns(_List_Nil),
				A2(
					$gicentre$elm_vegalite$VegaLite$dataColumn,
					'Date',
					$gicentre$elm_vegalite$VegaLite$strs(vegaLiteData.aK))),
			A2(
				$gicentre$elm_vegalite$VegaLite$dataColumn,
				'Confirmed Cases',
				$gicentre$elm_vegalite$VegaLite$nums(vegaLiteData.aJ))),
		A2(
			$gicentre$elm_vegalite$VegaLite$dataColumn,
			'State, County',
			$gicentre$elm_vegalite$VegaLite$strs(vegaLiteData.aT)));
	var currentKey = function () {
		var _v1 = $elm$core$List$head(
			$elm$core$Set$toList(model.e));
		if (!_v1.$) {
			var selectedKey = _v1.a;
			return selectedKey;
		} else {
			return $author$project$Utils$defaultOptionText;
		}
	}();
	var dataRecord = function () {
		var _v0 = A2($elm$core$Dict$get, currentKey, model.x.ac);
		if (!_v0.$) {
			var rec = _v0.a;
			return rec;
		} else {
			return $author$project$TimeSeries$defaultDataRecord;
		}
	}();
	var cfg = A2(
		$elm$core$Basics$composeL,
		A2(
			$elm$core$Basics$composeL,
			$gicentre$elm_vegalite$VegaLite$configure,
			$gicentre$elm_vegalite$VegaLite$configuration(
				$gicentre$elm_vegalite$VegaLite$coAxis(
					_List_fromArray(
						[
							$gicentre$elm_vegalite$VegaLite$axcoLabelFontSize(16),
							$gicentre$elm_vegalite$VegaLite$axcoTitleFontSize(18)
						])))),
		$gicentre$elm_vegalite$VegaLite$configuration(
			$gicentre$elm_vegalite$VegaLite$coLegend(
				_List_fromArray(
					[
						$gicentre$elm_vegalite$VegaLite$lecoLabelFontSize(14),
						$gicentre$elm_vegalite$VegaLite$lecoTitleFontSize(16),
						$gicentre$elm_vegalite$VegaLite$lecoSymbolStrokeWidth(3),
						$gicentre$elm_vegalite$VegaLite$lecoOrient($gicentre$elm_vegalite$VegaLite$loBottom)
					]))));
	return $gicentre$elm_vegalite$VegaLite$toVegaLite(
		_List_fromArray(
			[
				$gicentre$elm_vegalite$VegaLite$width(size._),
				$gicentre$elm_vegalite$VegaLite$height(size.S),
				$gicentre$elm_vegalite$VegaLite$autosize(
				_List_fromArray(
					[$gicentre$elm_vegalite$VegaLite$asContent])),
				cfg(_List_Nil),
				d(_List_Nil),
				$gicentre$elm_vegalite$VegaLite$line(
				_List_fromArray(
					[
						$gicentre$elm_vegalite$VegaLite$maStrokeWidth(3)
					])),
				enc(_List_Nil)
			]));
};
var $author$project$Main$update = F2(
	function (msg, model) {
		update:
		while (true) {
			switch (msg.$) {
				case 0:
					var newWidth = msg.a;
					var newHeight = msg.b;
					var newModel = _Utils_update(
						model,
						{G: newHeight, A: newWidth});
					return _Utils_Tuple2(
						newModel,
						$author$project$Ports$sendToVegaLite(
							$author$project$Main$vegaLiteSpec(newModel)));
				case 1:
					return _Utils_Tuple2(
						model,
						A2($elm$core$Task$perform, $author$project$Main$CheckFetchData, $elm$time$Time$now));
				case 2:
					var newTime = msg.a;
					var elapsedTime = A2($author$project$Utils$getElapsedTime, model.j, newTime);
					var doDataFetch = _Utils_cmp(
						$elm$time$Time$posixToMillis(elapsedTime),
						$author$project$Utils$dataFetchRateLimit) > 0;
					if (doDataFetch) {
						var $temp$msg = $author$project$Main$FetchData,
							$temp$model = _Utils_update(
							model,
							{j: newTime});
						msg = $temp$msg;
						model = $temp$model;
						continue update;
					} else {
						return _Utils_Tuple2(model, $elm$core$Platform$Cmd$none);
					}
				case 3:
					return _Utils_Tuple2(
						model,
						$elm$http$Http$get(
							{
								aN: $elm$http$Http$expectString($author$project$Main$GotData),
								a7: $author$project$Utils$timeSeriesDataUrl
							}));
				case 4:
					var result = msg.a;
					if (result.$ === 1) {
						return _Utils_Tuple2(model, $elm$core$Platform$Cmd$none);
					} else {
						var data = result.a;
						var $temp$msg = $author$project$Main$SaveData,
							$temp$model = _Utils_update(
							model,
							{
								u: data,
								x: $author$project$TimeSeries$parse(data)
							});
						msg = $temp$msg;
						model = $temp$model;
						continue update;
					}
				case 5:
					return _Utils_Tuple2(
						model,
						$elm$core$Platform$Cmd$batch(
							_List_fromArray(
								[
									$author$project$Main$saveData(model),
									$author$project$Ports$sendToVegaLite(
									$author$project$Main$vegaLiteSpec(model))
								])));
				case 6:
					var _v2 = _Utils_Tuple2(model.B, model.t);
					if ((!_v2.a.$) && (!_v2.b.$)) {
						var currentState = _v2.a.a;
						var currentCounty = _v2.b.a;
						var newKey = A2($author$project$TimeSeries$mkKey, currentState, currentCounty);
						var newKeys = A2($elm$core$Set$insert, newKey, model.e);
						var weightCounts = (!$author$project$Main$allCountiesHavePopData(newKeys)) ? false : model.o;
						var newModel = _Utils_update(
							model,
							{e: newKeys, o: weightCounts});
						return _Utils_Tuple2(
							newModel,
							$author$project$Ports$sendToVegaLite(
								$author$project$Main$vegaLiteSpec(newModel)));
					} else {
						return _Utils_Tuple2(model, $elm$core$Platform$Cmd$none);
					}
				case 7:
					var key = msg.a;
					var newModel = _Utils_update(
						model,
						{
							e: A2($elm$core$Set$remove, key, model.e)
						});
					return _Utils_Tuple2(
						newModel,
						$author$project$Ports$sendToVegaLite(
							$author$project$Main$vegaLiteSpec(newModel)));
				case 8:
					return _Utils_Tuple2(
						_Utils_update(
							model,
							{e: $elm$core$Set$empty}),
						$elm$core$Platform$Cmd$none);
				case 9:
					var newCounty = msg.a;
					var maybeCounty = _Utils_eq(newCounty, $author$project$Utils$defaultOptionText) ? $elm$core$Maybe$Nothing : $elm$core$Maybe$Just(newCounty);
					return _Utils_Tuple2(
						_Utils_update(
							model,
							{t: maybeCounty}),
						$elm$core$Platform$Cmd$none);
				case 10:
					var newState = msg.a;
					var maybeState = _Utils_eq(newState, $author$project$Utils$defaultOptionText) ? $elm$core$Maybe$Nothing : $elm$core$Maybe$Just(newState);
					return _Utils_Tuple2(
						_Utils_update(
							model,
							{t: $elm$core$Maybe$Nothing, B: maybeState}),
						$elm$core$Platform$Cmd$none);
				default:
					var newModel = _Utils_update(
						model,
						{o: !model.o});
					return _Utils_Tuple2(
						newModel,
						$author$project$Ports$sendToVegaLite(
							$author$project$Main$vegaLiteSpec(newModel)));
			}
		}
	});
var $elm$html$Html$Attributes$stringProperty = F2(
	function (key, string) {
		return A2(
			_VirtualDom_property,
			key,
			$elm$json$Json$Encode$string(string));
	});
var $elm$html$Html$Attributes$class = $elm$html$Html$Attributes$stringProperty('className');
var $elm$html$Html$div = _VirtualDom_node('div');
var $elm$html$Html$h1 = _VirtualDom_node('h1');
var $elm$html$Html$h2 = _VirtualDom_node('h2');
var $elm$html$Html$p = _VirtualDom_node('p');
var $elm$html$Html$strong = _VirtualDom_node('strong');
var $elm$virtual_dom$VirtualDom$text = _VirtualDom_text;
var $elm$html$Html$text = $elm$virtual_dom$VirtualDom$text;
var $elm$html$Html$Attributes$id = $elm$html$Html$Attributes$stringProperty('id');
var $elm$core$Dict$isEmpty = function (dict) {
	if (dict.$ === -2) {
		return true;
	} else {
		return false;
	}
};
var $elm$core$Set$isEmpty = function (_v0) {
	var dict = _v0;
	return $elm$core$Dict$isEmpty(dict);
};
var $author$project$Main$ToggleWeightCounts = {$: 11};
var $elm$html$Html$Attributes$boolProperty = F2(
	function (key, bool) {
		return A2(
			_VirtualDom_property,
			key,
			$elm$json$Json$Encode$bool(bool));
	});
var $elm$html$Html$Attributes$checked = $elm$html$Html$Attributes$boolProperty('checked');
var $elm$html$Html$input = _VirtualDom_node('input');
var $elm$html$Html$label = _VirtualDom_node('label');
var $elm$virtual_dom$VirtualDom$Normal = function (a) {
	return {$: 0, a: a};
};
var $elm$virtual_dom$VirtualDom$on = _VirtualDom_on;
var $elm$html$Html$Events$on = F2(
	function (event, decoder) {
		return A2(
			$elm$virtual_dom$VirtualDom$on,
			event,
			$elm$virtual_dom$VirtualDom$Normal(decoder));
	});
var $elm$html$Html$Events$onClick = function (msg) {
	return A2(
		$elm$html$Html$Events$on,
		'click',
		$elm$json$Json$Decode$succeed(msg));
};
var $elm$html$Html$Attributes$type_ = $elm$html$Html$Attributes$stringProperty('type');
var $author$project$Main$viewWeightByPopulationSelector = function (model) {
	return $author$project$Main$allCountiesHavePopData(model.e) ? A2(
		$elm$html$Html$div,
		_List_fromArray(
			[
				$elm$html$Html$Attributes$class('extra-bottom-margin')
			]),
		_List_fromArray(
			[
				A2(
				$elm$html$Html$label,
				_List_Nil,
				_List_fromArray(
					[
						A2(
						$elm$html$Html$input,
						_List_fromArray(
							[
								$elm$html$Html$Attributes$type_('checkbox'),
								$elm$html$Html$Events$onClick($author$project$Main$ToggleWeightCounts),
								$elm$html$Html$Attributes$checked(model.o)
							]),
						_List_Nil),
						$elm$html$Html$text(' Weight counts by population')
					]))
			])) : A2(
		$elm$html$Html$div,
		_List_fromArray(
			[
				$elm$html$Html$Attributes$class('extra-bottom-margin')
			]),
		_List_fromArray(
			[
				$elm$html$Html$text('Not all selected counties have population data.')
			]));
};
var $author$project$Main$viewConfirmedCaseChartContainer = function (model) {
	return $elm$core$Set$isEmpty(model.e) ? A2($elm$html$Html$div, _List_Nil, _List_Nil) : A2(
		$elm$html$Html$div,
		_List_fromArray(
			[
				$elm$html$Html$Attributes$class('push-down')
			]),
		_List_fromArray(
			[
				A2(
				$elm$html$Html$h1,
				_List_Nil,
				_List_fromArray(
					[
						$elm$html$Html$text('Confirmed Case Data')
					])),
				A2(
				$elm$html$Html$div,
				_List_fromArray(
					[
						$elm$html$Html$Attributes$id('case-count-chart'),
						$elm$html$Html$Attributes$class('pure-img')
					]),
				_List_Nil),
				A2(
				$elm$html$Html$h2,
				_List_Nil,
				_List_fromArray(
					[
						$elm$html$Html$text('Options')
					])),
				$author$project$Main$viewWeightByPopulationSelector(model)
			]));
};
var $elm$html$Html$a = _VirtualDom_node('a');
var $elm$html$Html$Attributes$href = function (url) {
	return A2(
		$elm$html$Html$Attributes$stringProperty,
		'href',
		_VirtualDom_noJavaScriptUri(url));
};
var $elm$core$Bitwise$and = _Bitwise_and;
var $elm$core$Bitwise$shiftRightBy = _Bitwise_shiftRightBy;
var $elm$core$String$repeatHelp = F3(
	function (n, chunk, result) {
		return (n <= 0) ? result : A3(
			$elm$core$String$repeatHelp,
			n >> 1,
			_Utils_ap(chunk, chunk),
			(!(n & 1)) ? result : _Utils_ap(result, chunk));
	});
var $elm$core$String$repeat = F2(
	function (n, chunk) {
		return A3($elm$core$String$repeatHelp, n, chunk, '');
	});
var $elm$core$String$padLeft = F3(
	function (n, _char, string) {
		return _Utils_ap(
			A2(
				$elm$core$String$repeat,
				n - $elm$core$String$length(string),
				$elm$core$String$fromChar(_char)),
			string);
	});
var $author$project$Utils$popDataSourceUrl = 'https://www.ers.usda.gov/data-products/atlas-of-rural-and-small-town-america/download-the-data/';
var $author$project$Utils$timeSeriesDataGitHubUrl = 'https://github.com/CSSEGISandData/COVID-19';
var $elm$time$Time$flooredDiv = F2(
	function (numerator, denominator) {
		return $elm$core$Basics$floor(numerator / denominator);
	});
var $elm$core$Basics$modBy = _Basics_modBy;
var $elm$time$Time$toAdjustedMinutesHelp = F3(
	function (defaultOffset, posixMinutes, eras) {
		toAdjustedMinutesHelp:
		while (true) {
			if (!eras.b) {
				return posixMinutes + defaultOffset;
			} else {
				var era = eras.a;
				var olderEras = eras.b;
				if (_Utils_cmp(era.X, posixMinutes) < 0) {
					return posixMinutes + era.aj;
				} else {
					var $temp$defaultOffset = defaultOffset,
						$temp$posixMinutes = posixMinutes,
						$temp$eras = olderEras;
					defaultOffset = $temp$defaultOffset;
					posixMinutes = $temp$posixMinutes;
					eras = $temp$eras;
					continue toAdjustedMinutesHelp;
				}
			}
		}
	});
var $elm$time$Time$toAdjustedMinutes = F2(
	function (_v0, time) {
		var defaultOffset = _v0.a;
		var eras = _v0.b;
		return A3(
			$elm$time$Time$toAdjustedMinutesHelp,
			defaultOffset,
			A2(
				$elm$time$Time$flooredDiv,
				$elm$time$Time$posixToMillis(time),
				60000),
			eras);
	});
var $elm$time$Time$toHour = F2(
	function (zone, time) {
		return A2(
			$elm$core$Basics$modBy,
			24,
			A2(
				$elm$time$Time$flooredDiv,
				A2($elm$time$Time$toAdjustedMinutes, zone, time),
				60));
	});
var $elm$time$Time$toMinute = F2(
	function (zone, time) {
		return A2(
			$elm$core$Basics$modBy,
			60,
			A2($elm$time$Time$toAdjustedMinutes, zone, time));
	});
var $elm$time$Time$toSecond = F2(
	function (_v0, time) {
		return A2(
			$elm$core$Basics$modBy,
			60,
			A2(
				$elm$time$Time$flooredDiv,
				$elm$time$Time$posixToMillis(time),
				1000));
	});
var $author$project$Main$viewLastDataFetchTime = function (model) {
	var timeSeriesGitHubLink = A2(
		$elm$html$Html$a,
		_List_fromArray(
			[
				$elm$html$Html$Attributes$href($author$project$Utils$timeSeriesDataGitHubUrl)
			]),
		_List_fromArray(
			[
				$elm$html$Html$text('JHU CSSE')
			]));
	var second = A3(
		$elm$core$String$padLeft,
		2,
		'0',
		$elm$core$String$fromInt(
			A2($elm$time$Time$toSecond, model.N, model.j)));
	var popDataLink = A2(
		$elm$html$Html$a,
		_List_fromArray(
			[
				$elm$html$Html$Attributes$href($author$project$Utils$popDataSourceUrl)
			]),
		_List_fromArray(
			[
				$elm$html$Html$text('USDA ERS')
			]));
	var minute = A3(
		$elm$core$String$padLeft,
		2,
		'0',
		$elm$core$String$fromInt(
			A2($elm$time$Time$toMinute, model.N, model.j)));
	var hour = A3(
		$elm$core$String$padLeft,
		2,
		'0',
		$elm$core$String$fromInt(
			A2($elm$time$Time$toHour, model.N, model.j)));
	return A2(
		$elm$html$Html$div,
		_List_fromArray(
			[
				$elm$html$Html$Attributes$class('small-font gray-font')
			]),
		_List_fromArray(
			[
				A2(
				$elm$html$Html$p,
				_List_Nil,
				_List_fromArray(
					[
						$elm$html$Html$text('Last data fetch from '),
						timeSeriesGitHubLink,
						$elm$html$Html$text(': ' + (hour + (':' + (minute + (':' + (second + ' (UTC).  '))))))
					])),
				A2(
				$elm$html$Html$p,
				_List_Nil,
				_List_fromArray(
					[
						$elm$html$Html$text('Population data from '),
						popDataLink,
						$elm$html$Html$text('.')
					]))
			]));
};
var $author$project$Main$RemoveKey = function (a) {
	return {$: 7, a: a};
};
var $elm$json$Json$Decode$at = F2(
	function (fields, decoder) {
		return A3($elm$core$List$foldr, $elm$json$Json$Decode$field, decoder, fields);
	});
var $elm$virtual_dom$VirtualDom$attribute = F2(
	function (key, value) {
		return A2(
			_VirtualDom_attribute,
			_VirtualDom_noOnOrFormAction(key),
			_VirtualDom_noJavaScriptOrHtmlUri(value));
	});
var $elm$html$Html$Attributes$attribute = $elm$virtual_dom$VirtualDom$attribute;
var $elm$html$Html$h3 = _VirtualDom_node('h3');
var $elm$html$Html$li = _VirtualDom_node('li');
var $elm$html$Html$ul = _VirtualDom_node('ul');
var $author$project$Main$viewSelectedKeys = function (model) {
	var selectedKeys = $elm$core$Set$toList(model.e);
	var eventDecoder = A2(
		$elm$json$Json$Decode$map,
		$author$project$Main$RemoveKey,
		A2(
			$elm$json$Json$Decode$at,
			_List_fromArray(
				['currentTarget', 'dataset', 'key']),
			$elm$json$Json$Decode$string));
	var keys = A2(
		$elm$core$List$map,
		function (k) {
			return A2(
				$elm$html$Html$li,
				_List_fromArray(
					[
						A2($elm$html$Html$Attributes$attribute, 'data-key', k),
						A2($elm$html$Html$Events$on, 'dblclick', eventDecoder)
					]),
				_List_fromArray(
					[
						$elm$html$Html$text(k)
					]));
		},
		selectedKeys);
	var contents = $elm$core$Set$isEmpty(model.e) ? _List_Nil : _List_fromArray(
		[
			A2(
			$elm$html$Html$h3,
			_List_Nil,
			_List_fromArray(
				[
					$elm$html$Html$text('Selected Counties')
				])),
			A2(
			$elm$html$Html$p,
			_List_Nil,
			_List_fromArray(
				[
					$elm$html$Html$text('Double click on a county to remove it from chart.')
				])),
			A2($elm$html$Html$ul, _List_Nil, keys)
		]);
	return A2($elm$html$Html$div, _List_Nil, contents);
};
var $elm$html$Html$fieldset = _VirtualDom_node('fieldset');
var $elm$html$Html$Attributes$for = $elm$html$Html$Attributes$stringProperty('htmlFor');
var $author$project$Main$AddKey = {$: 6};
var $elm$html$Html$button = _VirtualDom_node('button');
var $elm$html$Html$Attributes$disabled = $elm$html$Html$Attributes$boolProperty('disabled');
var $elm$core$Set$member = F2(
	function (key, _v0) {
		var dict = _v0;
		return A2($elm$core$Dict$member, key, dict);
	});
var $author$project$Main$viewAddCountyButton = F2(
	function (model, id) {
		var isDisabled = function () {
			var _v0 = _Utils_Tuple2(model.B, model.t);
			if ((!_v0.a.$) && (!_v0.b.$)) {
				var currentState = _v0.a.a;
				var currentCounty = _v0.b.a;
				var currentKey = A2($author$project$TimeSeries$mkKey, currentState, currentCounty);
				return A2($elm$core$Set$member, currentKey, model.e);
			} else {
				return true;
			}
		}();
		return A2(
			$elm$html$Html$button,
			_List_fromArray(
				[
					$elm$html$Html$Attributes$class('pure-button pure-button-primary button-margin'),
					$elm$html$Html$Attributes$disabled(isDisabled),
					$elm$html$Html$Attributes$id(id),
					$elm$html$Html$Events$onClick($author$project$Main$AddKey)
				]),
			_List_fromArray(
				[
					$elm$html$Html$text('Add')
				]));
	});
var $author$project$Main$RemoveAllKeys = {$: 8};
var $author$project$Main$viewClearAllCountiesButton = F2(
	function (model, id) {
		var isDisabled = $elm$core$Set$isEmpty(model.e);
		return A2(
			$elm$html$Html$button,
			_List_fromArray(
				[
					$elm$html$Html$Attributes$class('pure-button button-margin'),
					$elm$html$Html$Attributes$id(id),
					$elm$html$Html$Attributes$disabled(isDisabled),
					$elm$html$Html$Events$onClick($author$project$Main$RemoveAllKeys)
				]),
			_List_fromArray(
				[
					$elm$html$Html$text('Remove All')
				]));
	});
var $author$project$Main$ChangeCounty = function (a) {
	return {$: 9, a: a};
};
var $elm$html$Html$Attributes$name = $elm$html$Html$Attributes$stringProperty('name');
var $elm$html$Html$Events$alwaysStop = function (x) {
	return _Utils_Tuple2(x, true);
};
var $elm$virtual_dom$VirtualDom$MayStopPropagation = function (a) {
	return {$: 1, a: a};
};
var $elm$html$Html$Events$stopPropagationOn = F2(
	function (event, decoder) {
		return A2(
			$elm$virtual_dom$VirtualDom$on,
			event,
			$elm$virtual_dom$VirtualDom$MayStopPropagation(decoder));
	});
var $elm$html$Html$Events$targetValue = A2(
	$elm$json$Json$Decode$at,
	_List_fromArray(
		['target', 'value']),
	$elm$json$Json$Decode$string);
var $elm$html$Html$Events$onInput = function (tagger) {
	return A2(
		$elm$html$Html$Events$stopPropagationOn,
		'input',
		A2(
			$elm$json$Json$Decode$map,
			$elm$html$Html$Events$alwaysStop,
			A2($elm$json$Json$Decode$map, tagger, $elm$html$Html$Events$targetValue)));
};
var $elm$html$Html$option = _VirtualDom_node('option');
var $elm$html$Html$select = _VirtualDom_node('select');
var $elm$html$Html$Attributes$selected = $elm$html$Html$Attributes$boolProperty('selected');
var $elm$html$Html$Attributes$value = $elm$html$Html$Attributes$stringProperty('value');
var $author$project$Main$viewCountySelector = F2(
	function (model, id) {
		var defaultOption = function () {
			var _v2 = model.t;
			if (!_v2.$) {
				return A2(
					$elm$html$Html$option,
					_List_fromArray(
						[
							$elm$html$Html$Attributes$value($author$project$Utils$defaultOptionText)
						]),
					_List_fromArray(
						[
							$elm$html$Html$text($author$project$Utils$defaultOptionText)
						]));
			} else {
				return A2(
					$elm$html$Html$option,
					_List_fromArray(
						[
							$elm$html$Html$Attributes$value($author$project$Utils$defaultOptionText),
							$elm$html$Html$Attributes$selected(true)
						]),
					_List_fromArray(
						[
							$elm$html$Html$text($author$project$Utils$defaultOptionText)
						]));
			}
		}();
		var currentState = model.B;
		var counties = function () {
			if (!currentState.$) {
				var state = currentState.a;
				var _v1 = A2($elm$core$Dict$get, state, model.x.ax);
				if (!_v1.$) {
					var county = _v1.a;
					return county;
				} else {
					return _List_fromArray(
						['']);
				}
			} else {
				return _List_fromArray(
					['']);
			}
		}();
		var countyOptions = A2(
			$elm$core$List$map,
			function (county) {
				return A2(
					$elm$html$Html$option,
					_List_fromArray(
						[
							$elm$html$Html$Attributes$value(county)
						]),
					_List_fromArray(
						[
							$elm$html$Html$text(county)
						]));
			},
			counties);
		var options = _Utils_ap(
			_List_fromArray(
				[defaultOption]),
			countyOptions);
		return A2(
			$elm$html$Html$select,
			_List_fromArray(
				[
					$elm$html$Html$Attributes$name(id),
					$elm$html$Html$Attributes$id(id),
					$elm$html$Html$Events$onInput($author$project$Main$ChangeCounty)
				]),
			options);
	});
var $author$project$Main$ChangeState = function (a) {
	return {$: 10, a: a};
};
var $author$project$Main$viewStateSelector = F2(
	function (model, id) {
		var states = $elm$core$Dict$keys(model.x.ax);
		var options = _Utils_ap(
			_List_fromArray(
				[
					A2(
					$elm$html$Html$option,
					_List_fromArray(
						[
							$elm$html$Html$Attributes$value($author$project$Utils$defaultOptionText),
							$elm$html$Html$Attributes$selected(true)
						]),
					_List_fromArray(
						[
							$elm$html$Html$text($author$project$Utils$defaultOptionText)
						]))
				]),
			A2(
				$elm$core$List$map,
				function (state) {
					return A2(
						$elm$html$Html$option,
						_List_fromArray(
							[
								$elm$html$Html$Attributes$value(state)
							]),
						_List_fromArray(
							[
								$elm$html$Html$text(state)
							]));
				},
				states));
		return A2(
			$elm$html$Html$select,
			_List_fromArray(
				[
					$elm$html$Html$Attributes$name(id),
					$elm$html$Html$Attributes$id(id),
					$elm$html$Html$Events$onInput($author$project$Main$ChangeState)
				]),
			options);
	});
var $author$project$Main$viewStateCountyForm = function (model) {
	return A2(
		$elm$html$Html$div,
		_List_fromArray(
			[
				$elm$html$Html$Attributes$class('pure-form pure-form-stacked')
			]),
		_List_fromArray(
			[
				A2(
				$elm$html$Html$fieldset,
				_List_Nil,
				_List_fromArray(
					[
						A2(
						$elm$html$Html$label,
						_List_fromArray(
							[
								$elm$html$Html$Attributes$for('state-selector')
							]),
						_List_fromArray(
							[
								$elm$html$Html$text('State/Province')
							])),
						A2($author$project$Main$viewStateSelector, model, 'state-selector'),
						A2(
						$elm$html$Html$label,
						_List_fromArray(
							[
								$elm$html$Html$Attributes$for('county-selector')
							]),
						_List_fromArray(
							[
								$elm$html$Html$text('County/Region')
							])),
						A2($author$project$Main$viewCountySelector, model, 'county-selector'),
						A2($author$project$Main$viewAddCountyButton, model, 'add-county'),
						A2($author$project$Main$viewClearAllCountiesButton, model, 'clear-all')
					]))
			]));
};
var $author$project$Main$view = function (model) {
	return A2(
		$elm$html$Html$div,
		_List_fromArray(
			[
				$elm$html$Html$Attributes$class('pure-g')
			]),
		_List_fromArray(
			[
				A2(
				$elm$html$Html$div,
				_List_fromArray(
					[
						$elm$html$Html$Attributes$class('pure-u-1 pure-u-lg-1-3')
					]),
				_List_fromArray(
					[
						A2(
						$elm$html$Html$h1,
						_List_Nil,
						_List_fromArray(
							[
								$elm$html$Html$text('COVID-19 Dashboard')
							])),
						$author$project$Main$viewLastDataFetchTime(model),
						A2(
						$elm$html$Html$h2,
						_List_Nil,
						_List_fromArray(
							[
								$elm$html$Html$text('Select Data')
							])),
						A2(
						$elm$html$Html$p,
						_List_Nil,
						_List_fromArray(
							[
								$elm$html$Html$text('Select a state and county, then click '),
								A2(
								$elm$html$Html$strong,
								_List_Nil,
								_List_fromArray(
									[
										$elm$html$Html$text('\'Add\' ')
									])),
								$elm$html$Html$text('to view data.')
							])),
						A2(
						$elm$html$Html$p,
						_List_Nil,
						_List_fromArray(
							[
								$elm$html$Html$text('Try adding multiple counties to the chart and clicking the '),
								A2(
								$elm$html$Html$strong,
								_List_Nil,
								_List_fromArray(
									[
										$elm$html$Html$text('\'Weight counts by population\' ')
									])),
								$elm$html$Html$text('button for comparison.')
							])),
						$author$project$Main$viewStateCountyForm(model),
						$author$project$Main$viewSelectedKeys(model)
					])),
				A2(
				$elm$html$Html$div,
				_List_fromArray(
					[
						$elm$html$Html$Attributes$class('pure-u-1 pure-u-lg-2-3')
					]),
				_List_fromArray(
					[
						$author$project$Main$viewConfirmedCaseChartContainer(model)
					]))
			]));
};
var $author$project$Main$main = $elm$browser$Browser$element(
	{aS: $author$project$Main$init, a3: $author$project$Main$subscriptions, a6: $author$project$Main$update, a8: $author$project$Main$view});
_Platform_export({'Main':{'init':$author$project$Main$main(
	A2(
		$elm$json$Json$Decode$andThen,
		function (windowWidth) {
			return A2(
				$elm$json$Json$Decode$andThen,
				function (windowHeight) {
					return A2(
						$elm$json$Json$Decode$andThen,
						function (startingData) {
							return A2(
								$elm$json$Json$Decode$andThen,
								function (hasLocalStorage) {
									return $elm$json$Json$Decode$succeed(
										{D: hasLocalStorage, Y: startingData, G: windowHeight, A: windowWidth});
								},
								A2($elm$json$Json$Decode$field, 'hasLocalStorage', $elm$json$Json$Decode$bool));
						},
						A2(
							$elm$json$Json$Decode$field,
							'startingData',
							$elm$json$Json$Decode$oneOf(
								_List_fromArray(
									[
										$elm$json$Json$Decode$null($elm$core$Maybe$Nothing),
										A2($elm$json$Json$Decode$map, $elm$core$Maybe$Just, $elm$json$Json$Decode$string)
									]))));
				},
				A2($elm$json$Json$Decode$field, 'windowHeight', $elm$json$Json$Decode$int));
		},
		A2($elm$json$Json$Decode$field, 'windowWidth', $elm$json$Json$Decode$int)))(0)}});}(this));