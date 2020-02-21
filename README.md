
This page in [Russian](/README_RU.md)


# IONDV. Image-storage

**Image-storage**  - is an IONDV. Framework library. It is used for previewing images.

### IONDV. Framework in brief

**IONDV. Framework** - is a node.js open source framework for developing accounting applications
or microservices based on metadata and individual modules. Framework is a part of 
instrumental digital platform to create enterprise 
(ERP) apps. This platform consists of the following open-source components: the [IONDV. Framework](https://github.com/iondv/framework), the
[modules](https://github.com/topics/iondv-module) и ready-made applications expanding it
functionality, visual development environment [Studio](https://github.com/iondv/studio) to create metadata for the app.

* For more details, see [IONDV. Framework site](https://iondv.com). 
* Documentation is available in the [Github repository](https://github.com/iondv/framework/blob/master/docs/en/index.md).

## Description

The library is an additional component of the system and is used when attributes containing images are present in the application and used by the framework's file storage.

To use library, you must specify it in the application dependencies. To do this, specify the module in the package file.JSON applications, in the _"dependencies" section"_:

```
"dependencies": {
    "image-storage": "git+https://github.com/iondv/image-storage.git"
}
```

with a link to the module's repository in github.com.

Next, you need to add an attribute to the list form, the image of which will be used in the preview mode. After that, images uploaded for objects can be viewed immediately in the list view.

## Image-storage library features

* Display preview images without going to the shape of the object

--------------------------------------------------------------------------  


 #### [Licence](/LICENCE) &ensp;  [Contact us](https://iondv.com) &ensp;    [English](/README.md)   &ensp; [FAQs](/faqs.md)          

<div><img src="https://mc.iondv.com/watch/local/docs/portal" style="position:absolute; left:-9999px;" height=1 width=1 alt="iondv metrics"></div>

--------------------------------------------------------------------------  

Copyright (c) 2018 **LLC "ION DV"**.  
All rights reserved. 



