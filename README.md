angular-bootstrap-sortbutton
============================

SortButton directive, based on angular 1.x+ and bootstrap 3.x+

### Using

The directive can be used with its name or as an attribute:

```
<za-sort-button za-sort-type="alpha" 
 za-sort-order-ascending="true"
 za-sort-event="sortEvent(isAscending)" 
 za-btn-class="btn btn-default btn-xs">
 </za-sort-button>
```

### Options

The attributes are as following:

* *za-sort-type* can either be **alpha**, **numeric** or empty to display the corresponding sort glyphicon
* *za-sort-order-ascending* determines the initial sort order; when it is true, *ascending* order is assumed; **must be present** for the time being
* *za-sort-event* can be a scope function that gets called, whenever the sorter has been clicked, and passed with the current sortOrder; *optional*
* *za-btn-class* is a list of preferrably bootstrap classes that can be used for additional styling (e.g. small buttons); the default value is *btn btn-default*

### Notes

 - has not been extensively tested with older bootstrap releases; but as along as the glyphicons are present, it should work. The same applies to older Angular releases; it should work with Angular 1.0.x as well - keep your fingers crossed.
