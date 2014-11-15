
"Some jQuery basics"
'body' asJQuery hide.
'body' asJQuery show.

"A little bit of JSON"
data := #('hello' 'Gdev' 2104) asJSON. 

"Inspect data as well"
localStorage setItem: 'gdev' value: (localStorage getItem: 'TodoList'). 

SmalltalkImage current readJSObject: 
            (JSON parse: (localStorage getItem: 'TodoList')).
"Inspect me"
localStorage
