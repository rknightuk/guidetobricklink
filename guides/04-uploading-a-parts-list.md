---
title: Uploading a Parts List
layout: page
permalink: /uploading-a-parts-list
type: guide
excerpt: "If you want to convert a Lego Digital Designer file to valid Bricklink XML, check out this guide."
---

* TOC
{:toc}

<div class="alert alert-warning">
If you want to convert a Lego Digital Designer file to valid Bricklink XML, check out <a class="alert-link" href="http://studs.me/posts/convert-lxf-to-bricklink-xml">this guide</a>. Although the guide covers LXF files, it also applies to other formats including Brickstore (BSX) and Peeron (TSV) parts files.
</div>

Bricklink uses XML to mass upload a parts list; details on the correct formatting can be [found here](http://www.bricklink.com/help.asp?helpID=207). To upload a part lists to Bricklink, go to [Wanted > Upload](http://www.bricklink.com/wantedXML.asp), paste in the contents of a valid Bricklink XML file, and press <kbd>Verify Items</kbd>.

{% include image.html
    title="Verifying uploaded items"
    url="assets/images/upload-verify.jpg"
%}

This step is for confirming quantities, colours, and parts are correct. But unlike other part lists on Bricklink, this list cannot be edited. To edit the quantities before upload, the XML file needs to be edited and uploaded again (Note: quantities can be updated after upload). If the wanted list ID has been set for an item, it will be indicated on this page underneath each item. When everything is correct, clicking <kbd>upload file</kbd> will upload the parts to Bricklink.

<span class="label label-next">Next:</span> Now you've uploaded a parts list, check out how to [find the best store to buy from](/finding-the-best-store-to-buy-from).
