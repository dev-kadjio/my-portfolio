"use client";

import { motion } from "framer-motion";
import { useI18n } from "./I18nProvider";

export function SiteFooter() {
  const { messages } = useI18n();

  return (
    <motion.footer
      className="bg-[rgb(var(--page-bg))] py-12 px-6 border-t border-[rgb(var(--border)/var(--border-soft))]"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <div className="max-w-7xl mx-auto text-center">
        <motion.p
          className="text-[rgb(var(--text-muted))] mb-2"
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          {messages.footer.line1}
        </motion.p>

        <motion.p
          className="text-sm text-[rgb(var(--text-faint))]"
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {messages.footer.line2}
        </motion.p>
      </div>
    </motion.footer>
  );
}

