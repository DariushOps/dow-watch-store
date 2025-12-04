import axios from "axios";

export async function shopLoader() {
  try {
    const res = await axios.get(
      "https://api.jsonbin.io/v3/b/6919f2dfd0ea881f40ec3a2f",
      {
        headers: {
          "X-Master-Key":
            "$2a$10$lsr30Was7cqGdXPVspxtd.HRRm4AmwVbhvVGp55EZbIRBpJvxIv82",
        },
      }
    );

    if (!res.data || !res.data.record) {
      throw new Error("JSONBin data not found or invalid response.");
    }

    return res.data.record; // فقط داده واقعی
  } catch (err) {
    console.error("Error fetching JSONBin data:", err);
    throw err; // پرتاب می‌کنیم تا errorElement کار کند
  }
}
