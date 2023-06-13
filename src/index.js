wp.blocks.registerBlockType("scaleplugin/scale-plugin", {
  title: "Scale",
  icon: "feedback",
  category: "common",
  edit: EditComponent,
  save: function () {
    return null
  }
})

function EditComponent(props) {

  return (
    <div >
      <h2 className="text-lime-400">Scale Configuration page here</h2>
    </div>
  )
}
