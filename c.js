caterwaul.module( 'c' , (function( /* unary , node */e_i_MDJm4FPWIQA7F2biDpcxeA) {return(function($) { (function( ) {var deglobalize=e_i_MDJm4FPWIQA7F2biDpcxeA.deglobalize,core_initializer=e_i_MDJm4FPWIQA7F2biDpcxeA.core_initializer,modules=e_i_MDJm4FPWIQA7F2biDpcxeA.modules,module=e_i_MDJm4FPWIQA7F2biDpcxeA.module,merge=e_i_MDJm4FPWIQA7F2biDpcxeA.merge,map=e_i_MDJm4FPWIQA7F2biDpcxeA.map,rmap=e_i_MDJm4FPWIQA7F2biDpcxeA.rmap,gensym=e_i_MDJm4FPWIQA7F2biDpcxeA.gensym,is_gensym=e_i_MDJm4FPWIQA7F2biDpcxeA.is_gensym,syntax_common=e_i_MDJm4FPWIQA7F2biDpcxeA.syntax_common,syntax_subclass=e_i_MDJm4FPWIQA7F2biDpcxeA.syntax_subclass,parse_hex=e_i_MDJm4FPWIQA7F2biDpcxeA.parse_hex,parse_octal=e_i_MDJm4FPWIQA7F2biDpcxeA.parse_octal,unescape_string=e_i_MDJm4FPWIQA7F2biDpcxeA.unescape_string,javascript_tree_type_methods=e_i_MDJm4FPWIQA7F2biDpcxeA.javascript_tree_type_methods,javascript_tree_serialization_methods=e_i_MDJm4FPWIQA7F2biDpcxeA.javascript_tree_serialization_methods,ref_common=e_i_MDJm4FPWIQA7F2biDpcxeA.ref_common,ref=e_i_MDJm4FPWIQA7F2biDpcxeA.ref,expression_ref=e_i_MDJm4FPWIQA7F2biDpcxeA.expression_ref,opaque_tree=e_i_MDJm4FPWIQA7F2biDpcxeA.opaque_tree,syntax=e_i_MDJm4FPWIQA7F2biDpcxeA.syntax,empty=e_i_MDJm4FPWIQA7F2biDpcxeA.empty,parse=e_i_MDJm4FPWIQA7F2biDpcxeA.parse,compile=e_i_MDJm4FPWIQA7F2biDpcxeA.compile,late_bound_tree=e_i_MDJm4FPWIQA7F2biDpcxeA.late_bound_tree,gensym_rename_table=e_i_MDJm4FPWIQA7F2biDpcxeA.gensym_rename_table,init=e_i_MDJm4FPWIQA7F2biDpcxeA.init,initializer=e_i_MDJm4FPWIQA7F2biDpcxeA.initializer,clone=e_i_MDJm4FPWIQA7F2biDpcxeA.clone,replicator=e_i_MDJm4FPWIQA7F2biDpcxeA.replicator,pattern=e_i_MDJm4FPWIQA7F2biDpcxeA.pattern,expander=e_i_MDJm4FPWIQA7F2biDpcxeA.expander,alternatives=e_i_MDJm4FPWIQA7F2biDpcxeA.alternatives,reexpander=e_i_MDJm4FPWIQA7F2biDpcxeA.reexpander,replacer=e_i_MDJm4FPWIQA7F2biDpcxeA.replacer,rereplacer=e_i_MDJm4FPWIQA7F2biDpcxeA.rereplacer,macroexpand=e_i_MDJm4FPWIQA7F2biDpcxeA.macroexpand,anonymizer=e_i_MDJm4FPWIQA7F2biDpcxeA.anonymizer,js=e_i_MDJm4FPWIQA7F2biDpcxeA.js,js_literals=e_i_MDJm4FPWIQA7F2biDpcxeA.js_literals,words=e_i_MDJm4FPWIQA7F2biDpcxeA.words,syntax_to_expression=e_i_MDJm4FPWIQA7F2biDpcxeA.syntax_to_expression,std_initializer=e_i_MDJm4FPWIQA7F2biDpcxeA.std_initializer,js_all=e_i_MDJm4FPWIQA7F2biDpcxeA.js_all,jquery=e_i_MDJm4FPWIQA7F2biDpcxeA.jquery,_environment=e_i_MDJm4FPWIQA7F2biDpcxeA._environment,hijack_initializer=e_i_MDJm4FPWIQA7F2biDpcxeA.hijack_initializer,hijack=e_i_MDJm4FPWIQA7F2biDpcxeA.hijack;
return( (function( ) {var hijacked=hijack( /* unary , node */ {precedence: [ '::' , '++ -- () [] -> . typeid const_cast dynamic_cast reinterpret_cast static_cast' , 'u++ u-- u+ u- u! u~ u* u& compl sizeof new delete not' , '.* ->*' , '* / %' , '+ -' , '<< >>' , '< <= > >=' , '== !=' , '& bitand' , '^ xor' , '| bitor' , '&& and' , '|| or' , '? = += -= *= /= %= <<= >>= &= ^= |= and_eq or_eq xor_eq' , 'throw' , ',' , 'char signed unsigned short int long float double' , 'if else try catch finally for switch do while struct class union enum goto namespace using' , 'u; ;' ] ,binary: ':: () [] -> . .* ->* * / % + - << >> < <= > >= == != & bitand ^ xor | bitor && and || or = += -= *= /= %= <<= >>= &= |= ^= and_eq or_eq xor_eq , : ;' ,right: ':: u++ u-- u+ u- u! u~ u* u& compl sizeof new delete not ++ -- ? = += -= *= /= %= <<= >>= &= ^= |= and_eq or_eq xor_eq if else ' + 'try catch finally for switch case while do char signed unsigned short int long float double' ,prefix: ( [ 'u*' , 'u&' , 'u+' , 'u-' , 'u!' , 'u~' , 'u++' , 'u--' , 'not' , 'compl' , 'sizeof' , 'new' , 'typeof' , 'finally' , 'case' , 'delete' , 'typeid' , 'const_cast' , 'dynamic_cast' , 'reinterpret_cast' , 'static_cast' , 'throw' ] ) .concat( ( [ 'char' , 'signed' , 'unsigned' , 'short' , 'int' , 'long' , 'float' , 'double' ] ) ) ,postfix: [ '++' , '--' ] ,blocks: { 'if' : '1' , 'do' : '1' , 'catch' : '1' , 'try' : '1' , 'for' : '1' , 'while' : '1' , 'switch' : '1' , 'enum' : '1' , 'struct' : '1' , 'class' : '1' , 'union' : '1' , 'namespace' : '1' } } ) ,statics= (function( ) {var syntax_node= (function( ) {var ctor=function( /* unary , node */data) { /* unary ; node */var xs=arguments;
return(function(it) {return(data.constructor===this.constructor? (this.data=data.data,this.length=0) : (this.data=data,this.length=0, (function(xs) {var x,x0,xi,xl,xr;
for(var xi=0,xl=xs.length;
xi<xl;
 ++xi)x=xs[xi] , ( ( (xi) && (this.push(x) ) ) ) ;
return xs} ) .call(this,xs) ) ) ,it} ) .call(this, (this) ) } ;
return(syntax_subclass(ctor,javascript_tree_serialization_methods,javascript_tree_type_methods, {serialize:hijacked.serialize} ) ) } ) .call(this) ,syntax=syntax_node;
return( {syntax_node:syntax_node,syntax:syntax} ) } ) .call(this) ;
return(merge( ($.c=function( /* unary , node */code) {;
return $.c.parse(code) } ) ,hijacked,statics) ) } ) .call(this) ) } ) .call(this) } ) } ) .call(this, /* unary , node */caterwaul) ) ;
