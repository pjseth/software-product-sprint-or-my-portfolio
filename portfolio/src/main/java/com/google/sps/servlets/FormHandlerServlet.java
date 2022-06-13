package com.google.sps.servlets;

import java.io.IOException;
import java.util.Arrays;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/** Servlet that processes text. */
@WebServlet("/form-handler")
public final class FormHandlerServlet extends HttpServlet {

  @Override
  public void doPost(HttpServletRequest request, HttpServletResponse response) throws IOException {
    // Get the input from the form.
    String text = getParameter(request, "text-input", "");
    boolean email = Boolean.parseBoolean(getParameter(request, "Email", "false"));
    boolean phone = Boolean.parseBoolean(getParameter(request, "Phone", "false"));
    boolean discord = Boolean.parseBoolean(getParameter(request, "Discord", "false"));
    boolean other = Boolean.parseBoolean(getParameter(request, "Other", "false"));

    if (email) {
      text = "(Email) "+text;
    }

    if (phone) {
        text = "(Phone) "+text;
    }

    if (discord) {
        text = "(Discord) "+text;
    }

    if (other) {
        text = "(Other) "+text;
    }

    // Respond with the result.
    response.setContentType("text/html;");
    response.getWriter().println(text);
    System.out.println("You submitted: " + text);

    response.sendRedirect("https://psethbhakdi-sps-summer22.appspot.com/");
  }

  /**
   * @return the request parameter, or the default value if the parameter
   *         was not specified by the client
   */
  private String getParameter(HttpServletRequest request, String name, String defaultValue) {
    String value = request.getParameter(name);
    if (value == null) {
      return defaultValue;
    }
    return value;
  }
}