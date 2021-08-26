# CSS_learn
CSS:
	cascading style sheet
	
World Wide Web Consortium (W3C) CSS Working Groups:
``` https://www.w3.org/TR/tr-groups-all#tr_Cascading_Style_Sheets__CSS__Working_Group
```

3 ways of styling

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
		

Selectors:

```
Elements: h1 p body html
classess: .container
ID		: #red-box
universsal: *
Attributes: [disabled]  //<button diabled></button> 
```

Inheritance:
	if we apply any style in body, then it will bubble down to all the element inside the body.
	
	But the specificity is very low. Even the browser has greater specificity than inheritance
	
	To increase the specificity of inheritance:
	```
	font-family:inherit  
	```
	
Combinator:
```
<section id='section'>
	<h1> This is some Text</h1>
</section>	


#section h1{
	some styling
	}
	
```

Margin Collapsing:

    When two elements define their margin(4px and 6px) then CSS will not consider both of their margin and create 10 px, rather  bigger one will win that is 6px margin will be created.
    Unless we use margin-bottom or top to specifically define the margin
	
box-sizing:
	defining height and width of element by default change the dimension of content, but we can change it to include padding and border also.
	
	box-sizing:content-box|border-box


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
```
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


## Types of combinator:

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


Cascading style sheet and specificity
Cascading- > Multiple rule can be apply on same element and rule with higher specificity will cascade other rule

*******************************************

Specificity in desceasing order:

Indeveloper tool poperty are shown with decreasin specificity.

The last ones in darker background are browser default
```
Inline
combinator
ID
class
:psedo-class
attribute
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
vertical-align:middle
overflow:
order:
text-align:right
text-decoration:none
font-family:
font-weight:bold
font-size:22px
width:calc(100% - 54px)
list-style:none     (remove bullets pint from list)
background:url()
transform:scale()
border:2px soloid|dashed red
box-sizing: content-box|border-box

```