import React, { useState, useRef, useEffect } from 'react';
import { 
  X, 
  RotateCcw, 
  Send, 
  Sparkles, 
  CheckCheck, 
  ChevronRight,
  MessageSquare,
  ShieldCheck
} from 'lucide-react';
import { COMPANY_INFO } from '../data/maintenanceData';

const QUICK_SUGGESTIONS = [
  { id: 'services', label: '💡 DUDI chăm sóc & bảo trì những gì?', query: 'DUDI chăm sóc và bảo trì những hạng mục gì cho website?' },
  { id: 'pricing', label: '💰 Báo giá các gói chăm sóc website', query: 'Chi phí các gói bảo trì và chăm sóc website tại DUDI như thế nào?' },
  { id: 'sla', label: '⚡ Cam kết SLA & Tốc độ phản hồi', query: 'Cam kết thời gian phản hồi SLA và xử lý sự cố như thế nào?' },
  { id: 'audit', label: '🔍 Đăng ký kiểm tra & Audit website', query: 'Tôi muốn kiểm tra và chẩn đoán tình trạng website hiện tại' },
  { id: 'contact', label: '📞 Gặp chuyên viên kỹ thuật', query: 'Tôi muốn gặp chuyên viên kỹ thuật tư vấn trực tiếp' }
];

const INITIAL_MESSAGES = [
  {
    id: 1,
    sender: 'bot',
    text: `Xin chào! 👋\nTôi là Trợ lý Kỹ thuật AI của DUDI Software.\nWebsite của bạn đang gặp sự cố hay cần bảo trì, tối ưu hiệu năng?`,
    time: '10:30',
    type: 'text'
  }
];

export default function AIChatModal({ isOpen, onClose }) {
  const [messages, setMessages] = useState(INITIAL_MESSAGES);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);
  const modalRef = useRef(null);

  // Auto-scroll to bottom
  useEffect(() => {
    if (isOpen) {
      messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
      if (window.innerWidth > 768) {
        setTimeout(() => inputRef.current?.focus(), 300);
      }
    }
  }, [messages, isTyping, isOpen]);

  // Click outside and Escape key handler
  useEffect(() => {
    if (!isOpen) return;

    const handleClickOutside = (event) => {
      const isToggleBtn = event.target.closest('[data-chat-toggle="true"]');
      if (isToggleBtn) return;

      if (modalRef.current && !modalRef.current.contains(event.target)) {
        onClose();
      }
    };

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('touchstart', handleClickOutside, { passive: true });
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  // Reset conversation
  const handleReset = () => {
    const now = new Date();
    const timeStr = `${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}`;
    setMessages([
      {
        id: Date.now(),
        sender: 'bot',
        text: `Xin chào! 👋\nTôi là Trợ lý Kỹ thuật AI của DUDI Software.\nWebsite của bạn đang gặp sự cố hay cần bảo trì, tối ưu hiệu năng?`,
        time: timeStr,
        type: 'text'
      }
    ]);
  };

  // Smart Response Engine for Website Maintenance & Warranty
  const generateBotResponse = (userText) => {
    const query = userText.toLowerCase().trim();

    if (query.includes('dịch vụ') || query.includes('chăm sóc') || query.includes('bảo trì') || query.includes('làm gì') || query.includes('hạng mục')) {
      return {
        text: `DUDI cung cấp dịch vụ Chăm sóc & Vận hành Website chuyên sâu toàn diện:\n\n` +
          `• 🛡️ **Giám sát Uptime 24/7**: Cảnh báo và khắc phục ngay khi website gặp sự cố gián đoạn.\n` +
          `• ⚡ **Tối ưu Tốc độ & Core Web Vitals**: Nén ảnh, dọn rác database, giữ web tải dưới 2s.\n` +
          `• 🔒 **Sao lưu & Bảo mật định kỳ**: Backup tự động đa đám mây, vá lỗ hổng plugin & mã nguồn.\n` +
          `• 📝 **Cập nhật Nội dung & Banner**: Đăng bài, thay đổi thông tin sản phẩm/dịch vụ theo yêu cầu.\n` +
          `• 🔧 **Sửa lỗi phát sinh tức thì**: Khắc phục lỗi form liên hệ, lỗi giao diện vỡ trên di động.`,
        actionType: 'services'
      };
    }

    if (query.includes('giá') || query.includes('chi phí') || query.includes('bao nhiêu') || query.includes('gói') || query.includes('báo giá')) {
      return {
        text: `DUDI cung cấp các gói Chăm sóc & Bảo trì website theo nhu cầu thực tế:\n\n` +
          `• **Gói Tiêu chuẩn**: Phù hợp website giới thiệu, blog tin tức — Theo dõi uptime, backup tuần, tối ưu cơ bản.\n` +
          `• **Gói Nâng cao**: ⭐ Dành cho website kinh doanh, lead gen — Backup hàng ngày, cập nhật nội dung, tối ưu tốc độ định kỳ.\n` +
          `• **Gói Doanh nghiệp (Enterprise)**: Dành cho sàn TMĐT, cổng thông tin lưu lượng lớn — SLA phản hồi ưu tiên 15 phút, bảo mật chuyên sâu 24/7.\n\n` +
          `💡 Bạn có thể xem bảng so sánh hạn mức chi tiết bên dưới!`,
        actionType: 'pricing'
      };
    }

    if (query.includes('sla') || query.includes('thời gian') || query.includes('phản hồi') || query.includes('cam kết') || query.includes('nhanh')) {
      return {
        text: `Cam kết mức độ dịch vụ (SLA) minh bạch tại DUDI Software:\n\n` +
          `⏱️ **Thời gian phản hồi**: Tiếp nhận yêu cầu chỉ trong **15 - 30 phút**.\n` +
          `🚨 **Sự cố khẩn cấp (Web sập/Lỗi thanh toán)**: Xử lý ngay lập tức 24/7.\n` +
          `🎯 **Yêu cầu cập nhật nội dung**: Hoàn thành trong vòng 4 - 8 giờ làm việc.\n` +
          `📊 **Báo cáo định kỳ**: Cung cấp báo cáo hiệu năng và bảo mật hàng tháng minh bạch.`,
        actionType: 'sla'
      };
    }

    if (query.includes('kiểm tra') || query.includes('audit') || query.includes('chẩn đoán') || query.includes('lỗi') || query.includes('chậm')) {
      return {
        text: `DUDI cung cấp dịch vụ **Audit & Khảo sát Website Miễn Phí** bao gồm:\n\n` +
          `1. Đo lường tốc độ thực tế theo chuẩn Google PageSpeed.\n` +
          `2. Quét lỗ hổng bảo mật và kiểm tra mã độc.\n` +
          `3. Kiểm tra tính năng form liên hệ và độ tương thích mobile.\n\n` +
          `📝 Bạn hãy điền thông tin vào form bên dưới, kỹ sư DUDI sẽ gửi báo cáo chẩn đoán chi tiết sau 30 phút!`,
        actionType: 'audit'
      };
    }

    if (query.includes('liên hệ') || query.includes('tư vấn') || query.includes('số điện thoại') || query.includes('gặp') || query.includes('hotline') || query.includes('zalo')) {
      return {
        text: `Kỹ sư kỹ thuật DUDI luôn sẵn sàng hỗ trợ bạn tức thì:\n\n` +
          `📞 Hotline kỹ thuật: **${COMPANY_INFO.hotlineFormatted || "0909 163 821"}**\n` +
          `💬 Zalo Kỹ thuật: Nhấn nút bên dưới để gửi link web cần hỗ trợ\n` +
          `🏢 Văn phòng: ${COMPANY_INFO.address || "49/2 Đường 14, P. Tăng Nhơn Phú B, TP. Thủ Đức, TP.HCM"}\n\n` +
          `Chúng tôi luôn có đội ngũ trực hỗ trợ kỹ thuật liên tục!`,
        actionType: 'contact'
      };
    }

    // Default intelligent answer
    return {
      text: `Cảm ơn bạn đã liên hệ DUDI Software! Chúng tôi chuyên chẩn đoán, bảo trì và chăm sóc website toàn diện.\n\n` +
        `Bạn muốn tìm hiểu về **Gói bảo trì**, **Cam kết SLA** hay cần **Kiểm tra website miễn phí** ngay bây giờ?`,
      actionType: 'general'
    };
  };

  // Send message
  const handleSendMessage = (textToSend) => {
    const text = (textToSend || inputValue).trim();
    if (!text) return;

    const now = new Date();
    const timeStr = `${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}`;

    const newUserMsg = {
      id: Date.now(),
      sender: 'user',
      text: text,
      time: timeStr,
      type: 'text'
    };

    setMessages((prev) => [...prev, newUserMsg]);
    setInputValue('');
    setIsTyping(true);

    setTimeout(() => {
      const botReply = generateBotResponse(text);
      const botTime = new Date();
      const botTimeStr = `${String(botTime.getHours()).padStart(2, '0')}:${String(botTime.getMinutes()).padStart(2, '0')}`;

      const newBotMsg = {
        id: Date.now() + 1,
        sender: 'bot',
        text: botReply.text,
        time: botTimeStr,
        actionType: botReply.actionType
      };

      setMessages((prev) => [...prev, newBotMsg]);
      setIsTyping(false);
    }, 500);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const scrollToSection = (sectionId) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 sm:inset-auto sm:bottom-6 md:bottom-7 sm:right-20 md:right-22 z-[10000] flex items-end sm:items-auto justify-center sm:justify-end p-2 sm:p-0 pointer-events-auto animate-in fade-in zoom-in-95 duration-200"
      role="dialog"
      aria-modal="true"
      aria-label="Cửa sổ trò chuyện với Trợ lý Kỹ thuật DUDI"
    >
      {/* Backdrop for mobile */}
      <div 
        className="fixed inset-0 bg-black/40 backdrop-blur-xs sm:hidden -z-10" 
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Main Chatbox Window */}
      <div 
        ref={modalRef}
        className="w-full sm:w-[385px] md:w-[410px] h-[510px] sm:h-[540px] max-h-[calc(100dvh-4.5rem)] bg-white rounded-3xl sm:rounded-[28px] shadow-[0_20px_50px_rgba(0,0,0,0.25)] border border-slate-200 flex flex-col overflow-hidden text-[#0F172A] transition-all"
      >
        
        {/* 1. Header */}
        <div className="px-4 py-3.5 sm:px-5 sm:py-4 bg-white/95 backdrop-blur-md border-b border-slate-100 flex items-center justify-between z-10 shadow-xs">
          <div className="flex items-center gap-3">
            {/* Robot Mascot Avatar */}
            <div className="relative w-10 h-10 sm:w-11 sm:h-11 rounded-2xl bg-gradient-to-tr from-blue-50 to-indigo-100 p-1 flex items-center justify-center border border-indigo-100 shadow-xs">
              <img 
                src="/robot-mascot.webp" 
                alt="Trợ lý Kỹ thuật DUDI" 
                className="w-full h-full object-contain drop-shadow-xs"
              />
              <span className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-emerald-500 border-2 border-white rounded-full animate-pulse" />
            </div>

            <div>
              <h3 className="font-bold text-[16px] sm:text-[17px] leading-tight text-slate-900 flex items-center gap-1.5">
                <span>Trợ lý Kỹ thuật DUDI</span>
                <Sparkles className="w-3.5 h-3.5 text-amber-500 animate-pulse" />
              </h3>
              <p className="text-[12px] text-slate-500 flex items-center gap-1.5 mt-0.5">
                <span className="w-2 h-2 rounded-full bg-emerald-500 inline-block animate-ping opacity-75" />
                <span>Trực kỹ thuật 24/7</span>
              </p>
            </div>
          </div>

          {/* Header Action Buttons */}
          <div className="flex items-center gap-1">
            <button
              onClick={handleReset}
              title="Làm mới cuộc trò chuyện"
              className="w-8 h-8 rounded-full flex items-center justify-center text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors cursor-pointer"
            >
              <RotateCcw className="w-4 h-4" />
            </button>
            <button
              onClick={onClose}
              title="Đóng cửa sổ chat"
              className="w-8 h-8 rounded-full flex items-center justify-center text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* 2. Messages List */}
        <div className="flex-1 overflow-y-auto px-4 py-4 sm:px-5 space-y-4 scroll-smooth bg-slate-50/40">
          {messages.map((msg) => {
            const isBot = msg.sender === 'bot';

            return (
              <div
                key={msg.id}
                className={`flex flex-col ${isBot ? 'items-start' : 'items-end'} animate-in fade-in slide-in-from-bottom-2 duration-200`}
              >
                <div className={`flex gap-2.5 max-w-[88%] ${isBot ? 'flex-row' : 'flex-row-reverse'}`}>
                  {isBot && (
                    <div className="w-7 h-7 rounded-xl bg-blue-50 p-0.5 flex-shrink-0 flex items-center justify-center border border-blue-100 mt-1">
                      <img 
                        src="/robot-mascot.webp" 
                        alt="Bot" 
                        className="w-full h-full object-contain"
                      />
                    </div>
                  )}

                  <div>
                    {/* Message Bubble */}
                    <div
                      className={`px-4 py-3 text-[13.5px] sm:text-[14px] leading-relaxed rounded-2xl ${
                        isBot
                          ? 'bg-white text-slate-800 rounded-tl-sm border border-slate-200/80 shadow-xs'
                          : 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-tr-sm shadow-md'
                      }`}
                    >
                      <p className="whitespace-pre-line select-text">
                        {msg.text.split('\n').map((line, i) => {
                          const parts = line.split(/(\*\*.*?\*\*)/g);
                          return (
                            <React.Fragment key={i}>
                              {parts.map((part, pIdx) => {
                                if (part.startsWith('**') && part.endsWith('**')) {
                                  return <strong key={pIdx} className="font-bold">{part.slice(2, -2)}</strong>;
                                }
                                return part;
                              })}
                              {i < msg.text.split('\n').length - 1 && <br />}
                            </React.Fragment>
                          );
                        })}
                      </p>

                      {/* Bot Quick Actions / Shortcuts */}
                      {isBot && msg.actionType && (
                        <div className="mt-3 pt-2.5 border-t border-slate-100 flex flex-wrap gap-2">
                          {msg.actionType === 'services' && (
                            <button
                              onClick={() => scrollToSection('services')}
                              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-blue-50 hover:bg-blue-100 text-blue-600 text-xs font-bold transition-colors cursor-pointer"
                            >
                              <span>Xem 6 Nhóm công việc</span>
                              <ChevronRight className="w-3.5 h-3.5" />
                            </button>
                          )}
                          {msg.actionType === 'pricing' && (
                            <button
                              onClick={() => scrollToSection('pricing')}
                              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-blue-50 hover:bg-blue-100 text-blue-600 text-xs font-bold transition-colors cursor-pointer"
                            >
                              <span>Xem Bảng giá các gói</span>
                              <ChevronRight className="w-3.5 h-3.5" />
                            </button>
                          )}
                          {msg.actionType === 'sla' && (
                            <button
                              onClick={() => scrollToSection('sla')}
                              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-blue-50 hover:bg-blue-100 text-blue-600 text-xs font-bold transition-colors cursor-pointer"
                            >
                              <span>Xem Cam kết SLA</span>
                              <ChevronRight className="w-3.5 h-3.5" />
                            </button>
                          )}
                          {msg.actionType === 'audit' && (
                            <button
                              onClick={() => scrollToSection('audit-form')}
                              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-50 hover:bg-emerald-100 text-emerald-700 text-xs font-bold transition-colors cursor-pointer"
                            >
                              <ShieldCheck className="w-3.5 h-3.5" />
                              <span>Điền Form Audit Web</span>
                            </button>
                          )}
                          {msg.actionType === 'contact' && (
                            <>
                              <a
                                href={COMPANY_INFO.zaloHref || "https://zalo.me/0909163821"}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#0068FF] hover:bg-[#0057D9] text-white text-xs font-bold transition-colors"
                              >
                                <MessageSquare className="w-3.5 h-3.5" />
                                <span>Nhắn Zalo</span>
                              </a>
                              <button
                                onClick={() => scrollToSection('audit-form')}
                                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold transition-colors cursor-pointer"
                              >
                                <span>Gửi yêu cầu hỗ trợ</span>
                              </button>
                            </>
                          )}
                        </div>
                      )}
                    </div>

                    {/* Timestamp */}
                    <div className={`text-[11px] text-slate-400 mt-1 flex items-center gap-1 ${isBot ? 'ml-1' : 'justify-end mr-1'}`}>
                      <span>{msg.time}</span>
                      {!isBot && <CheckCheck className="w-3.5 h-3.5 text-blue-500" />}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}

          {/* Typing Indicator */}
          {isTyping && (
            <div className="flex items-start gap-2.5 animate-in fade-in duration-150">
              <div className="w-7 h-7 rounded-xl bg-blue-50 p-0.5 flex-shrink-0 flex items-center justify-center border border-blue-100">
                <img 
                  src="/robot-mascot.webp" 
                  alt="Bot" 
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="px-4 py-3 bg-white text-slate-500 rounded-2xl rounded-tl-sm border border-slate-200/80 flex items-center gap-1.5 shadow-xs">
                <span className="w-2 h-2 rounded-full bg-blue-500 animate-bounce [animation-delay:-0.3s]" />
                <span className="w-2 h-2 rounded-full bg-blue-500 animate-bounce [animation-delay:-0.15s]" />
                <span className="w-2 h-2 rounded-full bg-blue-500 animate-bounce" />
              </div>
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>

        {/* 3. Quick Suggestions Chips */}
        <div className="px-3.5 py-2 bg-white border-t border-slate-100">
          <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden pb-0.5 text-nowrap">
            {QUICK_SUGGESTIONS.map((chip) => (
              <button
                key={chip.id}
                onClick={() => handleSendMessage(chip.query)}
                className="text-[12px] font-medium px-3 py-1.5 rounded-full bg-white text-slate-700 border border-slate-200 hover:border-blue-400 hover:text-blue-600 hover:bg-blue-50/40 transition-all flex-shrink-0 shadow-2xs cursor-pointer"
              >
                {chip.label}
              </button>
            ))}
          </div>
        </div>

        {/* 4. Footer Input Container */}
        <div className="p-3 sm:p-4 bg-white border-t border-slate-100">
          <form 
            onSubmit={(e) => {
              e.preventDefault();
              handleSendMessage();
            }}
            className="flex items-center gap-2 relative bg-slate-100 rounded-full border border-slate-200 px-3.5 py-1.5 focus-within:ring-2 focus-within:ring-blue-500/20 focus-within:border-blue-500 transition-all"
          >
            <input
              ref={inputRef}
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Nhập yêu cầu kiểm tra/bảo trì..."
              className="flex-1 bg-transparent text-[13.5px] sm:text-[14px] text-slate-800 placeholder-slate-400 focus:outline-none py-1.5"
            />
            <button
              type="submit"
              disabled={!inputValue.trim()}
              aria-label="Gửi tin nhắn"
              className={`w-8 h-8 rounded-full flex items-center justify-center transition-all ${
                inputValue.trim()
                  ? 'bg-gradient-to-tr from-blue-600 to-indigo-600 text-white shadow-md hover:scale-105 active:scale-95 cursor-pointer'
                  : 'bg-slate-200 text-slate-400 cursor-not-allowed'
              }`}
            >
              <Send className="w-4 h-4 ml-0.5" />
            </button>
          </form>
        </div>

      </div>
    </div>
  );
}