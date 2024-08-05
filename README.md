# require-takeuntil-or-first-on-subscribe
The require-takeuntil-or-first-on-subscribe library is a powerful tool to help Angular developers write safer and more efficient code. It is specifically designed to enforce the use of takeUntil or first in all subscriptions, a recommended practice to avoid memory leaks in Angular applications.

<br>
**Why use takeUntil or first in Subscriptions?**
In Angular, when you subscribe to an Observable, that subscription remains active until it is explicitly canceled. If you forget to cancel the subscription, the Observable will continue to emit values even if the subscribing component is destroyed. This can lead to memory leaks, which are difficult to detect and can cause performance issues in your application. Using the takeUntil or first operator in your subscriptions ensures that the subscription is automatically canceled when a specific event occurs. With takeUntil, you can specify an Observable that, when it emits its first value, will cause the original subscription to be canceled. With first, the subscription is canceled as soon as the Observable emits its first value.

<br>
**How does the ESLint library help?**
The library helps enforce this recommended practice by automatically checking your code to ensure all subscriptions use takeUntil or first. If it finds a subscription that does not follow this practice, it will issue a warning, allowing you to fix the problem before it causes memory leaks. Additionally, the ESLint library can be integrated into your integrated development environment (IDE), providing real-time feedback as you write your code. This makes it easier to follow best practices and write high-quality Angular code.
<br>
In summary, the ESLint library is an essential tool for any Angular developer who wants to avoid memory leaks and improve the quality of their code.
<br>

## Installation
```bash
npm i eslint-plugin-rxjs-subscribe
```

## Usage
https://www.npmjs.com/package/eslint-plugin-rxjs-subscribe
```json
{
  "plugins": ["rxjs-subscribe"],
  "rules": {
    "rxjs-subscribe/takeuntil-or-first-on-subscribe": "error"
  }
}
```

To ignore the rxjs-subscribe/require-takeuntil-or-first-on-subscribe rule for a specific line, you can add the following comment before that line:
```
// eslint-disable-next-line rxjs-subscribe/require-takeuntil-or-first-on-subscribe
```

If you want to disable the rule for the entire file, you can add the following comment at the top of the file:
```
/* eslint-disable rxjs-subscribe/require-takeuntil-or-first-on-subscribe */
```
