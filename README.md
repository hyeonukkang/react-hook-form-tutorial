# React-hook-form Tutorial

- [React-hook-form Tutorial](#react-hook-form-tutorial)
  - [React fundamentals and advanced topics](#react-fundamentals-and-advanced-topics)
  - [Forms](#forms)
  - [React Hook Form](#react-hook-form)
    - [What?](#what)
    - [Why?](#why)
    - [How?](#how)
  - [Prerequisites](#prerequisites)
  - [Form Setup](#form-setup)
  - [Project Setup](#project-setup)
  - [React Hook Form](#react-hook-form-1)
    - [install](#install)
    - [usage](#usage)
    - [Managing Form State](#managing-form-state)
    - [Managing Form State contd](#managing-form-state-contd)
    - [Devtools](#devtools)
  - [Form Validation](#form-validation)

<br/>

## React fundamentals and advanced topics

---

- React hooks
- React typescript
- React redux
- React router
- React resting
- React material UI
- React styled components
- React storybook
- React query
- React table
- React formik
- React render

<br/>

## Forms

---
Crucial aspect of any business application

- Users
  - Registering
  - Loggin in
  - Making purchases
  - Scheduling appointments

- Developers
  - Handling fomr data
  - Enforcing validation
  - Providing visual feedback
  - Data submission

<br/>

## React Hook Form

---

### What?

- A samll library that helps deal with froms in React.

### Why?

- Manage form data
- Submit form data
- Enforce validations
- Provide visual feedback
- React Hook Form provides a simple, saclable, and performant way to manage even the most complex of forms

### How?

- Precisely what we will be learning in this series

<br/>

## Prerequisites

---

- HTML
- CSS
- JavaScript
- React Fundamentals

<br/>

## Form Setup

---
![Example](./store/sample.png)

<br/>

## Project Setup

---

- Vite

```shell
- npm create vite@latest demo
  - For framework, select React
  - For variant, choose TypeScript
- cd demo
- npm install
- npm run dev
```

<br/>

## React Hook Form

---

### install

```shell
npm install react-hook-form
```

### usage

- Manage form data
- Submit form data
- Enforce validations and provide visual feedback

### Managing Form State

Every form has a few moving parts that keep changing from the time a user loads the form to the time they submit it.

- current value of every field in the form
- whether a field has been interacted with
- whether a field's value has changed
- whether the form is invalid
- whetehr a field contains errors

### Managing Form State contd

- form state

```js
{
  values: {...}
  visited: {...}
  errors: {...}
  isValid: boolean
}
```

<br/>

### Devtools

---

```shell
npm install @hookform/devtools -D
```

- click this button over the right top

  ![react-hookform-devtools-icon](./store/react-hookform-devtools.png)

- you can see pannel

  ![react-hookform-devtools-usage](./store/react-hookform-devtools-usage.png)

<br/>

## Form Validation

---
React Hook Form supports various HTML validation rules

- required
- minLength & maxLength
- min & max
- pattern
