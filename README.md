
# Smile2Emoji NPM Module

[![npm version](https://badge.fury.io/js/smile2emoji.svg)](https://badge.fury.io/js/smile2emoji)
[![FOSSA Status](https://app.fossa.io/api/projects/git%2Bgithub.com%2Femish89%2Fsmile2emoji.svg?type=shield)](https://app.fossa.io/projects/git%2Bgithub.com%2Femish89%2Fsmile2emoji?ref=badge_shield)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
[![Maintainability](https://api.codeclimate.com/v1/badges/8bdab2e8ea80f30811bd/maintainability)](https://codeclimate.com/github/emish89/smile2emoji/maintainability)

![smile2emoji](https://socialify.git.ci/emish89/smile2emoji/image?font=Raleway&forks=1&language=1&owner=1&stargazers=1&theme=Dark)

**Convert all the smiley to fantastic emoticons!** ✨

With this simple and little module you can convert the smiles in your text to emoji.
:) or :D or <3 will become emoticons!
Ideal for input, chats and so on, where you don't want an emoji picker but a simpler solution.

Very quick test usage:
https://codepen.io/emish89/pen/YzGrvVK

Happy usage =)

# Installation

```
npm i smile2emoji
```

# Usage

Objects exported by the package:



## FUNCTIONS EXPORTED

**checkText(text: string): string**
Function to check if in the string parameter there is some emoji and in case convert it. 
Example:
```
import { checkText } from 'smile2emoji'

...

const text = checkText(':)');
console.log(text) //prints '😊'

//OR

const text = checkText('i like bananas :)');
console.log(text) //prints 'i like bananas 😊'

```

**checkTextWithAutoSuggestions(text: string): string**
Same as before but with autosuggestion, so if there is only one emoji key in the map starting with the string, it use it.
```
import { checkTextWithAutoSuggestions } from 'smile2emoji'

...

const text = checkTextWithAutoSuggestions(':tenn');
console.log(text) //prints '🎾'

//OR

const text = checkTextWithAutoSuggestions('i like bananas :tenn');
console.log(text) //prints 'i like bananas 🎾'

```

**checkTextWithAutoSuggestionsAndUnicode(text: string): string**
Same function but it use the map with unicode char instead of emoji,  same results:
```
import { checkTextWithAutoSuggestionsAndUnicode } from 'smile2emoji'

...

const text = checkTextWithAutoSuggestionsAndUnicode(':tenn');
console.log(text) //prints '🎾'

//OR

const text = checkTextWithAutoSuggestionsAndUnicode('i like bananas :tenn');
console.log(text) //prints 'i like bananas 🎾'

```

**fromUnicodeToEmoji(text: string): string**
Used by the function above, it convert an unicode string to emoji. 
Example usage:
```
import { fromUnicodeToEmoji } from 'smile2emoji'

const text = fromUnicodeToEmoji('2615');
console.log(text) //prints '☕'

```




## **MAPS EXPORTED**:

**emojiMap: { [key: string]: string }**
In this map is exported a pair of key-value  string -emoji , like ':)' -> 😊

**mapStringToUnicode: { [key: string]: string }**
In this map is exported a pair of key-value  string -unicode of the emoji , like ': coffee:' -> '2615'

Example usage: 
```
import { emojiMap } from 'smile2emoji'

...

const text = ':)';
const emoji = emojiMap[text];
console.log(emoji) //prints '😊'

```
# License

MIT © Federico Ballarini

[![FOSSA Status](https://app.fossa.io/api/projects/git%2Bgithub.com%2Femish89%2Fsmile2emoji.svg?type=large)](https://app.fossa.io/projects/git%2Bgithub.com%2Femish89%2Fsmile2emoji?ref=badge_large)
