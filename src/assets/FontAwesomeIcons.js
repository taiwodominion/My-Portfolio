// src/icons/FontAwesome.js

import { library } from '@fortawesome/fontawesome-svg-core';

// Solid icons (basic icons like phone, envelope, etc.)
import {
  faEnvelope,
  faPhone,
  faDownload,
  faArrowUpRightFromSquare,
} from '@fortawesome/free-solid-svg-icons';

// Brand icons (social media)
import {
  faGithub,
  faLinkedin,
  faTwitter,
  faInstagram,
} from '@fortawesome/free-brands-svg-icons';

// Add the icons to the library
library.add(
  faEnvelope,
  faPhone,
  faDownload,
  faArrowUpRightFromSquare,
  faGithub,
  faLinkedin,
  faTwitter,
  faInstagram
);
