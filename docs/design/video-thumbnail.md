# Redesign video thumbnails

The `/redesign/` page uses the existing Astro `videos` collection for the latest six videos.

Thumbnail priority:

1. `video.data.thumbnail` when supplied by the content source.
2. `https://i.ytimg.com/vi/<videoId>/hqdefault.jpg` for normal videos/Shorts.
3. Existing OPDC imagery as a fallback for playlists.
