---
title: Glossary
layout: base
order: 14
---

<style>
  .glossary-container {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 100%;
    height: 100%;
    padding: 48px 100px;
  }

  hr.glossary-hr-normal {
    width: 100%;
    margin: 0;
    border: 1px solid #d6d5d2;
  }

  .glossary-tabs-container {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 100%;
    padding: 24px 0;
    gap: 20%;
  }

  .glossary-tab-button {
    background-color: #f2f2f2;
    border-radius: 16px;
    padding: 4px 0;
    font-family: 'trebuchet ms', sans-serif;
    font-weight: bold;
    cursor: pointer;
    width: 160px;
    text-align: center;
  }

  .glossary-tab-active {
    background-color: #dddddd;
  }

  .glossary-content-inactive {
    visibility: hidden;
    height: 0;
    overflow: hidden;
  }

  .glossary-content {
    display: flex;
    flex-direction: row;
    gap: 32px;
    padding-top: 32px;
  }

  .glossary-content-letters {
    display: flex;
    flex-direction: column;
    gap: 16px;
  }

  .glossary-hr-vertical {
    width: 0;
    height: 1200px;
    border-left: 3px solid #d6d5d2;
    color: transparent;
  }

  .glossary-letter1-item, .glossary-letter2-item {
    cursor: pointer;
    font-weight: bold;
  }

  .glossary-content-items {
    display: flex;
    flex-direction: column;
    gap: 16px;
  }

  .glossary-content-item {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }

  .glossary-item-title {
    font-weight: bold;
  }

  .glossary-item-description {
    padding-left: 16px;
  }

  .glossary-letter-title {
    font-size: 24px;
  }

  #glossary-content-artwork {
    transform: translateY(-32px);
  }
</style>

<script>
document.addEventListener('DOMContentLoaded', () => {
  const byArtistButton = document.getElementById('glossary-tab-artist');
  const byArtworkButton = document.getElementById('glossary-tab-artwork');
  const byArtistContent = document.getElementById('glossary-content-artist');
  const byArtworkContent = document.getElementById('glossary-content-artwork');

  byArtistButton.addEventListener('click', () => {
    byArtistButton.classList.add('glossary-tab-active');
    byArtworkButton.classList.remove('glossary-tab-active');
    byArtistContent.classList.remove('glossary-content-inactive');
    byArtworkContent.classList.add('glossary-content-inactive');
  });
  byArtworkButton.addEventListener('click', () => {
    byArtistButton.classList.remove('glossary-tab-active');
    byArtworkButton.classList.add('glossary-tab-active');
    byArtistContent.classList.add('glossary-content-inactive');
    byArtworkContent.classList.remove('glossary-content-inactive');
  });

  const lettersDiv1 = document.querySelectorAll('.glossary-letter1-item');
  lettersDiv1.forEach(letter => {
    letter.addEventListener('click', () => {
      const letterId = letter.id.split('-')[2];
      console.log(letterId)
      const targetDiv = document.getElementById(`glossary-letter1-${letterId}`);
      var offset = -70;
      var targetPosition = targetDiv.getBoundingClientRect().top + window.scrollY + offset;
      window.scrollTo({ top: targetPosition, behavior: 'smooth' });
    });
  });

  const lettersDiv2 = document.querySelectorAll('.glossary-letter2-item');
  lettersDiv2.forEach(letter => {
    letter.addEventListener('click', () => {
      const letterId = letter.id.split('-')[2];
      console.log(letterId)
      const targetDiv = document.getElementById(`glossary-letter2-${letterId}`);
      var offset = -70;
      var targetPosition = targetDiv.getBoundingClientRect().top + window.scrollY + offset;
      window.scrollTo({ top: targetPosition, behavior: 'smooth' });
    });
  });
})
</script>

<div class="glossary-container">
  <hr class="glossary-hr-normal"/>
  <div class="glossary-tabs-container">
    <div class="glossary-tab-button glossary-tab-active" id="glossary-tab-artist">
      BY ARTIST
    </div>
    <div class="glossary-tab-button" id="glossary-tab-artwork">
      BY ARTWORK
    </div>
  </div>
  <hr class="glossary-hr-normal"/>
  <div class="glossary-content" id="glossary-content-artist">
    <div class="glossary-content-letters">
      <div id="glossary-content-A" class="glossary-letter1-item">A</div>
      <div id="glossary-content-B" class="glossary-letter1-item">B</div>
      <div id="glossary-content-C" class="glossary-letter1-item">C</div>
      <div id="glossary-content-D" class="glossary-letter1-item">D</div>
      <div id="glossary-content-E" class="glossary-letter1-item">E</div>
      <div id="glossary-content-F" class="glossary-letter1-item">F</div>
      <div id="glossary-content-G" class="glossary-letter1-item">G</div>
      <div id="glossary-content-H" class="glossary-letter1-item">H</div>
      <div id="glossary-content-I" class="glossary-letter1-item">I</div>
      <div id="glossary-content-J" class="glossary-letter1-item">J</div>
      <div id="glossary-content-K" class="glossary-letter1-item">K</div>
      <div id="glossary-content-L" class="glossary-letter1-item">L</div>
      <div id="glossary-content-M" class="glossary-letter1-item">M</div>
      <div id="glossary-content-N" class="glossary-letter1-item">N</div>
      <div id="glossary-content-O" class="glossary-letter1-item">O</div>
      <div id="glossary-content-P" class="glossary-letter1-item">P</div>
      <div id="glossary-content-Q" class="glossary-letter1-item">Q</div>
      <div id="glossary-content-R" class="glossary-letter1-item">R</div>
      <div id="glossary-content-S" class="glossary-letter1-item">S</div>
      <div id="glossary-content-T" class="glossary-letter1-item">T</div>
      <div id="glossary-content-U" class="glossary-letter1-item">U</div>
      <div id="glossary-content-V" class="glossary-letter1-item">V</div>
      <div id="glossary-content-W" class="glossary-letter1-item">W</div>
      <div id="glossary-content-X" class="glossary-letter1-item">X</div>
      <div id="glossary-content-Y" class="glossary-letter1-item">Y</div>
      <div id="glossary-content-Z" class="glossary-letter1-item">Z</div>
    </div>
    <div class="glossary-hr-vertical">
    </div>
    <div class="glossary-content-items">
      <div class="glossary-letter-title" id="glossary-letter1-A">A</div>
      <div class="glossary-content-item">
        <div class="glossary-item-title">Adele</div>
        <div class="glossary-item-description">Sometimes I just feel like I'm a freak of nature and I wonder if there are other people out there who feel the same way.</div>
      </div>
      <div class="glossary-content-item">
        <div class="glossary-item-title">Albert Einstein</div>
        <div class="glossary-item-description">Imagination is more important than knowledge.</div>
      </div>
      <div class="glossary-letter-title" id="glossary-letter1-B">B</div>
      <div class="glossary-content-item">
        <div class="glossary-item-title">Beyonce</div>
        <div class="glossary-item-description">I don't like to gamble, but if there's one thing I'm willing to bet on, it's myself.</div>
      </div>
      <div class="glossary-letter-title" id="glossary-letter1-C">C</div>
      <div class="glossary-letter-title" id="glossary-letter1-D">D</div>
      <div class="glossary-letter-title" id="glossary-letter1-E">E</div>
      <div class="glossary-item-title">Elon Musk</div>
      <div class="glossary-item-description">When something is important enough, you do it even if the odds are not in your favor.</div>
      <div class="glossary-item-title">Eminem</div>
      <div class="glossary-item-description">You can make something of your life. It just depends on your drive.</div>
      <div class="glossary-letter-title" id="glossary-letter1-F">F</div>
      <div class="glossary-letter-title" id="glossary-letter1-G">G</div>
      <div class="glossary-item-title">G.R. Lambert & Co</div>
      <div class="glossary-item-description">
        Taken inside a studio, it is unknown if the two men really were washermen or simply pretending to be. Either way, it would not have mattered to either the photographer or the future customer, who were more interested in a representation of race and occupation, rather than in the men themselves.
      </div>
      <div class="glossary-letter-title" id="glossary-letter1-H">H</div>
      <div class="glossary-letter-title" id="glossary-letter1-I">I</div>
      <div class="glossary-letter-title" id="glossary-letter1-J">J</div>
      <div class="glossary-letter-title" id="glossary-letter1-K">K</div>
      <div class="glossary-letter-title" id="glossary-letter1-L">L</div>
      <div class="glossary-letter-title" id="glossary-letter1-M">M</div>
      <div class="glossary-letter-title" id="glossary-letter1-N">N</div>
      <div class="glossary-letter-title" id="glossary-letter1-O">O</div>
      <div class="glossary-letter-title" id="glossary-letter1-P">P</div>
      <div class="glossary-letter-title" id="glossary-letter1-Q">Q</div>
      <div class="glossary-item-title">Queen Elizabeth II</div>
      <div class="glossary-item-description">I have to be seen to be believed.
      </div>
      <div class="glossary-letter-title" id="glossary-letter1-R">R</div>
      <div class="glossary-letter-title" id="glossary-letter1-S">S</div>
      <div class="glossary-letter-title" id="glossary-letter1-T">T</div>
      <div class="glossary-letter-title" id="glossary-letter1-U">U</div>
      <div class="glossary-letter-title" id="glossary-letter1-V">V</div>
      <div class="glossary-letter-title" id="glossary-letter1-W">W</div>
      <div class="glossary-letter-title" id="glossary-letter1-X">X</div>
      <div class="glossary-letter-title" id="glossary-letter1-Y">Y</div>
      <div class="glossary-item-title">Yee I Lan</div>
      <div class="glossary-item-desription">
        Tabled by Yee I-Lann was first exhibited in Suspended Histories in 2013. Along with ten other artists, Yee was invited to create a work in response to Museum Van Loon, which was at one point the home of the Van Loon family who had history with the Dutch East India Company.
      </div>
      <div class="glossary-letter-title" id="glossary-letter1-Z">Z</div>
      <div class="glossary-item-title">Zayn Malik</div>
      <div class="glossary-item-description">Life is funny. Things change, people change, but you will always be you, so stay true to yourself and never sacrifice who you are for anyone.</div>
    </div>
  </div>
  <div class="glossary-content glossary-content-inactive" id="glossary-content-artwork">
    <div class="glossary-content-letters">
      <div id="glossary-content-A" class="glossary-letter2-item">A</div>
      <div id="glossary-content-B" class="glossary-letter2-item">B</div>
      <div id="glossary-content-C" class="glossary-letter2-item">C</div>
      <div id="glossary-content-D" class="glossary-letter2-item">D</div>
      <div id="glossary-content-E" class="glossary-letter2-item">E</div>
      <div id="glossary-content-F" class="glossary-letter2-item">F</div>
      <div id="glossary-content-G" class="glossary-letter2-item">G</div>
      <div id="glossary-content-H" class="glossary-letter2-item">H</div>
      <div id="glossary-content-I" class="glossary-letter2-item">I</div>
      <div id="glossary-content-J" class="glossary-letter2-item">J</div>
      <div id="glossary-content-K" class="glossary-letter2-item">K</div>
      <div id="glossary-content-L" class="glossary-letter2-item">L</div>
      <div id="glossary-content-M" class="glossary-letter2-item">M</div>
      <div id="glossary-content-N" class="glossary-letter2-item">N</div>
      <div id="glossary-content-O" class="glossary-letter2-item">O</div>
      <div id="glossary-content-P" class="glossary-letter2-item">P</div>
      <div id="glossary-content-Q" class="glossary-letter2-item">Q</div>
      <div id="glossary-content-R" class="glossary-letter2-item">R</div>
      <div id="glossary-content-S" class="glossary-letter2-item">S</div>
      <div id="glossary-content-T" class="glossary-letter2-item">T</div>
      <div id="glossary-content-U" class="glossary-letter2-item">U</div>
      <div id="glossary-content-V" class="glossary-letter2-item">V</div>
      <div id="glossary-content-W" class="glossary-letter2-item">W</div>
      <div id="glossary-content-X" class="glossary-letter2-item">X</div>
      <div id="glossary-content-Y" class="glossary-letter2-item">Y</div>
      <div id="glossary-content-Z" class="glossary-letter2-item">Z</div>
    </div>
    <div class="glossary-hr-vertical">
    </div>
    <div class="glossary-content-items">
      <!-- A -->
    <div class="glossary-letter-title" id="glossary-letter-A">A</div>
    <div class="glossary-item-title">Abstract Assemblage</div>
    <div class="glossary-item-description">
        crafted by Pablo Picasso. The medium is a fusion of unconventional materials and found objects, forming a unique abstract masterpiece. This artwork is prominently displayed at The Museum of Modern Art (MoMA).
    </div>

  <!-- B -->
  <div class="glossary-letter-title" id="glossary-letter-B">B</div>
  <div class="glossary-item-title">Botanical Canvas</div>
  <div class="glossary-item-description">
      designed by Vincent van Gogh. The medium is a stunning combination of acrylic on canvas, portraying vibrant botanical elements. Find this artwork at The Van Gogh Museum.
  </div>
      <div class="glossary-letter-title" id="glossary-letter2-C">C</div>
      <div class="glossary-content-item">
        <div class="glossary-item-title">Colonal Archive / King Washermen</div>
        <div class="glossary-item-description">bla bla bla write something here. made by G.R. Lambert & Co. The medium is Gelatin silver print on paper and the artwork is located at National Museum of Singapore</div>
      </div>
      <div class="glossary-letter-title" id="glossary-letter2-D">D</div>
      <div class="glossary-letter-title" id="glossary-letter2-E">E</div>
      <div class="glossary-item-title">Elon Musk</div>
      <div class="glossary-item-description">When something is important enough, you do it even if the odds are not in your favor.</div>
      <div class="glossary-item-title">Eminem</div>
      <div class="glossary-item-description">You can make something of your life. It just depends on your drive.</div>
      <div class="glossary-letter-title" id="glossary-letter2-F">F</div>
      <div class="glossary-letter-title" id="glossary-letter2-G">G</div>
      <div class="glossary-item-title">Geometric Gems</div>
      <div class="glossary-item-description">
      crafted by [Artist's Name]. The medium is geometric precision, creating a series of captivating gems. This artwork is on display at [Gallery or Location].
      </div>
      <div class="glossary-letter-title" id="glossary-letter2-H">H</div>
      <div class="glossary-item-title">Harmony in Hues</div>
      <div class="glossary-item-description">
          painted by [Artist's Name]. The medium involves a harmonious blend of colors, creating a visually stunning masterpiece. Experience this artwork at [Gallery or Location].
      </div>
      <div class="glossary-letter-title" id="glossary-letter2-I">I</div>
      <div class="glossary-item-title">Interactive Installations</div>
      <div class="glossary-item-description">
          designed by [Artist's Name]. The medium is interactive installations, engaging viewers in a dynamic visual experience. This artwork is featured at [Gallery or Location].
      </div>
      <div class="glossary-letter-title" id="glossary-letter2-J">J</div>
      <div class="glossary-item-title">Juxtaposed Realities</div>
      <div class="glossary-item-description">
          envisioned by [Artist's Name]. The medium involves a juxtaposition of contrasting realities, creating thought-provoking visual narratives. Visit [Gallery or Location] to explore this artwork.
      </div>
      <div class="glossary-letter-title" id="glossary-letter2-K">K</div>
      <div class="glossary-item-title">Kinetic Kinship</div>
      <div class="glossary-item-description">
          brought to life by [Artist's Name]. The medium involves kinetic elements, establishing a dynamic kinship between form and motion. This artwork is showcased at [Gallery or Location].
      </div>
      <div class="glossary-letter-title" id="glossary-letter2-L">L</div>
      <div class="glossary-item-title">Luminous Landscapes</div>
      <div class="glossary-item-description">
          painted by [Artist's Name]. The medium is luminous, capturing breathtaking landscapes that illuminate the canvas. Discover this artwork at [Gallery or Location].
      </div>
      <div class="glossary-letter-title" id="glossary-letter2-M">M</div>
      <div class="glossary-item-title">Mixed Media Mastery</div>
      <div class="glossary-item-description">
          created by [Artist's Name]. The medium involves a mastery of mixed media, blending various materials to create a rich and textured artwork. This masterpiece is exhibited at [Gallery or Location].
      </div>
      <div class="glossary-letter-title" id="glossary-letter2-N">N</div>
      <div class="glossary-item-title">New Subjectivity / Tabled</div>
      <div class="glossary-item-description">
        made by Yee I-Lann. The medium is Ceramic rimmed flat plates with digital decal prints and back-stamp and the artwork is located at Singapore Art Museum.
      </div>
      <div class="glossary-letter-title" id="glossary-letter2-O">O</div>
      <div class="glossary-letter-title" id="glossary-letter2-P">P</div>
      <div class="glossary-letter-title" id="glossary-letter2-Q">Q</div>
      <div class="glossary-item-title">Queen Elizabeth II</div>
      <div class="glossary-item-description">I have to be seen to be believed.
      </div>
      <div class="glossary-letter-title" id="glossary-letter2-R">R</div>
      <div class="glossary-letter-title" id="glossary-letter2-S">S</div>
      <div class="glossary-letter-title" id="glossary-letter2-T">T</div>
      <div class="glossary-letter-title" id="glossary-letter2-U">U</div>
      <div class="glossary-letter-title" id="glossary-letter2-V">V</div>
      <div class="glossary-letter-title" id="glossary-letter2-W">W</div>
      <div class="glossary-letter-title" id="glossary-letter2-X">X</div>
      <div class="glossary-letter-title" id="glossary-letter2-Y">Y</div>
      <div class="glossary-item-title">Yarn Artistry</div>
      <div class="glossary-item-description">
        created by [Artist's Name]. The medium is intricate yarn compositions, showcasing a blend of colors and textures. This artwork is prominently displayed at [Gallery or Location].
      </div>
      <div class="glossary-letter-title" id="glossary-letter2-Z">Z</div>
      <div class="glossary-item-title">Zayn Malik</div>
      <div class="glossary-item-description">Life is funny. Things change, people change, but you will always be you, so stay true to yourself and never sacrifice who you are for anyone.</div>
    </div>
  </div>
</div>
