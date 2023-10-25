## Стек
React, Typescript, React Router v6, Redux Toolkit, Mantine Ui, Tanstack Query, React Hook Form

## Архитектура
Приложение построено согласно [FSD](https://feature-sliced.design/).

In FSD, a project consists of layers, each layer is made up of slices and each slice is made up of segments.

The layers are standardized across all projects and vertically arranged. Modules on one layer can only interact with modules from the layers strictly below. There are currently seven of them (bottom to top):

1. shared folder — reusable functionality, detached from the specifics of the project/business. (e.g. UIKit, libs, API)
2. entities folder — business entities. (e.g., User, Product, Order)
3. features folder — user interactions, actions that bring business value to the user. (e.g. SendComment, AddToCart, UsersSearch)
4. widgets folder — compositional layer to combine entities and features into meaningful blocks. (e.g. IssuesList, UserProfile)
5. pages folder — compositional layer to construct full pages from entities, features and widgets.
6. app folder — app-wide settings, styles and providers.

Then there are slices, which partition the code by business domain. This makes your codebase easy to navigate by keeping logically related modules close together. Slices cannot use other slices on the same layer, and that helps with high cohesion and low coupling.

[Which layer to choose ?](https://feature-sliced.design/assets/files/choosing-a-layer-en-12fdf3265c8fc4f6b58687352b81fce7.pdf)

[Examples](https://feature-sliced.design/assets/images/decompose-twitter-7b9a50f879d763c49305b3bf0751ee35.png)


## THEME
Основана на теме Mantine UI. sharer/theme. 
Кастомные view компонентов добавляются в shared/theme. 
Компоненты from scratch - shared/components

Использование Theme в css - смотри глобальные [переменные](https://mantine.dev/styles/css-variables/) 


## Нотификации
На основе [Mantine Notification](https://mantine.dev/others/notifications/)

## Подключение модалок
[Modals manager](https://mantine.dev/others/modals/)

## Работа с датами
dayjs и [компоненты дат Mantine UI](https://mantine.dev/dates/getting-started/)

## Полезные переиспользуемые хуки
[Mantine hooks](https://mantine.dev/dates/getting-started/) 