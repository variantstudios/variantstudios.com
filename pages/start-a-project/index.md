---
layout: default
meta-title: 'Start here to get your new Website project proposal | Variant Studios'
meta-description: 'Help us get a better understanding of your website needs by answering a few simple questions regarding your business and let us get started!'

title: 'Start a project'
subtitle: Thank you for your interest in working with Variant Studios. To allow us to more accurately examine your project and requirements, we ask that you answer the following questions. We aim to respond to all enquiries within 1 to 2 business days.

permalink: /start-a-project/
image_path: 
header_class: portfolio--header
---
<header class="{{ page.header_class }} header--banner" id="header--banner">
  <h1>{{ page.title }}</h1>
  <p>{{ page.subtitle }}</p>
</header>
<form action="https://getsimpleform.com/messages?form_api_token=6f32d74d5c544939d7ca2ef5d42e7eff" method="post">
  <!-- the redirect_to is optional, the form will redirect to the referrer on submission -->
  <input type='hidden' name='redirect_to' value='https://www.variantstudios.com/start-a-project/thanks/' />
  <!-- all your input fields here.... -->
  <div class="hidden">
    <label for="form-url">Leave this field blank </label>
        <input autocomplete="off" type="text" id="form-url" name="formtype" value="Start A Project" size="20" maxlength="128" class="form-text">
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
        <label for="website">Website <span class="optional">(optional)</span></label>
        <input type="text" name="website" id="website">
    </div>
    <div class="webform-component-select">
        <label for="budget">Budget</label>
        <select id="budget" name="budget" class="form-select required">
            <option value="" selected="selected">- Select -</option>
            <option value="3500-5000">$3,500 - $5,000</option>
            <option value="5000-8000">$5,000 - $8,000</option>
            <option value="8000-10000">$8,000 - $10,000</option>
            <option value="10000-15000">$10,000 - $15,000</option>
            <option value="15000+">$15,000+</option>
        </select>
    </div>
    <div class="webform-component">
        <label for="Message">Tell us a little about your project</label>
        <textarea id="message" name="message" rows="6" cols="25"></textarea>
        <div class="validation">
            <span id="messageInfo"></span>
            <i class="fa fa-check"></i>
        </div>
    </div>
    <input class="sendButton" type="submit" name="Submit" value="Send">
</form>