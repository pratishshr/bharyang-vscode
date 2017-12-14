# bharyang-vscode

> Reorder your block of lines in a ladder style format.

This extension was mainly written for the OCD nature of mine and my colleagues.

```js
// Before:                                      |  // After:
                                                |
import get from 'lodash/get';                   |  import React from 'react';
import { browserHistory } from 'react-router';  |  import moment from 'moment';
import moment from 'moment';                    |  import get from 'lodash/get';
import React from 'react';                      |  import camelize from 'camelize';
import { connect } from 'react-redux';          |  import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';     |  import { bindActionCreators } from 'redux';
import camelize from 'camelize';                |  import { browserHistory } from 'react-router';
```

Whenever we see imports like this, we can't help but give it a little cringe. It's not wrong in any way, but its just... **not pretty**. How about arranging them in a way so that you would want to give a second look at your code?

Waste of time? **Totally**. We actually spend ridiculous amount of time just to make the code **"look pretty"**. But hey, once it's done, that satisfaction is totally worth it.

Actually, we are just so used to this ladder styled code that we can't go back 😅.

Anyways, **"Bharyang"** (Nepali) translates to -> **"Ladder"**. 

Yup, so creative! **Thank you**. 👏🏻

## Features

* Reorder in ascending order

  <a href="https://imgflip.com/gif/212td4"><img src="https://i.imgflip.com/212td4.gif" /></a>

* Reorder in descending order

  <a href="https://imgflip.com/gif/212tw2"><img src="https://i.imgflip.com/212tw2.gif" /></a>

* Reorder your imports. Group your import files. No more messy imports.

  <a href="https://imgflip.com/gif/212vt1"><img src="https://i.imgflip.com/212vt1.gif" title="made at imgflip.com"/></a>

### The core functionality has been separated so that it can be used in other editors as well, you can find it [here](https://github.com/pratishshr/bharyang).
