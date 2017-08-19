# Chattered (Ember/Semantic-ui frontend)

## Specification
General

* The chat is anonymous, no registration or password required
* Users should be able to use a nickname if no one else is using it
* Users should be logged in with same nickname after reopening the browser, if no other user is using it
* The chat has multiple channels
* A nickname can join multiple channels
* A nickname can post messages to channels it's joined
* A nickname can exit channels
* A nickname can create a new channel

## Models
#### Nick
* Has a **name** (string / unique)
* Has a **status** (online / offline)
* Has many **Messages**
* Has many owned **Channels**
* Has many joined channels

#### Channel
* Has a **title** (string / unique)
* Has many **Messages**
* Belongs to **Nick** (owned by)
* Has many joined nicks

#### ChannelJoin
* Belongs to **Nick**
* Belongs to **Channel**

#### Message
* Has content (text)
* Has sent date
* Belongs to **Nick**
* Belongs to **Channel**
