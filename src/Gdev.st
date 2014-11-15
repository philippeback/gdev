Smalltalk createPackage: 'Gdev'!
Object subclass: #Gdev
	instanceVariableNames: ''
	package: 'Gdev'!

!Gdev methodsFor: 'action'!

doAmberWith
	| tag |
	tag := (HTMLCanvas onJQuery: '#output-list' asJQuery) root.
	tag with: [ :html | html li with: 'Amber Web #with: added me!!' ]
! !

!Gdev methodsFor: 'action2'!

doJQueryAppend
	'#output-list' asJQuery append: '<li>jQuery append added me!!</li>'
! !

!Gdev methodsFor: 'starting'!

augmentPage
	'#amber-with' asJQuery click: [ self doAmberWith ].
	'#jquery-append' asJQuery click: [ self doJQueryAppend ]
! !

!Gdev class methodsFor: 'starting'!

start
	self new augmentPage
! !

