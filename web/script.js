// بيانات غرف تجريبية
// ملاحظة: حقل city هنا يمثل "الدولة" حتى يتوافق مع قائمة الاختيار في HTML
const ROOMS = [
  // مصر
  {
    id: 1,
    name: "غرفة منفردة اقتصادية - القاهرة",
    type: "standard",
    price: 55,
    capacity: 1,
    city: "مصر",
    image:
      "https://images.pexels.com/photos/3735152/pexels-photo-3735152.jpeg?auto=compress&cs=tinysrgb&w=1200",
    tags: ["إفطار خفيف", "واي فاي", "إلغاء مجاني"],
  },
  {
    id: 2,
    name: "غرفة مزدوجة مطلة على النيل",
    type: "deluxe",
    price: 95,
    capacity: 2,
    city: "مصر",
    image:
      "https://images.pexels.com/photos/271639/pexels-photo-271639.jpeg?auto=compress&cs=tinysrgb&w=1200",
    tags: ["إفطار مفتوح", "مطل على النيل", "موقف سيارات"],
  },
  {
    id: 3,
    name: "غرفة عائلية رباعية - الإسكندرية",
    type: "family",
    price: 140,
    capacity: 4,
    city: "مصر",
    image:
      "https://images.pexels.com/photos/261102/pexels-photo-261102.jpeg?auto=compress&cs=tinysrgb&w=1200",
    tags: ["قريبة من البحر", "إفطار مجاني", "نادي أطفال"],
  },

  // الإمارات العربية المتحدة
  {
    id: 4,
    name: "غرفة سويت مزدوجة - دبي مارينا",
    type: "suite",
    price: 180,
    capacity: 2,
    city: "الإمارة العربية المتحدة",
    image:
      "https://images.pexels.com/photos/462235/pexels-photo-462235.jpeg?auto=compress&cs=tinysrgb&w=1200",
    tags: ["مطل على المارينا", "إفطار وعشاء", "خدمة غرف 24 ساعة"],
  },
  {
    id: 5,
    name: "غرفة ثلاثية مطلة على برج خليفة",
    type: "deluxe",
    price: 210,
    capacity: 3,
    city: "الإمارة العربية المتحدة",
    image:
      "https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?auto=compress&cs=tinysrgb&w=1200",
    tags: ["إطلالة مميزة", "مسبح داخلي", "موقف سيارات مجاني"],
  },
  {
    id: 6,
    name: "جناح فاخر تنفيذي",
    type: "suite",
    price: 260,
    capacity: 2,
    city: "الإمارة العربية المتحدة",
    image:
      "https://images.pexels.com/photos/2029676/pexels-photo-2029676.jpeg?auto=compress&cs=tinysrgb&w=1200",
    tags: ["صالة أعمال", "خدمة خاصة", "إفطار في الغرفة"],
  },

  // المملكة العربية السعودية
  {
    id: 7,
    name: "غرفة مزدوجة - الرياض",
    type: "standard",
    price: 90,
    capacity: 2,
    city: "المملكة العربية السعودية",
    image:
      "double-room.png",
    tags: ["قريبة من المركز المالي", "واي فاي سريع"],
  },
  {
    id: 8,
    name: "جناح عائلي ثلاثي - جدة",
    type: "family",
    price: 155,
    capacity: 3,
    city: "المملكة العربية السعودية",
    image:
      "https://images.pexels.com/photos/6585763/pexels-photo-6585763.jpeg?auto=compress&cs=tinysrgb&w=1200",
    tags: ["إفطار مجاني", "مطل على البحر الأحمر"],
  },

  // تركيا
  {
    id: 9,
    name: "غرفة منفردة في إسطنبول القديمة",
    type: "standard",
    price: 70,
    capacity: 1,
    city: "تركيا",
    image:
      "https://images.pexels.com/photos/1974596/pexels-photo-1974596.jpeg?auto=compress&cs=tinysrgb&w=1200",
    tags: ["قريبة من المعالم", "إفطار تركي تقليدي"],
  },
  {
    id: 10,
    name: "غرفة رباعية مطلة على البوسفور",
    type: "family",
    price: 160,
    capacity: 4,
    city: "تركيا",
    image:
      "https://images.pexels.com/photos/1454806/pexels-photo-1454806.jpeg?auto=compress&cs=tinysrgb&w=1200",
    tags: ["إطلالة على البوسفور", "شرفة خاصة"],
  },

  // المغرب
  {
    id: 11,
    name: "غرفة مزدوجة على الطراز المغربي - مراكش",
    type: "deluxe",
    price: 100,
    capacity: 2,
    city: "المغرب",
    image:
      "https://images.pexels.com/photos/271639/pexels-photo-271639.jpeg?auto=compress&cs=tinysrgb&w=1200",
    tags: ["ديكور تقليدي", "إفطار مغربي"],
  },
  {
    id: 12,
    name: "غرفة ثلاثية - كازابلانكا",
    type: "standard",
    price: 120,
    capacity: 3,
    city: "المغرب",
    image:
      "https://images.pexels.com/photos/3735160/pexels-photo-3735160.jpeg?auto=compress&cs=tinysrgb&w=1200",
    tags: ["قريبة من الكورنيش", "موقف سيارات"],
  },

  // الجزائر
  {
    id: 13,
    name: "غرفة منفردة - الجزائر العاصمة",
    type: "standard",
    price: 65,
    capacity: 1,
    city: "الجزائر",
    image:
      "https://images.pexels.com/photos/271639/pexels-photo-271639.jpeg?auto=compress&cs=tinysrgb&w=1200",
    tags: ["إنترنت مجاني", "إلغاء مجاني"],
  },
  {
    id: 14,
    name: "غرفة رباعية عائلية",
    type: "family",
    price: 135,
    capacity: 4,
    city: "الجزائر",
    image:
      "https://images.pexels.com/photos/1571458/pexels-photo-1571458.jpeg?auto=compress&cs=tinysrgb&w=1200",
    tags: ["إفطار شامل", "قريبة من وسط المدينة"],
  },

  // قطر
  {
    id: 15,
    name: "غرفة مزدوجة - الدوحة",
    type: "deluxe",
    price: 150,
    capacity: 2,
    city: "قطر",
    image:
      "https://images.pexels.com/photos/1358907/pexels-photo-1358907.jpeg?auto=compress&cs=tinysrgb&w=1200",
    tags: ["قريبة من الكورنيش", "مسبح خارجي"],
  },
  {
    id: 16,
    name: "جناح تنفيذي مطل على البحر",
    type: "suite",
    price: 230,
    capacity: 3,
    city: "قطر",
    image:
      "https://images.pexels.com/photos/262048/pexels-photo-262048.jpeg?auto=compress&cs=tinysrgb&w=1200",
    tags: ["إطلالة بحرية", "إفطار وغداء", "صالة رياضية"],
  },
];

const bookingForm = document.getElementById("booking-form");
const roomsList = document.getElementById("rooms-list");
const bookingModal = document.getElementById("booking-modal");
const bookingSummary = document.getElementById("booking-summary");
const guestForm = document.getElementById("guest-form");
const modalClose = document.getElementById("modal-close");
const modalOk = document.getElementById("modal-ok");
const toast = document.getElementById("toast");

const contactForm = document.getElementById("contact-form");
const checkinInput = document.getElementById("checkin");
const checkoutInput = document.getElementById("checkout");

// خريطة لأنواع الغرف في الـ HTML إلى الحد الأدنى للسعة (عدد النزلاء)
const ROOM_TYPE_MIN_CAPACITY = {
  single: 1,
  double: 2,
  twin: 2,
  triple: 3,
  quad: 4,
};

let lastSearch = {
  city: null,
  checkin: null,
  checkout: null,
  guests: null,
};

let selectedRoomForBooking = null;

function formatDate(dateStr) {
  if (!dateStr) return "";
  const date = new Date(dateStr);
  return date.toLocaleDateString("ar-EG", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

function showToast(message) {
  if (!toast) return;
  toast.textContent = message;
  toast.classList.remove("hidden");
  setTimeout(() => {
    toast.classList.add("hidden");
  }, 2800);
}

function createRoomCard(room) {
  const card = document.createElement("article");
  card.className = "room-card";

  // تحديد نوع الغرفة للعرض حسب السعة
  let typeLabel = "غرفة";
  if (room.capacity === 1) typeLabel = "منفردة";
  else if (room.capacity === 2) typeLabel = "مزدوجة";
  else if (room.capacity === 3) typeLabel = "ثلاثية";
  else if (room.capacity === 4) typeLabel = "رباعية";

  card.innerHTML = `
    <div class="room-image" style="background-image:url('${room.image}')"></div>
    <div class="room-body">
      <h3 class="room-title">${room.name}</h3>
      <div class="room-meta">
        <span>${room.city}</span>
        <span>حتى ${room.capacity} نزلاء</span>
      </div>
      <div class="room-meta">
        <span class="room-type">${typeLabel}</span>
        <span class="room-price">ابتداءً من ${room.price}$ / ليلة</span>
      </div>
    </div>
    <div class="room-footer">
      <div class="room-tags">
        ${room.tags.map((t) => `<span class="tag">${t}</span>`).join("")}
      </div>
      <button class="btn btn-primary full-width" data-room-id="${
        room.id
      }">احجز الآن</button>
    </div>
  `;
  return card;
}

function renderRooms(rooms) {
  if (!roomsList) return;
  roomsList.innerHTML = "";

  if (!rooms.length) {
    roomsList.innerHTML =
      '<p style="color:#9ca3af">لا توجد غرف مطابقة لمعايير البحث الحالية.</p>';
    return;
  }

  rooms.forEach((room) => roomsList.appendChild(createRoomCard(room)));
}

function filterRooms({ city, roomType, guests }) {
  return ROOMS.filter((room) => {
    if (city && room.city !== city) return false;

    // مطابقة نوع الغرفة (single/double/... حسب HTML) مع السعة
    if (roomType && ROOM_TYPE_MIN_CAPACITY[roomType]) {
      const minCap = ROOM_TYPE_MIN_CAPACITY[roomType];
      if (room.capacity < minCap) return false;
    }

    if (guests && Number(guests) > room.capacity) return false;
    return true;
  });
}

function openModal(room) {
  if (!bookingModal || !bookingSummary) return;
  selectedRoomForBooking = room;

  const details = [];
  if (lastSearch.city) details.push(`الدولة: ${lastSearch.city}`);
  if (lastSearch.checkin)
    details.push(`الوصول: ${formatDate(lastSearch.checkin)}`);
  if (lastSearch.checkout)
    details.push(`المغادرة: ${formatDate(lastSearch.checkout)}`);
  if (lastSearch.guests) details.push(`عدد النزلاء: ${lastSearch.guests}`);

  bookingSummary.innerHTML = `
    أنت على وشك حجز: <strong>${room.name}</strong><br/>
    ${details.length ? "<br/>" + details.join(" • ") : ""}
  `;

  // إعادة ضبط نموذج بيانات الحاجز
  if (guestForm) {
    guestForm.reset();
    modalOk.classList.add("hidden");
    guestForm.classList.remove("hidden");
  }

  bookingModal.classList.remove("hidden");
}

function closeModal() {
  if (!bookingModal) return;
  bookingModal.classList.add("hidden");
  selectedRoomForBooking = null;
}

if (bookingForm) {
  bookingForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const city = document.getElementById("city").value;
    const checkin = document.getElementById("checkin").value;
    const checkout = document.getElementById("checkout").value;
    const guests = document.getElementById("guests").value;
    const roomType = document.getElementById("roomType").value;

    // تحقق من أن تاريخ المغادرة بعد تاريخ الوصول
    if (checkin && checkout) {
      const checkinDate = new Date(checkin);
      const checkoutDate = new Date(checkout);
      if (checkoutDate <= checkinDate) {
        showToast("يجب أن يكون تاريخ المغادرة بعد تاريخ الوصول");
        return;
      }
    }

    lastSearch = { city, checkin, checkout, guests };

    const result = filterRooms({ city, roomType, guests });
    renderRooms(result);

    const roomsSection = document.getElementById("rooms");
    if (roomsSection) {
      roomsSection.scrollIntoView({ behavior: "smooth", block: "start" });
    }

    showToast("تم تحديث قائمة الغرف المتاحة حسب اختيارك");
  });
}

if (roomsList) {
  roomsList.addEventListener("click", (e) => {
    const target = e.target;
    if (target.matches("button[data-room-id]")) {
      const roomId = Number(target.getAttribute("data-room-id"));
      const room = ROOMS.find((r) => r.id === roomId);
      if (!room) return;

      // التأكد من أن بيانات نموذج الحجز الأساسية مملوءة أولاً
      const cityField = document.getElementById("city");
      const checkinField = document.getElementById("checkin");
      const checkoutField = document.getElementById("checkout");
      const guestsField = document.getElementById("guests");
      const roomTypeField = document.getElementById("roomType");

      const isFormFilled =
        cityField?.value &&
        checkinField?.value &&
        checkoutField?.value &&
        guestsField?.value &&
        roomTypeField?.value;

      // لو النموذج غير مكتمل، ننقله لقسم الحجز ونظهر رسالة
      if (!isFormFilled) {
        const searchSection = document.getElementById("search");
        if (searchSection) {
          searchSection.scrollIntoView({ behavior: "smooth", block: "start" });
        }
        showToast("من فضلك املأ بيانات الحجز (الدولة، التواريخ، النزلاء، نوع الغرفة) أولاً");
        // تركيز على أول حقل فارغ إن وجد
        const fieldsInOrder = [
          cityField,
          checkinField,
          checkoutField,
          guestsField,
          roomTypeField,
        ].filter(Boolean);
        const firstEmpty = fieldsInOrder.find((el) => !el.value);
        if (firstEmpty) firstEmpty.focus();
        return;
      }

      // لو البيانات مكتملة افتح مودال تأكيد الحجز بالغرفة المختارة
      openModal(room);
    }
  });
}

if (modalClose) modalClose.addEventListener("click", closeModal);
if (modalOk) modalOk.addEventListener("click", closeModal);
if (bookingModal) {
  bookingModal.addEventListener("click", (e) => {
    if (e.target === bookingModal) closeModal();
  });
}

if (contactForm) {
  contactForm.addEventListener("submit", (e) => {
    e.preventDefault();
    contactForm.reset();
    showToast("تم إرسال رسالتك (مثال تجريبي)");
  });
}

// إرسال نموذج بيانات الحاجز داخل المودال
if (guestForm) {
  guestForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = document.getElementById("guest-name").value.trim();
    const phone = document.getElementById("guest-phone").value.trim();
    const email = document.getElementById("guest-email").value.trim();

    if (!name || !phone || !email) {
      showToast("من فضلك أدخل اسم الحاجز ورقم الهاتف والبريد الإلكتروني");
      return;
    }

    bookingSummary.innerHTML = `
      تم استلام بيانات حجزك بنجاح، يا <strong>${name}</strong> 🎉<br/><br/>
      سنقوم بالتواصل معك على الرقم <strong>${phone}</strong> أو البريد <strong>${email}</strong>
      لتأكيد الحجز الخاص بالغرفة: <strong>${
        selectedRoomForBooking ? selectedRoomForBooking.name : ""
      }</strong>.<br/><br/>
      (هذا مثال تجريبي، ويمكن ربطه لاحقًا بباك إند حقيقي لحفظ الحجز في قاعدة بيانات)
    `;

    guestForm.classList.add("hidden");
    modalOk.classList.remove("hidden");

    showToast("تم تسجيل طلب الحجز (مثال تجريبي)");
  });
}

document.addEventListener("DOMContentLoaded", () => {
  // منع اختيار تاريخ وصول أو مغادرة قبل تاريخ اليوم
  const today = new Date();
  const yyyy = today.getFullYear();
  const mm = String(today.getMonth() + 1).padStart(2, "0");
  const dd = String(today.getDate()).padStart(2, "0");
  const todayStr = `${yyyy}-${mm}-${dd}`;

  if (checkinInput) checkinInput.setAttribute("min", todayStr);
  if (checkoutInput) checkoutInput.setAttribute("min", todayStr);

  // عند اختيار تاريخ الوصول، يجب أن يكون تاريخ المغادرة على الأقل في اليوم التالي
  if (checkinInput && checkoutInput) {
    checkinInput.addEventListener("change", () => {
      const value = checkinInput.value;
      if (!value) return;

      const checkinDate = new Date(value);
      // اليوم التالي لتاريخ الوصول
      const minCheckoutDate = new Date(checkinDate.getTime() + 24 * 60 * 60 * 1000);
      const y = minCheckoutDate.getFullYear();
      const m = String(minCheckoutDate.getMonth() + 1).padStart(2, "0");
      const d = String(minCheckoutDate.getDate()).padStart(2, "0");
      const minCheckoutStr = `${y}-${m}-${d}`;

      checkoutInput.setAttribute("min", minCheckoutStr);

      // إذا كان التاريخ المختار للمغادرة قبل المين الجديد، نعدّله
      if (checkoutInput.value && checkoutInput.value < minCheckoutStr) {
        checkoutInput.value = minCheckoutStr;
      }
    });
  }

  renderRooms(ROOMS);
});



