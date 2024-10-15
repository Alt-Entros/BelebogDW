document.addEventListener("DOMContentLoaded", () => {
  const loadingElement = document.getElementById("loading");

  loadingElement.style.display = "block"; // Показать загрузку

  try {
    // Инициализация Viewer
    const viewer = new xeokit.Viewer({
      canvasId: "viewer",
      transparent: true,
    });

    console.log("Объект viewer создан успешно.");

    // Инициализация NavCubePlugin
    if (xeokit.NavCubePlugin) {
      const navCubePlugin = new xeokit.NavCubePlugin(viewer, {
        canvasId: "viewer",
        camera: viewer.camera,
      });
      console.log("NavCubePlugin успешно добавлен.");
    } else {
      console.error("NavCubePlugin не найден в xeokit.");
    }

    // Инициализация EntityPickerPlugin для выбора объектов
    if (xeokit.EntityPickerPlugin) {
      const picker = new xeokit.EntityPickerPlugin(viewer);
      viewer.scene.canvas.on("picked", (e) => {
        const entity = picker.pick({ canvasPos: e.canvasPos });
        if (entity) {
          console.log("Выбран объект:", entity.id);
          // Вывод дополнительной информации в правую панель, например
          const rightSidebar = document.getElementById("right-sidebar");
          rightSidebar.innerHTML = `<h3>Информация об объекте</h3><p>ID: ${entity.id}</p>`;
        }
      });
      console.log("EntityPickerPlugin успешно добавлен.");
    } else {
      console.error("EntityPickerPlugin не найден в xeokit.");
    }

    // Инициализация AnnotationsPlugin для добавления аннотаций
    if (xeokit.AnnotationsPlugin) {
      const annotations = new xeokit.AnnotationsPlugin(viewer, {
        annotations: [
          {
            id: "annotation1",
            worldPos: [10, 5, 0],
            text: "Важная деталь модели",
            labelVisible: true,
          },
        ],
      });
      console.log("AnnotationsPlugin успешно добавлен.");
    } else {
      console.error("AnnotationsPlugin не найден в xeokit.");
    }

    // Загрузка GLTF модели
    if (xeokit.GLTFLoaderPlugin) {
      const gltfLoader = new xeokit.GLTFLoaderPlugin(viewer);
      gltfLoader.load({
        src: "./models/DUOCity/DUOCity.gltf",
        onLoaded: () => {
          loadingElement.style.display = "none"; // Скрыть загрузку, когда модель загружена
        },
        onError: () => {
          loadingElement.style.display = "none"; // Скрыть загрузку при ошибке
          console.error("Ошибка при загрузке модели.");
        },
      });
      console.log("Модель GLTF загружается...");
    } else {
      console.error("GLTFLoaderPlugin не найден в xeokit.");
    }
  } catch (error) {
    console.error("Ошибка при инициализации:", error);
  }
});
