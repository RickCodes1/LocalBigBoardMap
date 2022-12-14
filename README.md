# Local Big Board Map

## Introduction
---

There are many things that could listed in our lifes or it's aspects.\
There are lots of lists around different topics, places, and some other areas apart from just chronological criteria.
Around this situation, we can find many tools available (both non-paid and paid) that try to solve some existing problems around it.\
But maybe it is not all of what is needed. That's why, without any intention of making a massive and distributable app, initially propose to make some local builds of some custom tools (some parts made from scratch and some parts with any internet resource at hand) **to explore the limits of what a well envisioned application could make to solve ultimately better the existing problems around organization of lists of any kind, which may include:**\
-Clutter, disorder, disorganization\
-inefficiency at search\
-not indexed content\
-forgetfulness of the past earned progress/tools/resources\
-redundant efforts, sometimes clearly duplicated efforts and not 100% efficient as the first time\
-performance for not using all resources that you got\
-etc.\
That was a general description of the disadvantages of the problem, but in reality, it affects us in a deeper manner.


So, from all the kinds of lists in our lifes, let's focus here specifically on the list of the multiple (embedded) local files that we could have inside a certain local folder in our computer.\
That digital list can be obtained or generated by some specific programs like [FileList](https://www.jam-software.com/filelist?ca=1), [STG FolderPrint Plus](starglidersystems.com), or some others from a scripting language like pyhton, JS, VBA, etc.\
It could be imagined as a large and heavy .csv file with some columns like filename, fullpath, lastModifiedDate, CreatedDate, Size, but in this repo I represented that as a simplified csv file __FileList01.csv__ (which may not be the only one of it's kind), that for now doesn't contain an icon specific for the fileExtension (in order to be able to make plots like the Operative Systems do at their Desktop or File Explorers), but it contains just a Filename as it is the minimal data needed to represent an item of the mentioned list.

## The ultimate expected result:
---

Without further ado, here I show you a diagram of the expected ultimate result of this app which may be a bit confusing right now but I will explain it below it:

Result: AN ELECTRON JS DESKTOP APP OF A GRID MAP for organizing the fileList of a local folder
That app may look like this at the end:

![img](http://drive.google.com/uc?export=view&id=1dBULLuD8lvjoTWcHDNWatwcsCdQDNlFV)

## The necessity explained:
---
The above image showed many things that may be ambiguous or unclear?

Then, let me explain it from the beginning:

Everything or the necessity starts at facing the actual result of the FileList.exe program or it's alternatives, that exports the data in a CSV, HTML, or other formats like the image below (but with lots of hundreds of items):

![img](http://drive.google.com/uc?export=view&id=1VxlMPQx2PDYvT_EQSHlw4TDAh7SFQzQG)

This list could resemble the lists or tables generated by File Explorers in _Details_ View, sortable by one of its columns, and also denotes a hierarchy because is a treeview (in HTML DOM elements, it would be a < ul > with many < li > items probably, if we consider just one unified object like it's fileExtensionIcon and it's FileName, leaving some other column as a tooltip text, hidden as an attribute or omitted).

That's where I think that, instead of a very long vertical list of items that could be only navigated through a scrollbar without any bookmark points (or even with them, cause they should be well thought for them to be effective) or could only be navigated through a long and daunting vertical mouse scrolling, it would be better to have a 2D BOARD or MAP (very big or infinite and seen through a viewport that includes a reference grid or tessellation) that takes advantage of the available space in the monitor screen and could be navigated with little mouse drags or scrolls or scaling or zooming in/out (as the navigation of Google Maps or Mapbox) giving the user a bird's eye view of the dense content while having enough legibility by considering the limits of the human legible font size on a monitor screen of a certain size and resolution (and some formulas around it).


At this image (of an array of 26000 favicons) we could see that there are limits at some point:

![img](http://drive.google.com/uc?export=view&id=1OtjjGvr0p8tZZRVxnHSi10PFczcoB2yK)


Someone may think that if a long vertical list or 1D axis (without considering the internal 2nd D axis used to represent hierarchy), considering as a string or rope, we should just coil it and/or turn it into a matrix which would take us to the [_Tiles_](https://www.digitalcitizen.life/wp-content/uploads/2020/11/explorer_views-15.png) or [_List_](https://filestore.community.support.microsoft.com/api/images/e10aabec-75b2-4db2-9795-e804dee4b533) views of a File Explorer... But in reality, that's only an option for displaying some default order where the user's opinion isn't required at all as in a chronological or alphabetical order is logic and straightforward that the list should be coiled into a matrix to use as much of the available space in the screen as possible. But that is only one way of coiling that list/string/rope, because in order to make it fit into another formats, we could coil that rope in a custom way, like in this following example where if we say that coiling or rearranging the list (or a < ul > with its < li > items) could be represented with this:

![img](http://drive.google.com/uc?export=view&id=1HE9sScDWgkdP456eKU0a5afGPuorUiVe)


By giving it the popular and well-known format of a monthly calendar, 2 weeks could look like this:

![img](http://drive.google.com/uc?export=view&id=1ke80qhIrXtZAEUfGUMs2UWo028MiRt5z)

And by grouping 3 months could look like this:

![img](http://drive.google.com/uc?export=view&id=1cagveWb7JCmq6fHDZ6HHGOf5zNG1FefP)

And so on...




So, in the last sentences, we have mentioned the typical File Explorer views that have a default logic order where the users' decisions or opinions are not too required, as the most logic way to sort is either chronological or alphabetical.
But, if we talk about an interactive (and thus user descisions' dependent) list or < ul > or treeview, a sortable one, 
and some other ways to present it,
we could think of a view, not from the File Explorer, but of the Operative System's desktop where the user has more freedom to reorder to any criteria,

Annotating this example from [here](http://www.learnthatit.com/blog/windows-7/speed-up-your-windows-pc-simple-tips-to-improve-the-responsiveness-of-your-windows-pc/), we could see below that the user decided and manage to make groups according to a certain criteria, probably by functionality, purpose, or in general, **topics**:

![img](http://drive.google.com/uc?export=view&id=1fxRQmO2baOqw440szw-b94AyNPLfDrol)




I was wondering some time ago... why did Google Maps chose to make the web app using an HTML canvas? 
It wouldn't have been possible to make it with another regular DOM element? 
**Was it the only way?**
I still have that doubt and don't know which would be the right path to follow for this project...

![img](http://drive.google.com/uc?export=view&id=1FJ7TlwU9MI-vgufap84Rs_fYoS592n5I)

We can see that what Maps displays to us at the browsers viewport is an HTML canvas that is a viewport of a bigger map that is really big or infinite:

![img](http://drive.google.com/uc?export=view&id=1Hec7qR5JNm0nZvCYTMyXS8scwV8k0wB0)

While trying to resemble that structure, I made this simplification of a regular map
~~(to represent a baseline plain geographical region, and just added this quantity of mountains and just mountains to keep it simple, not so geographically complex with different altitudes, subregions, limits, etc..)~~
to represent that, considering the above-mentioned facts,
The user could reorder the < li > items or groups of them **by topics**

![img](http://drive.google.com/uc?export=view&id=1EmkYY3cTztYrT8tua_qCyjhU2CzGOyJz)


but of course, in a BOARD/grid...

![img](http://drive.google.com/uc?export=view&id=15Oh3j2KGJ2yADK0OF6dgtV6NJEsaCNlO)


**For that board or grid, although I was kind of biased towards using SVGs** because of some examples out there that showed me that SVGs could be more flexible towards the kind of tessellation or polygon and examples that had some ressemblance to the wanted functionality like a chess game (that has a board where you could position pieces) (but was written in Java in a peculiar package, where it's not possible to extract any logic into Javascript, so it's just an example to contemplate), **I am currently open to use any technology that is necessary even if it's DOM elements, SVGs, HTML canvas, etc, or a mix of them.**

![img](http://drive.google.com/uc?export=view&id=1eE598bqSpWmCv2ZRQXjwhJbT2p06nSsR)




# Getting hands dirty:


This first stage of the repo that seeks to implement these described characteristics looks like this:

![img](http://drive.google.com/uc?export=view&id=1Gt7MxEW2T7qHW3LPxfBUMASgwHC2giov)

I made the BOARD's GRID **With DIVs** based on this codeblock (http://jsfiddle.net/Ruddy/mWX7K/), 

but could be done also **With SVGs:**\
https://codepen.io/RickCodes1/pen/JjZrdRB 
In this link you can modify the grid rows and cols (although in the code it's inverted)
That's how I generated the dense grids shown in these graphics put in this readme... (150x50 and 300x150).

So, placing some items in this BOARD's grid, it would start to look like this:

![img](http://drive.google.com/uc?export=view&id=1P6xuSkWgRCOAMsgQ6z4nylBkOEzoZksO)

And we could end up with the wanted result

![img](http://drive.google.com/uc?export=view&id=1o5m8Nk4YqYPOebbxoZIlVxWM122-IikF)

where we can add a few custom labels, icons, images to have the first image I mentioned as the final outcome, at the top of this readme.

**P.S:** BTW, if it is still not too clear how the chess-like dynamic would work between the BOARD (chess pieces) and the list items (chess pieces) or Wix/PPT or a diagramming software that shows a blank space to position items, instead of presenting the list below the BOARD/grid, you could also use this visualization where I hardcoded a visualization example adding a boardViewportOrContainerDiv (that should be configured with position:sticky;) in 2 locations

![img](http://drive.google.com/uc?export=view&id=1AH8iRWgEVbv5dDxxpn86Co50ogfobkAy)


and chose the first one to place the board using the DIVs approach. And we can see there that, apart of just MOVING by the drags and drops made to the list items, it may be suitable to make an instatiation/duplication with linking or reference 

![img](http://drive.google.com/uc?export=view&id=1HMibJSJRFriL-PMuVsXGwl-ScXg4MDMr)

and also to display that reference better it may be suitable including some highlighting, bookmarks (like Chrome F3 search) or this kind of SVGs from here:

![img](http://drive.google.com/uc?export=view&id=1uTiuMtTqTjklQmJNMhaSNO697J9OsIP_)

That SVG could also be used for establishing additional connections or relations between the list items or nodes, for further recap/rehearsal, something I use to call it as "refreshers", basically a sequence of slides if we talk about frames of diagrams content like the MS PPT offered (for which I made sometime ago something similar in PPT and excel but is trapped on the embedded world and could not be saved on a DB), or if we talk about a sequence (online) videos, it could be a custom playlist. But anyway, that's for later.

## Final Thoughts:
---

There may not be a perfect summary of the whole above descriptions better than itself, but making one attempt to summarize part of it, it could be said that\
The objective is that this app could give the user (who will be the dev team that groups together to program this app, where I am and would be in too and would enjoy together the benefits of having this enhanced tool locally build as it wouldn't be massively distributed) the functionality of accesing a really big 2D blank area with reference lines or cells from a grid (which may have a resemblance to a chess board) so he can reorder items (or chess pieces) inside in order **to map the information** also to another view rather than chronological **or to a map/index that shows all at once and gives us bird's eye view**...

All of this thing of reordering items by topic is looking to make things and items more memorable, easy to remember, memorize... locate better spatially...

That custom PLACING or POSITIONING is like writing.. Writing is a special method of connecting/relating/mapping to something... It's like a special way of making a trip or travel...




# Feature TO DO LIST according to the approach or route

#### By following an approach of HTML canvas like google maps:
-I really don't know how to proceed

#### By following an approach of making a BOARD of chess board and chess pieces:
-[     DONE]  To a blank page, add a grid and a list of < li > using < ul > or a list of DIVs\
-[     DONE]  With DOM elements or DIVs\
-[     DONE]  With SVGs\
-[ NOT DONE]  Make the BOARD infinite or really big and only watchable thorough a viewport\
-[ NOT DONE]  Ability to drag (a group of) items not only to sort them hierarchically but to droping and positioning them into a certain point of the BOARD\
-[ NOT DONE]  Snap to grid when dropping (a group of) items at certain points of the grid cells (corners, midpoints)\
-[ NOT DONE]  Storing the items and its position in the NoSQL DB (Mongo DB)
-[ NOT DONE]  Feature of Instantiating elements or duplicating them with a link to the original item or its position on the list when being dragged and dropped from the < ul > 

-[ NOT DONE]  Try to rebuild in this DOM elements and SVG context as many functionalities as possible of what Google Maps/Mapbox implemented using HTML canvas.\
-[ NOT DONE]  




# Building the Electron application

Running the project

```sh
npm install
npm run start
```

# Available NPM scripts

| Script | Description |
| --- | --- |
| start | starts the Electron application |
| build:macos | creates a testing build for macOS |
| dist:macos | creates a distribution build for macOS |
| build:linux | creates a testing build for Linux |
| dist:linux | creates a distribution build for Linux |
| build:windows | creates a testing build for Windows |
| dist:windows | creates a distribution build for Windows |

