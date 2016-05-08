module Jekyll
  class ImageAlignmentTag < Liquid::Tag

    def initialize(tag_name, text, tokens)
      super
      safe = true
      input = text.split("|")
      @alignment = input[0].strip
      @alignmentClass = "content__item-img-" + input[0].strip + " animated zoomIn"
      @src = input[1].strip
      @alt = input[2].strip
      if input[3]
          @link = input[3].strip
      end
    end

    def render(context)
        site = context.registers[:site]
        @src = site.baseurl + @src
        imgTag = "<img class=\""+@alignmentClass+"\" src=\""+@src+"\" alt=\""+@alt+"\" />"
        if @link
            imgTag = "<a href=\"" + @link+ "\" target=\"blank\">"+imgTag+"</a>"
        end
        if @alignment.downcase == "fill-width"
            # See below for explanation of [[[[  ]]]]
            "[[[[  "+imgTag+" ]]]]"
        else
            imgTag
        end
    end
  end
end

Liquid::Template.register_tag('img', Jekyll::ImageAlignmentTag)

# Need to do this because for some reason, </div> is escaped in render method above.
Jekyll::Hooks.register :posts, :post_render do |post|
  if post.output.include? "<p>[[[[ "
      post.output.gsub! "<p>[[[[ ", "</div></div>"
      post.output.gsub! "]]]]</p>", "<div class=\"content__item content__item--current content__item--reset\"><div class=\"content__item-inner\">"
  end
end
