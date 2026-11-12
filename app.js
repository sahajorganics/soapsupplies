const products = [
  { name: "Amla (Dried)", image: "Amla.jpeg", category: "Whole botanicals", description: "Dried whole amla, shown in the product photo.", price: "₹650 / kg", search: "dried gooseberry" },
  { name: "Arrowroot Powder", image: "ArrowrootPowder.jpeg", category: "Soapmaking pantry powders", description: "Finely milled arrowroot for your ingredient collection and DIY formulations.", price: "₹1,600 / kg" },
  { name: "Athimadhuram", image: "Athimadhuram.jpeg", category: "Whole botanicals", description: "A dried botanical ingredient, also known as licorice root.", search: "licorice" },
  { name: "Athimadhuram Powder", image: "AthimadhuramPowder.jpeg", category: "Botanical powders", description: "Finely milled athimadhuram, ready to add to your ingredient shelf.", price: "₹1,000 / kg", search: "licorice" },
  { name: "Beeswax", image: "Beeswax.jpeg", category: "Soapmaking butters & waxes", description: "A versatile wax for soapmaking and a variety of handmade formulations.", price: "₹120 / 100 g" },
  { name: "Besan Flour", image: "BesanFlour.jpeg", category: "Soapmaking pantry powders", description: "A finely milled flour made from chickpeas, often called besan or gram flour.", search: "gram chickpea flour" },
  { name: "Bhringaraj Powder", image: "BhringarajPowder.jpeg", category: "Botanical powders", description: "A finely milled bhringaraj botanical powder for your DIY ingredient collection." },
  { name: "Bru Coffee Powder", image: "BruCoffeePowder.jpeg", category: "Soapmaking pantry powders", description: "Coffee powder for adding a familiar ingredient to your handmade projects.", search: "coffee" },
  { name: "Chamomile Powder", image: "ChamomilePowder.jpeg", category: "Botanical powders", description: "Finely milled chamomile for your botanical and DIY formulations." },
  { name: "Charcoal Powder", image: "CharcoalPowder.jpeg", category: "Soap clays & exfoliants", description: "A dark powdered ingredient for creative soapmaking and handmade formulations." },
  { name: "Corn Flour", image: "CornFlour.jpeg", category: "Soapmaking pantry powders", description: "A fine corn-based powder for your ingredient shelf and DIY projects.", search: "corn starch" },
  { name: "Henna Powder", image: "HennaPowder.jpeg", category: "Botanical powders", description: "Finely milled henna, a richly coloured botanical powder.", price: "₹1,000 / kg" },
  { name: "Lemon Peel Powder", image: "LemonPeelPowder.jpeg", category: "Botanical powders", description: "Ground lemon peel for citrus-inspired blends and creative formulations.", price: "₹800 / kg" },
  { name: "Lotus Powder", image: "LotusPowder.jpeg", category: "Botanical powders", description: "Finely milled lotus for your botanical ingredient collection.", price: "₹1,700 / kg" },
  { name: "Manjistha Powder", image: "ManjisthaPowder.jpeg", category: "Botanical powders", description: "A vibrant, finely milled manjistha botanical powder.", price: "₹1,300 / kg" },
  { name: "Masoor Dal Powder", image: "MasoorDalPowder.jpeg", category: "Soapmaking pantry powders", description: "Ground masoor dal, also known as red lentil powder.", search: "red lentil" },
  { name: "Mint Powder", image: "MintPowder.jpeg", category: "Botanical powders", description: "A finely milled mint botanical for your ingredient collection." },
  { name: "Moringa Powder", image: "MoringaPowder.jpeg", category: "Botanical powders", description: "Moringa leaves in a finely milled powder." },
  { name: "Multani Mitti Powder", image: "MultaniMittiPowder.jpeg", category: "Soap clays & exfoliants", description: "A finely powdered earth ingredient, also known as fuller’s earth.", price: "₹550 / kg", search: "fuller's earth clay" },
  { name: "Neem Powder", image: "NeemPowder.jpeg", category: "Botanical powders", description: "Finely milled neem leaves for your botanical ingredient shelf." },
  { name: "Oats Powder", image: "OatsPowder.jpeg", category: "Soapmaking pantry powders", description: "Oats ground into a fine powder for handmade formulations.", search: "oatmeal" },
  { name: "Orange Peel Powder", image: "OrangePeelPowder.jpeg", category: "Botanical powders", description: "Ground orange peel for a bright, citrus-inspired ingredient blend.", price: "₹650 / kg" },
  { name: "Pista Shell Powder", image: "PistaShellPowder.jpeg", category: "Soap clays & exfoliants", description: "Ground pistachio shell for a textured addition to creative formulations.", search: "pistachio" },
  { name: "Red Hibiscus Powder", image: "RedHibiscusPowder.jpeg", category: "Botanical powders", description: "Finely milled red hibiscus petals with a naturally rich colour.", price: "₹1,300 / kg" },
  { name: "Reetha", image: "Reetha.jpeg", category: "Whole botanicals", description: "Dried reetha, also known as soapnut.", price: "₹250 / kg", search: "soapnut whole" },
  { name: "Reetha Powder", image: "ReethaPowder.jpeg", category: "Botanical powders", description: "Finely milled reetha, also known as soapnut powder.", price: "₹500 / kg", search: "soapnut" },
  { name: "Rice Flour", image: "RiceFlour.jpeg", category: "Soapmaking pantry powders", description: "A finely milled rice-based ingredient for your handmade projects." },
  { name: "Rose Powder", image: "RosePowder.jpeg", category: "Botanical powders", description: "Finely milled rose petals for your botanical blends and formulations.", price: "₹1,600 / kg" },
  { name: "Sandal Powder", image: "SandalPowder.jpeg", category: "Botanical powders", description: "Aromatic sandalwood, finely milled for your ingredient collection.", price: "₹2,000 / kg", search: "sandalwood" },
  { name: "Shea Butter", image: "SheaButter.jpeg", category: "Soapmaking butters & waxes", description: "A smooth butter for handmade formulations and soapmaking.", price: "₹156 / 100 g" },
  { name: "Shikakai", image: "Shikakai.jpeg", category: "Whole botanicals", description: "Dried shikakai, a familiar botanical ingredient.", price: "₹350 / kg" },
  { name: "Shikakai Powder", image: "ShikakaiPowder.jpeg", category: "Botanical powders", description: "Finely milled shikakai for your botanical ingredient shelf.", price: "₹500 / kg" },
  { name: "Triphala Powder", image: "TriPhalaPowder.jpeg", category: "Botanical powders", description: "A finely milled blend traditionally known as triphala.", price: "₹750 / kg", search: "triphala thriphala" },
  { name: "Vattiveru Powder", image: "VattiveruPowder.jpeg", category: "Botanical powders", description: "A finely milled vattiveru botanical ingredient.", price: "₹1,600 / kg", search: "vetiver" },
  { name: "Vavilaku Powder", image: "VavilakuPowder.jpeg", category: "Botanical powders", description: "A finely milled vavilaku botanical powder." }
];

const productDetails = {
  "Amla (Dried)": {
    uses: ["Botanical soap recipes", "Dry ingredient blends", "Handmade projects that call for whole botanicals"],
    highlights: ["Supplied in dried whole form", "Can be used as-is or prepared to suit a recipe", "Its size and texture differ from ready-milled powders"]
  },
  "Arrowroot Powder": {
    uses: ["Soapmaking recipes", "Bath and body powder blends", "Dry-formula ingredient mixes"],
    highlights: ["Fine, easy-to-measure powder", "Blends with other dry ingredients", "Check how it disperses in your chosen base"]
  },
  "Athimadhuram": {
    uses: ["Botanical soap recipes", "Herbal ingredient blends", "Projects that call for a whole dried root"],
    highlights: ["Whole-root format gives makers control over preparation", "Can be prepared or milled to suit a recipe", "A different format from the ready-ground powder"]
  },
  "Athimadhuram Powder": {
    uses: ["Botanical soap recipes", "Dry ingredient blends", "Handmade formulations calling for a milled botanical"],
    highlights: ["Ready-milled for measuring and blending", "Pairs with other dry-formula ingredients", "Test the finished recipe for texture and appearance"]
  },
  "Beeswax": {
    uses: ["Balms and salves", "Lotions and other handmade body-care recipes", "Soapmaking formulations"],
    highlights: ["A solid wax ingredient used in handmade recipes", "Can contribute structure to wax-based products", "Needs to be melted and incorporated according to the recipe"]
  },
  "Besan Flour": {
    uses: ["Soapmaking recipes", "Dry cleanser and bath blends", "Powder-based handmade projects"],
    highlights: ["Chickpea-based flour in a ready-to-use format", "Combines with other dry ingredients", "Texture depends on the recipe and milling"]
  },
  "Bhringaraj Powder": {
    uses: ["Botanical soap recipes", "Hair-care formulations", "Dry botanical blends"],
    highlights: ["Ready-milled botanical ingredient", "Easy to measure into dry blends", "Check compatibility with the rest of the formulation"]
  },
  "Bru Coffee Powder": {
    uses: ["Soapmaking recipes", "Textured soap designs", "Botanical and pantry-ingredient blends"],
    highlights: ["A familiar coffee ingredient for creative recipes", "Can affect a finished product's colour and texture", "Particle size may influence the feel of the finished product"]
  },
  "Chamomile Powder": {
    uses: ["Botanical soap recipes", "Bath and body blends", "Dry-formula ingredient mixes"],
    highlights: ["Ready-milled botanical format", "Can be combined with other dry ingredients", "Test a small batch to check the finished colour and texture"]
  },
  "Charcoal Powder": {
    uses: ["Coloured soap recipes", "Cleansing-bar formulations", "Creative handmade blends"],
    highlights: ["A fine, deeply coloured powder", "Disperse thoroughly to help avoid clumps", "Protect work surfaces from loose powder during handling"]
  },
  "Corn Flour": {
    uses: ["Soapmaking recipes", "Bath and body powder blends", "Dry ingredient mixes"],
    highlights: ["Fine corn-based powder", "Can be combined with other dry ingredients", "Check dispersion and texture in the finished recipe"]
  },
  "Henna Powder": {
    uses: ["Hair-colour formulations when the product grade is suitable", "Botanical blends", "Creative soapmaking projects"],
    highlights: ["A naturally coloured botanical powder", "Colour and staining potential make a small test advisable", "Confirm the grade and directions before choosing a use"]
  },
  "Lemon Peel Powder": {
    uses: ["Botanical soap recipes", "Dry scrub and bath blends", "Citrus-inspired handmade formulations"],
    highlights: ["Made from ground lemon peel", "Adds a botanical powder format to dry blends", "Check the finished recipe for scent, colour, and texture"]
  },
  "Lotus Powder": {
    uses: ["Botanical soap recipes", "Dry ingredient blends", "Handmade formulations calling for a milled botanical"],
    highlights: ["Ready-milled botanical format", "Can be measured into dry blends", "Test compatibility and appearance in your recipe"]
  },
  "Manjistha Powder": {
    uses: ["Botanical soap recipes", "Dry ingredient blends", "Colour-focused handmade projects"],
    highlights: ["A richly coloured botanical powder", "May influence the finished product's colour", "Test a small batch for the result you want"]
  },
  "Masoor Dal Powder": {
    uses: ["Soapmaking recipes", "Dry cleanser and bath blends", "Pantry-ingredient formulations"],
    highlights: ["Ground red lentil in a ready-to-use format", "Can be blended with other dry ingredients", "Check the finished texture when formulating"]
  },
  "Mint Powder": {
    uses: ["Botanical soap recipes", "Bath and body blends", "Dry ingredient mixes"],
    highlights: ["Ready-milled botanical format", "Can be combined with other dry ingredients", "Scent and colour can vary by batch"]
  },
  "Moringa Powder": {
    uses: ["Botanical soap recipes", "Hair-care formulations", "Dry botanical blends"],
    highlights: ["Milled leaf ingredient", "Easy to measure into dry blends", "Check the finished recipe for colour and texture"]
  },
  "Multani Mitti Powder": {
    uses: ["Clay soap recipes", "Mask and bath blends", "Dry-formula ingredient mixes"],
    highlights: ["A finely powdered clay ingredient", "Can change the consistency of a formulation", "Add and test gradually to find a suitable texture"]
  },
  "Neem Powder": {
    uses: ["Botanical soap recipes", "Hair-care formulations", "Dry ingredient blends"],
    highlights: ["Ready-milled leaf ingredient", "Can be measured into dry blends", "Confirm suitability and usage rate for your finished product"]
  },
  "Oats Powder": {
    uses: ["Soapmaking recipes", "Bath and body blends", "Dry-formula ingredient mixes"],
    highlights: ["Oats in a fine powder format", "Can be combined with other dry ingredients", "Check the finished texture and dispersion"]
  },
  "Orange Peel Powder": {
    uses: ["Botanical soap recipes", "Dry scrub and bath blends", "Citrus-inspired handmade formulations"],
    highlights: ["Made from ground orange peel", "Adds a botanical powder format to dry blends", "Check the finished recipe for scent, colour, and texture"]
  },
  "Pista Shell Powder": {
    uses: ["Textured soap designs", "Scrub-style formulations", "Creative projects that call for a granular botanical material"],
    highlights: ["Made from ground pistachio shell", "Particle size affects the finished texture", "Assess the feel carefully and test a small batch before use"]
  },
  "Red Hibiscus Powder": {
    uses: ["Botanical soap recipes", "Bath and body blends", "Colour-focused handmade projects"],
    highlights: ["A richly coloured botanical powder", "May influence the finished product's colour", "Test a small batch for colour transfer and texture"]
  },
  "Reetha": {
    uses: ["Hair-cleansing formulations", "Botanical ingredient blends", "Recipes that call for whole soapnuts"],
    highlights: ["Supplied in dried whole form", "Can be prepared to suit a recipe", "Whole pieces need different handling from ready-milled powder"]
  },
  "Reetha Powder": {
    uses: ["Hair-cleansing formulations", "Botanical soap recipes", "Dry ingredient blends"],
    highlights: ["Ready-milled soapnut format", "Easy to measure into dry blends", "Check dispersion and texture in the finished recipe"]
  },
  "Rice Flour": {
    uses: ["Soapmaking recipes", "Dry cleanser and bath blends", "Pantry-ingredient formulations"],
    highlights: ["Fine rice-based powder", "Can be combined with other dry ingredients", "Check the finished texture when formulating"]
  },
  "Rose Powder": {
    uses: ["Botanical soap recipes", "Bath and body blends", "Dry botanical formulations"],
    highlights: ["Made from finely milled rose petals", "Can be measured into dry blends", "Appearance and aroma may vary by batch"]
  },
  "Sandal Powder": {
    uses: ["Botanical soap recipes", "Aromatic ingredient blends", "Handmade formulations calling for a milled botanical"],
    highlights: ["Aromatic, finely milled botanical format", "Can be combined with other recipe ingredients", "Confirm the product grade and suitable use for your formulation"]
  },
  "Shea Butter": {
    uses: ["Soapmaking formulations", "Body butter and balm recipes", "DIY personal-care projects"],
    highlights: ["A multipurpose butter ingredient for handmade formulations", "The supplied rate card lists a 100 g size", "Can be paired with other botanicals and raw materials"]
  },
  "Shikakai": {
    uses: ["Hair-cleansing formulations", "Botanical ingredient blends", "Recipes that call for whole dried botanicals"],
    highlights: ["Supplied in dried whole form", "Can be prepared to suit a recipe", "Whole pieces need different handling from ready-milled powder"]
  },
  "Shikakai Powder": {
    uses: ["Hair-cleansing formulations", "Botanical soap recipes", "Dry ingredient blends"],
    highlights: ["Ready-milled botanical format", "Easy to measure into dry blends", "Check dispersion and texture in the finished recipe"]
  },
  "Triphala Powder": {
    uses: ["Botanical soap recipes", "Dry ingredient blends", "Handmade formulations calling for a powdered botanical blend"],
    highlights: ["A ready-milled botanical blend", "Can be combined with other dry ingredients", "Check the finished recipe for colour and texture"]
  },
  "Vattiveru Powder": {
    uses: ["Botanical soap recipes", "Aromatic ingredient blends", "Dry botanical formulations"],
    highlights: ["Ready-milled vetiver format", "Can be measured into dry blends", "Check the finished recipe for aroma and texture"]
  },
  "Vavilaku Powder": {
    uses: ["Botanical soap recipes", "Dry ingredient blends", "Handmade formulations calling for this botanical powder"],
    highlights: ["Ready-milled botanical format", "Easy to measure into dry blends", "Confirm product identity, grade, and suitability for your formulation"]
  }
};

// Add only owner-approved reviews here.
const approvedReviews = [];

function renderApprovedReviews(container) {
  if (!approvedReviews.length) {
    const emptyMessage = document.createElement("p");
    emptyMessage.className = "approved-review-empty";
    emptyMessage.textContent = "No approved reviews yet. Be the first to share your experience.";
    container.replaceChildren(emptyMessage);
    return;
  }

  const reviewList = document.createElement("div");
  reviewList.className = "approved-review-list";
  approvedReviews.forEach((review) => {
    const article = document.createElement("article");
    article.className = "approved-review";
    const rating = document.createElement("p");
    rating.className = "approved-review-rating";
    rating.setAttribute("aria-label", `${review.rating} out of 5 stars`);
    rating.textContent = `${"★".repeat(review.rating)}${"☆".repeat(5 - review.rating)}`;
    const name = document.createElement("h4");
    name.textContent = review.name;
    const text = document.createElement("p");
    text.textContent = review.text;
    article.append(rating, name, text);
    reviewList.append(article);
  });
  container.replaceChildren(reviewList);
}

const productsGrid = document.querySelector("#productsGrid");
const searchInput = document.querySelector("#productSearch");
const filterContainer = document.querySelector("#categoryFilters");
const resultsCount = document.querySelector("#resultsCount");
const categories = ["All soapmaking supplies", "Botanical powders", "Whole botanicals", "Soapmaking pantry powders", "Soap clays & exfoliants", "Soapmaking butters & waxes"];
let activeCategory = "All soapmaking supplies";

function renderFilters() {
  if (!filterContainer) return;
  filterContainer.innerHTML = categories.map((category) => {
    const active = category === activeCategory;
    return `<button class="filter-chip${active ? " selected" : ""}" type="button" data-category="${category}" aria-pressed="${active}">${category}</button>`;
  }).join("");
}

function renderProducts() {
  if (!productsGrid) return;
  const query = searchInput ? searchInput.value.trim().toLocaleLowerCase() : "";
  const visibleProducts = products.filter((product) => {
    const categoryMatches = activeCategory === "All soapmaking supplies" || product.category === activeCategory;
    const searchable = `${product.name} ${product.category} ${product.description} ${product.search || ""}`.toLocaleLowerCase();
    return categoryMatches && searchable.includes(query);
  });

  if (resultsCount) {
    resultsCount.textContent = `${visibleProducts.length} ${visibleProducts.length === 1 ? "ingredient" : "ingredients"}`;
  }
  productsGrid.innerHTML = visibleProducts.length ? visibleProducts.map((product) => {
    const message = encodeURIComponent(`Hello Sahaj Organics, I’d like to know more about ${product.name}${product.price ? ` (listed at ${product.price})` : ""}.`);
    const price = product.price || "Ask for current price";
    return `<article class="product-card">
      <button class="product-image" type="button" data-product-details="${product.name}" aria-label="View details for ${product.name}">
        <img src="images/${product.image}" alt="${product.name}" loading="lazy">
        <span class="image-zoom" aria-hidden="true">+</span>
      </button>
      <div class="product-info">
        <span class="product-category">${product.category}</span>
        <h3><button class="product-title-button" type="button" data-product-details="${product.name}">${product.name}</button></h3>
        <p class="product-description">${product.description}</p>
        <div class="product-bottom"><strong class="product-price${product.price ? "" : " price-ask"}">${price}</strong><a class="product-enquire" href="https://wa.me/916305970687?text=${message}" target="_blank" rel="noreferrer" aria-label="Ask about ${product.name} on WhatsApp">Ask <span aria-hidden="true">↗</span></a></div>
      </div>
    </article>`;
  }).join("") : `<div class="empty-state"><span aria-hidden="true">⌕</span><h3>No ingredients found</h3><p>Try a different search or choose another category.</p></div>`;
}

const productDialog = document.querySelector("#productDialog");
if (productsGrid && productDialog) {
  const dialogImage = productDialog.querySelector("#dialogProductImage");
  const dialogCategory = productDialog.querySelector("#dialogProductCategory");
  const dialogName = productDialog.querySelector("#dialogProductName");
  const dialogPrice = productDialog.querySelector("#dialogProductPrice");
  const dialogDescription = productDialog.querySelector("#dialogProductDescription");
  const dialogDetails = productDialog.querySelector("#dialogProductDetails");
  const dialogUses = productDialog.querySelector("#dialogProductUses");
  const dialogHighlights = productDialog.querySelector("#dialogProductHighlights");
  const dialogNote = productDialog.querySelector("#dialogProductNote");
  const dialogEnquire = productDialog.querySelector("#dialogProductEnquire");

  productsGrid.addEventListener("click", (event) => {
    const trigger = event.target.closest("[data-product-details]");
    if (!trigger) return;
    const product = products.find((item) => item.name === trigger.dataset.productDetails);
    if (!product) return;
    const details = productDetails[product.name];
    if (!details) throw new Error(`Product details are missing for "${product.name}".`);

    dialogImage.src = `images/${product.image}`;
    dialogImage.alt = product.name;
    dialogCategory.textContent = product.category;
    dialogName.textContent = product.name;
    dialogPrice.textContent = product.price || "Ask for current price";
    dialogDescription.textContent = product.description;
    dialogDetails.hidden = false;
    dialogUses.replaceChildren(...details.uses.map((item) => {
      const listItem = document.createElement("li");
      listItem.textContent = item;
      return listItem;
    }));
    dialogHighlights.replaceChildren(...details.highlights.map((item) => {
      const listItem = document.createElement("li");
      listItem.textContent = item;
      return listItem;
    }));
    dialogNote.textContent = "These are general formulation ideas. Confirm product grade, suitability, and safe usage rates for your finished product.";
    dialogEnquire.href = `https://wa.me/916305970687?text=${encodeURIComponent(`Hello Sahaj Organics, I’d like to know more about ${product.name}.`)}`;
    productDialog.showModal();
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && productDialog.open) {
      event.preventDefault();
      productDialog.close();
    }
  });

  productDialog.querySelector(".dialog-close").addEventListener("click", () => productDialog.close());
  productDialog.addEventListener("click", (event) => {
    if (event.target === productDialog) productDialog.close();
  });
}

const approvedReviewsContainer = document.querySelector("#approvedReviews");
if (approvedReviewsContainer) renderApprovedReviews(approvedReviewsContainer);

const reviewForm = document.querySelector("#reviewForm");
if (reviewForm) {
  const reviewerName = reviewForm.querySelector("#reviewerName");
  const reviewText = reviewForm.querySelector("#reviewText");
  const reviewStatus = reviewForm.querySelector("#reviewSubmissionStatus");
  const reviewWhatsAppLink = reviewForm.querySelector("#reviewWhatsAppLink");
  const reviewRatingOptions = reviewForm.querySelector(".review-rating-options");

  reviewForm.addEventListener("change", (event) => {
    if (!event.target.matches('input[name="reviewRating"]')) return;
    reviewRatingOptions.querySelectorAll(".review-rating-option").forEach((option, index) => {
      option.classList.toggle("selected", index < Number(event.target.value));
    });
  });

  reviewForm.addEventListener("submit", (event) => {
    event.preventDefault();
    reviewerName.setCustomValidity(reviewerName.value.trim() ? "" : "Please enter your name.");
    reviewText.setCustomValidity(reviewText.value.trim().length >= 10 ? "" : "Please write at least 10 characters.");
    if (!reviewForm.reportValidity()) return;

    const selectedRating = reviewForm.querySelector('input[name="reviewRating"]:checked');
    if (!selectedRating) return;
    const message = encodeURIComponent(
      `Hello Sahaj Organics, I’d like to submit a customer review for approval.\nName: ${reviewerName.value.trim()}\nRating: ${selectedRating.value}/5 stars\nReview: ${reviewText.value.trim()}`
    );
    const whatsappUrl = `https://wa.me/916305970687?text=${message}`;
    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
    reviewWhatsAppLink.href = whatsappUrl;
    reviewWhatsAppLink.hidden = false;
    reviewStatus.textContent = "WhatsApp should open with your review draft. Press Send there to submit it for approval, or use the link below if it did not open. Reviews are published only after approval.";
  });
}

if (filterContainer) {
  filterContainer.addEventListener("click", (event) => {
    const button = event.target.closest("[data-category]");
    if (!button) return;
    activeCategory = button.dataset.category;
    renderFilters();
    renderProducts();
  });
}

if (searchInput) searchInput.addEventListener("input", renderProducts);

document.querySelectorAll("[data-category-link]").forEach((link) => {
  link.addEventListener("click", () => {
    const category = link.dataset.categoryLink === "all" ? "All soapmaking supplies" : link.dataset.categoryLink;
    const dropdown = link.closest(".nav-dropdown");
    if (dropdown) dropdown.open = false;
    if (filterContainer) {
      activeCategory = category;
      renderFilters();
      renderProducts();
      try {
        sessionStorage.removeItem("sahaj-organics-category");
      } catch (error) {
        // Category filtering remains available when browser storage is disabled.
      }
    } else {
      try {
        sessionStorage.setItem("sahaj-organics-category", category);
      } catch (error) {
        // Category navigation remains available when browser storage is disabled.
      }
    }
  });
});

const navDropdowns = [...document.querySelectorAll(".nav-dropdown")];

document.addEventListener("pointerdown", (event) => {
  navDropdowns.forEach((dropdown) => {
    if (dropdown.open && !dropdown.contains(event.target)) dropdown.open = false;
  });
});

document.addEventListener("keydown", (event) => {
  if (event.key !== "Escape") return;
  navDropdowns.forEach((dropdown) => {
    if (!dropdown.open) return;
    dropdown.open = false;
    dropdown.querySelector("summary").focus();
  });
});

if (filterContainer && productsGrid) {
  try {
    const requestedCategory = sessionStorage.getItem("sahaj-organics-category");
    if (categories.includes(requestedCategory)) activeCategory = requestedCategory;
    sessionStorage.removeItem("sahaj-organics-category");
  } catch (error) {
    // The full ingredient list remains available when browser storage is disabled.
  }
  renderFilters();
  renderProducts();
}

const yearElement = document.querySelector("#currentYear");
if (yearElement) yearElement.textContent = new Date().getFullYear();

const enquiryForm = document.querySelector("#enquiryForm");
if (enquiryForm) {
  enquiryForm.addEventListener("submit", (event) => {
    event.preventDefault();
    if (!enquiryForm.reportValidity()) return;
    const name = document.querySelector("#customerName").value.trim();
    const message = document.querySelector("#customerMessage").value.trim();
    const whatsappMessage = encodeURIComponent(`Hello Sahaj Organics, my name is ${name}.\n\n${message}`);
    window.open(`https://wa.me/916305970687?text=${whatsappMessage}`, "_blank", "noopener,noreferrer");
  });
}
