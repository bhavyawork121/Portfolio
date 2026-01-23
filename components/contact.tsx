"use client"

import { Mail, Phone, Send } from "lucide-react"

export function Contact() {
  return (
    <section id="contact" className="relative py-20 md:py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <div className="flex items-center gap-4 mb-4">
            <span className="text-sm font-mono text-blue-600">04.</span>
            <h2 className="text-4xl md:text-5xl font-bold text-balance text-gray-900">Get In Touch</h2>
            <div className="h-px flex-1 bg-gradient-to-r from-gray-300 to-transparent" />
          </div>
        </div>

        <div className="max-w-2xl mx-auto">
          <div className="space-y-8">
            <div>
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                I'm currently looking for opportunities in{" "}
                <span className="text-blue-600 font-medium">software engineering</span>,{" "}
                <span className="text-blue-600 font-medium">full-stack development</span>, and{" "}
                <span className="text-blue-600 font-medium">cybersecurity</span>. Feel free to reach out if you'd like
                to discuss a project or just say hi!
              </p>
            </div>

            <div className="space-y-4">
              <a
                href="mailto:bhavyawork121@gmail.com"
                className="group flex items-center gap-4 p-4 border border-gray-200 rounded-xl hover:border-blue-500 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10"
              >
                <div className="p-3 rounded-lg bg-blue-100 text-blue-600 group-hover:scale-110 transition-transform">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-sm text-gray-600 mb-1">Email</p>
                  <p className="font-medium text-gray-900">bhavyawork121@gmail.com</p>
                </div>
              </a>

              <a
                href="tel:+918595859351"
                className="group flex items-center gap-4 p-4 border border-gray-200 rounded-xl hover:border-blue-500 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10"
              >
                <div className="p-3 rounded-lg bg-blue-100 text-blue-600 group-hover:scale-110 transition-transform">
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-sm text-gray-600 mb-1">Phone</p>
                  <p className="font-medium text-gray-900">+91-85958 59351</p>
                </div>
              </a>
            </div>

            <a
              href="mailto:bhavyawork121@gmail.com"
              className="group inline-flex items-center gap-2 px-8 py-4 bg-blue-600 text-white rounded-xl font-medium hover:shadow-xl hover:shadow-blue-600/30 transition-all duration-300 hover:-translate-y-1"
            >
              <Send className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              Send a Message
            </a>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-gray-200 text-center">
          <p className="text-sm text-gray-600">
            Designed & Built by <span className="text-blue-600 font-medium">Bhavya Agarwal</span>
          </p>
          <p className="text-xs text-gray-500 mt-2">© 2026 All rights reserved</p>
        </div>
      </div>
    </section>
  )
}
