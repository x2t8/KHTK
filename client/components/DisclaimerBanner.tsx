import React, { useState } from "react";
import { Info, X, Phone, Building } from "lucide-react";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";

export default function DisclaimerBanner() {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="bg-blue-50 border-b border-blue-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
        <div className="flex items-start space-x-3">
          <Info className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
          <div className="flex-1 min-w-0">
            <div className="text-sm text-blue-800">
              <strong>Lưu ý quan trọng:</strong> Trang web này chỉ cung cấp thông tin giáo dục và tuyên truyền về an toàn số.
              Chúng tôi không nhận các tố cáo hay báo cáo lừa đảo qua website.
              <br className="hidden sm:block" />
              <span className="font-medium">Để tố cáo lừa đảo, vui lòng liên hệ trực tiếp:</span>
              <div className="mt-2 space-y-1 sm:space-y-0 sm:space-x-4 sm:flex">
                <span className="inline-flex items-center">
                  <Phone className="h-3 w-3 mr-1" />
                  <strong>Công an: 113</strong>
                </span>
                <span className="inline-flex items-center">
                  <Building className="h-3 w-3 mr-1" />
                  <strong>Cơ quan chức năng địa phương</strong>
                </span>
              </div>
            </div>
          </div>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setIsVisible(false)}
            className="p-1 h-6 w-6 text-blue-600 hover:text-blue-800 hover:bg-blue-100 flex-shrink-0"
          >
            <X className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
}
