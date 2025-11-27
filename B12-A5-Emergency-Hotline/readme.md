

### 6. Answer the following questions clearly:

1. What is the difference between **getElementById, getElementsByClassName, and querySelector / querySelectorAll**?

Ans:
 *getElementById = This is the fastest method that selects a single element using its unique ID. Its perfect When I need to quickly grab one specific element and performance matters.

*getElementsByClassName =  It's Returns a live collection of all element with a specific className. The live collection automatically update when new matching elements are added to or removed from the DOM, which can be useful for dynamic content. 

*querySelector = It's uses  CSS selector syntax to find the first matching element, giving a great flexibility to select by ID, class, tagName, or complex combinations. it's the most versatile single-element selector.

*querySelectorAll = This command also uses as CSS selector but it's returns all matching element as a static NodeList. it doesn't auto-update , but support array methods like forEach. 


2. How do you **create and insert a new element into the DOM**?

Ans: 

*Create Element:
Use document.createElement('div') to create a new element. Then add content with textContent or innerHTML and set attributes like className or id.

Insert Methods:
append() = Adds at the end of an element.

prepend() = Adds at the beginning.

before() = Inserts before an element.

after() = Inserts after an element.


3. What is **Event Bubbling** and how does it work?

Ans: 

Event Bubbling is the default behavior where an event starts from the target element and bubbles up through its parent elements to the document root.


4. What is **Event Delegation** in JavaScript? Why is it useful?

Ans:

Event Delegation is putting one event listener on a parent element to handle events from multiple child elements.It's uses event bubbling to handle multiple elements with one listener.
5. What is the difference between **preventDefault() and stopPropagation()** methods?

Ans: 

preventDefault() is uses for stop the browsers default action. prevent reload the page in form submit

stopPropagation() is uses for stop the event from bubbling up to parent elements.