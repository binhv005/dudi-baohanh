# Hướng dẫn cấu hình Google Apps Script gửi form về Gmail

Tài liệu này hướng dẫn cách kết nối Form **Khảo sát Website** gửi thông tin trực tiếp về Email **vtb22522005@gmail.com** (đồng thời tự động lưu vào Google Sheet nếu muốn).

---

## BƯỚC 1: Tạo Google Apps Script

1. Truy cập [Google Sheets](https://sheets.new) để tạo 1 bảng tính mới (đặt tên ví dụ: *DUDI - Khảo sát Website*).
2. Trên thanh menu, chọn: **Tiện ích mở rộng (Extensions)** > **Apps Script**.
3. Xóa hết mã nguồn cũ trong file `Code.gs` và dán toàn bộ đoạn code dưới đây vào:

```javascript
/**
 * Google Apps Script tiếp nhận đăng ký Khảo sát Website DUDI
 * Gửi email thông báo về: vtb22522005@gmail.com
 */

function doPost(e) {
  try {
    var data = JSON.parse(e.postData.contents);
    
    var recipient = "vtb22522005@gmail.com";
    var subject = "[DUDI Website Audit] Yêu cầu khảo sát mới từ: " + (data.fullName || "Khách hàng");
    
    var situationsText = (data.situations && data.situations.length > 0) 
      ? data.situations.join(", ") 
      : "Không có";
    
    var currentTime = Utilities.formatDate(new Date(), "Asia/Ho_Chi_Minh", "HH:mm:ss dd/MM/yyyy");
    
    // Giao diện email HTML chuyên nghiệp
    var htmlBody = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; border: 1px solid #e2e8f0; border-radius: 12px; background-color: #ffffff;">
        <div style="text-align: center; border-bottom: 2px solid #ef4444; padding-bottom: 16px; margin-bottom: 20px;">
          <h2 style="color: #dc2626; margin: 0; font-size: 22px;">🚀 ĐĂNG KÝ KHẢO SÁT WEBSITE MỚI</h2>
          <p style="color: #64748b; font-size: 13px; margin-top: 6px;">Thời gian tiếp nhận: <strong>${currentTime}</strong></p>
        </div>
        
        <table style="width: 100%; border-collapse: collapse; font-size: 14px;">
          <tr style="background-color: #f8fafc;">
            <td style="padding: 10px 12px; font-weight: bold; width: 35%; color: #334155; border-bottom: 1px solid #e2e8f0;">Họ và tên:</td>
            <td style="padding: 10px 12px; color: #0f172a; font-weight: 600; border-bottom: 1px solid #e2e8f0;">${data.fullName || ""}</td>
          </tr>
          <tr>
            <td style="padding: 10px 12px; font-weight: bold; color: #334155; border-bottom: 1px solid #e2e8f0;">Số ĐT / Zalo:</td>
            <td style="padding: 10px 12px; color: #dc2626; font-weight: bold; border-bottom: 1px solid #e2e8f0;"><a href="tel:${data.phone}" style="color: #dc2626; text-decoration: none;">${data.phone || ""}</a></td>
          </tr>
          <tr style="background-color: #f8fafc;">
            <td style="padding: 10px 12px; font-weight: bold; color: #334155; border-bottom: 1px solid #e2e8f0;">Địa chỉ Website:</td>
            <td style="padding: 10px 12px; color: #2563eb; font-weight: 600; border-bottom: 1px solid #e2e8f0;"><a href="${data.websiteUrl.startsWith('http') ? data.websiteUrl : 'https://' + data.websiteUrl}" target="_blank" style="color: #2563eb;">${data.websiteUrl || ""}</a></td>
          </tr>
          <tr>
            <td style="padding: 10px 12px; font-weight: bold; color: #334155; border-bottom: 1px solid #e2e8f0;">Nền tảng website:</td>
            <td style="padding: 10px 12px; color: #0f172a; border-bottom: 1px solid #e2e8f0;">${data.platform || "WordPress"}</td>
          </tr>
          <tr style="background-color: #f8fafc;">
            <td style="padding: 10px 12px; font-weight: bold; color: #334155; border-bottom: 1px solid #e2e8f0;">Gói quan tâm:</td>
            <td style="padding: 10px 12px; color: #b45309; font-weight: 600; border-bottom: 1px solid #e2e8f0;">${data.packageInterest || "Chưa rõ"}</td>
          </tr>
          <tr>
            <td style="padding: 10px 12px; font-weight: bold; color: #334155; border-bottom: 1px solid #e2e8f0;">Tình trạng cần hỗ trợ:</td>
            <td style="padding: 10px 12px; color: #0f172a; border-bottom: 1px solid #e2e8f0;">${situationsText}</td>
          </tr>
        </table>
        
        <div style="margin-top: 24px; padding: 12px; background-color: #fef2f2; border-radius: 8px; font-size: 12px; color: #991b1b; text-align: center;">
          ⚡ Khách hàng mong muốn nhận kết quả sơ bộ trong vòng 30 phút. Vui lòng phản hồi sớm!
        </div>
      </div>
    `;
    
    // Gửi email về hòm thư
    MailApp.sendEmail({
      to: recipient,
      subject: subject,
      htmlBody: htmlBody
    });
    
    // Lưu một bản vào Google Sheet
    try {
      var sheet = SpreadsheetApp.getActiveSpreadsheet();
      if (sheet) {
        var activeSheet = sheet.getActiveSheet();
        if (activeSheet.getLastRow() === 0) {
          activeSheet.appendRow(["Thời gian", "Họ tên", "Số điện thoại", "Website", "Nền tảng", "Gói quan tâm", "Tình trạng"]);
        }
        activeSheet.appendRow([
          currentTime,
          data.fullName || "",
          data.phone || "",
          data.websiteUrl || "",
          data.platform || "",
          data.packageInterest || "",
          situationsText
        ]);
      }
    } catch (sheetErr) {
      // Bỏ qua lỗi Sheet nếu là Standalone script
    }
    
    return ContentService.createTextOutput(JSON.stringify({ status: "success" }))
      .setMimeType(ContentService.MimeType.JSON);
      
  } catch (error) {
    return ContentService.createTextOutput(JSON.stringify({ status: "error", message: error.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}
```

---

## BƯỚC 2: Triển khai Web App (Deploy)

1. Nhấn nút **Lưu** (biểu tượng đĩa mềm 💾 hoặc `Ctrl + S`).
2. Nhấn vào nút xanh **Triển khai (Deploy)** ở góc trên bên phải > chọn **Quản lý bản triển khai mới (New deployment)**.
3. Nhấp vào biểu tượng bánh răng ⚙️ bên cạnh "Chọn loại" > chọn **Ứng dụng web (Web app)**.
4. Cấu hình các thông số sau:
   - **Mô tả (Description)**: `DUDI Form Handler`
   - **Thực thi dưới dạng (Execute as)**: `Tôi (tài khoản của bạn)` *(Me)*
   - **Ai có quyền truy cập (Who has access)**: **`Bất kỳ ai` *(Anyone)*** *(CỰC KỲ QUAN TRỌNG để form gửi được)*.
5. Nhấn **Triển khai (Deploy)**.
6. Cấp quyền truy cập (Authorize access) khi Google yêu cầu > Chọn tài khoản Gmail > Chọn *Nâng cao (Advanced)* > Chọn *Đi tới... (Không an toàn)* > Nhấn *Cho phép (Allow)*.
7. Sau khi hoàn tất, sao chép **URL ứng dụng web (Web app URL)** (có dạng: `https://script.google.com/macros/s/AKfycb.../exec`).

---

## BƯỚC 3: Cập nhật URL vào Website

Mở file [.env](file:///d:/TaiLieu/Code/Intern/DUDI/DUDI_chamsocwebsite/.env) trong dự án và dán URL vừa sao chép:

```env
VITE_GOOGLE_SCRIPT_URL=https://script.google.com/macros/s/AKfycb.../exec
```

Hoặc bạn có thể dán trực tiếp vào biến `GOOGLE_SCRIPT_URL` trong file [AuditFormSection.jsx](file:///d:/TaiLieu/Code/Intern/DUDI/DUDI_chamsocwebsite/src/components/AuditFormSection.jsx#L45).
