ScalableCSS
====================

ScalableCSS is a CSS framework based on LESS CSS preprocessor (http://lesscss.org). It's main purpose is to let you manage and extend website's stylesheets easily.

It comes with integrated customized version of Semantic Grid System (http://semantic.gs) by default, however you can use any Grid System you like instead if you need any at all.

Code and comments are self explanatory so you should feel fine by reading through the source. A good starting point is 'less/base.less', which is an example of root stylesheet file. You can create multiple siblings of base.less and all of them will use the same codebase which is highly flexible when it comes to managing multiple stylesheets. However, in most cases it's recommended to have only one stylesheet (like base.less) per website for non-responsive designs. Read the comments in base.less for more info.

Installation
--------------------

``` html
$ git clone git://github.com/scalablecss/scalablecss.git
```

Credits
--------------------

Following projects are the original inspiration for ScalableCSS:

+ LESS CSS
+ HTML5-Boilerplate
+ Semantic.gs
+ 320andup
+ Twitter Bootstrap
+ Workless
+ Inuit.css
+ oocss by stubbornella
+ Debugging CSS Media Queries by Johan Brook

License
--------------------

This is free and unencumbered software released into the public domain.

Anyone is free to copy, modify, publish, use, compile, sell, or
distribute this software, either in source code form or as a compiled
binary, for any purpose, commercial or non-commercial, and by any
means.

In jurisdictions that recognize copyright laws, the author or authors
of this software dedicate any and all copyright interest in the
software to the public domain. We make this dedication for the benefit
of the public at large and to the detriment of our heirs and
successors. We intend this dedication to be an overt act of
relinquishment in perpetuity of all present and future rights to this
software under copyright law.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS BE LIABLE FOR ANY CLAIM, DAMAGES OR
OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE,
ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
OTHER DEALINGS IN THE SOFTWARE.

For more information, please refer to <http://unlicense.org/>
