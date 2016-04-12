---
layout: default
meta-title: 'Contact Us | Variant Studios'
meta-description: 'Have a project in mind? Need help making your online presence more impactful? We are ready to help! Drop us a line below and we will get back to you shortly.'

title: 'Contact Us'
subtitle: 'Have a project in mind? Need help making your online presence more impactful? We are ready to help! Drop us a line below and we will get back to you shortly.'

permalink: /contact/
image_path: 
header_class: contact--banner
---
<header class="{{ page.header_class }} header--banner" id="header--banner">
  <h1>{{ page.title }}</h1>
  <p>{{ page.subtitle }}</p>
</header>

<form action="https://getsimpleform.com/messages?form_api_token=6f32d74d5c544939d7ca2ef5d42e7eff" method="post">
  <!-- the redirect_to is optional, the form will redirect to the referrer on submission -->
  <input type='hidden' name='redirect_to' value='https://www.variantstudios.com/contact/thanks/' />
  <!-- all your input fields here.... -->
  <div class="hidden">
    <label for="form-url">Leave this field blank </label>
        <input autocomplete="off" type="text" id="form-url" name="formtype" value="Contact Form" size="20" maxlength="128" class="form-text">
    </div>
    <div class="webform-component">
        <label for="name">Name</label>
        <input type="text" name="name" id="name" required="">
        <div class="validation">
            <span id="nameInfo"></span>
            <i class="fa fa-check"></i>
        </div>
    </div>
    <div class="webform-component">
        <label for="email">Email</label>
        <input type="email" name="email" id="email" required="">
        <div class="validation">
            <span id="emailInfo"></span>
            <i class="fa fa-check"></i>
        </div>
    </div>
    <div class="webform-component">
        <label for="phone">Phone <span class="optional">(optional)</span></label>
        <input type="text" name="phone" id="phone">
    </div>
    <div class="webform-component">
        <label for="company">Company <span class="optional">(optional)</span></label>
        <input type="text" name="company" id="company">
    </div>
    <div class="webform-component">
        <label for="Message">Message</label>
        <textarea id="message" name="message" rows="6" cols="25"></textarea>
        <div class="validation">
            <span id="messageInfo"></span>
            <i class="fa fa-check"></i>
        </div>
    </div>
    <input class="sendButton" type="submit" name="Submit" value="Send">
</form>

<div class="map">
<iframe width='100%' height='500px' frameBorder='0' src='https://a.tiles.mapbox.com/v4/variantstudiosteam.jbofafjf/attribution,zoompan,geocoder.html?access_token=pk.eyJ1IjoidmFyaWFudHN0dWRpb3N0ZWFtIiwiYSI6IkJOeWd1dWMifQ.EpahpXGBtmn_3IROFYRS5w'></iframe>
</div>