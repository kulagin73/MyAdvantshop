namespace Advantshop.Models
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;

    [Table("Catalog.Category")]
    public partial class Category
    {
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2214:DoNotCallOverridableMethodsInConstructors")]
        public Category()
        {
            Category1 = new HashSet<Category>();
        }

        public int CategoryID { get; set; }

        [Required]
        [StringLength(255)]
        public string Name { get; set; }

        public int? ParentCategory { get; set; }

        public string Description { get; set; }

        public int Products_Count { get; set; }

        public int SortOrder { get; set; }

        public bool Enabled { get; set; }

        public int Total_Products_Count { get; set; }

        public bool DisplayChildProducts { get; set; }

        [Required]
        [StringLength(150)]
        public string UrlPath { get; set; }

        public bool HirecalEnabled { get; set; }

        public bool DisplayBrandsInMenu { get; set; }

        public bool DisplaySubCategoriesInMenu { get; set; }

        public int? CatLevel { get; set; }

        public string BriefDescription { get; set; }

        public int Sorting { get; set; }

        public int DisplayStyle { get; set; }

        public bool Hidden { get; set; }

        public bool? IsDemo { get; set; }

        [StringLength(50)]
        public string ExternalId { get; set; }

        public int Available_Products_Count { get; set; }

        public int Current_Products_Count { get; set; }

        public int? AutomapAction { get; set; }

        public DateTime DateModified { get; set; }

        public DateTime DateAdded { get; set; }

        [StringLength(50)]
        public string ModifiedBy { get; set; }

        public bool? ShowOnMainPage { get; set; }

        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<Category> Category1 { get; set; }

        public virtual Category Category2 { get; set; }
    }
}
