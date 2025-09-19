"use client"

import React from 'react'
import { ArrowLeft } from "lucide-react"
import { useLocation, useNavigate } from 'react-router-dom'

const HIDDEN_BACK_BUTTON_PATHS = ["/", "/profile-setup", "/survey/feedback-survey"];

interface GoBackButtonProps {
  className?: string
  fallbackTo?: string
}

export function GoBackButton({ className = "", fallbackTo = "/" }: GoBackButtonProps) {
  const location = useLocation();
  const navigate = useNavigate();

  const shouldHideButton = HIDDEN_BACK_BUTTON_PATHS.some(path =>
    location.pathname === path || location.pathname.startsWith(`${path}/`)
  );

  if (shouldHideButton) return null;

  const handleClick = () => {
    if (location.key === 'default') {
      navigate(fallbackTo);
    } else {
      navigate(-1);
    }
  };

  return (
    <button
      onClick={handleClick}
      className={`cursor-pointer flex justify-center items-center ${className}`}
      aria-label="Go back"
    >
      <ArrowLeft className="w-6 h-6" />
    </button>
  );
}