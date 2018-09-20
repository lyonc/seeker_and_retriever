namespace Clsmap.SeekerAndRetriever.Models
{
    using System;

    public interface IDescriptor
    {
        String Describe();
    }

    public class SimpleTextDescriptor : IDescriptor
    {
        private String _text;

        public SimpleTextDescriptor(String text)
        {
            this._text = text;
        }

        public String Describe()
        {
            return _text;
        }
    }
}