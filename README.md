# CSS_learn

caniuse.com

CSS:
	cascading style sheet
	
World Wide Web Consortium (W3C) CSS Working Groups:
``` https://www.w3.org/TR/tr-groups-all#tr_Cascading_Style_Sheets__CSS__Working_Group
```
**********************************************
## 3 ways of styling

```
Inline : <h1 style="background:red;"></h1>
Internal: adding css in head <style>h1{color:red}</style>
Extenal : <link rel="stylesheet" href="main.css">
```

Custom/Default fonts in your browser:
Browser preference->customize fonts
		
		We can use serif,sans-serif or monospace.
		we can rely on these value as all browser has default font store for this value.
		
		font-family:sans-serif
		
We can also use google fonts.
		add link to head section of page
		customize font-family for the selector
		


## FLOAT:
	float:right|left|
	Float actually take the element out of the document flow. The space of the element will not be reserved. block level element will take its space and inline element from below element which takes its place will wrap around it

	clear: both; // to clear both left and right float
***********************************************
## Selectors:

```
Elements: h1 p body html
classess: .container
ID		: #red-box
universsal: *
Attributes: [disabled]  //<button diabled></button> 
```

Attribute Selector:    

* Element with attribute: 
```html
[type] {
	color:red
	}
	
	<input type="text">

```

* Element with specific attribute value: 
```html
[type="email"] {
	color:red
	}
	
	<input type="email">

```

* Element with specific attribute value in list: 
```html
[lang~="en-us"] {
	color:red
	}
<p lang="en-us en-gb">Hi</p>
/* here list containe en-us and en-gb*/

```
* Element with specific attribute value prefix: 

```html
[href^="#"] {
	color:red
	}
<a href="#all">Link</a>

```
* Element with specific attribute value suffix: 

```html
[href$=".de"] {
	color:red
	}
<a href="ab.de">Link</a>

``` 

* Element with atleast one attribute value: 

```html
[src*="cdn"] {
	color:red
	}
<img src="i.cdn.com">

```

* case insensitive: 

```html
[src*="cdn i"] {
	color:red
	}
<img src="i.CDN.com">

```

******************************************
## Inheritance:
	if we apply any style in body, then it will bubble down to all the element inside the body.
	
	But the specificity is very low. Even the browser has greater specificity than inheritance
	
	To increase the specificity of inheritance:
	```
	font-family:inherit  
	```
********************************************	


Margin Collapsing:

    When two elements define their margin(4px and 6px) then CSS will not consider both of their margin and create 10 px, rather  bigger one will win that is 6px margin will be created.
    Unless we use margin-bottom or top to specifically define the margin
	
box-sizing:
	defining height and width of element by default change the dimension of content, but we can change it to include padding and border also.
	
	box-sizing:content-box|border-box

viewport:
	
	the visible part/area of your page. Or your browser window
	
	
### Display:
defines the alignement of content
```
	inline-  width is limited to content. multiple element in one row, therefore cannot change margin and padding
	
	block - each element will have their own line. Take full length
	
	inline-block - take property of both. Items are in a line bu now we can change margin and padding
	
	none: will be part of DOM but not visible.
	
```
visibility: hidden and display:none

	if visibility is hidden, the space taken by the element will remain taken while in display the space of element will taken by the next element

#### What are inline and block level element?
```html
Inline -> <a> , <span> , <img> 
block -> <div> , <section> , <article> , <nav>  but also <h1> , <h2>  etc and <p>
```

```html
You can read a more detailed article (which also includes a YouTube video about HTML at the top of the page) here: https://academind.com/learn/html/beginner-s-guide/diving-deeper-into-html#block-level-vs-inline-elements

Here's the executive summary:

Block-level elements are rendered as a block and hence take up all the available horizontal space. You can set margin-top and margin-bottom and two block-level elements will render in two different lines.

Some examples are: <div> , <section> , <article> , <nav>  but also <h1> , <h2>  etc and <p> .

Inline elements on the other hand only take up the space they require to fit their content in. Hence two inline-elements will fit into the same line (as long as the combined content doesn't take up the entire space in which case a line break would be added).

They also use the box-model you learned about but margin-top  and margin-bottom  have no effect on the element. padding-top  and padding-bottom  also have a different effect. They don't push the adjacent content away but they will do so with the element border. You can read more about that behavior in the following article: https://hacks.mozilla.org/2015/03/understanding-inline-box-model/

Additionally, setting a width  or height  on an inline element also has no effect. The width and height is auto to take as much space as required by the content.

Logically, this makes sense since you don't want your inline elements to destroy your multi-line text-layout. If you want to do so or need both block-level and inline behavior, you can set display: inline-block  to merge behaviors.

Some example elements are: <a> , <span> , <img> 

```
## Pseudo classes and elements:

Pseudo Classes on the MDN: https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-classes

Dive deeper into Pseudo Elements: https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-elements

pseudo class defines the style of a special state of an element
```
### :className

.class:hover{
color:white}

	there shold be no spacing before and after ':'
```	
Pseudo Element defines teh style of a specific part of an element	
```
### ::elementName

.class::first-letter{
font-size:32px
}

```

###   !important

border:1px solid black !important

the style with important marked will have the highest specifity

###   :not pseudo class

a:not(.active){ select anchor without active class}
:not(p){rules will applied to everyehere except p}

## Types of combinator:

```html
<section id='section'>
	<h1> This is some Text</h1>
</section>	


#section h1{
	some styling
	}
	
```

**Adjacent Sibling:
Elements share the same Parents
Second element come immediately after first element
```diff
h2 + p{
color:red}

<div>
	<h2>not applied</h2>
-	<p>Css applied</p>
	<h3>not applied</h3>
	<p>not applied</p>
	<h2>not applied</h2>
-	<p>Css applied</p>
```
**General Sibling
Element share the same element
second element come after first element
```diff
h2 ~ p{color:red}

	<h2>not applied</h2>
-	<p>Css applied</p>
	<h3>not applied</h3>
	<h2>not applied</h2>
-	<p>Css applied</p>
```
**Child
Second element is direct child of first element

```diff
div > p{color:red}

<div>
-	<p> Css applied</p>
	<div>Not a applied</div>
	<span>
		<p>Not applied</p>
	</span>
-	<p>Css applied</p>
</div>

```
**Descendant

All second element will get red color
No matter whether they are direct or indirect child
```diff
div  p{color:red}

<div>
-	<p> Css applied</p>
	<div>Not a applied</div>
	<span>
-		<p>Css Applied</p>
	</span>
-	<p>Css applied</p>
</div>

```
**Extra
a.active -> anchor tag whcih have active class

Cascading style sheet and specificity
Cascading- > Multiple rule can be apply on same element and rule with higher specificity will cascade other rule


*******************************************
## Positioning

static -> 

	*default. 
	*Positionin top or other doesnot work here
	*z-index does not work

absolute: other element(html or parent)

	* takes the element out of the document flow
	* position context will be html if no parent has any positon defined
	* If any parent has position defined, than that parent will be the position context

relative: itself

	* element is not taken out of document flow
	* defining the top and left in the element it will move in context to its own postion in document
	
	**overflow:hidden
		defining this property in parent and then giving child relative property will make child invisible if we postion if out of parent area
		
	** Defing overflow:hidden in body will simply pass the property of html and save for itself. 
	** Define overflow property to html also, then it will not pass on to html from body
	

fixed : viewport

	* takes the element out of document flow
	* change the display to inline-block
	* positioning context will be viewport
	
	//for navigation bar
	{
	position:fixed,
	width:100%,
	top:0
	left:0
	margin:0
	box-sizing:border-box
	}
	

sticky: viewport and parent

	* combination of fixed and absolute
	* element will remain fixed wrt viewport if we scroll 
	
	{
	position:sticky,
	top:20;
	}
	
	* as soon we scroll down and element is at 20 px from top, it will stuck there until parent element is moved up.
	
Stacking context:
	
	* if we have two parent, parent-1 has z-index:1 and parent-2 z-index:30, 
	  then no matter how much z-index we give to children of parent-1, they will never
	  be above parent-2, because stacking context of children is of parent-1.


*******************************************
## Background and images

We can stack multiple images on top of each, For eg: gradient with transparancy then image for effect.
background is actuall a shorthand. We can use multiple option with background.
such as:
* background-image   : set one or more background images
* backgrouns-color	 : ser background color
* backgrouns-size	 : set background size
* backgrouns-repeat	 : set background images repeatation
* backgrouns-clip	 : define whether background extends underneath border
* backgrouns-attachment: set scrolling behavior of background image
* backgrouns-origin	 : set background positioning area
* backgrouns-position: set initial position relative to background position layer

```
background-image:url()
background-image:linear-gradient(to left bottom, red blue)|linear-gradient(30 deg, red 70% ,blue, green)
background-image:radial-gradient(circle at top left 30% 20% ,red,blue,green)
background-color:red
background-size:100px|100%|width height|100% 50%
background-size:cover   ->adjust dimensin automatically, crop image if needed
background-size:contain ->make sure to show full image, no croppig, even if white space is left
background-repeat:no-repeat|repeat-x|repeat-y
background-position:left top right bottom|0% 0% ->no cropping at left and top| 50% 50% ->equal cropping from all side
background-origin:border-box|content-box|padding-box
background-clip:border-box|content-box|padding-box
background-attachment:local|scroll|fixed
```

We can add filter to our background images:
```
/* URL to SVG filter */
filter: url("filters.svg#filter-id");

/* <filter-function> values */
filter: blur(5px);
filter: brightness(0.4);
filter: contrast(200%);
filter: drop-shadow(16px 16px 20px blue);
filter: grayscale(50%);
filter: hue-rotate(90deg);
filter: invert(75%);
filter: opacity(25%);
filter: saturate(30%);
filter: sepia(60%);

/* Multiple filters */
filter: contrast(175%) brightness(3%);

/* Use no filter */
filter: none;

/* Global values */
filter: inherit;
filter: initial;
filter: revert;
filter: unset;
```
******************************************
### Images:

* Images by default does not fix there size according to parent element
* We need to make parent element block or inline-block and then make 100% to contain them in parent


*******************************************
## Fonts

Generic Families | Font Families | Font Families |  
--- 		| --- 				| --- 			|  
Serif 		| Times new Roman 	| Georgia  		|
sans-serif 	| Hevetica 			| Verdana 		| 
cursive		| Brush script 		| Mistral  		|
monospace 	| Courier New 		| Lucida Bright | 
fantasy 	| 					|  



Two ways of importing fonts from google:  
*  connecting with html  inside link tag  href="https://fonts.googleapis.com/css2?family=Roboto:wght@100&display=swap" rel="stylesheet"
* importing in css @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@100&display=swap');

### Using local downloaded font:  
```
@font-face{
	font-family: "anonPro";
	src: url(../asset/anonPro.ttf);
	font-diaplay:block|swap|fallback|optional  //helps to load custom fonts or fallback fonts
}

@font-face{
	font-family: "anonPro";
	src: url(../asset/anonPro-bold.ttf);
	font-weight:700;
}

.para{
	font-family:"anonPro";
	font-weight:700
}
```

******************************************
## Size, measurement and unit

Units:

|unit | Symbol | Detail |  
--- 		| --- 				| --- 			|  
| pixel		| px				| Absolute (user settting doesn't affect it)					|
| rem		| root em			| Adjust to default font-size relative to browser setting		|
| em		| em				| Adjust to default font-size relattive to parent font			|
| vh		| viewport height	| Adjust to current viewport									|
| vw		| viewport width	|																|
| vmin		|					| min of height or width whichever is less						|
| vmax		|					| max of height or width whichever is more						|
| percentage| %					| position:fixed	-> relative to viewport    
								   position:absolute-> relative to parent+padding with postion != static    
								   position:relative-> relative to block level parent (no padding)    
								   position:static-> relative to block level parent (no padding)  |  
   
* If height if of body is not defined, than its direct child element will not be able to inherit the height.
  Therefore to resolve this, we need to define height in body as well as in html.

Fonts:
* by default font sizes are maintained by browser, unless we define the the size.
* If we define the size in pixel, them if we user increase the default font size in browser, it will not affect the text size

******************************************
## Responsive design  

* Hardware pixel -> A hardware pixel is an individual dot of light in the display. 
* Software pixel -> Also called a CSS pixel in the web world, is a unit of measurement. The device manufacturer determines how many hardware pixels equals one software pixel, a concept known as the device pixel ratio.  

Basically Inch is equal to <b>96px</b>, but mobiles have  higher pixel density and this rule does not work therefore they tweak it. This results in a website which are not responsive and give same design as shown in PC.  

To overcome to this we neet to add viewport as scale rather then jsut pixel, so that device can adjust their 
```html
<meta name="viewport" content="width=devide-width, initail-scale=1.0">

"viewport" 							-- property name
content="width=device-width, 		-- defining to use device width instead of pixel 
initail-scale=1.0",					-- initial zoom level
maximum-scale=2.0,					-- maximun zoom level
minimum-scale=0.5,					-- minimum zoom level
user-scalebale=yes					-- user will able to change zoom

```


*******************************************
## Flebox

* on parent set property display:flex	->	makes parent = Flex container -> children= Flex Items
* we can use display:flex  or display:inline-flex to create Flex container

### display:flex:
* this will automatically add two properties:  
 flex-direction: row  
 flex-wrap:nowrap  


* Main and cross axis

main axis (flex-dirextion:row)-> ROW -> starts (0,0) moves to (x,0)  
cross axis(flex-dirextion:row)-> column -> starts (0,0) moves to (0,y)


* align-items: if direction row -> give proper spaces in y axis  
* justify-content: if direction row -> give proper spaces in x axis  
* align-content: spaces between item center 

******************************************* 
### Propertes can be used on Flex container:  
```
flex-direction:row|column|row-reverse  
flex-wrap:wrap|nowrap|wrap-reverse  
flex-flow:  
justify-content: center | flex-start |flex-end  
align-content: center  
align-items:stretch(default)| center | flex-start |flex-end  
```
### Propertes can be used on Flex Items:  
```
order: 0(default)  //item with higher order will be at end  
flex-grow:1        //allow to grow  item if extra space in parent. it 2 item has flex-grow space will be divided in the ratio  
flex-shrink:1(default) // if all have same value all will shrink in same ratio. value 0 will not let shrink  
flex-basis: 200px       // refers to width if direction is row otherwise height
align-self: similar to align-item, but works only single item  
flex:0 1 auto  (0->row direction shrink basis->auto(provided height or width) )
```
*******************************************

Specificity in desceasing order:

In developer tool poperty are shown with decreasing specificity.



The last ones in darker background are browser default

In case element of same spcecifity is present, the one which come later in css file will win

Even if we inline specify two classes, the class which is written in css file will win.
```
Inline
combinator
ID
class :psedo-class attribute
<tag> and :pseudo-element-selector

```


		 

Properties:
```
https://developer.mozilla.org/en-US/docs/Web/CSS/Reference

Common CSS properties

https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Properties_Reference
```

```
background:
color:

display:
vertical-align:middle|top
overflow:
overflow-x: hidden
order:

text-align:right    (for inline content)  (float or flex or grid for block element)
text-decoration:none|underline|overline|line-through|line-through dotted red|line-through wavy test-shadow:5px 5px 2px gray (x y blurr color)
font-diaplay:block|swap|fallback|optional  (helps to load custom fonts or fallback fonts)
font-family:
font-weight:bold
font-size:22px
font-variant:small-caps     (change everything to caps)
font-stretch:condensed
letter-spacing:5px
white-space:nowrap|pre|pre-wrap|pre-line|normal 
line-height:2|32px|200%  (using only number '2' we are dealing with relative to font-size)
font:italic small-caps 700 1.2rem/2 "anonPro",sans-serif 
	(style variant weight size/height family) size and family is complusory

width:calc(100% - 54px)
list-style:none     (remove bullets point from list)
background:url()
transform:scale()
z-index:-1      (work only with element with position !static  or dispaly:flex)
border:2px soloid|dashed red
box-sizing: content-box|border-box
.button:focus {outline:none}    (to remove outline)

```