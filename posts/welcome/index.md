---
title: Welcome to my Blog Site
description: loremnvsdlkndkfj fdjs ldkfjskldjfs fjlksjdf sjdflksjfiweor iwriwriowpir wf asdsafsd gfhghjhgjhjshtetrer dfgfsgfgafgrtre tretertwr
image: https://images.pexels.com/photos/7792355/pexels-photo-7792355.jpeg
publishedOn: 25-03-2023
---

```python
import csv

with open("employees.csv", mode="r") as csv_file:
  reader = csv.reader(csv_file)
  next(reader)  # Skip headers
  employees = []
  for name, age, position in reader:
    employees.append(Employee(name, int(age), position))

employees
```

```js
console.log('Hello World');
```

| Tables   |           Are |  Cool |
| -------- | ------------: | ----: |
| col 1 is |  left-aligned | $1600 |
| col 2 is |      centered |   $12 |
| col 3 is | right-aligned |    $1 |

# H1

## H2

### H3

**bold text**
_italic text_
[title](https://www.vercel.com)
Hello World

> blockquote

1. First item
2. Second item
3. Third item
4. Fourth item
5. First item
6. Second item
7. Third item
8. Fourth item
9. First item
10. Second item
11. Third item
12. Fourth item
13. First item
14. Second item
15. Third item
16. Fourth item

- First item
- Second item
- Third item
  - Indented item
  - Indented item
- Fourth item

---

![Photo by Bri Schneiter from Pexels](https://images.pexels.com/photos/346529/pexels-photo-346529.jpeg)

hello `code` hi

- [x] Write the press release
- [ ] Update the website
- [ ] Contact the media
