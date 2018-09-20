namespace Clsmap.SeekerAndRetriever.Models
{
    using System;

    public interface IStatus
    {
        IOperator Operator { get; set; }

        IStatusDescriptor Descriptor { get; set; }
    }

    public interface IStatusDescriptor : IDescriptor
    {

    }

    public class PublishDeniedDescriptor : IStatusDescriptor
    {
        private IOperator _operator;

        public PublishDeniedDescriptor(IOperator ops)
        {
            this._operator = ops;
        }

        public String Describe()
        {
            return $"Publish Denied by {_operator}";
        }
    }
}