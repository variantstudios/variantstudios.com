---
layout: post
meta-title: "Drupal Tutorial How to send text messages using the Twilio module"
meta-description: "Learn how easy it is to send text (SMS) messages through your Drupal website using the Twilio module."

title: Drupal Tutorial How to send text messages using the Twilio module
subtitle: Learn how easy it is to send text (SMS) messages through your Drupal website using the Twilio module.
date: 2015-02-11T10:00:00.000Z
author: Brent Robbins
thumbnail: /assets/images/journal/drupal-tutorial-texting-with-twilio-module/teaser-header.jpg
header: /assets/images/journal/drupal-tutorial-texting-with-twilio-module/blog-header.jpg
permalink: /journal/drupal-tutorial-texting-with-twilio-module/
---

In this tutorial we are going to create a rule that will send text messages to all of our sites admins when a new page has been created.

This is just a simple example, but with this configuration you could:

* Notify a store owner when an order has been placed.
* Notify your customers when a new product has been released.
* Notify management when employees login.
* Notify a teacher when a student has completed a quiz.


There are many other possible ideas, but we just wanted to get the basic foundation setup. Once the foundation is set, you may further tweak and add additional features.

I also want to note that there are many other ways to do this, but my goal here was to avoid heavier modules and to keep things as simple as possible.

<div class="video-responsive-container"><iframe frameborder="0" scrolling="no" src="//www.youtube.com/v/p1H0gAVpsD4?rel=0&amp;vq=hd720"></iframe></div>

# Tutorial

## Installing the necessary modules

The first thing you want to do is open up your terminal window and navigate to the root of your Drupal website.

Next we need to add a few modules, so we are going to type the following drush command to quickly download them.

~~~
$ drush dl views ctools entity rules views_rules libraries twilio
~~~

Then we are going to enter the following drush command to enable the modules.

~~~
$ drush en views views_ui ctools entity entity_token rules rules_admin views_rules libraries twilio -y
~~~

If by changes you are not not using drush (and if not you should be) to download and enable modules, here is a list of links to their project pages. [Views](https://www.drupal.org/project/views) [Ctools](https://www.drupal.org/project/ctools) [Entity API](https://www.drupal.org/project/entity) [Rules](https://www.drupal.org/project/rules) [Views Rules](https://www.drupal.org/project/views_rules) [Libraries](https://www.drupal.org/project/libraries) [Twilio](https://www.drupal.org/project/twilio)

After we have downloaded and enabled all of the modules we need to add the Twilio PHP library files.

First we need to create the libraries directory with the following command.

~~~
$ mkdir sites/all/libraries
~~~

Finally we need to navigate into the directory and clone the git repo for the [Twilio PHP library](https://github.com/twilio/twilio-php "Twilio PHP git repo") files.

~~~
$ cd sites/all/libraries
$ git clone https://github.com/twilio/twilio-php.git twilio
~~~

### Configuring Twilio

Now that we have the modules in place we should create our Twilio account (if you haven't yet). To create an account you just need to go to the Twilio site and click the [Sign Up](https://www.twilio.com/try-twilio "Sign up for Twilio") link and fill out their form.

After you have created your account, you'll need to go to your [user account dashboard](https://www.twilio.com/user/account/ "Twilio user account") to get your Twilio Account SID, Twilio Auth Token and phone number.

![Account Dashboard](/assets/images/journal/drupal-tutorial-texting-with-twilio-module/twilio-account-dashboard.png)

Now we need to fill out the Twilio module settings page with your Twilio account info. In your Drupal website navigate to the Twilio module settings page (/admin/config/system/twilio). Then copy and paste over your Twilio Account SID, Twilio Auth Token and phone number into the Twilio module's settings page. After you have filled out the required fields the optional settings are up to you.

![Module Settings](/assets/images/journal/drupal-tutorial-texting-with-twilio-module/drupal-twilio-module-settings.png)

Once you are done with that page click "Save Configuration" and then click "Send Test SMS message". Here you can send a test text message to make sure the Twilio module is successfully working.

![Test text message](/assets/images/journal/drupal-tutorial-texting-with-twilio-module/drupal-twilio-module-send-test-text-message.png)

Now we need to edit our Drupal user account to add our cell phone number so our account can dynamically receive text messages. Go to your user page and click edit. Then you should see a new link on the top right labeled "Mobile SMS", click that link. Enter in your cell phone number (just numbers and no special characters) and click "Confirm number". This will send you a text message with a confirmation code. When you receive that code enter it into the form and click the "Confirm number" button.

![User Account](/assets/images/journal/drupal-tutorial-texting-with-twilio-module/drupal-twilio-module-user-account.png)

### Secret Sauce

To make a rule that sends a text message to only users with a certain role requires us to use the [Views Rules Module](https://www.drupal.org/project/views_rules). We will basically be creating a View that will list all of the users that have the role Administrator. Then we will create a Rule that will use this view to loop through the list of users and send a text to each one.

### Create the View

So lets create the view to pull in all of the Administrators. Under Structure &gt; Views &gt; click "Add new view" and give it a name, under "Show" select "Users" and make sure "Create a page" and "Create a block" are both unchecked and click "Continue & edit".

![New View](/assets/images/journal/drupal-tutorial-texting-with-twilio-module/drupal-rule-send-stext-messages_create-view.png)

Now we need to build out the view in the Master Display.

* First thing we should do is add "User: Uid" to the "Fields" and then remove the "User: Name" field.
* Under "Filter Criteria" add "User: Roles" and make sure you select "Is one of" and select administrator (or any other role you would like to send to) under the "Options" list.
* I would also recommend adding "Twilio: Phone number" as a filter and select "Is not equal to" under the Operator and then add "null" for the value. This will make sure your site isn't going to try to send a text message to a user that doesn't have cell number attached to their account.
* Under the "Pager" section change to view all by clicking "Full" and switch it to "Display all items".

![Display](/assets/images/journal/drupal-tutorial-texting-with-twilio-module/drupal-view-rules_overview.png)

* Now we need to add the "Rules" display by clicking the "+ Add" button next to "Master" under Displays.
* Once that's been created you need to click the "edit field info" next to "Row variables". It should open up a window where you will just need to select "User" (listed under Entity) for the "Data type" and click Apply. Now we are done with the View and we can click Save.

![Rule variable](/assets/images/journal/drupal-tutorial-texting-with-twilio-module/drupal-view-rules_view-rule-variable.png)

### Create the Rule

Now let's create the rule that will text users when a new page has been created.

* Navigate to the Rules UI page located under Configuration &gt; Workflow &gt; Rules (/admin/config/workflow/rules) and click the "Add new rule" button.
* Add a name for your rule and under "React on Event" select "After saving new content" (under the Node category). Once that's selected you will select the option "Restrict by type" and then select "Basic page" (or any other content type you would like to use, it's up to you) and click the Save button.

![Rules](/assets/images/journal/drupal-tutorial-texting-with-twilio-module/drupal-rule-send-text-messages_react.png)

Now click "Add view loop" button under "Actions".

* In the "Views iterator display" select "Rules" under your view listed in the select list and click continue.
* Next everything should be prefilled the way it needs to be with "User: Uid" under "Variable label" field and "uid" under the "Variable name" field. Click the save button.

![View loop](/assets/images/journal/drupal-tutorial-texting-with-twilio-module/drupal-rule-send-text-messages_views-loop.png)

Under the "Operators" for the new "Views loop" that we just created click the "Add Action" button. Then under the "Select the action to add" option choose "Send an SMS to a user".

A separate window will then pop up that lets you edit the action.

* Under the "Data selector" field, enter "uid".
* In the Message box enter the message that you want to be transmitted to the recipients. We used the one below.

~~~
A new page has been created titled: [node:title] by [node:author]
~~~

After you have created your message click "Save" at the bottom. Now its time to test!

![Test message](/assets/images/journal/drupal-tutorial-texting-with-twilio-module/drupal-rule-send-text-messages_twilio-action.png)

### Testing

To test our feature, create a test page. Once that has been created you should then receive a text message.

Now that we know it's working, try experimenting with the rule by using different actions and/or conditions.

### Wrap up

Thanks for following this tutorial. If you have any questions or comments please add them below.

Follow us on [twitter](https://twitter.com/variantstudios) or [youtube](https://www.youtube.com/channel/UC0U2JwbLQj_yz2nznWTOaRQ) to be notified when we release more tutorials.
