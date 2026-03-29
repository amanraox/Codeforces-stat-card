<div align="center">

# Codeforces Stat Card

**show off your Codeforces stats in your GitHub README**

![Codeforces Stats](https://codeforces-stat-card.vercel.app/api/tourist?theme=dark&ext=contest)

[Use it now](https://codeforces-stat-card.vercel.app) · [Report Bug](https://github.com/amanraox/Codeforces-stat-card/issues) · [Request Feature](https://github.com/amanraox/Codeforces-stat-card/issues)

</div>

---

## Usage

Paste this in your README, swap `username` with your CF handle:

```md
![Codeforces Stats](https://codeforces-stat-card.vercel.app/api/username)
```

### Example

```md
![Codeforces Stats](https://codeforces-stat-card.vercel.app/api/tourist)
```

![Codeforces Stats](https://codeforces-stat-card.vercel.app/api/tourist)

---

## Themes

28 themes. Pick one with `?theme=name`.

```md
![Codeforces Stats](https://codeforces-stat-card.vercel.app/api/tourist?theme=cyberpunk)
```

### Extensions

**Submission Heatmap:**

```md
![Codeforces Stats](https://codeforces-stat-card.vercel.app/api/tourist?theme=dark&ext=heatmap)
```

**Rating History Chart:**

```md
![Codeforces Stats](https://codeforces-stat-card.vercel.app/api/tourist?theme=tokyonight&ext=contest)
```

---

## All Options

| Parameter | Description | Default |
|---|---|---|
| `theme` | Card theme | `light` |
| `ext` | `heatmap` or `contest` | none |
| `font` | Font family | `roboto mono` |
| `hide` | Comma-separated fields to hide | none |
| `width` | Card width 300-800px | `500` |
| `bg_image` | Background image URL (https) | none |
| `bg`, `title`, `text`, `accent`... | Color overrides (hex, no #) | theme |

### Hide stuff

Available: `currentRating`, `maxRating`, `problemsSolved`, `contests`, `contribution`, `friendOfCount`

### Fonts

`roboto` · `roboto mono` · `fira code` · `jetbrains mono` · `source code pro` · `inter` · `poppins` · `space grotesk` · `ubuntu` · `ubuntu mono`

---

## Data Source

Uses the official [Codeforces API](https://codeforces.com/apiHelp) — no scraping, fast and reliable.

- `user.info` — rating, rank, country, organization
- `user.rating` — contest history
- `user.status` — submissions for problems solved count + heatmap

## Contributing

PRs welcome. Add themes, extensions, fix bugs — go wild.

## License

MIT

---

<div align="center">

built with love by [@amanraox](https://amanraox.dev)

</div>
